import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Heading } from "../../components";
import Sidebar from "../../components/StaffSideMenuBar";

const FormField = ({ label, type = 'text', name, placeholder, className }) => (
  <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full gap-3 mb-3">
    <Heading as="h6" className="text-sm font-semibold text-gray-700">
      {label}
    </Heading>
    <Input
      shape="round"
      type={type}
      name={name}
      placeholder={placeholder}
      className={`rounded-md border-[0.57px] px-3 py-2 md:w-[70%] w-full ${className}`}
    />
  </div>
);

export default function CashWithdrawPage() {
  return (
    <>
      <Helmet>
        <title>Bank - Cash Withdraw</title>
        <meta name="description" content="Cash withdrawal page for bank staff" />
      </Helmet>
      <div className="flex w-full items-start bg-white px-8 sm:px-5">
        <Sidebar />
        <div className="flex flex-1 flex-col items-start px-[2.88rem] md:px-5">
          <Heading size="heading-lg" as="h1" className="text-xl font-extrabold text-black-900 md:text-[1.38rem] pt-6">
            Cash Withdraw
          </Heading>
          <form className="mt-4 w-full max-w-3xl rounded-[10px] border border-solid border-gray-300 p-5 sm:p-4 flex flex-col">
            <FormField
              label="Account Number"
              type="number"
              name="accountNumber"
              placeholder="8011739261"
            />
            <FormField
              label="Account Holder Name"
              name="accountHolderName"
              placeholder="Vimosh Vasanthakumar"
            />
            <FormField
              label="Purpose of Withdraw"
              name="purpose"
              placeholder="Project Payment"
            />
            <FormField
              label="Withdrawer's Name"
              name="withdrawerName"
              placeholder="Vimosh Vasanthakumar"
            />
            <FormField
              label="Withdrawer's NIC No"
              type="number"
              name="withdrawerNic"
              placeholder="200222500189"
            />
            <FormField
              label="Amount"
              name="amount"
              placeholder="50,000.00"
            />
            <div className="flex justify-end mt-6">
              <Button
                shape="round"
                className="mb-[1.13rem] min-w-[18.88rem] rounded-[10px] px-[2.13rem] py-[0.75rem] font-sora text-[14px] text-white sm:px-[1.25rem]"
                style={{
                  background: "linear-gradient(90deg, #3e79e5, #01b8e3)",
                  textTransform: "none"
                }}
              >
                Confirm Withdrawal
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
