const STEP_LABELS = {
  1: 'Personal & STP information',
  2: 'Experience & motivation',
  3: 'Situational & personal',
}

export default function StepIndicator({ currentStep }) {
  return (
    <>
      <div className="step-indicator">
        {[1, 2, 3].map((step) => {
          let className = 'step-circle'

          if (step === currentStep) {
            className += ' active'
          } else if (step < currentStep) {
            className += ' completed'
          }

          return (
            <div key={step} className={className}>
              {step}
            </div>
          )
        })}
      </div>

      <div className="step-label-wrap">
        <span className="step-label">
          {STEP_LABELS[currentStep]}
        </span>
      </div>
    </>
  )
}