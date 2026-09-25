export default function RadioField({ label, required, value, onChange, error, options, name }) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label>
        {label}
        {required && <span className="required-star">*</span>}
      </label>
      <div className="radio-group">
        {options.map((opt) => (
          <label
            key={opt}
            className={`radio-pill ${value === opt ? 'selected' : ''}`}
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
            />
            {opt}
          </label>
        ))}
      </div>
      {error && <div className="error-text">{error}</div>}
    </div>
  )
}
