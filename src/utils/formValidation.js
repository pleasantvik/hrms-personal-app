/* eslint-disable no-shadow */
import { differenceInYears } from "date-fns";
import * as Yup from "yup";

export const emailPattern =
  // eslint-disable-next-line max-len
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const name = {
  maxLength: {
    value: 20,
    message: "The maximum length is 20",
  },
  minLength: {
    value: 2,
    message: "The minimum length is 2",
  },
};

const email = {
  validate: (email) => {
    if (!email) return null;

    if (!email.match(emailPattern)) return "Enter a valid email address";

    const blacklistedDomains = ["gool"];
    const domain = email.substring(
      email.indexOf("@") + 1,
      email.lastIndexOf(".")
    );
    const isInvalidBusinessEmail = blacklistedDomains.includes(domain);

    return isInvalidBusinessEmail
      ? "Enter a valid business email address"
      : null;
  },
};

const organizationName = {
  minLength: {
    value: 2,
    message: "Organization name is too short",
  },
};

const jobTitle = {
  minLength: {
    value: 2,
    message: "Job Title name is too short",
  },
};

const password = {
  validate: {
    hasAnUppercase: (value) =>
      value.match(/[A-Z]/)
        ? null
        : "Password should contain an uppercase character",
    hasLowercase: (value) =>
      value.match(/[a-z]/)
        ? null
        : "Password should contain a lowercase character",
    hasNumber: (value) =>
      value.match(/[0-9]/)
        ? null
        : "Password should contain at least one number",
    hasEightOrMoreCharacters: (value) =>
      value.length > 8
        ? null
        : "Password should be of eight or more characters",
  },
};

const validator = {
  firstName: name,
  lastName: name,
  email,
  organizationName,
  organizationId: organizationName,
  departmentId: organizationName,
  jobGradeId: organizationName,
  employmentCategory: organizationName,
  divisionId: organizationName,
  password,
  workEmail: email,
  jobTitle,
  employeeStatus: organizationName,
  lineManagerId: organizationName,
  middleName: organizationName,
  contactAddress: organizationName,
  permanentAddress: organizationName,
  dateOfBirth: Yup.string()
    .required("Date of birth is Required")
    .test("dateOfBirth", "Please choose a valid date of birth", (value) => {
      return differenceInYears(new Date(), new Date(value)) >= 19;
    }),
};

const errMsgMap = {
  firstName: "First name is required",
  lastName: "Last name is required",
  email: "Email is required",
  organizationName: "Organization name is required",
  organizationId: "Organization Id is required",
  departmentId: "Department Id is required",
  password: "Password is required",
  workEmail: "Work email is required",
  jobTitle: "Job title is required",
  divisionId: "division id is required",
  employmentCategory: "Employment Category is requird",
  employeeStatus: "Employee Status is required",
  lineManagerId: "Line Manager is required",
  middleName: "Middle Name is required",
  contactAddress: "Contact address is required",
  permanentAddress: "Permanent address is required",
  dateOfBirth: "Date of birth is required",
};

const requiredFields = (fields) => {
  const rules = {};

  fields.forEach((field) => {
    rules[field] = validator[field];
    rules[field].required = errMsgMap[field];
  });

  return rules;
};

const optionalFields = (fields) => {
  const rules = {};

  fields.forEach((field) => {
    rules[field] = validator[field];
    rules[field].required = false;
  });
  return rules;
};

export { requiredFields, optionalFields };
