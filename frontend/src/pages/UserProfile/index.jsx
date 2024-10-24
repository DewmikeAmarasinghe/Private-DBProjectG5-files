import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import SideMenuBar from "../../components/SideMenuBar/index.jsx"; // Existing SideMenuBar component

const UserProfile = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <SideMenuBar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4" fontWeight="bold" mb={4}>
          User Profile
        </Typography>

        <Grid container spacing={4}>
          {/* Left: Profile Sidebar and User Details */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} className="p-6 rounded-lg">
              {/* Profile Data with Label and Value on the Same Line */}
              <Grid container spacing={2} alignItems="flex-start">
                {" "}
                {/* Changed to flex-start for top alignment */}
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    className="font-medium"
                    sx={{ fontWeight: "bold" }}
                  >
                    Username
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    variant="body1"
                    className="rounded-lg"
                    sx={{
                      wordWrap: "break-word",
                      whiteSpace: "pre-wrap",
                      overflowWrap: "break-word",
                    }}
                  >
                    VIMOSH VASANTHAKUMAR
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    className="font-medium"
                    sx={{ fontWeight: "bold" }}
                  >
                    Account Number
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body1" className="rounded-lg">
                    8011734567
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    className="font-medium"
                    sx={{ fontWeight: "bold" }}
                  >
                    NIC Number
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body1" className="rounded-lg">
                    20022600786
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    className="font-medium"
                    sx={{ fontWeight: "bold" }}
                  >
                    E-mail
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body1" className="rounded-lg">
                    vimosh02@gmail.com
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    className="font-medium"
                    sx={{ fontWeight: "bold" }}
                  >
                    Address
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body1" className="rounded-lg">
                    No:29, Barathi Village, Colombo
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Right: Account Summaries and Loan Status */}
          <Grid item xs={12} md={4}>
            <Paper className="p-4 rounded-lg shadow-md">
              <Typography variant="subtitle1" className="font-medium">
                Savings Account
              </Typography>
              <Typography variant="h5" className="font-bold">
                LKR 58,764.25
              </Typography>
            </Paper>

            <Paper className="p-4 rounded-lg shadow-md mt-4">
              <Typography variant="subtitle1" className="font-medium">
                Fixed Account
              </Typography>
              <Typography variant="h5" className="font-bold">
                LKR 100,000
              </Typography>
            </Paper>

            <Paper className="p-4 rounded-lg shadow-md mt-4">
              <Typography variant="subtitle1" className="font-medium">
                Current Account
              </Typography>
              <Typography variant="h5" className="font-bold">
                LKR 42,600
              </Typography>
            </Paper>

            <Paper className="p-4 rounded-lg shadow-md mt-4">
              <Typography variant="subtitle1" className="font-medium mb-2">
                Loan Status
              </Typography>
              <div className="mb-2">
                <Typography variant="body2" className="font-medium">
                  LKR 50,000
                </Typography>
                <div className="h-2 w-full bg-orange-500 rounded-md" />
              </div>
              <div className="mb-2">
                <Typography variant="body2" className="font-medium">
                  LKR 30,000
                </Typography>
                <div className="h-2 w-full bg-green-500 rounded-md" />
              </div>
              <div>
                <Typography variant="body2" className="font-medium">
                  LKR 10,000
                </Typography>
                <div className="h-2 w-full bg-red-500 rounded-md" />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default UserProfile;
