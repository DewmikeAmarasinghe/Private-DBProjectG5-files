import React from "react"
import { Helmet } from "react-helmet"
import { Button, Input, Heading } from "../../components"
import Sidebar from "../../components/StaffSideMenuBar"

export default function CashDepositPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
  };

  return (
    <>
      <Helmet>
        <title>Cash Deposit - DBS Bank</title>
        <meta name="description" content="Cash deposit page for DBS Bank" />
      </Helmet>
      <div className="flex w-full items-start bg-main_color-white px-[2.00rem] sm:px-[1.25rem]">
        <Sidebar />
        <div className="flex flex-1 flex-col items-start px-[2.88rem] md:px-[1.25rem]">
          <Heading 
            size="headinglg" 
            as="h1" 
            className="text-[1.50rem] font-extrabold text-black-900 md:text-[1.38rem] mb-[1.25rem] pt-6"
          >
            Cash Deposit
          </Heading>
          <div className="mt-[1.25rem] flex w-[84%] flex-col items-stretch rounded-[20px] border border-solid border-gray-300 p-[2.25rem] md:w-full sm:p-[1.25rem]">
            <div className="flex flex-col gap-[1.25rem] w-full">
              <div className="mr-[1.38rem] flex w-[92%] items-center justify-between gap-[1.25rem] md:mr-0 md:w-full md:flex-col md:items-start">
                <Heading as="h2" className="text-[1.00rem] font-semibold text-gray-700">
                  Account Number
                </Heading>
                <Input
                  shape="round"
                  type="number"
                  name="mobileNo"
                  placeholder="8011739261"
                  className="w-[70%] rounded-md border-[0.57px] px-[1.00rem] md:w-full"
                />
              </div>
              <div className="mr-[1.38rem] flex w-[92%] items-center justify-between gap-[1.25rem] md:mr-0 md:w-full md:flex-col md:items-start">
                <Heading as="h3" className="text-[1.00rem] font-semibold text-gray-700">
                  Account Holder Name
                </Heading>
                <Input
                  shape="round"
                  name="dropdown_one"
                  placeholder="Vimosh Vasanthakumar"
                  className="w-[70%] rounded-md border-[0.57px] px-[1.00rem] md:w-full"
                />
              </div>
              <div className="mr-[1.38rem] flex w-[92%] items-center justify-between gap-[1.25rem] md:mr-0 md:w-full md:flex-col md:items-start">
                <Heading as="h4" className="text-[1.00rem] font-semibold text-gray-700">
                  Purpose of Deposit
                </Heading>
                <Input
                  shape="round"
                  name="dropdown_three"
                  placeholder="Project Payment"
                  className="w-[70%] rounded-md border-[0.57px] px-[1.00rem] md:w-full"
                />
              </div>
              <div className="mr-[1.38rem] flex w-[92%] items-center justify-between gap-[1.25rem] md:mr-0 md:w-full md:flex-col md:items-start">
                <Heading as="h5" className="text-[1.00rem] font-semibold text-gray-700">
                  Depositor's Name
                </Heading>
                <Input
                  shape="round"
                  name="dropdown_five"
                  placeholder="Vimosh Vasanthakumar"
                  className="w-[70%] rounded-md border-[0.57px] px-[1.00rem] md:w-full"
                />
              </div>
              <div className="mr-[1.38rem] flex w-[92%] items-center justify-between gap-[1.25rem] md:mr-0 md:w-full md:flex-col md:items-start">
                <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-700">
                  Depositor's NIC No
                </Heading>
                <Input
                  shape="round"
                  type="number"
                  name="dropdown_seven"
                  placeholder="200222500189"
                  className="w-[70%] rounded-md border-[0.57px] px-[1.00rem] md:w-full"
                />
              </div>
              <div className="mr-[1.38rem] flex w-[92%] items-center justify-between gap-[1.25rem] md:mr-0 md:w-full md:flex-col md:items-start">
                <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-700">
                  Amount
                </Heading>
                <Input
                  shape="round"
                  name="dropdown_nine"
                  placeholder="50,000.00"
                  className="w-[70%] rounded-md border-[0.57px] px-[1.00rem] md:w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end mt-[2.75rem]">
          <Button
            shape="round"
            className="mb-[1.13rem] min-w-[18.88rem] rounded-[10px] px-[2.13rem] py-[0.75rem] font-sora text-[14px] text-white sm:px-[1.25rem]"
            style={{
              background: "linear-gradient(90deg, #3e79e5, #01b8e3)",
              textTransform: "none"
            }}
            onClick={handleSubmit}
          >
            Confirm Deposit
          </Button>

          </div>
        </div>
      </div>
    </>
  )
}