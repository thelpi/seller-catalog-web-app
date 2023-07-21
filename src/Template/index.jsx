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
import { Link, Outlet } from "react-router-dom";

const mainMenu = [
  { name: "Produits", url: "/" },
  { name: "Commandes", url: "/orders" },
  { name: "Finance", url: "/financial" },
  { name: "Rapports", url: "/reports" },
  { name: "Messages", url: "/messages" },
  { name: "Marketplaces", url: "/marketplaces" },
];

export default function Template() {
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

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {mainMenu.map(({ name, url }) => (
                <Button
                  key={url}
                  component={Link}
                  to={url}
                  sx={{ my: 2, color: "white", display: "block" }}
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
