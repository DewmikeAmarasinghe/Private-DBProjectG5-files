import React from "react";
import PropTypes from 'prop-types';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

// Import icons from @heroicons/react
import {
  HomeIcon,
  UserPlusIcon,
  BanknotesIcon,
  ArrowDownTrayIcon,
  ArrowsRightLeftIcon,
  BuildingLibraryIcon,
  CurrencyDollarIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  { icon: HomeIcon, label: "Home", to: "/" },
  { icon: UserPlusIcon, label: "Create Account", to: "/create-account" },
  { icon: BanknotesIcon, label: "Deposit", to: "/cashdeposit" },
  { icon: ArrowDownTrayIcon, label: "Withdraw", to: "/withdraw" },
  { icon: ArrowsRightLeftIcon, label: "Transfer", to: "/transfer" },
  { icon: BuildingLibraryIcon, label: "Fixed Deposit", to: "/fixed-deposit" },
  { icon: CurrencyDollarIcon, label: "Loan", to: "/loan" },
  { icon: UserIcon, label: "Account", to: "/account" },
  { icon: Cog6ToothIcon, label: "Settings", to: "/settings" },
];

function StaffSideMenuBar({ className = "" }) {
  return (
    <Sidebar
      width="314px"
      collapsedWidth="80px"
      className={`flex flex-col h-screen pt-14 md:pt-5 sticky top-0 overflow-auto ${className}`}
    >
      <div className="flex flex-col items-center mb-6">
        <img
          src="/images/img_50_money_hand_1.png"
          alt="DBS Bank Logo"
          className="h-[100px] w-auto object-contain"
        />
        <h6 className="mt-3 font-sora text-2xl font-bold text-black text-center">
          DBS Bank
        </h6>
      </div>
      <Menu
        menuItemStyles={{
          button: {
            padding: "0.5rem 1rem",
            paddingLeft: "1.5rem", 
            gap: "1.38rem",
            color: "#000000",
            fontWeight: 400,
            fontSize: "1rem",
            borderRadius: "8px",
            '&:hover, &.ps-active': {
              background: "linear-gradient(90deg, #01b837, #379e57)",
              color: "#ffffff",
            },
          },
        }}
        className="mt-4 flex w-full flex-col items-stretch"
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.label}
            icon={<item.icon className="h-5 w-5" />}
            component={<Link to={item.to} />}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </Sidebar>
  );
}

StaffSideMenuBar.propTypes = {
  className: PropTypes.string,
};

export default StaffSideMenuBar;