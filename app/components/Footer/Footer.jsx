import Link from "next/link";
import "./Footer.scss";
import { getFooterData } from "@/store/api";
import Image from "next/image";
import { decodeHtml } from "@/helpers";
const Footer = async () => {
  const { data } = await getFooterData();
  const footer = data.themeFooterSettings.footer;
  const topRight = footer.topRight;
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
            {topRight && (
              <div className="footer__top_right">
                <ul>
                  {topRight.map(({ link, typeOfLink }) => {
                    const decodedTitle = decodeHtml(link.title);

                    return (
                      <li key={link.url}>
                        <Link
                          href={link.url}
                          dangerouslySetInnerHTML={{ __html: decodedTitle }}
                        ></Link>
                      </li>
                    );
                  })}

                  <li>
                    <Link href="mailto:">best@email.ever</Link>
                    <br></br>
                    <Link href="tel:+">700400300</Link>
                  </li>
                </ul>
              </div>
            )}
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
