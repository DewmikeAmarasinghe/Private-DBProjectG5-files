import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Input,
} from "@material-tailwind/react";

const countries = [
  { name: "Kenya", code: "+254", flag: "🇰🇪" },
  { name: "San Marino", code: "+378", flag: "🇸🇲" },
  { name: "French Polynesia", code: "+689", flag: "🇵🇫" },
  { name: "Sierra Leone", code: "+232", flag: "🇸🇱" },
  { name: "Madagascar", code: "+261", flag: "🇲🇬" },
  { name: "Nigeria", code: "+234", flag: "🇳🇬" },
  { name: "Jordan", code: "+962", flag: "🇯🇴" },
  { name: "Libya", code: "+218", flag: "🇱🇾" },
  // Add more countries as needed
];

const CountryCodeInput = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="flex w-full max-w-[24rem]">
      <Menu placement="bottom-start">
        <MenuHandler>
          <Button
            ripple={false}
            variant="text"
            color="blue-gray"
            className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
          >
            <span>{selectedCountry.flag}</span>
            <span>{selectedCountry.code}</span>
          </Button>
        </MenuHandler>
        <MenuList className="max-h-[20rem] max-w-[18rem]">
          {countries.map((country) => (
            <MenuItem
              key={country.code}
              value={country.code}
              className="flex items-center gap-2"
              onClick={() => setSelectedCountry(country)}
            >
              <span>{country.flag}</span>
              <span>{country.name}</span>
              <span className="ml-auto">{country.code}</span>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <Input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone number"
        className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
        containerProps={{
          className: "min-w-0",
        }}
      />
    </div>
  );
};

export default CountryCodeInput;
