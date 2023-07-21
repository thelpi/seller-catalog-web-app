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
  { name: "Produits", url: "/" },
  { name: "Commandes", url: "/orders" },
  { name: "Finance", url: "/financial" },
  { name: "Rapports", url: "/reports" },
  { name: "Messages", url: "/messages" },
  { name: "Marketplaces", url: "/marketplaces" },
];

// 3778B3
// 8BABC4
export default function Template() {
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
              {mainMenu.map(({ name, url }) => (
                <Button
                  key={url}
                  component={Link}
                  to={url}
                  variant="navigation"
                  color={pathname === url ? "active" : undefined}
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
