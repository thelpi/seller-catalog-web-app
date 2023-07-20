import { useDarkLightMode } from "@/hooks";
import "./header.css";
import clsx from "clsx";
import styled from "@emotion/styled";

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ light }) => (light ? "#0d293f" : "#fff")};
`;

export default function Header() {
  const [darkMode, { toggleMode }] = useDarkLightMode();
  return (
    <header className={clsx({ light: !darkMode })}>
      <h1 className={clsx("logo", { light: !darkMode })}>Seller catalog</h1>
      <nav>
        <ol className="navList">
          <li className="navListItem">
            <NavLink href="/page1" light={!darkMode}>
              Page 1
            </NavLink>
          </li>
          <li className="navListItem">
            <NavLink href="/page2" light={!darkMode}>
              Page 2
            </NavLink>
          </li>
        </ol>
      </nav>
      <button onClick={toggleMode}>{darkMode ? "Dark" : "Light"} mode</button>
    </header>
  );
}
