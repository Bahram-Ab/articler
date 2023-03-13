import { FC } from "react"
import Image from "next/image"
import { Editor } from "@tiptap/react"
import DropdownOptions from "@/components/common/DropdownOptions"
import openInBottomIcon from "@/public/assets/icons/openInBottom.svg"

interface Props {
  editor: Editor | null
}

const ToolBar: FC<Props> = ({ editor }): JSX.Element | null => {
  if (!editor) return null

  const options = [
    {
      label: "Paragraph",
      onClick: () => editor.chain().focus().setParagraph().run()
    },
    {
      label: "Heading 1",
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run()
    },
    {
      label: "Heading 2",
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run()
    },
    {
      label: "Heading 3",
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run()
    }
  ]

  const getLabel = (): string => {
    if (editor.isActive("heading", { level: 1 })) return "Heading 1"
    if (editor.isActive("heading", { level: 2 })) return "Heading 2"
    if (editor.isActive("heading", { level: 3 })) return "Heading 3"
    return "Paragraph"
  }

  const Head = (): JSX.Element => {
    return (
      <div className="flex space-x-2 items-center ">
        <p>{getLabel()}</p>
        <Image
          alt="openDropDown"
          src={openInBottomIcon}
          width={15}
          height={15}
          className="block mt-1"
        />
      </div>
    )
  }

  return (
    <div>
      <DropdownOptions options={options} head={<Head />} />
    </div>
  )
}
export default ToolBar
