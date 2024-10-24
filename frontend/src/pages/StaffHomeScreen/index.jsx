import { Helmet } from "react-helmet";
import { Text, Heading } from "../components";
import DepositSummary from "../components/DepositSummary";
import Sidebar1 from "../components/Sidebar1";
import UserProfileCard from "../../components/UserProfileCard";
import React, { Suspense } from "react";

const data = [
    {
        userName: "Arlene McCoy",
        userCompany: "The Walt Disney Company",
        date: "Mar 1, 2024",
        time: "08:00 AM",
        price: "LKR 1,546",
        priceFraction: ".12",
        downloadButtonText: "Download",
    },
    {
        userName: "Savannah Nguyen",
        userCompany: "Pizza Hut",
        date: "Mar 1, 2024",
        time: "08:00 AM",
        price: "LKR 1,546",
        priceFraction: ".12",
        downloadButtonText: "Download",
    },
    {
        userName: "Savannah Nguyen",
        userCompany: "Pizza Hut",
        date: "Mar 1, 2024",
        time: "08:00 AM",
        price: "LKR 1,546",
        priceFraction: ".12",
        downloadButtonText: "Download",
    },
    {
        userName: "Kristin Watson",
        userCompany: "Nintendo",
        date: "Mar 1, 2024",
        time: "08:00 AM",
        price: "LKR 1,546",
        priceFraction: ".12",
        downloadButtonText: "Download",
    },
    {
        userName: "Cameron Williamson",
        userCompany: "eBay",
        date: "Mar 1, 2024",
        time: "08:00 AM",
        price: "LKR 1,546",
        priceFraction: ".12",
        downloadButtonText: "Download",
    },
    {
        userName: "Jane Cooper",
        userCompany: "eBay",
        date: "Mar 1, 2024",
        time: "08:00 AM",
        price: "LKR 1,546",
        priceFraction: ".12",
        downloadButtonText: "Download",
    },
];

export default function StaffHomeScreenPage() {
    return (
      <>
        <Helmet>
          <title>Bank</title>
          <meta name="description" content="Web site created using create-react-app" />
        </Helmet>
        <div className="flex w-full items-start bg-main_color-white px-[2.00rem] sm:px-[1.25rem]">
          <Sidebar1 />
          <div className="flex flex-1 flex-col gap-[3.63rem] px-[1.75rem] sm:gap-[1.81rem] sm:px-[1.25rem]">
            <div className="mr-[2.50rem] flex items-center gap-[1.75rem] md:mr-0 md:flex-col">
              <div className="flex w-[44%] flex-col gap-[1.25rem] md:w-full">
                <DepositSummary />
                <DepositSummary totalDepositsText="Total Withdrawals" />
              </div>
              <div className="flex flex-1 flex-col items-center gap-[3.38rem] rounded-[16px] border border-solid border-greyscale-grey_200 p-[2.63rem] md:self-stretch md:p-[1.25rem] sm:gap-[1.69rem]">
                <div className="mx-[1.13rem] flex w-[90%] items-start justify-center md:mx-0 md:w-full">
                  <div className="flex flex-1 flex-col items-start gap-[0.50rem] self-center">
                    <Heading
                      size="headingmd"
                      as="h1"
                      className="font-poppins text-[1.25rem] font-semibold text-main_color-black"
                    >
                      Summary
                    </Heading>
                    <Text as="p" className="font-poppins text-[1.00rem] font-normal text-greyscale-grey_500">
                      13 August, 2024
                    </Text>
                  </div>
                  <Heading
                    size="headingxs"
                    as="h2"
                    className="mt-[-0.25rem] font-poppins text-[0.88rem] font-semibold text-main_color-primary"
                  >
                    View report
                  </Heading>
                </div>
                <div className="mb-[1.00rem] flex w-[92%] justify-between gap-[1.25rem] md:w-full">
                  <div className="flex w-[18%] items-start justify-center gap-[0.75rem]">
                    <div className="h-[3.50rem] w-[0.25rem] rounded-sm bg-green-500" />
                    <div className="flex flex-1 flex-col items-start self-center">
                      <Text
                        size="textxs"
                        as="p"
                        className="font-poppins text-[0.88rem] font-normal tracking-[0.00rem] text-greyscale-grey_500"
                      >
                        Deposits
                      </Text>
                      <Heading
                        size="textxl"
                        as="h3"
                        className="font-poppins text-[1.50rem] font-medium tracking-[0.00rem] text-main_color-black md:text-[1.38rem]"
                      >
                        03
                      </Heading>
                    </div>
                  </div>
                  <div className="flex w-[24%] items-start justify-center gap-[0.75rem]">
                    <div className="h-[3.50rem] w-[0.25rem] rounded-sm bg-red-700" />
                    <div className="flex flex-1 flex-col items-start self-center">
                      <Text
                        size="textxs"
                        as="p"
                        className="font-poppins text-[0.88rem] font-normal tracking-[0.00rem] text-greyscale-grey_500"
                      >
                        Withdrawals
                      </Text>
                      <Heading
                        size="textxl"
                        as="h4"
                        className="font-poppins text-[1.50rem] font-medium tracking-[0.00rem] text-main_color-black md:text-[1.38rem]"
                      >
                        04
                      </Heading>
                    </div>
                  </div>
                  <div className="flex w-[14%] items-start justify-center gap-[0.75rem]">
                    <div className="h-[3.50rem] w-[0.25rem] rounded-sm bg-main_color-primary" />
                    <div className="flex flex-1 flex-col items-start self-center">
                      <Text
                        size="textxs"
                        as="p"
                        className="font-poppins text-[0.88rem] font-normal tracking-[0.00rem] text-greyscale-grey_500"
                      >
                        Loans
                      </Text>
                      <Heading
                        size="textxl"
                        as="h5"
                        className="font-poppins text-[1.50rem] font-medium tracking-[0.00rem] text-main_color-black md:text-[1.38rem]"
                      >
                        01
                      </Heading>
                    </div>
                  </div>
                  <div className="flex w-[10%] items-start justify-center gap-[0.75rem]">
                    <div className="h-[3.50rem] w-[0.25rem] rounded-sm bg-yellow-800" />
                    <div className="flex flex-1 flex-col items-center self-center">
                      <Text
                        size="textxs"
                        as="p"
                        className="font-poppins text-[0.88rem] font-normal tracking-[0.00rem] text-greyscale-grey_500"
                      >
                        FDS
                      </Text>
                      <Heading
                        size="textxl"
                        as="h6"
                        className="font-poppins text-[1.50rem] font-medium tracking-[0.00rem] text-main_color-black md:text-[1.38rem]"
                      >
                        01
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mr-[2.50rem] md:mr-0">
              <div className="flex flex-col gap-[1.50rem] rounded-[16px] border border-solid border-greyscale-grey_200 bg-main_color-white p-[1.50rem] sm:p-[1.25rem]">
                <div className="flex flex-wrap items-center justify-between gap-[1.25rem]">
                  <Heading
                    size="textlg"
                    as="h2"
                    className="font-poppins text-[1.25rem] font-medium text-main_color-black"
                  >
                    Transaction History
                  </Heading>
                  <a href="#">
                    <Text
                      size="textxs"
                      as="p"
                      className="font-poppins text-[0.88rem] font-medium text-main_color-primary"
                    >
                      See All
                    </Text>
                  </a>
                </div>
                <div className="flex flex-col gap-[1.25rem]">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                      <UserProfileCard {...d} key={"content" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }