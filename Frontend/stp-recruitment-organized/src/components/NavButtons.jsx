export default function NavButtons({ step, onBack, onNext, isLastStep }) {
  return (
    <div className="button-row">
      {step > 1 && (
        <button type="button" className="btn btn-secondary" onClick={onBack}>
          Back
        </button>
      )}
      <button type="button" className="btn btn-primary" onClick={onNext}>
        {isLastStep ? 'Submit' : 'Next'}
      </button>
    </div>
  )
}
