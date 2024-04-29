import { Flex, Typography } from "antd";
// component
import IconBox from "@/component/IconBox";

export default function SecondSection({ breakpoint }) {
  const { Text } = Typography;
  const borderStyles = breakpoint
    ? {
        borderTop: "1.5px #cafc03 solid",
        borderBottom: "1.5px #cafc03 solid",
      }
    : {
        borderLeft: "1.5px #cafc03 solid",
        borderRight: "1.5px #cafc03 solid",
      };

  return (
    <Flex
      style={{
        padding: breakpoint ? "10px" : "20px",
        flexDirection: "column",
        gap: breakpoint ? "10px" : "30px",
        maxWidth: "300px",
        ...borderStyles,
      }}
    >
      <IconBox
        iconName={"school"}
        content={<Text>Сургууль, мэргэжил /он/</Text>}
      />
      <IconBox iconName={"email"} content={<Text>Ажлын и-мэйл хаяг</Text>} />
      <IconBox iconName={"phone"} content={<Text>+976 XXXX XXXX</Text>} />
      <IconBox
        iconName={"work"}
        content={
          <Flex style={{ flexDirection: "column" }}>
            <Text strong>Өмнө нь ажиллаж байсан газар</Text>
            <Text>Албан тушаал /он/</Text>
          </Flex>
        }
      />
    </Flex>
  );
}
