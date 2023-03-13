import { FC, ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import AdminNav from "@/components/common/AdminNav"
import DashboardIcon from "@/public/assets/icons/dashboard.svg"
import postIcon from "@/public/assets/icons/posts.svg"
import usersIcon from "@/public/assets/icons/users.svg"
import commentsIcon from "@/public/assets/icons/comments.svg"
import contactIcon from "@/public/assets/icons/contacts.svg"
import addPostIcon from "@/public/assets/icons/addPost.svg"

interface Props {
  children: ReactNode
}

const navItems = [
  { alt: "Dashboard", href: "/admin", src: DashboardIcon },
  { alt: "Posts", href: "/admin/posts", src: postIcon },
  { alt: "Users", href: "/admin/users", src: usersIcon },
  { alt: "Comments", href: "/admin/comments", src: commentsIcon },
  { alt: "contacts", href: "/admin/contacts", src: contactIcon }
]

const AdminLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className="flex">
      <AdminNav navItems={navItems} />
      <div className="flex-1 p-4">{children}</div>
      <Link
        href={"/admin/post/create"}
        className=" w-14 h-14 flex justify-center items-center bg-secondary-light dark:bg-secondary-dark fixed z-10 right-10 bottom-10 p-3 rounded-full hover:scale-90 shadow-sm transition"
      >
        <Image alt="addPost" src={addPostIcon} />
      </Link>
    </div>
  )
}

export default AdminLayout
