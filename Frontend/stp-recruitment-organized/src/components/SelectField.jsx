export default function SelectField({ label, required, value, onChange, error, options }) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label>
        {label}
        {required && <span className="required-star">*</span>}
      </label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <div className="error-text">{error}</div>}
    </div>
  )
}
