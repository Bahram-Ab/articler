import { FC, useState } from "react"

interface Props {
  visible: boolean
  onSubmit(link: linkOptions): void
}

export type linkOptions = {
  url: string
  openInNewTab: boolean
}

const LinkForm: FC<Props> = ({ visible, onSubmit }): JSX.Element | null => {
  const [link, setLink] = useState<linkOptions>({ url: "", openInNewTab: true })

  const handleSubmit = () => {
    if (!link.url.trim()) return
    onSubmit(link)
  }

  if (!visible) return null
  return (
    <div className="rounded p-2 bg-primary dark:bg-primary-dark shadow-sm shadow-secondary-dark">
      <input
        type="text"
        className="rounded border-2 border-secondary-dark focus:border-primary-dark dark:focus:border-primary transition p-2 text-primary-dark dark:text-primary"
        placeholder="http://example.com"
        value={link.url}
        onChange={({ target }) => setLink({ ...link, url: target.value })}
        autoFocus
      />

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center justify-center space-x-1 select-none">
          <input
            type="checkbox"
            id="open-in-new-tab"
            className="mt-1"
            checked={link.openInNewTab}
            onChange={({ target }) =>
              setLink({ ...link, openInNewTab: target.checked })
            }
          />
          <label htmlFor="open-in-new-tab">open in new tab</label>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-action px-2 py-1 text-primary rounded text-sm"
        >
          Apply
        </button>
      </div>
    </div>
  )
}

export default LinkForm
