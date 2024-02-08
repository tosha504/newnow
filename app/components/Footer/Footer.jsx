import Link from "next/link";
import "./Footer.scss";
import { getFooterData } from "@/store/api";
import Image from "next/image";
const Footer = async () => {
  const { data } = await getFooterData();
  const footer = data.themeFooterSettings.footer;
  console.log(footer);
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__top ">
            {footer.logo && (
              <div className="footer__top_left">
                <Link href="/">
                  <Image
                    src={footer?.logo?.sourceUrl}
                    width={100}
                    height={50}
                    alt={footer.logo.altText}
                  />
                </Link>
              </div>
            )}
            <div className="footer__top_right">
              <ul>
                <li>
                  <Link href="#">
                    WeWork, Piotrkowska 101<br></br>Łódź, Poland
                  </Link>
                </li>
                <li>
                  <Link href="mailto:">best@email.ever</Link>
                  <br></br>
                  <Link href="tel:+">700400300</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom_right">
              <ul>
                <li>
                  <Link href="#"> Cookie Policy</Link>
                </li>
                <li>
                  <Link href="/polityka-prywatnosci">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
