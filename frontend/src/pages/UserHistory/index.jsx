import React from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Sidebar from "../../components/SideMenuBar"; // Assuming the sidebar is already implemented

// Custom Tailwind gradient button for "Download"
const DownloadButton = styled(Button)(() => ({
  background: "linear-gradient(90deg, #3e79e5, #01b8e3)",
  color: "white",
  padding: "5px 15px",
  borderRadius: "8px",
  textTransform: "none",
  width: "120px",
  fontSize: "14px",
}));

const TransactionHistory = () => {
  // Dummy data for the transactions
  const transactions = [
    {
      name: "Arlene McCoy",
      company: "The Walt Disney Company",
      date: "Mar 1, 2024",
      time: "08:00 AM",
      amount: "LKR 1,546.12",
      avatar: "/images/avatar1.png",
    },
    {
      name: "Savannah Nguyen",
      company: "Pizza Hut",
      date: "Mar 1, 2024",
      time: "08:00 AM",
      amount: "LKR 1,546.12",
      avatar: "/images/avatar2.png",
    },
    {
      name: "Kristin Watson",
      company: "Nintendo",
      date: "Mar 1, 2024",
      time: "08:00 AM",
      amount: "LKR 1,546.12",
      avatar: "/images/avatar3.png",
    },
    {
      name: "Cameron Williamson",
      company: "eBay",
      date: "Mar 1, 2024",
      time: "08:00 AM",
      amount: "LKR 1,546.12",
      avatar: "/images/avatar4.png",
    },
    {
      name: "Jane Cooper",
      company: "eBay",
      date: "Mar 1, 2024",
      time: "08:00 AM",
      amount: "LKR 1,546.12",
      avatar: "/images/avatar5.png",
    },
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Transaction History
        </Typography>

        {/* Transaction History Section */}
        <Box className="bg-white p-6 rounded-lg shadow-md">
          {/* Header */}
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h6" fontWeight="bold">
              Transaction History
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#007bff", cursor: "pointer", fontWeight: "bold" }}
            >
              See All
            </Typography>
          </Grid>

          {/* Transaction List */}
          <List>
            {transactions.map((transaction, index) => (
              <ListItem key={index} divider sx={{ alignItems: "center" }}>
                <Grid container alignItems="center">
                  {/* Profile and Name */}
                  <Grid item xs={4} container alignItems="center">
                    <ListItemAvatar>
                      <Avatar src={transaction.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={transaction.name}
                      secondary={transaction.company}
                    />
                  </Grid>

                  {/* Transaction Date and Time - Centered */}
                  <Grid item xs={4} container justifyContent="center">
                    <Typography
                      component="span"
                      variant="body2"
                      color="textSecondary"
                      align="center"
                    >
                      {transaction.date} - {transaction.time}
                    </Typography>
                  </Grid>

                  {/* Amount and Download Button */}
                  <Grid
                    item
                    xs={4}
                    container
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold", mr: 2 }}>
                      {transaction.amount}
                    </Typography>
                    <DownloadButton>Download</DownloadButton>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default TransactionHistory;
