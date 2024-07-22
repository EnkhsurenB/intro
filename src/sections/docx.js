// antd
import { Button } from "antd";
// 3rd party
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
//------------------------------------------------------------------------------------------------------------------------------------------------------
function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

export default function DocxConfig({
  userData,
  Template,
  icon,
  success,
  setSuccess,
}) {
  const handleName = () => {
    return (
      userData?.lastName.slice(0, 1).toUpperCase() +
      "." +
      capitalizeFirst(userData?.name)
    );
  };
  const handleDate = () => {
    let currentDate = new Date();
    let month = currentDate.getMonth();
    let day = currentDate.getDate();
    return `${month + "." + day}`;
  };
  function capitalizeFirst(string) {
    if (!string) return string;

    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const generateDocument = () => {
    try {
      loadFile(Template, function (error, content) {
        if (error) {
          throw error;
        }
        let zip = new PizZip(content);
        let doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
        });
        // doc.setData(userData);
        try {
          doc.render(userData);
        } catch (error) {
          return;
        }

        let blob = doc.getZip().generate({
          type: "blob",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });

        let name = handleName();
        let date = handleDate();

        saveAs(blob, `${date}_Intro_${name}`);
        setSuccess(false);
      });
    } catch (e) {
      return;
    }
  };
  return (
    <Button
      onClick={() => success && generateDocument()}
      danger
      icon={icon}
      type="dashed"
      htmlType="submit"
    >
      Хадгалах
    </Button>
  );
}
