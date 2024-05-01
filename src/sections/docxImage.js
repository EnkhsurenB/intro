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
          modules: [new ImageModule(imageOptions)],
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
        saveAs(blob, `hi`);
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
