"use client";

import { useState, useEffect } from "react";
// antd
import {
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Space,
  Typography,
  Upload,
  Flex,
} from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import Statement from "./fileDownLoad";

// -------------------------------------------------------------------------------
export default function IntroForm({ reset, setReset, handleOk }) {
  const [fileList, setFileList] = useState([]);
  const [emojiList, setEmojiList] = useState([]);
  const [success, setSuccess] = useState(false);
  const [allValues, setAllValues] = useState({});

  // antd
  const [messageApi, contextHolder] = message.useMessage();
  const { Item, List, useForm } = Form;
  const { Text } = Typography;
  const { TextArea } = Input;
  const { RangePicker } = DatePicker;
  const [form] = useForm();

  useEffect(() => {
    if (reset) handleResetForm();
  }, [reset]);

  // function------------------------------------------------------------------------
  // form
  const onFinish = (values) => {
    try {
      messageApi.info({
        type: "success",
        content: "Амжилттай",
      });
      setSuccess(true);
      setAllValues({ ...allValues, ...values });
      console.log("Success:", values);
      // handleOk();
    } catch (e) {
      return;
    }
  };
  const onFinishFailed = (errorInfo) => {
    try {
      messageApi.info({
        type: "error",
        content: "Та талбаруудыг бүрэн бөглөнө үү",
      });
      let val = errorInfo?.values;
      setAllValues({ ...allValues, ...val });
      setSuccess(false);
      console.log("Failed:", errorInfo);
    } catch (e) {
      return;
    }
  };

  const handleResetForm = () => {
    form.resetFields();
    setReset(false);
  };

  // file
  const onFileChange = ({ fileList: newFileList }) => {
    try {
      console.log("new", newFileList);
      if (typeof window !== undefined) {
        form.setFieldsValue({ image: newFileList[0] });
        setFileList(newFileList);
      }
    } catch (e) {
      return;
    }
  };

  const onEmojiChange = ({ fileList: newEmojiList }) => {
    try {
      if (typeof window !== "undefined") {
        form.setFieldsValue({ emoji: newEmojiList });
        setEmojiList(newEmojiList);
      }
    } catch (e) {
      return;
    }
  };

  return (
    <Form
      form={form}
      name="Intro"
      initialValues={{
        schoolDateStr: "",
        workStart: "",
        workEnd: "",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      {contextHolder}
      <Flex justify="center">
        <Item
          label=""
          name="image"
          rules={[
            {
              required: true,
              message: "Та өөрийн нягтаршил сайтай зургийг оруулна уу.",
            },
          ]}
        >
          <ImgCrop rotationSlider>
            <Upload
              listType="picture-card"
              // fileList={fileList}
              onChange={onFileChange}
              showUploadList={{
                showPreviewIcon: false,
              }}
            >
              {fileList.length === 0 && "+ Upload"}
            </Upload>
          </ImgCrop>
        </Item>
      </Flex>
      <Item
        label="Овог"
        name="lastName"
        rules={[
          {
            required: true,
            message: "Та өөрийн овгийг оруулна уу.",
          },
        ]}
      >
        <Input />
      </Item>
      <Item
        label="Нэр"
        name="name"
        rules={[
          {
            required: true,
            message: "Та өөрийн нэрийг оруулна уу.",
          },
        ]}
      >
        <Input />
      </Item>
      <Item
        label="Албан тушаал"
        name="position"
        rules={[
          {
            required: true,
            message: "Та албан тушаалаа оруулна уу.",
          },
        ]}
      >
        <Input />
      </Item>
      <Item
        label="Ажиллаж буй хэлтэс"
        name="department"
        rules={[
          {
            required: true,
            message: "Та ажиллаж буй хэлтэсээ оруулна уу.",
          },
        ]}
      >
        <Input />
      </Item>
      <Space align="end">
        <Item
          label="Сургууль, мэргэжил"
          name="school"
          rules={[
            {
              required: true,
              message: "Та төгссөн сургууль болон мэргэжлээ оруулна уу.",
            },
          ]}
        >
          <Input />
        </Item>
        <Item
          label=""
          name="schoolDate"
          rules={[
            {
              required: true,
              message: "Та сургууль төгссөн оноо оруулна уу.",
            },
          ]}
        >
          <DatePicker
            picker="year"
            onChange={(e, str) => {
              console.log("log", e, str);
              setAllValues({ ...allValues, schoolDateStr: str });
            }}
          />
        </Item>
      </Space>

      <Item
        label="Ажлын и-мэйл хаяг"
        name="email"
        rules={[
          {
            required: true,
            message: "Та ажлын и-мэйл хаягаа оруулна уу.",
          },
          {
            type: "email",
            message: "Та ажлын и-мэйл хаягаа оруулна уу.",
          },
        ]}
      >
        <Input />
      </Item>
      <Item
        label="Утасны дугаар"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Та утасны дугаараа оруулна уу.",
          },
        ]}
      >
        <Input />
      </Item>
      <Space align="end">
        <Item
          label="Өмнө нь ажиллаж байсан газар"
          name="previousWork"
          rules={[
            {
              required: true,
              message: "Та өмнө нь ажиллаж байсан газрын нэрийг оруулна уу.",
            },
          ]}
        >
          <Input />
        </Item>
        <Item
          label=""
          name="workDate"
          rules={[
            {
              required: true,
              message: "Та ажилласан хугацааг оруулна уу.",
            },
          ]}
        >
          <RangePicker
            format="YYYY-MM-DD"
            onChange={(e, str) => {
              console.log("e", str);
              setAllValues({
                ...allValues,
                workStart: str[0],
                workEnd: str[1],
              });
            }}
          />
        </Item>
      </Space>
      <List
        label="Миний сонирхол"
        name="hobbys"
        rules={[
          {
            validator: async (_, hobbys) => {
              if (!hobbys || hobbys.length < 1) {
                return Promise.reject(
                  new Error("Хамгийн багадаа 1 хоббигоо оруулна уу")
                );
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            <Space style={{ marginBottom: "8px" }}>
              <Text type="danger">*</Text>
              <Text>Миний сонирхол</Text>
            </Space>
            {fields.map((field, index) => (
              <Form.Item required={false} key={field.key}>
                <Form.Item
                  {...field}
                  validateTrigger={["onChange", "onBlur"]}
                  rules={[
                    {
                      required: true,
                      message:
                        "Та өөрийн хоббиг оруулна уу, эсвэл энэ хэсгийг устгана уу.",
                    },
                  ]}
                  noStyle
                  key={index}
                >
                  <Input
                    placeholder="хобби"
                    style={{
                      width: "60%",
                    }}
                  />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{
                  width: "60%",
                }}
                icon={<PlusOutlined />}
              >
                Хобби нэмэх
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </List>
      <Item
        label="Намайг илэрхийлэх эможи"
        name="emoji"
        rules={[
          {
            required: true,
            message: "Та өөрийгөө илэрхийлэх эможиг оруулна уу",
          },
        ]}
      >
        <Upload
          listType="picture-circle"
          fileList={emojiList}
          onChange={onEmojiChange}
          showUploadList={{
            showPreviewIcon: false,
          }}
        >
          {emojiList?.length >= 3 ? null : "+ Upload"}
        </Upload>
      </Item>
      <Item
        label="Хамт олондоо хандаж хэлэх үг"
        name="words"
        rules={[
          {
            required: true,
            message: "Та хамт олондоо хандаж хэлэх үгээ оруулна уу.",
          },
        ]}
      >
        <TextArea showCount maxLength={100} />
      </Item>
      <Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {/* <Button
          danger
          icon={<DownloadOutlined />}
          type="dashed"
          htmlType="submit"
        >
          Хадгалах
        </Button> */}
        <Statement
          icon={<DownloadOutlined />}
          success={success}
          setSuccess={setSuccess}
          values={allValues}
        />
      </Item>
    </Form>
  );
}
