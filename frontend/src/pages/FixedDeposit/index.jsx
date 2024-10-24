import React, { useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import { Button, Switch, Heading, Input, Img } from "../../components";
import Sidebar from "../../components/StaffSideMenuBar";

const dropDownOptions = [
  { label: "6 months", value: "6" },
  { label: "12 months", value: "12" },
  { label: "24 months", value: "24" },
];

const maturityOptions = [
  { label: "Monthly", value: "monthly" },
  { label: "Quarterly", value: "quarterly" },
  { label: "Annually", value: "annually" },
];

const FormField = ({ label, children, error }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full mb-6">
    <label className="text-base font-semibold text-gray-700 w-full sm:w-1/3">
      {label}
    </label>
    <div className="w-full sm:w-2/3">
      {children}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  </div>
);

export default function FixedDepositPage() {
  const [formData, setFormData] = useState({
    accountNumber: "",
    nicNo: "",
    depositAmount: "",
    depositPeriod: "",
    depositMaturity: "",
    interestEarned: "",
  });
  const [errors, setErrors] = useState({});
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  }, []);

  const handleSelectChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  }, []);

  const calculateInterest = useCallback(() => {
    const amount = parseFloat(formData.depositAmount);
    const period = parseInt(formData.depositPeriod);
    if (amount && period) {
      const interest = (amount * 0.125 * period / 12).toFixed(2);
      setFormData(prev => ({ ...prev, interestEarned: interest }));
    }
  }, [formData.depositAmount, formData.depositPeriod]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });
    if (!acceptedTerms) {
      newErrors.terms = "You must accept the terms and conditions";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your backend
    }
  }, [formData, acceptedTerms]);

  return (
    <>
      <Helmet>
        <title>Bank - Fixed Deposit</title>
        <meta name="description" content="Fixed Deposit page for bank staff" />
      </Helmet>
      <div className="flex w-full items-start bg-white px-8 sm:px-5">
        <Sidebar className="self-center" />
        <main className="flex-1 mt-24 px-12 md:px-5">
          <Heading
            size="headinglg"
            as="h1"
            className="text-2xl font-extrabold text-black-900 md:text-[1.38rem] mb-4"
          >
            Fixed Deposit
          </Heading>
          <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto rounded-[20px] border border-solid border-gray-300 p-6 space-y-6">
            <FormField label="Account Number" error={errors.accountNumber}>
              <Input
                shape="round"
                type="text"
                name="accountNumber"
                placeholder="8011739261"
                className="w-full rounded-md border-[0.57px] px-4"
                value={formData.accountNumber}
                onChange={handleInputChange}
              />
            </FormField>
            <FormField label="NIC NO" error={errors.nicNo}>
              <Input
                shape="round"
                type="text"
                name="nicNo"
                placeholder="200222500189"
                className="w-full rounded-md border-[0.57px] px-4"
                value={formData.nicNo}
                onChange={handleInputChange}
              />
            </FormField>
            <FormField label="Deposit Amount" error={errors.depositAmount}>
              <Input
                shape="round"
                name="depositAmount"
                type="number"
                placeholder="400000.00"
                className="w-full rounded-md border-[0.57px] px-4"
                value={formData.depositAmount}
                onChange={handleInputChange}
                onBlur={calculateInterest}
              />
            </FormField>
            <FormField label="Deposit Period" error={errors.depositPeriod}>
              <div className="relative">
                <select
                  name="depositPeriod"
                  className="w-full gap-4 rounded-md border-[0.57px] border-solid border-blue_gray-200 font-semibold px-4 py-2 appearance-none"
                  value={formData.depositPeriod}
                  onChange={handleSelectChange}
                  onBlur={calculateInterest}
                >
                  <option value="">Select period</option>
                  {dropDownOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <Img
                  src="images/img_shape.svg"
                  alt="Shape"
                  className="h-[0.38rem] w-[0.50rem] absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                />
              </div>
            </FormField>
            <FormField label="Deposit Maturity" error={errors.depositMaturity}>
              <div className="relative">
                <select
                  name="depositMaturity"
                  className="w-full gap-4 rounded-md border-[0.57px] border-solid border-blue_gray-200 font-semibold px-4 py-2 appearance-none"
                  value={formData.depositMaturity}
                  onChange={handleSelectChange}
                >
                  <option value="">Select maturity</option>
                  {maturityOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <Img
                  src="images/img_shape.svg"
                  alt="Shape"
                  className="h-[0.38rem] w-[0.50rem] absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                />
              </div>
            </FormField>
            <FormField label="Interest Rate">
              <Heading size="headingxs" as="p" className="text-sm font-semibold text-gray-700">
                12.5 % (Annually)
              </Heading>
            </FormField>
            <FormField label="Interest Earned" error={errors.interestEarned}>
              <Input
                shape="round"
                name="interestEarned"
                placeholder="50,000.00"
                className="w-full rounded-md border-[0.57px] px-4"
                value={formData.interestEarned}
                readOnly
              />
            </FormField>
            <div className="flex items-center gap-4 justify-end">
              <Heading size="headingxs" as="p" className="text-sm font-semibold text-gray-700">
                Please Accept the terms and conditions
              </Heading>
              <Switch
                checked={acceptedTerms}
                onChange={() => setAcceptedTerms(prev => !prev)}
              />
            </div>
            {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
            <div className="flex justify-end mt-8">
              <Button
                type="submit"
                shape="round"
                color="blue_A200_cyan_A700"
                className="min-w-[18.88rem] rounded-[10px] px-8 py-3 font-sora"
              >
                Confirm Deposit
              </Button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}