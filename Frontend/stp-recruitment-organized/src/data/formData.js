export const PHONE_REGEX = /^(0\d{10}|\+20\d{10})$/;
export const LINKEDIN_REGEX = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;

export const committeeOptions = [
  'Supply Chain',
  'DCR',
  'PR',
  'BD',
  'People & Culture (HR)',
  'QC',
  'Technical',
  'Frontend for Mobile Applications',
  'Frontend for Websites',
  'Backend',
  'Marketing',
  'Photography',
  'Editing',
];

export const sectionTitles = [
  'Personal & Academic Information',
  'Experience & Leadership',
  'Situational & Personal Assessment',
];

export const totalSteps = 3;

export const initialValues = {
  // Section 1
  fullName: '',
  phone: '',
  email: '',
  gender: '',
  university: '',
  faculty: '',
  academicYear: '',
  linkedin: '',
  beenInStpBefore: '',
  previousCommitteeIfApplicable: '',
  previousRoleIfApplicable: '',
  appliedCommittee: '',
  involvedInOtherActivities: '',
  // Section 2
  hasCommitteeExperience: '',
  committeeExperienceDetails: '',
  hasLedTeamBefore: '',
  leadershipExperienceDetails: '',
  whyInterested: '',
  strongestSkills: '',
  visionForCommittee: '',
  // Section 3
  uncommittedMembersAction: '',
  suddenDepartureAction: '',
  disagreementWithVpAction: '',
  areaToImprove: '',
  latestAchievement: '',
  whyChooseYou: '',
  questionsForUs: ''
};
