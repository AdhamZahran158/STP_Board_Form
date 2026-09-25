import TextField from './TextField.jsx'
import RadioField from './RadioField.jsx'
import SelectField from './SelectField.jsx'

const ACADEMIC_YEARS = [
  '1st year',
  '2nd year',
  '3rd year',
  '4th year',
  '5th year',
  'Graduate',
]

const COMMITTEES = [
  'Supply Chain',
  'DCR',
  'PR',
  'BD',
  'People & Culture (HR)',
  'QC',
  'Technical',
  'Mobile Application',
  'Frontend (Web)',
  'Backend',
  'Marketing',
  'Photography',
  'Video Editing',
  'Graphic Design',
]

export default function Step1PersonalInfo({ data, errors, onChange }) {
  return (
    <div>
      <TextField
        label="Name"
        required
        value={data.fullName}
        onChange={(val) => onChange('fullName', val)}
        error={errors.fullName}
        placeholder="Enter your full name"
      />

      <TextField
        label="Phone Number"
        required
        type="tel"
        value={data.phone}
        onChange={(val) => onChange('phone', val)}
        error={errors.phone}
        placeholder="e.g. 01012345678 or +201012345678"
      />

      <TextField
        label="Email"
        required
        type="email"
        value={data.email}
        onChange={(val) => onChange('email', val)}
        error={errors.email}
        placeholder="e.g. name@example.com"
      />

      <RadioField
        label="Gender"
        required
        name="gender"
        value={data.gender}
        onChange={(val) => onChange('gender', val)}
        error={errors.gender}
        options={['Male', 'Female']}
      />

      <TextField
        label="University"
        required
        value={data.university}
        onChange={(val) => onChange('university', val)}
        error={errors.university}
        placeholder="e.g. Cairo University"
      />

      <TextField
        label="Faculty"
        required
        value={data.faculty}
        onChange={(val) => onChange('faculty', val)}
        error={errors.faculty}
        placeholder="e.g. Engineering"
      />

      <SelectField
        label="Academic Year"
        required
        value={data.academicYear}
        onChange={(val) => onChange('academicYear', val)}
        error={errors.academicYear}
        options={ACADEMIC_YEARS}
      />

      <TextField
        label="LinkedIn Link"
        required
        type="url"
        value={data.linkedin}
        onChange={(val) => onChange('linkedin', val)}
        error={errors.linkedin}
        placeholder="https://www.linkedin.com/in/yourprofile"
      />

      <RadioField
        label="Have You been a part of STP before?"
        required
        name="beenInStpBefore"
        value={data.beenInStpBefore}
        onChange={(val) => onChange('beenInStpBefore', val)}
        error={errors.beenInStpBefore}
        options={['Yes', 'No']}
      />

      {data.beenInStpBefore === 'Yes' && (
        <>
          <TextField
            label="Previous Committee / Team (if applicable)"
            required
            value={data.previousCommitteeIfApplicable}
            onChange={(val) =>
              onChange('previousCommitteeIfApplicable', val)
            }
            error={errors.previousCommitteeIfApplicable}
            placeholder="e.g. Technical"
          />

          <TextField
            label="Previous Position / Role (if applicable)"
            required
            value={data.previousRoleIfApplicable}
            onChange={(val) =>
              onChange('previousRoleIfApplicable', val)
            }
            error={errors.previousRoleIfApplicable}
            placeholder="e.g. Member / Head"
          />
        </>
      )}

      <SelectField
        label="Choose the committee you're applying for"
        required
        value={data.appliedCommittee}
        onChange={(val) => onChange('appliedCommittee', val)}
        error={errors.appliedCommittee}
        options={COMMITTEES}
      />

      <RadioField
        label="Are you currently involved in any other student activities?"
        required
        name="involvedInOtherActivities"
        value={data.involvedInOtherActivities}
        onChange={(val) => onChange('involvedInOtherActivities', val)}
        error={errors.involvedInOtherActivities}
        options={['Yes', 'No']}
      />
    </div>
  )
}