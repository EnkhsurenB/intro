import { useState } from "react";
// antd
import {
  Button,
  DatePicker,
  Form,
  Input,
  Space,
  Typography,
  Upload,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";

export default function IntroForm() {
  const [fileList, setFileList] = useState([]);
  const [emojiList, setEmojiList] = useState([]);

  // antd
  const { Item, List, useForm } = Form;
  const { Text } = Typography;
  const { TextArea } = Input;
  const { RangePicker } = DatePicker;
  const [form] = useForm();

  // function
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // datepicker
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  // file
  const onFileChange = ({ fileList: newFileList }) => {
    try {
      form.setFieldsValue({ image: newFileList[0] });
      setFileList(newFileList);
    } catch (e) {
      return;
    }
  };

  const onEmojiChange = ({ fileList: newEmojiList }) => {
    console.log("emojis", newEmojiList);

    try {
      form.setFieldsValue({ emoji: newEmojiList });
      setEmojiList(newEmojiList);
    } catch (e) {
      return;
    }
  };

  return (
    <Form
      form={form}
      name="Intro"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
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
            fileList={fileList}
            onChange={onFileChange}
            showUploadList={{
              showPreviewIcon: false,
            }}
          >
            {fileList.length === 0 && "+ Upload"}
          </Upload>
        </ImgCrop>
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
          <DatePicker onChange={onChange} picker="year" />
        </Item>
      </Space>

      <Item
        label="Ажлын и-мэйл хаяг"
        name="email"
        rules={[
          {
            required: true,
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
            onChange={(value, dateString) => {
              console.log("Selected Time: ", value);
              console.log("Formatted Selected Time: ", dateString);
            }}
            onOk={onOk}
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
}
