"use client";

import { useState } from "react";
import { Layout, Flex, Grid, Button, Modal } from "antd";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic for client-side rendering

// section
const FirstSection = dynamic(() => import("@/sections/first"), { ssr: false });
const SecondSection = dynamic(() => import("@/sections/second"), {
  ssr: false,
});
const ThirdSection = dynamic(() => import("@/sections/third"), { ssr: false });
const IntroForm = dynamic(() => import("@/sections/introModal"), {
  ssr: false,
});

export default function Home() {
  const [open, setOpen] = useState(false);
  const [reset, setReset] = useState(false);

  // antd
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  let breakpoint = (screens?.sm && !screens?.md) || screens?.xs;

  // modal
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
    setReset(true);
  };
  const handleCancel = () => {
    setOpen(false);
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
          {typeof window !== "undefined" && (
            <Modal
              title="Intro"
              open={open}
              onOk={handleOk}
              onCancel={handleCancel}
              cancelText={"Хаах"}
              okText={"Дуусгах"}
              // width={1000}
            >
              <IntroForm
                reset={reset}
                setReset={setReset}
                handleOk={handleOk}
                breakpoint={breakpoint}
              />
            </Modal>
          )}
        </div>
      </Flex>
    </Layout>
  );
}
