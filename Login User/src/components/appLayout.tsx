
import { useContext } from "react";
import { Link, Outlet } from "react-router";
import { UserContext } from './start'
import { Box, Stack, Typography } from "@mui/material";
import { Home, Info, RestaurantMenu, AddCircle } from "@mui/icons-material";

const AppLayout = () => {
  const context = useContext(UserContext);
  const menuItems = [
    { text: "Home", icon: <Home />, path: "/" },
    { text: "About", icon: <Info />, path: "/about" },
    { text: "Recipes", icon: <RestaurantMenu />, path: "/recipes" },
  ];

  const styleSx = {
    fontWeight: "bold",
    px: 3,
    py: 1,
    borderRadius: "8px",
    transition: "background-color 0.3s, transform 0.2s",
    fontSize: "16px",
    letterSpacing: "0.5px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    "&:hover": {
      color: "white",
      backgroundColor: "primary.light",
      transform: "scale(1.03)",
    },
  };

  return (
    <>
    
      <Box
        component="nav"
        sx={{
          position: "relative",
          top: "60px",
          right: 20,
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
          borderRadius: "8px",
          padding: "2px 20px",
          width: "calc(100% - 40px)",
          zIndex:1000
        }}
      >
        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          justifyContent="center"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} style={{ textDecoration: "none" }}>
              <Typography variant="h6" color="primary" sx={styleSx}>
                {item.icon}
                {item.text}
              </Typography>
            </Link>
          ))}

          {context.user.id !== "" && (
            <Link to="/addRecipe" style={{ textDecoration: "none" }}>
              <Typography variant="h6" color="primary" sx={styleSx}>
                <AddCircle />
                Add Recipe
              </Typography>
            </Link>
          )}
        </Stack>
      </Box>

      <Box
        sx={{
          paddingTop: "50px",
          minHeight: "calc(100vh - 100px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};
export default AppLayout;
