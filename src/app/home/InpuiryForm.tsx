import { useState, type ChangeEvent, type FormEvent } from "react"

type FormState = {
  subject: string
  fullName: string
  email: string
  message: string
}

const InpuiryForm = () => {
  const [formState, setFormState] = useState<FormState>({
    subject: "",
    fullName: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Partial<FormState> = {}

    if (!formState.subject) nextErrors.subject = "Subject is required"
    if (!formState.fullName) nextErrors.fullName = "Full name is required"
    if (!formState.email) nextErrors.email = "Email is required"
    if (!formState.message) nextErrors.message = "Message is required"

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormState({ subject: "", fullName: "", email: "", message: "" })
    }, 500)
  }
  return (
    <section className="bg-[#0B2E59] px-6 pt-33.5 pb-39 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <h2 className="mb-10 text-center text-4xl font-semibold text-white md:text-5xl">
          We are present in over
          <br />
          150 countries
        </h2>

        <form className="w-full space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="relative">
            <label className="sr-only" htmlFor="subject">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              className="h-12 w-full appearance-none rounded-sm bg-white px-4 pr-10 text-sm font-medium text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
              value={formState.subject}
              onChange={handleChange}
              aria-invalid={Boolean(errors.subject)}
            >
              <option value="" disabled>
                Subject *
              </option>
              <option>Admissions</option>
              <option>Partnerships</option>
              <option>Scholarships</option>
              <option>Other</option>
            </select>
            <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-500">
              ▾
            </span>
            {errors.subject && (
              <p className="mt-2 text-xs text-red-200">{errors.subject}</p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="full-name">
                Full Name
              </label>
              <input
                id="full-name"
                name="fullName"
                type="text"
                placeholder="Full Name *"
                className="h-12 w-full rounded-sm bg-white px-4 text-sm font-medium text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
                value={formState.fullName}
                onChange={handleChange}
                aria-invalid={Boolean(errors.fullName)}
              />
              {errors.fullName && (
                <p className="mt-2 text-xs text-red-200">{errors.fullName}</p>
              )}
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address *"
                className="h-12 w-full rounded-sm bg-white px-4 text-sm font-medium text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
                value={formState.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && (
                <p className="mt-2 text-xs text-red-200">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message *"
              rows={6}
              className="w-full rounded-sm bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
              value={formState.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && (
              <p className="mt-2 text-xs text-red-200">{errors.message}</p>
            )}
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="h-15 w-57.5 rounded-sm bg-[#AD1644] px-10 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#990F36] disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default InpuiryForm
