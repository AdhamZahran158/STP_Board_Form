import React, { useState } from 'react';
import RecruitmentForm from './components/RecruitmentForm';
import SubmittedScreen from './components/SubmittedScreen';
import { schemas } from './validation/schemas';

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeCard, setActiveCard] = useState('banner');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const handleNext = async (validateForm, setTouched) => {
    const currentSchema = schemas[currentStep];
    const errors = await validateForm();
    const fieldsInCurrentStep = Object.keys(currentSchema.fields);
    const stepErrors = fieldsInCurrentStep.filter(field => errors[field]);

    if (stepErrors.length > 0) {
      const touchedObj = {};
      fieldsInCurrentStep.forEach(field => { touchedObj[field] = true; });
      setTouched(touchedObj, true);
      const firstErrField = stepErrors[0];
      const element = document.getElementsByName(firstErrField)[0];
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (currentStep < 2) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveCard('banner');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveCard('banner');
    }
  };

  const handleFormSubmit = async (values) => {
    setIsSubmitting(true);

    const formattedPayload = {
      applicantDetails: {
        fullName: values.fullName,
        phone: values.phone,
        email: values.email,
        gender: values.gender,
        university: values.university,
        faculty: values.faculty,
        academicYear: values.academicYear,
        linkedinProfile: values.linkedin,
      },
      stpAndCommitteeSelection: {
        beenInStpBefore: values.beenInStpBefore,
        previousCommitteeIfApplicable: values.previousCommitteeIfApplicable || null,
        previousRoleIfApplicable: values.previousRoleIfApplicable || null,
        appliedCommittee: values.appliedCommittee,
        currentlyInvolvedInOtherActivities: values.involvedInOtherActivities,
      },
      experienceAndLeadership: {
        hasCommitteeExperience: values.hasCommitteeExperience,
        committeeExperienceDetails: values.hasCommitteeExperience === 'Yes' ? values.committeeExperienceDetails : null,
        hasLedTeamBefore: values.hasLedTeamBefore,
        leadershipExperienceDetails: values.hasLedTeamBefore === 'Yes' ? values.leadershipExperienceDetails : null,
        whyInterested: values.whyInterested,
        strongestSkills: values.strongestSkills,
        visionForCommittee: values.visionForCommittee,
      },
      situationalResponses: {
        uncommittedMembersAction: values.uncommittedMembersAction,
        suddenDepartureAction: values.suddenDepartureAction,
        disagreementWithVpAction: values.disagreementWithVpAction,
        areaToImprove: values.areaToImprove,
        latestAchievement: values.latestAchievement,
        whyChooseYou: values.whyChooseYou,
        questionsForUs: values.questionsForUs || null,
      },
      meta: {
        submittedAt: new Date().toISOString(),
        formVersion: '2026.2',
        status: 'SUBMITTED',
      },
    };

    try {
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_BASE_URL}/api/applications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedPayload),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isSubmitted) {
    return (
      <SubmittedScreen
        isSuccess={isSuccess}
        onReset={() => {
          setIsSubmitted(false);
          if (isSuccess) {
            setCurrentStep(0);
          }
        }}
      />
    );
  }

  return (
    <RecruitmentForm
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      activeCard={activeCard}
      setActiveCard={setActiveCard}
      isSubmitting={isSubmitting}
      handleFormSubmit={handleFormSubmit}
      handleNext={handleNext}
      handleBack={handleBack}
    />
  );
}
