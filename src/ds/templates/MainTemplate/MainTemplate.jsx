import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";

const mainMenu = [
  { name: "Produits", url: "/", domain: "products" },
  { name: "Commandes", url: "/orders", domain: "orders" },
  { name: "Favoris", url: "/favorites", domain: "favorites" },
  { name: "Finance", url: "/financial", domain: "financial" },
  { name: "Rapports", url: "/reports", domain: "reports" },
  { name: "Messages", url: "/messages", domain: "messages" },
  { name: "Marketplaces", url: "/marketplaces", domain: "marketplaces" },
];

const isActiveTab = (url, pathname, domain) => {
  return url === pathname || pathname.startsWith(`/${domain}`);
};

/**
 * The main template of the App, we have to use it with [`<Outlet />`](https://reactrouter.com/en/main/components/outlet)
 */
export default function MainTemplate() {
  const { pathname } = useLocation();

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Seller Catalog
            </Typography>

            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {mainMenu.map(({ name, url, domain }) => (
                <Button
                  key={url}
                  component={Link}
                  to={url}
                  variant="navigation"
                  color={
                    isActiveTab(url, pathname, domain) ? "active" : undefined
                  }
                >
                  {name}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={() => {}} sx={{ p: 0 }}>
                <Avatar alt="Charles" src="/public/sergio.png" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet></Outlet>
    </>
  );
}
