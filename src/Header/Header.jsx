import { useDarkLightMode } from "@/hooks";
import "./header.css";
import clsx from "clsx";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ light }) => (light ? "#0d293f" : "#fff")};
`;

const mainMenu = [
  { name: "Produits", url: "/" },
  { name: "Commandes", url: "/orders" },
  { name: "Finance", url: "/financial" },
  { name: "Rapports", url: "/reports" },
  { name: "Messages", url: "/messages" },
  { name: "Marketplaces", url: "/marketplaces" },
];

export default function Header() {
  const [darkMode, { toggleMode }] = useDarkLightMode();

  return (
    <header className={clsx({ light: !darkMode })}>
      <h1 className={clsx("logo", { light: !darkMode })}>Seller catalog</h1>
      <nav>
        <ol className="navList">
          {mainMenu.map(({ name, url }) => (
            <li key={url} className="navListItem">
              <NavLink to={url} light={!darkMode}>
                {name}
              </NavLink>
            </li>
          ))}
        </ol>
      </nav>
      <button onClick={toggleMode}>{darkMode ? "Dark" : "Light"} mode</button>
    </header>
  );
}
