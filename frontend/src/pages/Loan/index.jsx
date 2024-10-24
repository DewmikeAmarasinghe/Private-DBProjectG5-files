import { Helmet } from "react-helmet";
import { Button, Switch, Heading, SelectBox, Img, Input } from "../../components";
import Sidebar5 from "../../components/Sidebar5";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function LoanPage() {
  return (
    <>
      <Helmet>
        <title>Bank</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full items-start bg-main_color-white px-[2.00rem] sm:px-[1.25rem]">
        <Sidebar5 />
        <div className="flex flex-1 flex-col items-start gap-[1.50rem] px-[3.00rem] md:px-[1.25rem]">
          <Heading size="headinglg" as="h1" className="text-[1.50rem] font-extrabold text-black-900 md:text-[1.38rem]">
            Loan
          </Heading>
          <div className="flex w-[84%] flex-col items-center gap-[2.75rem] rounded-[20px] border border-solid border-gray-300 p-[1.63rem] md:w-full sm:p-[1.25rem]">
            <div className="mt-[0.25rem] w-[88%] px-[0.63rem] md:w-full">
              <div className="flex items-center justify-between gap-[1.25rem] md:flex-col">
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
            </div>
            <div className="mt-[1.38rem] flex flex-wrap gap-[5.75rem] py-[0.63rem] md:gap-[1.25rem]">
              <Heading as="h3" className="text-[1.00rem] font-semibold text-gray-700">
                Account Number
              </Heading>
              <Heading size="headingxs" as="h4" className="text-[0.88rem] font-semibold text-gray-700">
                Vimosh Vasanthakumar
              </Heading>
            </div>
            <div className="mt-[1.38rem] flex items-center justify-between gap-[1.25rem] sm:flex-col">
              <Heading as="h5" className="text-[1.00rem] font-semibold text-gray-700">
                NIC No
              </Heading>
              <Input
                shape="round"
                type="number"
                name="dropdown_one"
                placeholder="200222500189"
                className="w-[70%] rounded-md border-[0.57px] px-[1.00rem] sm:w-full"
              />
            </div>
            <div className="mt-[2.00rem] flex items-center justify-between gap-[1.25rem] sm:flex-col">
              <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-700">
                Loan Amount
              </Heading>
              <Input
                shape="round"
                name="dropdown_three"
                placeholder="400,000.00"
                className="w-[70%] rounded-md border-[0.57px] px-[1.00rem] sm:w-full"
              />
            </div>
            <div className="mt-[2.00rem] flex items-center justify-between gap-[1.25rem] sm:flex-col">
              <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-700">
                Term of Loan
              </Heading>
              <SelectBox
                shape="round"
                indicator={<Img src="images/img_shape.svg" alt="Shape" className="h-[0.38rem] w-[0.50rem]" />}
                name="duration"
                placeholder="12 months"
                options={dropDownOptions}
                className="w-[70%] gap-[1.00rem] rounded-md border-[0.57px] border-solid border-blue_gray-200 font-semibold sm:w-full"
              />
            </div>
            <div className="mt-[1.38rem] flex items-center justify-center md:flex-col">
              <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-700">
                Interest Rate
              </Heading>
              <div className="flex-1 p-[0.50rem] md:self-stretch">
                <div className="flex justify-center self-end px-[3.50rem] md:px-[1.25rem]">
                  <div className="flex">
                    <Heading size="headingxs" as="p" className="text-[0.88rem] font-semibold text-gray-700">
                      4% (Annually)
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[1.38rem] flex items-center justify-center md:flex-col">
              <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-700">
                Capital Repayment
              </Heading>
              <div className="flex-1 p-[0.50rem] md:self-stretch">
                <div className="flex self-end px-[3.50rem] md:px-[1.25rem]">
                  <Heading size="headingxs" as="p" className="text-[0.88rem] font-semibold text-gray-700">
                    8,333.00
                  </Heading>
                </div>
              </div>
            </div>
            <div className="mt-[1.38rem] flex items-center justify-center md:flex-col">
              <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-700">
                Interest (Monthly)
              </Heading>
              <div className="flex-1 p-[0.63rem] md:self-stretch">
                <div className="flex pl-[4.13rem] pr-[3.50rem] md:px-[1.25rem]">
                  <Heading size="headingxs" as="p" className="text-[0.88rem] font-semibold text-gray-700">
                    456.00
                  </Heading>
                </div>
              </div>
            </div>
            <div className="mt-[1.38rem] flex gap-[1.88rem] md:flex-col">
              <Heading as="h6" className="w-[26%] text-[1.00rem] font-semibold leading-[1.31rem] text-gray-700 md:w-full">
                Equated Monthly Payment
              </Heading>
              <div className="flex-1 p-[0.50rem] md:self-stretch">
                <div className="flex self-end">
                  <Heading size="headingxs" as="p" className="text-[0.88rem] font-semibold text-gray-700">
                    8,789.00
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-[1.50rem]">
              <Heading as="h6" className="self-center text-[1.00rem] font-semibold text-gray-700">
                Please Accept the terms and conditions
              </Heading>
              <Switch value={false} />
            </div>
            <div>
              <Button
                shape="round"
                color="blue_A200_cyan_A700"
                className="mr-[9.50rem] min-w-[15.13rem] self-end rounded-[10px] px-[2.13rem] font-sora md:mr-0 sm:px-[1.25rem]"
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
