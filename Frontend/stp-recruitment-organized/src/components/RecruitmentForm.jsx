import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { 
  AlertCircle, 
  Send, 
  ArrowRight, 
  ArrowLeft, 
  User, 
  Phone, 
  Mail, 
  GraduationCap, 
  Linkedin, 
  Briefcase, 
  Award, 
  HelpCircle, 
  MessageSquare,
  Users,
  Target,
  Flame,
  FileText
} from 'lucide-react';
import { schemas } from '../validation/schemas';
import { initialValues, committeeOptions, sectionTitles, totalSteps } from '../data/formData';
import Loader from './Loader';
import AnimatedLogoFrame from './AnimatedLogoFrame';

export default function RecruitmentForm({
  currentStep,
  setCurrentStep,
  activeCard,
  setActiveCard,
  isSubmitting,
  handleFormSubmit,
  handleNext,
  handleBack,
}) {

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-3 sm:px-4 font-sans text-slate-900 selection:bg-[#BA1616] selection:text-white">
      <div className="max-w-2xl mx-auto space-y-6">

        {/* Header Card with Spinning Background SVG Logo Frame & #BA1616 Styling */}
        <div 
          onClick={() => setActiveCard('banner')}
          className="form-container p-6 sm:p-8"
        >
          {/* Animated Background SVG Frame with Centered STP Logo */}
          <AnimatedLogoFrame />

          <div className="title-section justify-center text-center">
            <h1 className="title">STP Board Application</h1>
          </div>
          
          <p className="text-sm text-slate-600 mb-6 font-medium text-center">
            Steps Towards Progress — Official Season Board Recruitment Application
          </p>

          {/* Progress Bar in #BA1616 */}
          <div className="pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
              <span>Section {currentStep + 1} of {totalSteps}: <strong className="text-[#BA1616]">{sectionTitles[currentStep]}</strong></span>
              <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div 
                className="h-full bg-gradient-to-r from-[#921111] to-[#BA1616] transition-all duration-300 ease-out shadow-sm" 
                style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mt-4 text-xs text-[#BA1616] font-semibold flex items-center justify-center gap-1">
            <span>* Indicates required question</span>
          </div>
        </div>

        {/* Loading overlay when submitting */}
        {isSubmitting ? (
          <div className="form-container p-12 text-center">
            <Loader text="STP" />
            <p className="text-sm text-slate-600 mt-6 font-semibold animate-pulse">
              Submitting your application...
            </p>
          </div>
        ) : (
          /* Formik Multi-Section Wrapper */
          <Formik
            initialValues={initialValues}
            validationSchema={schemas[currentStep]}
            onSubmit={handleFormSubmit}
            validateOnMount={false}
            validateOnChange={true}
            validateOnBlur={true}
          >
            {({ values, validateForm, setTouched, handleSubmit }) => (
              <Form className="space-y-4" noValidate>

                {/* SECTION 1 */}
                {currentStep === 0 && (
                  <div className="space-y-4 animate-fadeIn">

                    {/* 1. Full Name */}
                    <div className="input-group">
                      <div className="input-icon">
                        <User />
                      </div>
                      <div className="input-content">
                        <label htmlFor="fullName">Full Name <span className="text-[#BA1616]">*</span></label>
                        <Field
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="Enter your full name"
                        />
                        <ErrorMessage name="fullName">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* 2. Phone Number */}
                    <div className="input-group">
                      <div className="input-icon">
                        <Phone />
                      </div>
                      <div className="input-content">
                        <label htmlFor="phone">Phone Number <span className="text-[#BA1616]">*</span></label>
                        <Field
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="e.g. 01012345678 or +201012345678"
                        />
                        <ErrorMessage name="phone">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* 3. Email Address */}
                    <div className="input-group">
                      <div className="input-icon">
                        <Mail />
                      </div>
                      <div className="input-content">
                        <label htmlFor="email">Email Address <span className="text-[#BA1616]">*</span></label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          placeholder="your.email@example.com"
                        />
                        <ErrorMessage name="email">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* 4. Gender */}
                    <div className="input-group">
                      <div className="input-icon">
                        <User />
                      </div>
                      <div className="input-content">
                        <label htmlFor="gender">Gender <span className="text-[#BA1616]">*</span></label>
                        <Field as="select" name="gender" id="gender">
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </Field>
                        <ErrorMessage name="gender">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* 5. University */}
                    <div className="input-group">
                      <div className="input-icon">
                        <GraduationCap />
                      </div>
                      <div className="input-content">
                        <label htmlFor="university">University <span className="text-[#BA1616]">*</span></label>
                        <Field
                          type="text"
                          name="university"
                          id="university"
                          placeholder="e.g. Cairo University"
                        />
                        <ErrorMessage name="university">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* 6. Faculty */}
                    <div className="input-group">
                      <div className="input-icon">
                        <GraduationCap />
                      </div>
                      <div className="input-content">
                        <label htmlFor="faculty">Faculty <span className="text-[#BA1616]">*</span></label>
                        <Field
                          type="text"
                          name="faculty"
                          id="faculty"
                          placeholder="e.g. Engineering, Computer Science"
                        />
                        <ErrorMessage name="faculty">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* 7. Academic Year */}
                    <div className="input-group">
                      <div className="input-icon">
                        <GraduationCap />
                      </div>
                      <div className="input-content">
                        <label htmlFor="academicYear">Academic Year <span className="text-[#BA1616]">*</span></label>
                        <Field as="select" name="academicYear" id="academicYear">
                          <option value="">Select Academic Year</option>
                          <option value="1st Year">1st Year</option>
                          <option value="2nd Year">2nd Year</option>
                          <option value="3rd Year">3rd Year</option>
                          <option value="4th Year">4th Year</option>
                          <option value="5th Year">5th Year</option>
                          <option value="Graduate">Graduate</option>
                        </Field>
                        <ErrorMessage name="academicYear">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* 8. LinkedIn Profile */}
                    <div className="input-group">
                      <div className="input-icon">
                        <Linkedin />
                      </div>
                      <div className="input-content">
                        <label htmlFor="linkedin">LinkedIn Profile URL <span className="text-[#BA1616]">*</span></label>
                        <Field
                          type="url"
                          name="linkedin"
                          id="linkedin"
                          placeholder="https://www.linkedin.com/in/yourprofile"
                        />
                        <ErrorMessage name="linkedin">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* 9. Been in STP Before */}
                    <div className="input-group flex-col items-start gap-2">
                      <label className="text-[#BA1616]">Have you been part of STP before? <span className="text-[#BA1616]">*</span></label>
                      <div className="flex items-center gap-6 mt-1">
                        <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-slate-700 font-medium">
                          <Field type="radio" name="beenInStpBefore" value="Yes" className="accent-[#BA1616]" /> Yes
                        </label>
                        <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-slate-700 font-medium">
                          <Field type="radio" name="beenInStpBefore" value="No" className="accent-[#BA1616]" /> No
                        </label>
                      </div>
                      <ErrorMessage name="beenInStpBefore">
                        {msg => (
                          <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {msg}
                          </p>
                        )}
                      </ErrorMessage>
                    </div>

                    {/* Conditional: Previous Committee & Role */}
                    {values.beenInStpBefore === 'Yes' && (
                      <>
                        <div className="input-group">
                          <div className="input-icon"><Briefcase /></div>
                          <div className="input-content">
                            <label htmlFor="previousCommitteeIfApplicable">Previous Committee in STP</label>
                            <Field type="text" name="previousCommitteeIfApplicable" id="previousCommitteeIfApplicable" placeholder="e.g. Technical" />
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-icon"><Briefcase /></div>
                          <div className="input-content">
                            <label htmlFor="previousRoleIfApplicable">Previous Role / Position in STP</label>
                            <Field type="text" name="previousRoleIfApplicable" id="previousRoleIfApplicable" placeholder="e.g. Member / Head" />
                          </div>
                        </div>
                      </>
                    )}

                    {/* 10. Applied Committee */}
                    <div className="input-group">
                      <div className="input-icon"><Briefcase /></div>
                      <div className="input-content">
                        <label htmlFor="appliedCommittee">Committee Applying For <span className="text-[#BA1616]">*</span></label>
                        <Field as="select" name="appliedCommittee" id="appliedCommittee">
                          <option value="">Select Committee</option>
                          {committeeOptions.map((opt, idx) => (
                            <option key={idx} value={opt}>{opt}</option>
                          ))}
                        </Field>
                        <ErrorMessage name="appliedCommittee">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* 11. Involved in Other Activities */}
                    <div className="input-group flex-col items-start gap-2">
                      <label className="text-[#BA1616]">Are you currently involved in other student activities or commitments? <span className="text-[#BA1616]">*</span></label>
                      <div className="flex items-center gap-6 mt-1">
                        <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-slate-700 font-medium">
                          <Field type="radio" name="involvedInOtherActivities" value="Yes" className="accent-[#BA1616]" /> Yes
                        </label>
                        <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-slate-700 font-medium">
                          <Field type="radio" name="involvedInOtherActivities" value="No" className="accent-[#BA1616]" /> No
                        </label>
                      </div>
                      <ErrorMessage name="involvedInOtherActivities">
                        {msg => (
                          <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {msg}
                          </p>
                        )}
                      </ErrorMessage>
                    </div>

                  </div>
                )}

                {/* SECTION 2 */}
                {currentStep === 1 && (
                  <div className="space-y-4 animate-fadeIn">

                    {/* Committee Experience */}
                    <div className="input-group flex-col items-start gap-2">
                      <label className="text-[#BA1616]">Do you have previous student activity / committee experience? <span className="text-[#BA1616]">*</span></label>
                      <div className="flex items-center gap-6 mt-1">
                        <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-slate-700 font-medium">
                          <Field type="radio" name="hasCommitteeExperience" value="Yes" className="accent-[#BA1616]" /> Yes
                        </label>
                        <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-slate-700 font-medium">
                          <Field type="radio" name="hasCommitteeExperience" value="No" className="accent-[#BA1616]" /> No
                        </label>
                      </div>
                      <ErrorMessage name="hasCommitteeExperience">
                        {msg => (
                          <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {msg}
                          </p>
                        )}
                      </ErrorMessage>
                    </div>

                    {values.hasCommitteeExperience === 'Yes' && (
                      <div className="input-group">
                        <div className="input-icon"><FileText /></div>
                        <div className="input-content">
                          <label htmlFor="committeeExperienceDetails">Briefly describe your previous experience <span className="text-[#BA1616]">*</span></label>
                          <Field as="textarea" rows="3" name="committeeExperienceDetails" id="committeeExperienceDetails" placeholder="Describe your roles, committees, and key contributions..." />
                          <ErrorMessage name="committeeExperienceDetails">
                            {msg => (
                              <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                                <AlertCircle className="w-3.5 h-3.5" /> {msg}
                              </p>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>
                    )}

                    {/* Team Leadership Experience */}
                    <div className="input-group flex-col items-start gap-2">
                      <label className="text-[#BA1616]">Have you led a team before? <span className="text-[#BA1616]">*</span></label>
                      <div className="flex items-center gap-6 mt-1">
                        <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-slate-700 font-medium">
                          <Field type="radio" name="hasLedTeamBefore" value="Yes" className="accent-[#BA1616]" /> Yes
                        </label>
                        <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-slate-700 font-medium">
                          <Field type="radio" name="hasLedTeamBefore" value="No" className="accent-[#BA1616]" /> No
                        </label>
                      </div>
                      <ErrorMessage name="hasLedTeamBefore">
                        {msg => (
                          <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {msg}
                          </p>
                        )}
                      </ErrorMessage>
                    </div>

                    {values.hasLedTeamBefore === 'Yes' && (
                      <div className="input-group">
                        <div className="input-icon"><Users /></div>
                        <div className="input-content">
                          <label htmlFor="leadershipExperienceDetails">Describe your leadership experience <span className="text-[#BA1616]">*</span></label>
                          <Field as="textarea" rows="3" name="leadershipExperienceDetails" id="leadershipExperienceDetails" placeholder="Team size, leadership style, challenges overcome..." />
                          <ErrorMessage name="leadershipExperienceDetails">
                            {msg => (
                              <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                                <AlertCircle className="w-3.5 h-3.5" /> {msg}
                              </p>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>
                    )}

                    {/* Why Interested */}
                    <div className="input-group">
                      <div className="input-icon"><Flame /></div>
                      <div className="input-content">
                        <label htmlFor="whyInterested">Why are you interested in joining STP Board? <span className="text-[#BA1616]">*</span></label>
                        <Field as="textarea" rows="3" name="whyInterested" id="whyInterested" placeholder="Share your motivation and goals..." />
                        <ErrorMessage name="whyInterested">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* Strongest Skills */}
                    <div className="input-group">
                      <div className="input-icon"><Award /></div>
                      <div className="input-content">
                        <label htmlFor="strongestSkills">What are your strongest technical and soft skills? <span className="text-[#BA1616]">*</span></label>
                        <Field as="textarea" rows="3" name="strongestSkills" id="strongestSkills" placeholder="List your key strengths and skills..." />
                        <ErrorMessage name="strongestSkills">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* Vision For Committee */}
                    <div className="input-group">
                      <div className="input-icon"><Target /></div>
                      <div className="input-content">
                        <label htmlFor="visionForCommittee">What is your vision for your target committee? <span className="text-[#BA1616]">*</span></label>
                        <Field as="textarea" rows="3" name="visionForCommittee" id="visionForCommittee" placeholder="What improvements or innovations do you plan to bring?" />
                        <ErrorMessage name="visionForCommittee">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                  </div>
                )}

                {/* SECTION 3 */}
                {currentStep === 2 && (
                  <div className="space-y-4 animate-fadeIn">

                    {/* Uncommitted Members Action */}
                    <div className="input-group">
                      <div className="input-icon"><MessageSquare /></div>
                      <div className="input-content">
                        <label htmlFor="uncommittedMembersAction">How would you handle uncommitted team members? <span className="text-[#BA1616]">*</span></label>
                        <Field as="textarea" rows="3" name="uncommittedMembersAction" id="uncommittedMembersAction" placeholder="Explain your approach..." />
                        <ErrorMessage name="uncommittedMembersAction">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* Sudden Departure Action */}
                    <div className="input-group">
                      <div className="input-icon"><MessageSquare /></div>
                      <div className="input-content">
                        <label htmlFor="suddenDepartureAction">How would you react to sudden member departures mid-season? <span className="text-[#BA1616]">*</span></label>
                        <Field as="textarea" rows="3" name="suddenDepartureAction" id="suddenDepartureAction" placeholder="Explain your action plan..." />
                        <ErrorMessage name="suddenDepartureAction">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* Disagreement With VP */}
                    <div className="input-group">
                      <div className="input-icon"><MessageSquare /></div>
                      <div className="input-content">
                        <label htmlFor="disagreementWithVpAction">How would you handle a professional disagreement with your VP? <span className="text-[#BA1616]">*</span></label>
                        <Field as="textarea" rows="3" name="disagreementWithVpAction" id="disagreementWithVpAction" placeholder="Explain your communication and resolution strategy..." />
                        <ErrorMessage name="disagreementWithVpAction">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* Area To Improve */}
                    <div className="input-group">
                      <div className="input-icon"><Target /></div>
                      <div className="input-content">
                        <label htmlFor="areaToImprove">What is one personal area or weakness you aim to improve this season? <span className="text-[#BA1616]">*</span></label>
                        <Field as="textarea" rows="3" name="areaToImprove" id="areaToImprove" placeholder="Share your personal growth area..." />
                        <ErrorMessage name="areaToImprove">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* Latest Achievement */}
                    <div className="input-group">
                      <div className="input-icon"><Award /></div>
                      <div className="input-content">
                        <label htmlFor="latestAchievement">What is your latest proud achievement? <span className="text-[#BA1616]">*</span></label>
                        <Field as="textarea" rows="3" name="latestAchievement" id="latestAchievement" placeholder="Describe your achievement..." />
                        <ErrorMessage name="latestAchievement">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* Why Choose You */}
                    <div className="input-group">
                      <div className="input-icon"><Flame /></div>
                      <div className="input-content">
                        <label htmlFor="whyChooseYou">Why should the STP Board choose you over other candidates? <span className="text-[#BA1616]">*</span></label>
                        <Field as="textarea" rows="3" name="whyChooseYou" id="whyChooseYou" placeholder="Sell your value and commitment..." />
                        <ErrorMessage name="whyChooseYou">
                          {msg => (
                            <p className="text-xs text-[#BA1616] font-medium flex items-center gap-1 mt-2">
                              <AlertCircle className="w-3.5 h-3.5" /> {msg}
                            </p>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* Questions For Us */}
                    <div className="input-group">
                      <div className="input-icon"><HelpCircle /></div>
                      <div className="input-content">
                        <label htmlFor="questionsForUs">Do you have any questions for the STP Board? (Optional)</label>
                        <Field as="textarea" rows="2" name="questionsForUs" id="questionsForUs" placeholder="Ask anything you want..." />
                      </div>
                    </div>

                  </div>
                )}

                {/* Form Controls / Navigation Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  {currentStep > 0 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-100 text-sm font-semibold transition-all"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                  ) : <div />}

                  {currentStep < totalSteps - 1 ? (
                    <button
                      type="button"
                      onClick={() => handleNext(validateForm, setTouched)}
                      className="sign-btn w-auto"
                    >
                      <span>Next Section</span>
                      <ArrowRight className="w-4 h-4 sign-arrow" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleSubmit()}
                      className="sign-btn w-auto"
                    >
                      <span>Submit Application</span>
                      <Send className="w-4 h-4 sign-arrow" />
                    </button>
                  )}
                </div>

              </Form>
            )}
          </Formik>
        )}

      </div>
    </div>
  );
}