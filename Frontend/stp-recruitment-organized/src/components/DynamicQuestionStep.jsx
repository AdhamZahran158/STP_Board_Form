import TextField from './TextField.jsx'
import TextAreaField from './TextAreaField.jsx'
import SelectField from './SelectField.jsx'
import RadioField from './RadioField.jsx'

export default function DynamicQuestionStep({
  questions,
  answers,
  errors,
  onChange,
}) {
  return (
    <div>
      {questions.map((q) => {
        // Handle conditional questions
        if (q.showWhen) {
          const conditionValue = answers[q.showWhen.field]

          if (conditionValue !== q.showWhen.value) {
            return null
          }
        }

        const value = answers[q.id] ?? ''
        const error = errors[q.id]

        switch (q.type) {
          case 'textarea':
            return (
              <TextAreaField
                key={q.id}
                label={q.label}
                required={q.required}
                value={value}
                error={error}
                placeholder={q.placeholder}
                onChange={(val) => onChange(q.id, val)}
              />
            )

          case 'select':
            return (
              <SelectField
                key={q.id}
                label={q.label}
                required={q.required}
                value={value}
                error={error}
                options={q.options}
                onChange={(val) => onChange(q.id, val)}
              />
            )

          case 'radio':
            return (
              <RadioField
                key={q.id}
                label={q.label}
                required={q.required}
                name={q.id}
                value={value}
                error={error}
                options={q.options}
                onChange={(val) => onChange(q.id, val)}
              />
            )

          case 'text':
          default:
            return (
              <TextField
                key={q.id}
                label={q.label}
                required={q.required}
                value={value}
                error={error}
                placeholder={q.placeholder}
                onChange={(val) => onChange(q.id, val)}
              />
            )
        }
      })}
    </div>
  )
}