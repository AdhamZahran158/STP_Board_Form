import * as Yup from 'yup';
import { PHONE_REGEX, LINKEDIN_REGEX } from '../data/formData';

export const section1Schema = Yup.object().shape({
  fullName: Yup.string().trim().required('Full Name is required'),
  phone: Yup.string()
    .trim()
    .required('Phone Number is required')
    .matches(PHONE_REGEX, 'Phone number must start with 0 (11 digits e.g. 01012345678) or +20 (e.g. +201012345678)'),
  email: Yup.string()
    .trim()
    .required('Email address is required')
    .email('Please enter a valid email address'),
  gender: Yup.string().required('Please select your gender'),
  university: Yup.string().trim().required('University name is required'),
  faculty: Yup.string().trim().required('Faculty name is required'),
  academicYear: Yup.string().required('Please select your academic year'),
  linkedin: Yup.string()
    .trim()
    .required('LinkedIn profile URL is required')
    .matches(LINKEDIN_REGEX, 'Please enter a valid LinkedIn URL (e.g. https://www.linkedin.com/in/yourprofile)'),
  beenInStpBefore: Yup.string().required('Please select Yes or No'),
  previousCommitteeIfApplicable: Yup.string().trim().notRequired(),
  previousRoleIfApplicable: Yup.string().trim().notRequired(),
  appliedCommittee: Yup.string().required('Please select the committee you are applying for'),
  involvedInOtherActivities: Yup.string().required('Please select Yes or No'),
});

export const section2Schema = Yup.object().shape({
  hasCommitteeExperience: Yup.string().required('This is a required question'),
  committeeExperienceDetails: Yup.string().when('hasCommitteeExperience', {
    is: 'Yes',
    then: (schema) => schema.trim().required('Please describe your previous experience'),
    otherwise: (schema) => schema.notRequired(),
  }),
  hasLedTeamBefore: Yup.string().required('This is a required question'),
  leadershipExperienceDetails: Yup.string().when('hasLedTeamBefore', {
    is: 'Yes',
    then: (schema) => schema.trim().required('Please describe your leadership experience'),
    otherwise: (schema) => schema.notRequired(),
  }),
  whyInterested: Yup.string().trim().required('This is a required question'),
  strongestSkills: Yup.string().trim().required('This is a required question'),
  visionForCommittee: Yup.string().trim().required('This is a required question'),
});

export const section3Schema = Yup.object().shape({
  uncommittedMembersAction: Yup.string().trim().required('This is a required question'),
  suddenDepartureAction: Yup.string().trim().required('This is a required question'),
  disagreementWithVpAction: Yup.string().trim().required('This is a required question'),
  areaToImprove: Yup.string().trim().required('This is a required question'),
  latestAchievement: Yup.string().trim().required('This is a required question'),
  whyChooseYou: Yup.string().trim().required('This is a required question'),
  questionsForUs: Yup.string().trim().notRequired(),
});

export const schemas = [section1Schema, section2Schema, section3Schema];
