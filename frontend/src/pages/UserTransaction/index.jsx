import React from "react";
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Button,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Sidebar from "../../components/SideMenuBar";

// Custom Tailwind gradient button
const ConfirmButton = styled(Button)(() => ({
  background: "linear-gradient(90deg, #3e79e5, #01b8e3)",
  color: "white",
  padding: "10px 20px",
  borderRadius: "8px",
  textTransform: "none",
  width: "50%",
}));

const TransactionPage = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Online Bank Transfer
        </Typography>
        <Box className="bg-white p-6 rounded-lg shadow-md">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="From"
                defaultValue="8022239456"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="To"
                placeholder="Account Number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date"
                defaultValue="22-07-2024"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Amount"
                defaultValue="LKR 10,000"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Purpose of payment"
                select
                defaultValue="Any Other Financial Activity"
                variant="outlined"
              >
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Personal">Personal</MenuItem>
                <MenuItem value="Any Other Financial Activity">
                  Any Other Financial Activity
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Senders Account Description"
                defaultValue="Project Ongoing"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Beneficiary Comment"
                defaultValue="Data Base Project"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={<Switch />}
                label="Please Accept the terms and conditions"
              />
            </Grid>
          </Grid>

          <Box className="mt-6 flex justify-center">
            <ConfirmButton variant="contained">Confirm to pay</ConfirmButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TransactionPage;
