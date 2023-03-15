import { FC } from "react"
import Image from "next/image"
import { Editor } from "@tiptap/react"
import DropdownOptions from "@/components/common/DropdownOptions"
import openInBottomIcon from "@/public/assets/icons/openInBottom.svg"
import Button from "./Button"
import { RiDoubleQuotesL } from "react-icons/ri"
import {
  BsTypeBold,
  BsTypeStrikethrough,
  BsBraces,
  BsCode,
  BsListOl,
  BsListUl,
  BsTypeItalic,
  BsTypeUnderline,
  BsImageFill,
  BsYoutube
} from "react-icons/bs"
import InsertLink from "./link/InsertLink"
import { linkOptions } from "./link/LinkForm"

interface Props {
  editor: Editor | null
}

const getLabel = (editor: Editor): string => {
  if (editor.isActive("heading", { level: 1 })) return "Heading 1"
  if (editor.isActive("heading", { level: 2 })) return "Heading 2"
  if (editor.isActive("heading", { level: 3 })) return "Heading 3"
  return "Paragraph"
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

  const buttonFunctions = {
    toBold: () => editor.chain().focus().toggleBold().run(),
    toItalic: () => editor.chain().focus().toggleItalic().run(),
    toUnderline: () => editor.chain().focus().toggleUnderline().run(),
    toStrike: () => editor.chain().focus().toggleStrike().run(),
    toBlockquote: () => editor.chain().focus().toggleBlockquote().run(),
    toCode: () => editor.chain().focus().toggleCode().run(),
    toCodeBlock: () => editor.chain().focus().toggleCodeBlock().run(),
    toOL: () => editor.chain().focus().toggleOrderedList().run(),
    toUL: () => editor.chain().focus().toggleBulletList().run()
  }

  const handleLinkSubmit = (link: linkOptions) => {
    console.log(link)
  }

  const Head = (): JSX.Element => {
    return (
      <div className="flex space-x-2 items-center ">
        <p>{getLabel(editor)}</p>
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
    <div className="flex items-center">
      <DropdownOptions options={options} head={<Head />} />
      <div className="h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8"></div>
      <div className="flex items-center space-x-3">
        <Button
          active={editor.isActive("bold")}
          onClick={buttonFunctions.toBold}
        >
          <BsTypeBold />
        </Button>
        <Button
          active={editor.isActive("italic")}
          onClick={buttonFunctions.toItalic}
        >
          <BsTypeItalic />
        </Button>
        <Button
          active={editor.isActive("underline")}
          onClick={buttonFunctions.toUnderline}
        >
          <BsTypeUnderline />
        </Button>
        <Button
          active={editor.isActive("strike")}
          onClick={buttonFunctions.toStrike}
        >
          <BsTypeStrikethrough />
        </Button>
      </div>
      <div className="h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8"></div>
      <div className="flex items-center space-x-3">
        <Button
          active={editor.isActive("blockquote")}
          onClick={buttonFunctions.toBlockquote}
        >
          <RiDoubleQuotesL />
        </Button>
        <Button
          active={editor.isActive("code")}
          onClick={buttonFunctions.toCode}
        >
          <BsCode />
        </Button>
        <Button
          active={editor.isActive("codeBlock")}
          onClick={buttonFunctions.toCodeBlock}
        >
          <BsBraces />
        </Button>
        <InsertLink onSubmit={handleLinkSubmit} />
        <Button
          active={editor.isActive("orderedList")}
          onClick={buttonFunctions.toOL}
        >
          <BsListOl />
        </Button>
        <Button
          active={editor.isActive("bulletList")}
          onClick={buttonFunctions.toUL}
        >
          <BsListUl />
        </Button>
      </div>
      <div className="h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8"></div>
      <div className="flex items-center space-x-3">
        <Button>
          <BsYoutube />
        </Button>
        <Button>
          <BsImageFill />
        </Button>
      </div>
    </div>
  )
}
export default ToolBar
