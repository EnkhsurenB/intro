import { Flex, Typography, Image } from "antd";

export default function ThirdSection({ breakpoint }) {
  const { Text } = Typography;

  return (
    <Flex
      style={{
        padding: breakpoint ? "10px" : "20px",
        flexDirection: "column",
        gap: breakpoint ? "10px" : "20px",
      }}
    >
      <Flex
        style={{
          marginBottom: breakpoint ? "0px" : "10px",
          justifyContent: "end",
        }}
      >
        <Image
          preview={{
            visible: false,
          }}
          width={36}
          height={36}
          src={"./logo/Mbank-logo.png"}
        />
      </Flex>
      <Flex
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: breakpoint ? "0px" : "10px",
        }}
      >
        <Text strong>Намайг илэрхийлэх эможи</Text>
        <Flex style={{ gap: breakpoint ? "5px" : "10px" }}>
          <Image
            preview={{
              visible: false,
            }}
            width={36}
            height={36}
            src={`./emoji/emoji1.png`}
          />
          <Image
            preview={{
              visible: false,
            }}
            width={36}
            height={36}
            src={`./emoji/emoji2.png`}
          />
          <Image
            preview={{
              visible: false,
            }}
            width={36}
            height={36}
            src={`./emoji/emoji3.png`}
          />
        </Flex>
      </Flex>
      <Flex
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          gap: breakpoint ? "5px" : "10px",
        }}
      >
        <Text strong>Миний сонирхол</Text>
        <Flex style={{ flexDirection: "column" }}>
          <Flex style={{ gap: "8px", alignItems: "center" }}>
            <div className="dot" />
            <Text>Амьд хөгжим</Text>
          </Flex>
          <Flex style={{ gap: "8px", alignItems: "center" }}>
            <div className="dot" />
            <Text>Театр</Text>
          </Flex>
          <Flex style={{ gap: "8px", alignItems: "center" }}>
            <div className="dot" />
            <Text>Хаданд авирах</Text>
          </Flex>
          <Flex style={{ gap: "8px", alignItems: "center" }}>
            <div className="dot" />
            <Text>...</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: breakpoint ? "5px" : "10px",
        }}
      >
        <Text strong>Хамт олондоо хандаж хэлэх үг</Text>
        <Text>...</Text>
      </Flex>
    </Flex>
  );
}
