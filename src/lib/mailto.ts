export interface MailFields {
  name: string
  subject: string
  message: string
}

/**
 * Builds a mailto: URL from the contact form.
 *
 * - encodeURIComponent keeps spaces as %20 (a "+" would show up literally in mail apps).
 * - Line breaks become CRLF (%0D%0A), which is what RFC 6068 specifies for mailto bodies;
 *   a bare LF (%0A) collapses into one line in some mail clients.
 * - mailto has no "from name" field, so the sender's name is signed at the bottom of the body.
 */
export function buildMailto(to: string, { name, subject, message }: MailFields): string {
  const crlf = (text: string) => text.replace(/\r\n|\r|\n/g, '\r\n')

  const body = `${crlf(message.trim())}\r\n\r\n— ${name.trim()}`
  const params = [`subject=${encodeURIComponent(subject.trim())}`, `body=${encodeURIComponent(body)}`]

  return `mailto:${to}?${params.join('&')}`
}
