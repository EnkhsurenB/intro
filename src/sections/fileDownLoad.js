import { useEffect, useState } from "react";
// mui
import DocxConfig from "./docx";
// 3rd party
// import Template from "./file/file.docx";
import Template from "./file/Test.docx";
// ----------------------------------------------------------------------
export default function Statement() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    handleData();
  }, []);

  // function
  const handleData = () => {
    try {
      let data = {
        user: "hello world",
      };
      setUserData(data);
    } catch (e) {
      return;
    }
  };

  return (
    <DocxConfig
      userData={userData}
      //   disabled={Object.keys(userData).length === 0}
      name={"Мэдэгдэх хуудас"}
      Template={Template}
    />
  );
}
