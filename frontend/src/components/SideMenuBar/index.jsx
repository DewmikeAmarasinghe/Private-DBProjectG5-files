import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  AccountBalance,
  Payment,
  Receipt,
  Settings,
  AccountCircle,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Img } from "../Img";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { icon: <AccountBalance />, text: "Home", link: "/userhomescreen" },
    { icon: <Payment />, text: "Payment", link: "/usertransaction" },
    { icon: <Receipt />, text: "Invoices", link: "/userhistory" },
    { icon: <AccountCircle />, text: "Account", link: "/userprofile" },
    { icon: <Settings />, text: "Settings", link: "/settings" },
  ];

  const sidebarContent = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 3,
          mt: 2,
        }}
      >
        <Img
          src="images/img_50_money_hand_1.png"
          alt="Logo"
          className="h-[60px] w-[60px] object-contain"
        />
        <Typography variant="h6" fontWeight="bold">
          DBS Bank
        </Typography>
      </Box>

      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            component={Link} // Use Link as the component
            to={item.link} // Provide the route for navigation
            sx={{
              mb: 2,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {item.icon}
            {/* Ensure text always shows, even on mobile */}
            <Typography sx={{ ml: 2 }}>{item.text}</Typography>
          </ListItem>
        ))}
      </List>
    </>
  );

  if (isMobile) {
    return (
      <>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setDrawerOpen(true)}
          sx={{ position: "absolute", top: 10, left: 10 }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: 250 }}>{sidebarContent}</Box>
        </Drawer>
      </>
    );
  }

  return (
    <Box
      sx={{
        width: isTablet ? "80px" : "20%",
        bgcolor: "white",
        color: "black",
        p: 2,
        transition: "width 0.3s ease",
      }}
    >
      {sidebarContent}
    </Box>
  );
}
