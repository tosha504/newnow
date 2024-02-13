// "use client";
import "./sass/page.scss";
import img from "../public/favicon.png";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
export const metadata = {
  icons: {
    icon: img.src,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <div className="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
