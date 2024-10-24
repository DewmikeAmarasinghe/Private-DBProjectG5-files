import { Helmet } from "react-helmet";
import { Button, SelectBox, Img, Heading, Input } from "../../components";
import Sidebar11 from "../../components/StaffSideMenuBar";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function StaffCreateAccountPage() {
  return (
    <>
      <Helmet>
        <title>Bank</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full items-start bg-main_color-white px-[2.00rem] sm:px-[1.25rem]">
        <StaffSideMenuBar />
        <div className="flex flex-1 flex-col items-start gap-[2.13rem]">
          <a href="#" className="md:text-[1.38rem]">
            <Heading
              size="headinglg"
              as="h1"
              className="text-[1.50rem] font-extrabold text-black-900"
            >
              Create Account
            </Heading>
          </a>
          <div className="flex w-[80%] flex-col items-end rounded-[20px] border border-solid border-gray-300 py-[1.63rem] pl-[3.50rem] pr-[4.25rem] md:w-full md:px-[1.25rem] sm:p-[1.25rem]">
            <div className="mr-[2.00rem] mt-[1.00rem] flex items-end justify-between gap-[1.25rem] self-stretch px-[0.75rem] md:mr-0 sm:flex-col">
              <Heading
                as="h2"
                className="mb-[0.88rem] text-[1.00rem] font-semibold text-gray-700"
              >
                Full Name
              </Heading>
              <Input
                shape="round"
                name="dropdown_one"
                placeholder={"VIMOSH VASANTHAKUMAR"}
                className="mr-[0.25rem] mt-[1.63rem] w-[72%] rounded-md border-[0.57px] px-[1.00rem] md:mr-0 sm:w-full"
              />
            </div>
            <div className="mr-[2.00rem] flex items-end justify-between gap-[1.25rem] self-stretch px-[0.75rem] md:mr-0 sm:flex-col">
              <Heading
                as="h3"
                className="mb-[0.88rem] text-[1.00rem] font-semibold text-gray-700"
              >
                First Name
              </Heading>
              <Input
                shape="round"
                type="text"
                name="firstName"
                placeholder={"John"}
                className="mr-[0.25rem] mt-[1.63rem] w-[72%] rounded-md border-[0.57px] px-[1.00rem] md:mr-0 sm:w-full"
              />
            </div>
            <div className="mr-[2.00rem] flex items-end justify-between gap-[1.25rem] self-stretch px-[0.75rem] md:mr-0 md:flex-col">
              <Heading
                as="h4"
                className="mb-[0.88rem] text-[1.00rem] font-semibold text-gray-700"
              >
                NIC Number
              </Heading>
              <Input
                shape="round"
                type="number"
                name="dropdown_three"
                placeholder={"200222600786"}
                className="mr-[0.25rem] mt-[1.63rem] w-[72%] rounded-md border-[0.57px] px-[1.00rem] md:mr-0 md:w-full"
              />
            </div>
            <div className="mr-[2.00rem] flex items-end justify-between gap-[1.25rem] self-stretch px-[0.75rem] md:mr-0 sm:flex-col">
              <Heading
                as="h5"
                className="mb-[0.88rem] text-[1.00rem] font-semibold text-gray-700"
              >
                E-mail
              </Heading>
              <Input
                shape="round"
                type="email"
                name="email"
                placeholder={"vimosh02@gmail.com"}
                className="mr-[0.25rem] mt-[1.63rem] w-[72%] rounded-md border-[0.57px] px-[1.00rem] md:mr-0 sm:w-full"
              />
            </div>
            <div className="mr-[2.00rem] flex items-end justify-between gap-[1.25rem] self-stretch px-[0.75rem] md:mr-0 sm:flex-col">
              <Heading
                as="h6"
                className="mb-[0.88rem] text-[1.00rem] font-semibold text-gray-700"
              >
                Address
              </Heading>
              <Input
                shape="round"
                name="dropdown_five"
                placeholder={"No:29, Barathi Village, Colombo"}
                className="mr-[0.25rem] mt-[1.63rem] w-[72%] rounded-md border-[0.57px] px-[1.00rem] md:mr-0 sm:w-full"
              />
            </div>
            <div className="mr-[2.00rem] flex items-end justify-between gap-[1.25rem] self-stretch px-[0.75rem] md:mr-0 md:flex-col">
              <Heading
                as="h6"
                className="mb-[0.88rem] text-[1.00rem] font-semibold text-gray-700"
              >
                Contact Number
              </Heading>
              <Input
                shape="round"
                type="number"
                name="mobileNo"
                placeholder={"0767722120"}
                className="mr-[0.25rem] mt-[1.63rem] w-[72%] rounded-md border-[0.57px] px-[1.00rem] md:mr-0 md:w-full"
              />
            </div>
            <div className="mr-[2.00rem] flex items-end justify-between gap-[1.25rem] self-stretch px-[0.75rem] md:mr-0 md:flex-col">
              <Heading
                as="h6"
                className="mb-[0.88rem] text-[1.00rem] font-semibold text-gray-700"
              >
                Occupation
              </Heading>
              <Input
                shape="round"
                name="dropdown_seven"
                placeholder={"Student"}
                className="mr-[0.25rem] mt-[1.63rem] w-[72%] rounded-md border-[0.57px] px-[1.00rem] md:mr-0 md:w-full"
              />
            </div>
            <div className="mr-[2.00rem] flex items-end justify-between gap-[1.25rem] self-stretch px-[0.75rem] md:mr-0 md:flex-col">
              <Heading
                as="h6"
                className="mb-[0.88rem] text-[1.00rem] font-semibold text-gray-700"
              >
                Account Type
              </Heading>
              <SelectBox
                shape="round"
                indicator={
                  <Img
                    src="images/img_arrowdown.svg"
                    alt="Arrow Down"
                    className="h-[0.38rem] w-[0.63rem]"
                  />
                }
                name="dropdown_nine"
                placeholder={"Savings"}
                options={dropDownOptions}
                className="mr-[0.25rem] mt-[1.63rem] w-[72%] gap-[1.00rem] rounded-md border-[0.57px] border-solid border-blue_gray-200 font-semibold md:mr-0 md:w-full"
              />
            </div>
            <Button
              shape="round"
              color="blue_A200"
              className="mr-[3.13rem] mt-[2.13rem] min-w-[18.88rem] rounded-[10px] px-[2.13rem] font-sora md:mr-0 sm:px-[1.25rem]"
            >
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
