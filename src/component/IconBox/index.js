"use client";

import { Flex, Image } from "antd";

export default function IconBox({ iconName, content }) {
  return (
    <Flex style={{ gap: "20px", alignItems: "center" }}>
      <Image
        preview={{
          visible: false,
        }}
        width={36}
        height={36}
        src={`./picture/${iconName}.png`}
      />
      {content}
    </Flex>
  );
}
