import { Flex, Image, Typography } from "antd";

export default function FirstSection({ breakpoint }) {
  const { Text } = Typography;

  return (
    <Flex
      style={{
        padding: "10px",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ marginBottom: breakpoint ? "10px" : "20px" }}>
        <Image
          width={36}
          height={36}
          src={"./logo/simple-logo.png"}
          preview={{
            visible: false,
          }}
        />
      </div>
      <Flex style={{ width: "100%", justifyContent: "center" }}>
        <Image
          width={breakpoint ? 120 : 160}
          height={breakpoint ? 120 : 160}
          src={"./picture/user.png"}
          fallback="./picture/test.svg"
          preview={{
            visible: false,
          }}
        />
      </Flex>
      <Flex
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: breakpoint ? "0px" : "5px",
          marginTop: breakpoint ? "10px" : "20px",
        }}
      >
        <Text strong>Нэр</Text>
        <Text>Албан тушаал</Text>
        <Text>Ажиллаж буй хэлтэс</Text>
      </Flex>
    </Flex>
  );
}
