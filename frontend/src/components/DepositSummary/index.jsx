import { Heading, Text } from "./ .. ";
import React from "react";

export default function DepositSummary({ totalDepositsText = "Total Deposits", amountText, ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center gap-[0.13rem] p-[0.50rem] border-greyscale-grey_200 border border-solid flex-1 rounded-[16px]`}
    >
      <Text as="p" className="mt-[0.88rem]">
        {totalDepositsText}
      </Text>
      <div className="mr-[0.38rem] flex justify-center self-stretch px-[3.50rem] md:px-[1.25rem]">
        <Heading
          size="text2x1"
          as="p"
          className="font-poppins text-[2.50rem] font-medium tracking-[0.00rem] text-main_color-black"
        >
          <span className="text-[2.00rem] tracking-[0.00rem] text-main_color-black">LKR 58,764</span>
          <span className="text-[1.50rem] tracking-[0.00rem] text-gray-500">.25</span>
        </Heading>
      </div>
    </div>
  );
}
