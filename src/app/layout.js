import "./globals.css";
import { ConfigProvider } from "antd";

export const metadata = {
  title: "Intro",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider>{children}</ConfigProvider>
      </body>
    </html>
  );
}
