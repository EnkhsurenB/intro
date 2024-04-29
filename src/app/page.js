"use client";

import { useState } from "react";
import { Layout, Flex, Grid, Button, Modal } from "antd";
// section
import FirstSection from "@/sections/first";
import SecondSection from "@/sections/second";
import ThirdSection from "@/sections/third";
import IntroForm from "@/sections/introModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  let breakpoint = (screens?.sm && !screens?.md) || screens?.xs;

  // modal
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Layout style={{ height: "100vh", padding: "20px", border: "none" }}>
      <Flex
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <div
          className={`${
            breakpoint ? "container-sm" : "container"
          } container-border`}
        >
          <Flex
            style={{
              justifyContent: "space-around",
              flexDirection: breakpoint ? "column" : "row",
            }}
          >
            <FirstSection breakpoint={breakpoint} />
            <SecondSection breakpoint={breakpoint} />
            <ThirdSection breakpoint={breakpoint} />
          </Flex>
        </div>
        <div
          className={`${
            breakpoint ? "button-container-sm" : "button-container"
          }`}
        >
          <Flex style={{ justifyContent: "end", width: "100%" }}>
            <Button onClick={() => showModal()}>Бөглөх</Button>
          </Flex>

          <Modal
            title="Intro"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            cancelText={"Хаах"}
            okText={"Дуусгах"}
          >
            <IntroForm />
          </Modal>
        </div>
      </Flex>
    </Layout>
  );
}
