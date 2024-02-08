import { getHeaderData } from "@/store/api";
import Link from "next/link";
import "./Header.scss";
import Image from "next/image";
import BurgerMenu from "./Nav/BurgerMenu/BurgerMenu";

export const Header = async () => {
  const { data } = await getHeaderData();
  const test = data
    ? data.menus.nodes.flatMap((node) => node.menuItems.edges.map((e) => e))
    : [];
  return (
    <header className="header">
      <div className="container">
        {data.menus.nodes[0].menuItems.edges.length > 0 && (
          <div className="header__nav-left">
            {data.menus.nodes[0].menuItems.edges.map((e) => (
              <Link href={`${e.node.uri}`} key={e.node.id}>
                {e.node.label}
              </Link>
            ))}
          </div>
        )}
        {data.themeHeaderSettings.header.logo && (
          <div className="header__logo">
            <Link href="/">
              <Image
                src={`${data.themeHeaderSettings.header.logo.sourceUrl}`}
                width={100}
                height={50}
                alt="Newnow"
              />
            </Link>
          </div>
        )}
        {data.menus.nodes[1].menuItems.edges.length > 0 && (
          <div className="header__nav-right">
            {data.menus.nodes[1].menuItems.edges.map((e) => (
              <Link href={`${e.node.uri}`} key={e.node.id}>
                {e.node.label}
              </Link>
            ))}
          </div>
        )}
        <BurgerMenu links={test} />
      </div>
    </header>
  );
};
