import { useState } from 'react'
import Header from './components/Header.jsx'
import StepIndicator from './components/StepIndicator.jsx'
import Step1PersonalInfo from './components/Step1PersonalInfo.jsx'
import DynamicQuestionStep from './components/DynamicQuestionStep.jsx'
import NavButtons from './components/NavButtons.jsx'
import SuccessScreen from './components/SuccessScreen.jsx'

import { step2Questions, step3Questions } from './data/questions.js'

import {
  schemas,
  validateStep,
  hasErrors,
} from './utils/validation.js'

const INITIAL_STEP1 = {
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
}

export default function App() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionSuccess, setSubmissionSuccess] = useState(true)

  const [step1Data, setStep1Data] = useState(INITIAL_STEP1)
  const [step2Data, setStep2Data] = useState({})
  const [step3Data, setStep3Data] = useState({})

  const [errors, setErrors] = useState({})

  function updateStep1(field, value) {
    setStep1Data((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  function updateStep2(field, value) {
    setStep2Data((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  function updateStep3(field, value) {
    setStep3Data((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  async function handleNext() {
    let schema
    let data

    if (step === 1) {
      schema = schemas[0]
      data = step1Data
    }

    if (step === 2) {
      schema = schemas[1]
      data = step2Data
    }

    if (step === 3) {
      schema = schemas[2]
      data = step3Data
    }

    const stepErrors = await validateStep(schema, data)

    setErrors(stepErrors)

    if (hasErrors(stepErrors)) {
      // Scroll to the first invalid field
      const firstErrorField = Object.keys(stepErrors)[0]

      const element = document.querySelector(
        `[name="${firstErrorField}"]`,
      )

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }

      return
    }

    setErrors({})

    if (step < 3) {
      setStep((current) => current + 1)

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      await submitApplication()
    }
  }

  function handleBack() {
    setErrors({})

    setStep((current) => Math.max(1, current - 1))

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  async function submitApplication() {
    setIsSubmitting(true)
    setSubmissionSuccess(true)

    const fullSubmission = {
      ...step1Data,
      ...step2Data,
      ...step3Data,
    }

    const formattedPayload = {
      applicantDetails: {
        fullName: fullSubmission.fullName,
        phone: fullSubmission.phone,
        email: fullSubmission.email,
        gender: fullSubmission.gender,
        university: fullSubmission.university,
        faculty: fullSubmission.faculty,
        academicYear: fullSubmission.academicYear,
        linkedinProfile: fullSubmission.linkedin,
      },

      stpAndCommitteeSelection: {
        beenInStpBefore: fullSubmission.beenInStpBefore,
        previousCommitteeIfApplicable:
          fullSubmission.previousCommitteeIfApplicable || null,
        previousRoleIfApplicable:
          fullSubmission.previousRoleIfApplicable || null,
        appliedCommittee: fullSubmission.appliedCommittee,
        currentlyInvolvedInOtherActivities:
          fullSubmission.involvedInOtherActivities,
      },

      experienceAndLeadership: {
        hasCommitteeExperience:
          fullSubmission.hasCommitteeExperience,

        committeeExperienceDetails:
          fullSubmission.hasCommitteeExperience === 'Yes'
            ? fullSubmission.committeeExperienceDetails
            : null,

        hasLedTeamBefore:
          fullSubmission.hasLedTeamBefore,

        leadershipExperienceDetails:
          fullSubmission.hasLedTeamBefore === 'Yes'
            ? fullSubmission.leadershipExperienceDetails
            : null,

        whyInterested:
          fullSubmission.whyInterested,

        strongestSkills:
          fullSubmission.strongestSkills,

        visionForCommittee:
          fullSubmission.visionForCommittee,
      },

      situationalResponses: {
        uncommittedMembersAction:
          fullSubmission.uncommittedMembersAction,

        specialContribution:
          fullSubmission.specialContribution,

        creativeIdeas:
          fullSubmission.creativeIdeas,

        areaToImprove:
          fullSubmission.areaToImprove,

        latestAchievement:
          fullSubmission.latestAchievement,

        whyChooseYou:
          fullSubmission.whyChooseYou,

        questionsForUs:
          fullSubmission.questionsForUs || null,
      },

      meta: {
        submittedAt: new Date().toISOString(),
        formVersion: '2026.2',
        status: 'SUBMITTED',
      },
    }

    try {
      const API_BASE_URL =
        import.meta.env.VITE_API_URL ||
        'http://localhost:5000'

      const response = await fetch(
        `${API_BASE_URL}/api/applications`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formattedPayload),
        },
      )

      const resData = await response.json()

      if (response.ok && resData.success) {
        setSubmissionSuccess(true)
      } else {
        console.error('Backend submission failed:', resData)
        setSubmissionSuccess(false)
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmissionSuccess(false)
    } finally {
      setIsSubmitting(false)
      setSubmitted(true)

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  function handleRestart() {
    setStep1Data(INITIAL_STEP1)
    setStep2Data({})
    setStep3Data({})
    setErrors({})
    setStep(1)
    setSubmitted(false)
    setSubmissionSuccess(true)
  }

  if (submitted) {
    return (
      <div className="app-container">
        <Header />

        <div className="form-card">
          <SuccessScreen
            fullName={step1Data.fullName}
            isSuccess={submissionSuccess}
            onRestart={handleRestart}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="app-container">
      <Header />

      <div className="form-card">
        {isSubmitting ? (
          <div className="success-wrap">
            <div className="success-icon">...</div>

            <h2>Submitting your application</h2>

            <p>
              Please wait while we save your application.
            </p>
          </div>
        ) : (
          <>
            <StepIndicator currentStep={step} />

            {step === 1 && (
              <Step1PersonalInfo
                data={step1Data}
                errors={errors}
                onChange={updateStep1}
              />
            )}

            {step === 2 && (
              <DynamicQuestionStep
                questions={step2Questions}
                answers={step2Data}
                errors={errors}
                onChange={updateStep2}
              />
            )}

            {step === 3 && (
              <DynamicQuestionStep
                questions={step3Questions}
                answers={step3Data}
                errors={errors}
                onChange={updateStep3}
              />
            )}

            <NavButtons
              step={step}
              onBack={handleBack}
              onNext={handleNext}
              isLastStep={step === 3}
            />
          </>
        )}
      </div>
    </div>
  )
}