import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

const UserProfileCard = ({ avatar, name, company }) => {
  return (
    <Box className="flex items-center space-x-4">
      {/* Avatar */}
      <Avatar src={avatar} alt={name} sx={{ width: 56, height: 56 }} />

      {/* User Information */}
      <Box>
        <Typography variant="h6" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {company}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserProfileCard;
