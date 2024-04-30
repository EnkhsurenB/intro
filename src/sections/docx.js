// 3rd party
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";

//------------------------------------------------------------------------------------------------------------------------------------------------------
function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

export default function DocxConfig({ userData, name, Template }) {
  const generateDocument = () => {
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
      saveAs(blob, `hi`);
    });
  };
  return (
    <button
      onClick={() => generateDocument()}
      // disabled={disabled}
    >
      {name} татах
    </button>
  );
}
