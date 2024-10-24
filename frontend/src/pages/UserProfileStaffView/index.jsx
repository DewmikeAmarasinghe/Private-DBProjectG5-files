import { Helmet } from "react-helmet";
import { Input, Heading } from "../../components";
import Sidebar6 from "../../components/Sidebar6";
import React from "react";

export default function UserProfileStaffViewPage() {
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
        <Sidebar6 />
        <div className="mt-[6.38rem] flex flex-1 flex-col items-start gap-[2.13rem]">
          <Heading
            size="headinglg"
            as="h1"
            className="text-[1.50rem] font-extrabold text-black-900 md:text-[1.38rem]"
          >
            User Profile
          </Heading>
          <div className="flex w-[76%] flex-col items-center rounded-[20px] border border-solid border-gray-300 p-[2.88rem] md:w-full">
            <div className="mr-[1.00rem] flex w-[88%] items-end justify-between gap-[1.25rem] px-[0.75rem] md:mr-0 md:w-full sm:flex-col">
              <Heading
                as="h2"
                className="mb-[0.88rem] text-[1.00rem] font-semibold text-gray-700"
              >
                Username
              </Heading>
              <Input
                shape="round"
                name="dropdown_one"
                placeholder={"VIMOSH VASANTHAKUMAR"}
                className="mr-[0.25rem] mt-[1.63rem] w-[72%] rounded-md border-[0.57px] px-[1.00rem] md:mr-0 sm:w-full"
              />
            </div>
            <div className="ml-[0.75rem] mr-[2.13rem] mt-[1.63rem] flex w-[86%] items-start justify-between gap-[1.25rem] md:mx-0 md:w-full md:flex-col">
              <Heading
                as="h3"
                className="mt-[0.50rem] text-[1.00rem] font-semibold text-gray-700"
              >
                Account Number
              </Heading>
              <Input
                shape="round"
                type="number"
                name="mobileNo"
                placeholder={"8011734567"}
                className="w-[72%] self-center rounded-md border-[0.57px] px-[1.00rem] md:w-full"
              />
            </div>
            <div className="ml-[0.75rem] mr-[2.13rem] mt-[1.63rem] flex w-[86%] items-start justify-between gap-[1.25rem] md:mx-0 md:w-full sm:flex-col">
              <Heading
                as="h4"
                className="mt-[0.50rem] text-[1.00rem] font-semibold text-gray-780"
              >
                NIC Number
              </Heading>
              <Input
                shape="round"
                type="number"
                name="dropdown_three"
                placeholder={"200222600786"}
                className="w-[72%] self-center rounded-md border-[0.57px] px-[1.00rem] sm:w-full"
              />
            </div>
            <div className="mr-[1.00rem] flex w-[88%] items-end justify-between gap-[1.25rem] px-[0.75rem] md:mr-0 md:w-full sm:flex-col">
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
            <div className="mb-[2.38rem] ml-[0.75rem] mr-[2.13rem] mt-[1.63rem] flex w-[86%] items-start justify-between gap-[1.25rem] md:mx-0 md:w-full sm:flex-col">
              <Heading
                as="h6"
                className="mt-[0.50rem] text-[1.00rem] font-semibold text-gray-700"
              >
                Address
              </Heading>
              <Input
                shape="round"
                name="dropdown_five"
                placeholder={"No:29, Barathi Village, Colombo"}
                className="w-[72%] self-center rounded-md border-[0.57px] px-[1.00rem] sm:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
