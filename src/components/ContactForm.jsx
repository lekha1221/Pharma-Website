import { useState } from 'react'
import Button from './Button'

const initial = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

function validate(values) {
  const errors = {}
  if (!values.fullName.trim()) errors.fullName = 'Full name is required.'
  if (!values.email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.phone.trim()) errors.phone = 'Phone number is required.'
  else if (!/^[+\d][\d\s()-]{7,}$/.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number.'
  }
  if (!values.subject.trim()) errors.subject = 'Subject is required.'
  if (!values.message.trim()) errors.message = 'Message is required.'
  else if (values.message.trim().length < 10) {
    errors.message = 'Please provide a bit more detail (at least 10 characters).'
  }
  return errors
}

/**
 * Frontend-only contact form.
 * Future: POST payload to an API endpoint from submit handler.
 */
export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setStatus('submitting')
    // ponytail: demo success only — wire to API when backend exists
    await new Promise((r) => setTimeout(r, 500))
    setStatus('success')
    setValues(initial)
  }

  if (status === 'success') {
    return (
      <div
        className="rounded-2xl border border-health-100 bg-health-50 p-6 sm:p-8"
        role="status"
      >
        <h3 className="text-lg font-semibold text-health-700">Message received</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/80">
          Thank you for contacting M PRIX PHARMA. We&apos;ll get back to you soon.
        </p>
        <Button
          className="mt-5"
          variant="secondary"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </Button>
      </div>
    )
  }

  const fieldClass =
    'mt-1.5 w-full rounded-xl border border-brand-100 bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100'

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" aria-label="Contact form">
      {[
        { name: 'fullName', label: 'Full Name', type: 'text', autoComplete: 'name' },
        { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
        { name: 'phone', label: 'Phone Number', type: 'tel', autoComplete: 'tel' },
        { name: 'subject', label: 'Subject', type: 'text', autoComplete: 'off' },
      ].map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="text-sm font-medium text-ink">
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            autoComplete={field.autoComplete}
            value={values[field.name]}
            onChange={onChange}
            className={fieldClass}
            aria-invalid={Boolean(errors[field.name])}
            aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
          />
          {errors[field.name] && (
            <p id={`${field.name}-error`} className="mt-1 text-sm text-red-600" role="alert">
              {errors[field.name]}
            </p>
          )}
        </div>
      ))}

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={onChange}
          className={`${fieldClass} resize-y min-h-[120px]`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={status === 'submitting'} className="w-full sm:w-auto">
        {status === 'submitting' ? 'Sending…' : 'Submit'}
      </Button>
    </form>
  )
}
