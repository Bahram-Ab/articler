import AdminNav from "@/components/common/AdminNav"
import { NextPage } from "next"
import DashboardIcon from "../../public/assets/icons/dashboard.svg"
import postIcon from "../../public/assets/icons/posts.svg"
import usersIcon from "../../public/assets/icons/users.svg"
import commentsIcon from "../../public/assets/icons/comments.svg"
import contactIcon from "../../public/assets/icons/contacts.svg"

interface Props {}

const navItems = [
  { alt: "Dashboard", href: "/admin", src: DashboardIcon },
  { alt: "Posts", href: "/admin/posts", src: postIcon },
  { alt: "Users", href: "/admin/users", src: usersIcon },
  { alt: "Comments", href: "/admin/comments", src: commentsIcon },
  { alt: "contacts", href: "/admin/contacts", src: contactIcon }
]

const index: NextPage<Props> = () => {
  return (
    <div>
      <AdminNav navItems={navItems} />
    </div>
  )
}

export default index
