export default function TextField({
  label,
  required,
  value,
  onChange,
  error,
  type = 'text',
  placeholder = 'Answer in Arabic or English',
}) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label>
        {label}
        {required && <span className="required-star">*</span>}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <div className="error-text">{error}</div>}
    </div>
  )
}
