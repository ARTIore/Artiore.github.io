import { commentPlainText } from '../../content/comments'

/** Comment bodies stay text. Markup, markdown, and URLs are not interpreted. */
export function CommentText({ text }: { text: string }) {
  return <p className="whitespace-pre-wrap break-words [overflow-wrap:anywhere]">{commentPlainText(text)}</p>
}
