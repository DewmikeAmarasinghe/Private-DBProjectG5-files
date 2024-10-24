import React from "react";
import {
  Box,
  Typography,
  List,
  Divider,
  Paper,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  Notifications,
  Security,
  Language,
  CreditCard,
  Help,
  Info,
} from "@mui/icons-material";
import SideMenuBar from "../../components/SideMenuBar"; // Ensure this path is correct

const SettingsPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <SideMenuBar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Settings
        </Typography>

        <Paper elevation={3} className="p-4">
          <List>
            <SettingsItem
              icon={<Notifications />}
              primary="Notifications"
              secondary="Manage your alert preferences"
            />
            <Divider variant="inset" component="li" />

            <SettingsItem
              icon={<Security />}
              primary="Security"
              secondary="Configure security settings"
            />
            <Divider variant="inset" component="li" />

            <SettingsItem
              icon={<Language />}
              primary="Language"
              secondary="Choose your preferred language"
            />
            <Divider variant="inset" component="li" />

            <SettingsItem
              icon={<CreditCard />}
              primary="Card Management"
              secondary="Manage your debit and credit cards"
            />
            <Divider variant="inset" component="li" />

            <SettingsItem
              icon={<Help />}
              primary="Help & Support"
              secondary="Get assistance and FAQs"
            />
            <Divider variant="inset" component="li" />

            <SettingsItem
              icon={<Info />}
              primary="About"
              secondary="App version and legal information"
            />
          </List>
        </Paper>
      </Box>
    </div>
  );
};

const SettingsItem = ({ icon, primary, secondary, hasSwitch = false }) => (
  <ListItem button className="py-4">
    <ListItemIcon className="text-blue-600">{icon}</ListItemIcon>
    <ListItemText
      primary={
        <Typography variant="subtitle1" className="font-medium">
          {primary}
        </Typography>
      }
      secondary={
        <Typography variant="body2" className="text-gray-600">
          {secondary}
        </Typography>
      }
    />
    {hasSwitch && <Switch edge="end" />}
  </ListItem>
);

export default SettingsPage;
