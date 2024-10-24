import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Heading, Img } from "../../components"; // Ensure these imports are correct
import Sidebar from "../../components/StaffSideMenuBar"; // Make sure Sidebar is correctly imported

const dropDownOptions = [
  { label: "Salary Payment", value: "salary_payment" },
  { label: "Loan Repayment", value: "loan_repayment" },
  { label: "Business Transaction", value: "business_transaction" },
  { label: "Gift", value: "gift" },
  { label: "Charity Donation", value: "charity_donation" },
];

export default function BankTransferPage() {
  const [formData, setFormData] = useState({
    fromAccount: "",
    toAccount: "",
    date: "",
    amount: "",
    purposeOfPayment: "",
    senderDescription: "",
    beneficiaryComment: "",
  });

  const [errors, setErrors] = useState({
    fromAccount: "",
    toAccount: "",
  });

  // Regex pattern for 10-digit account number
  const accountNumberPattern = /^[0-9]{10}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate account number format for 'fromAccount' and 'toAccount'
    if (name === "fromAccount") {
      if (!accountNumberPattern.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          fromAccount: "Account number must be exactly 10 digits.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          fromAccount: "",
        }));
      }
    } else if (name === "toAccount") {
      if (!accountNumberPattern.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          toAccount: "Account number must be exactly 10 digits.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          toAccount: "",
        }));
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation before submission
    if (!accountNumberPattern.test(formData.fromAccount)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fromAccount: "Account number must be exactly 10 digits.",
      }));
      return;
    }

    if (!accountNumberPattern.test(formData.toAccount)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        toAccount: "Account number must be exactly 10 digits.",
      }));
      return;
    }

    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <>
      <Helmet>
        <title>Bank Transfer - DBS Bank</title>
        <meta
          name="description"
          content="Securely transfer funds between accounts with DBS Bank's online banking service."
        />
      </Helmet>
      <div className="flex w-full min-h-screen bg-main_color-white">
        <Sidebar /> {/* Ensure Sidebar renders correctly */}
        <main className="flex-1 p-8">
          <Heading
            size="headinglg"
            as="h1"
            className="text-[1.75rem] font-extrabold text-black-900 md:text-[1.63rem] mb-6"
          >
            Bank Transfer
          </Heading>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-6 rounded-[20px] border border-solid border-gray-300 p-6 md:p-4">
              <div className="space-y-4">
                <div>
                  <Heading size="headingxs" as="h2" className="mb-2 text-[1rem] font-semibold text-gray-700">
                    From
                  </Heading>
                  <input
                    color="gray_50"
                    shape="round"
                    type="text"
                    name="fromAccount"
                    placeholder="8022239456"
                    className="w-full rounded-md border-[0.57px] px-4"
                    value={formData.fromAccount}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.fromAccount && (
                    <p className="text-red-500 text-xs mt-1">{errors.fromAccount}</p>
                  )}
                </div>
                <div>
                  <Heading size="headingxs" as="h3" className="mb-2 text-[1rem] font-semibold text-gray-700">
                    To Account Number
                  </Heading>
                  <input
                    shape="round"
                    type="text"
                    name="toAccount"
                    placeholder="Account Number"
                    className="w-full rounded-md border-[0.57px] px-4"
                    value={formData.toAccount}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.toAccount && (
                    <p className="text-red-500 text-xs mt-1">{errors.toAccount}</p>
                  )}
                </div>
              </div>
              <div className="flex gap-6 md:flex-col">
                <div className="flex-1">
                  <Heading size="headingxs" as="h4" className="mb-2 text-[1rem] font-semibold text-gray-700">
                    Date
                  </Heading>
                  <input
                    color="gray_50"
                    shape="round"
                    type="date"
                    name="date"
                    className="w-full rounded-md border-[0.57px] px-4"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex-1">
                  <Heading size="headingxs" as="h5" className="mb-2 text-[1rem] font-semibold text-gray-700">
                    Amount
                  </Heading>
                  <input
                    shape="round"
                    type="number"
                    name="amount"
                    placeholder="10000"
                    className="w-full rounded-md border-[0.57px] px-4"
                    value={formData.amount}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex gap-6 md:flex-col">
                <div className="flex-1">
                  <Heading size="headingxs" as="h6" className="mb-2 text-[1rem] font-semibold text-gray-700">
                    Purpose of Payment
                  </Heading>
                  <select
                    name="purposeOfPayment"
                    className="w-full rounded-md border-[0.57px] border-solid border-blue_gray-200 bg-gray-50 px-4 py-2 font-normal text-gray-700"
                    value={formData.purposeOfPayment}
                    onChange={handleInputChange}
                  >
                    <option value="" className="font-normal">
                      Select Purpose
                    </option>
                    {dropDownOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <Heading size="headingxs" as="p" className="mb-2 text-[1rem] font-semibold text-gray-700">
                    Sender's Account Description
                  </Heading>
                  <input
                    shape="round"
                    name="senderDescription"
                    placeholder="Project Ongoing"
                    className="w-full rounded-md border-[0.57px] px-4"
                    value={formData.senderDescription}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <Heading size="headingxs" as="p" className="mb-2 text-[1rem] font-semibold text-gray-700">
                  Beneficiary Comment
                </Heading>
                <input
                  color="gray_50"
                  shape="round"
                  name="beneficiaryComment"
                  placeholder="Database Project"
                  className="w-full md:w-1/2 rounded-md border-[0.57px] px-4"
                  value={formData.beneficiaryComment}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                shape="round"
                color="blue_A200_cyan_A700"
                className="min-w-[18.88rem] rounded-[10px] px-8 py-3 font-sora text-[14px] text-white sm:px-6"
                style={{
                  background: "linear-gradient(90deg, #3e79e5, #01b8e3)",
                  textTransform: "none"
                }}
              >
                Confirm Transfer
              </Button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
