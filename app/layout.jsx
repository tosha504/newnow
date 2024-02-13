import "./sass/page.scss";
import img from "../public/favicon.png";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  subsets: ["latin-ext"],
  display: "swap",
});
export const metadata = {
  icons: {
    icon: img.src,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={montserrat.variable}>
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
