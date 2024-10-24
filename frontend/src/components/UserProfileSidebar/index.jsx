import React from "react";

const UserProfileSidebar = () => {
  return (
    <div>
      <div className="font-medium mb-8">Username</div>{" "}
      {/* Bottom margin added */}
      <div className="font-medium mb-8">Account Number</div>
      <div className="font-medium mb-8">NIC Number</div>
      <div className="font-medium mb-8">E-mail</div>
      <div className="font-medium mb-8">Address</div>
    </div>
  );
};

export default UserProfileSidebar;
