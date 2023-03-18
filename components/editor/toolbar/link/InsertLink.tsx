import { FC, useState } from "react"
import { BsLink45Deg } from "react-icons/bs"
import Button from "../Button"
import LinkForm, { linkOptions } from "./LinkForm"

interface Props {
  onSubmit(link: linkOptions): void
}

const InsertLink: FC<Props> = ({ onSubmit }): JSX.Element => {
  const [visible, setVisible] = useState(false)
  return (
    <div
      onKeyDown={({ key }) => key === "Escape" && setVisible(false)}
      className="relative"
    >
      <Button onClick={() => setVisible(!visible)}>
        <BsLink45Deg />
      </Button>

      <div className="absolute top-full mt-4 right-0 z-50">
        {visible && <LinkForm onSubmit={onSubmit} setVisible={setVisible} />}
      </div>
    </div>
  )
}

export default InsertLink
