import { Heading } from "./..";
import React from "react";

export default function AccountSummary({ accountTypeText = "Savings Account", amountText, ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center gap-0.5 p-6 sm:p-5 border-gray-300 border border-solid flex-1 rounded-[16px]`}
    >
      <Heading as="p" className="text-[16px] font-medium tracking-[0.32px] text-gray-600">
        {accountTypeText}
      </Heading>
      <div className="mr-2 flex justify-center self-stretch px-[46px] md:px-5">
        <Heading size="text3xl" as="p" className="text-[40px] font-medium tracking-[0.40px] text-gray-900">
          <span className="text-[32px] tracking-[-0.32px] text-gray-900">LKR {amountText}</span>
          <span className="text-[24px] tracking-[0.24px] text-gray-500">.25</span>
        </Heading>
      </div>
    </div>
  );
}
