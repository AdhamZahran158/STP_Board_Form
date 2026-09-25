export default function SuccessScreen({
  fullName,
  isSuccess = true,
  onRestart,
}) {
  if (!isSuccess) {
    return (
      <div className="success-wrap">
        <div className="success-icon">!</div>

        <h2>Something went wrong</h2>

        <p>
          There was a problem submitting your application.
          Please check your connection and try again.
        </p>

        <div className="button-row">
          <button
            className="btn btn-primary"
            onClick={onRestart}
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="success-wrap">
      <div className="success-icon">✓</div>

      <h2>
        Thank you{fullName ? `, ${fullName}` : ''}!
      </h2>

      <p>
        Your application for STP Board Recruitment '27 has
        been submitted successfully. Our team will review your
        responses and get back to you soon. Good luck!
      </p>

      <div className="button-row">
        <button
          className="btn btn-primary"
          onClick={onRestart}
        >
          Submit another response
        </button>
      </div>
    </div>
  )
}