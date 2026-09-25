/**
 * Centralized questions for Step 2 and Step 3.
 *
 * Supported types:
 * - text
 * - textarea
 * - select
 * - radio
 *
 * showWhen:
 *   Optional conditional display rule.
 */

export const step2Questions = [
  {
    id: 'hasCommitteeExperience',
    label: 'Do you have any previous experience in the committee/role you are applying for?',
    type: 'radio',
    required: true,
    options: ['Yes', 'No'],
  },
  {
    id: 'committeeExperienceDetails',
    label: 'If yes, please tell us briefly about your experience.',
    type: 'textarea',
    required: true,
    placeholder: 'Answer in Arabic or English',
    showWhen: {
      field: 'hasCommitteeExperience',
      value: 'Yes',
    },
  },
  {
    id: 'hasLedTeamBefore',
    label: 'Have you led a team before? If yes, tell us briefly about your experience.',
    type: 'radio',
    required: true,
    options: ['Yes', 'No'],
  },
  {
    id: 'leadershipExperienceDetails',
    label: 'Tell us briefly about your leadership experience.',
    type: 'textarea',
    required: true,
    placeholder: 'Answer in Arabic or English',
    showWhen: {
      field: 'hasLedTeamBefore',
      value: 'Yes',
    },
  },
  {
    id: 'whyInterested',
    label: 'Why are you interested in this position?',
    type: 'textarea',
    required: true,
    placeholder: 'Answer in Arabic or English',
  },
  {
    id: 'strongestSkills',
    label: 'What are your strongest skills, and how can they help you in this role?',
    type: 'textarea',
    required: true,
    placeholder: 'Answer in Arabic or English',
  },
  {
    id: 'visionForCommittee',
    label: 'What is your vision for the committee during the upcoming season?',
    type: 'textarea',
    required: true,
    placeholder: 'Answer in Arabic or English',
  },
]

export const step3Questions = [
  {
    id: 'uncommittedMembersAction',
    label: 'Imagine you are responsible for a task, but your team is not helping enough. What would you do?',
    type: 'textarea',
    required: true,
    placeholder: 'Answer in Arabic or English',
  },
  {
    id: 'specialContribution',
    label: 'What is something special you can bring to the team?',
    type: 'textarea',
    required: true,
    placeholder: 'Answer in Arabic or English',
  },
  {
    id: 'creativeIdeas',
    label: 'How do you come up with new and creative ideas?',
    type: 'textarea',
    required: true,
    placeholder: 'Answer in Arabic or English',
  },
  {
    id: 'areaToImprove',
    label: 'What is one area you would like to improve in yourself?',
    type: 'textarea',
    required: true,
    placeholder: 'Answer in Arabic or English',
  },
  {
    id: 'latestAchievement',
    label: 'What is the latest achievement you are proud of?',
    type: 'textarea',
    required: true,
    placeholder: 'Answer in Arabic or English',
  },
  {
    id: 'whyChooseYou',
    label: 'Why should we choose you for this position, and what can you bring to the committee?',
    type: 'textarea',
    required: true,
    placeholder: 'Answer in Arabic or English',
  },
  {
    id: 'questionsForUs',
    label: 'Any Questions?',
    type: 'textarea',
    required: false,
    placeholder: 'Ask anything you would like to know.',
  },
]