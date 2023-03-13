import Image from "next/image"
import Link from "next/link"
import { FC, useEffect, useState } from "react"
import Logo from "../../public/assets/icons/logo.svg"
import open from "../../public/assets/icons/open.svg"

interface Props {
  navItems: { alt: string; href: string; src: any }[]
}

const TOGGLE_NAV_STATUS = "toggleNavStatus"

const AdminNav: FC<Props> = ({ navItems }): JSX.Element => {
  const [showNav, setShowNav] = useState(false)

  const handleToggleNav = () => {
    localStorage.setItem(TOGGLE_NAV_STATUS, JSON.stringify(!showNav))
    setShowNav(!showNav)
  }

  useEffect(() => {
    const navState = localStorage.getItem(TOGGLE_NAV_STATUS)
    if (navState) {
      setShowNav(JSON.parse(navState))
    } else {
      setShowNav(true)
    }
  }, [])

  return (
    <nav
      className={`h-screen shadow-sm bg-secondary-light dark:bg-secondary-dark flex flex-col justify-between  transform duration-300 overflow-hidden sticky top-0 ${
        showNav ? "w-60" : "w-12"
      }`}
    >
      <div>
        <Link
          href="/admin"
          className="flex items-center space-x-2 p-3 h-6 py-7 border-b-8 border-gray-300"
        >
          <Image
            alt="logo"
            src={Logo}
            className="text-highlight-light dark:text-highlight-dark w-6 h-6"
          />
          {showNav && (
            <span className="text-highlight-light dark:text-highlight-dark text-xl font-semibold">
              Admin
            </span>
          )}
        </Link>
        <div className="space-y-8 mt-10">
          {navItems.map((item) => {
            return (
              <Link
                href={item.href}
                className="flex items-center space-x-2 p-3  h-6"
                key={item.alt}
              >
                <Image
                  alt={item.alt}
                  src={item.src}
                  className="text-highlight-light dark:text-highlight-dark w-6 h-6"
                />
                {showNav && (
                  <span className="text-highlight-light dark:text-highlight-dark text-xl font-semibold">
                    {item.alt}
                  </span>
                )}
              </Link>
            )
          })}
        </div>
      </div>
      <button
        onClick={handleToggleNav}
        className="flex items-center justify-end space-x-2 p-3 w-full "
      >
        <Image
          alt="open"
          src={open}
          className={`text-highlight-light dark:text-highlight-dark w-6 h-6 self-end transform duration-[920ms] ${
            showNav && "rotate-180"
          }`}
        />
      </button>
    </nav>
  )
}

export default AdminNav
