export default function TextAreaField({
  label,
  required,
  value,
  onChange,
  error,
  placeholder = 'Answer in Arabic or English',
}) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label>
        {label}
        {required && <span className="required-star">*</span>}
      </label>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <div className="error-text">{error}</div>}
    </div>
  )
}
