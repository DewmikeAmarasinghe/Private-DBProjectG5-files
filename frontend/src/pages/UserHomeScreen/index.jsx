import React from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  TextField,
  InputAdornment,
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { Circle } from "@mui/icons-material";
import Sidebar from "../../components/SideMenuBar"; // Import the Sidebar component

export default function UserAccountPage() {
  return (
    <>
      <Helmet>
        <title>User Account - Manage Your DBS Bank Account</title>
        <meta
          name="description"
          content="Manage your DBS Bank account details, view savings and loan statuses, and update personal information."
        />
      </Helmet>

      <Box sx={{ display: "flex", height: "100vh", bgcolor: "white" }}>
        {/* Sidebar */}
        <Sidebar /> {/* Sidebar component is rendered here */}
        {/* Main Content */}
        <Box sx={{ width: "80%", p: 4 }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {/* Total Balance and Active Bulb */}
              <Grid item xs={12} sm={6}>
                <Card sx={{ height: "100%", alignItems: "center" }}>
                  <CardContent>
                    <Typography variant="h5" mb={2}>
                      Overview
                    </Typography>
                    <Card
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "#e0f7e9",
                        p: 1,
                        position: "relative", // Position this card absolutely
                        top: "-20px", // Move it upwards
                        right: "20px", // Position it to the right corner
                        width: "fit-content", // Adjust card size to fit its content
                        ml: "auto", // Push the card to the right
                        borderRadius: "8px",
                        boxShadow: 2,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Circle
                          sx={{ color: "#73EC8B", fontSize: 16, mr: 1 }}
                        />{" "}
                        {/* Circle icon size */}
                        <Typography
                          variant="body2"
                          fontWeight="bold"
                          sx={{ color: "green" }}
                        >
                          Active
                        </Typography>
                      </Box>
                    </Card>

                    <Card sx={{ height: "100%" }}>
                      <Typography variant="h5" mb={2} textAlign={"center"}>
                        Total Balance
                      </Typography>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        textAlign={"center"}
                      >
                        LKR 58,764.25
                      </Typography>
                    </Card>

                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2, width: "100%" }}
                    >
                      Request Loan
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              {/* Quick Transfer */}
              <Grid item xs={12} sm={6}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h5" mb={2}>
                      Quick Transfer
                    </Typography>

                    <TextField
                      label="Account Number"
                      variant="outlined"
                      fullWidth
                      sx={{ mb: 0, border: "none" }}
                    />

                    {/* Amount Input with LKR Adornment */}
                    <TextField
                      variant="outlined"
                      fullWidth
                      sx={{ mb: 2, border: "none" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">LKR</InputAdornment>
                        ),
                      }}
                      placeholder="Enter amount in LKR"
                    />

                    <Button variant="contained" color="primary" fullWidth>
                      Proceed to Pay
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              {/* Transaction History */}
              <Grid item xs={12}>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Transaction History
                </Typography>

                <Card>
                  <CardContent>
                    <List>
                      {[
                        {
                          name: "Arlene McCoy",
                          company: "The Walt Disney Company",
                          amount: "LKR 1,546.12",
                        },
                        {
                          name: "Savannah Nguyen",
                          company: "Pizza Hut",
                          amount: "LKR 1,546.12",
                        },
                        {
                          name: "Kristin Watson",
                          company: "Nintendo",
                          amount: "LKR 1,546.12",
                        },
                        {
                          name: "Cameron Williamson",
                          company: "eBay",
                          amount: "LKR 1,546.12",
                        },
                        {
                          name: "Jane Cooper",
                          company: "eBay",
                          amount: "LKR 1,546.12",
                        },
                      ].map((transaction, index) => (
                        <>
                          <ListItem
                            key={index}
                            sx={{ justifyContent: "space-between" }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                flexGrow: 1,
                              }}
                            >
                              <Box>
                                <Typography fontWeight="bold">
                                  {transaction.name}
                                </Typography>
                                <Typography variant="body2">
                                  {transaction.company}
                                </Typography>
                              </Box>
                            </Box>
                            <Box sx={{ textAlign: "right", mr: 3 }}>
                              <Typography fontWeight="bold">
                                {transaction.amount}
                              </Typography>
                            </Box>
                            <Button variant="outlined" size="small">
                              Download
                            </Button>
                          </ListItem>
                          {index < 4 && <Divider />}
                        </>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
