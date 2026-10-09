import { useState, type FormEvent } from 'react'
import { site } from '../../data/site'
import { buildMailto } from '../../lib/mailto'
import Button from '../ui/Button'

const fieldClass =
  'mt-2 block w-full rounded-xl border border-muted/60 bg-elevated px-4 py-3 text-base text-ink transition-colors duration-200 hover:border-ink focus:border-ink'

const labelClass = 'block text-xs font-medium uppercase tracking-eyebrow text-secondary'

/**
 * Contact form with no backend: submitting opens the visitor's own mail app with the
 * message prefilled and addressed to the site owner. The copy says so plainly.
 */
export default function ContactForm() {
  const { form } = site.pages.contact
  const [opened, setOpened] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const href = buildMailto(site.email, {
      name: String(data.get('name') ?? ''),
      subject: String(data.get('subject') ?? ''),
      message: String(data.get('message') ?? ''),
    })

    // Clicking a real anchor hands the URL to the OS mail handler without navigating the page.
    const link = document.createElement('a')
    link.href = href
    document.body.appendChild(link)
    link.click()
    link.remove()
    setOpened(true)
  }

  return (
    <form onSubmit={onSubmit} aria-labelledby="contact-form-heading" className="space-y-6">
      <h2 id="contact-form-heading" className="font-display text-4xl leading-none tracking-tight sm:text-5xl">
        {form.heading}
      </h2>

      <div>
        <label htmlFor="cf-name" className={labelClass}>
          Name
        </label>
        <input id="cf-name" name="name" type="text" required autoComplete="name" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="cf-subject" className={labelClass}>
          Subject
        </label>
        <input id="cf-subject" name="subject" type="text" required className={fieldClass} />
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={7}
          // mailto: links have practical length limits in some mail apps.
          maxLength={1500}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="space-y-4">
        <Button type="submit">{form.button}</Button>
        <p className="max-w-md text-sm leading-relaxed text-muted">{form.note}</p>
        {opened && (
          <p role="status" className="max-w-md text-sm leading-relaxed">
            {form.fallback}{' '}
            <a href={`mailto:${site.email}`} className="underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  )
}
