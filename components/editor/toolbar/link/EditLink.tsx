import { FC, useCallback, useState } from "react"
import { BsBoxArrowUpRight, BsPencilSquare } from "react-icons/bs"
import { BiUnlink } from "react-icons/bi"
import { BubbleMenu, Editor } from "@tiptap/react"
import LinkForm, { linkOptions } from "./LinkForm"

interface Props {
  editor: Editor
}

const EditLink: FC<Props> = ({ editor }): JSX.Element => {
  const [showEditForm, setShowEditForm] = useState(false)

  const handleOpenLink = useCallback(() => {
    const { href } = editor.getAttributes("link")
    if (href) window.open(href, "_blank")
  }, [editor])

  const handleLinkEdit = () => {
    setShowEditForm(true)
  }

  const handleUnlinkClicked = () => {
    editor.commands.unsetLink()
  }

  const handleSubmit = ({ url, openInNewTab }: linkOptions) => {
    editor
      .chain()
      .focus()
      .unsetLink()
      .setLink({ href: url, target: openInNewTab ? "_blank" : "" })
      .run()
  }

  const getInitialState = useCallback(() => {
    const { href, target } = editor.getAttributes("link")
    return { url: href, openInNewTab: target ? true : false }
  }, [editor])

  return (
    <BubbleMenu
      shouldShow={({ editor }) => editor.isActive("link")}
      editor={editor}
      tippyOptions={{
        onHide: () => {
          setShowEditForm(false)
        },
        placement: "bottom"
      }}
    >
      {showEditForm ? (
        <LinkForm
          onSubmit={handleSubmit}
          initialState={getInitialState()}
          setVisible={setShowEditForm}
        />
      ) : (
        <div className="rounded bg-primary dark:bg-primary-dark text-primary-dark dark:text-primary shadow-secondary-dark shadow-md p-3 flex items-center space-x-6 z-50">
          <button onClick={handleOpenLink}>
            <BsBoxArrowUpRight />
          </button>
          <button onClick={handleLinkEdit}>
            <BsPencilSquare />
          </button>
          <button onClick={handleUnlinkClicked}>
            <BiUnlink />
          </button>
        </div>
      )}
    </BubbleMenu>
  )
}

export default EditLink
