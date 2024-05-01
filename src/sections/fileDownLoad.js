import { useEffect, useState } from "react";
// docx
import DocxConfig from "./docx";

// ----------------------------------------------------------------------
export default function Statement({ icon, success, setSuccess, values = {} }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    console.log("log", values);
    handleData();
  }, [values]);

  // function
  const handleData = () => {
    try {
      let data = values;
      setUserData(data);
    } catch (e) {
      return;
    }
  };

  return (
    <DocxConfig
      userData={userData}
      name={"Мэдэгдэх хуудас"}
      Template={"./file/file4.docx"}
      icon={icon}
      success={success}
      setSuccess={setSuccess}
    />
  );
}
