"use client"

import { useState } from "react"
import { Link } from "react-router"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)

  const menuItems = [
    {
      label: "About us",
      href: "#",
      submenu: [
        { label: "What is EAB", href: "#" },
        { label: "EAB history", href: "#" },
        { label: "Our structure", href: "#" },
      ],
    },
    { label: "Why EAB", href: "#" },
    { label: "Support us", href: "#" },
    { label: "Our impact", href: "#" },
    { label: "Study at EAB", href: "#" },
    { label: "National Committees", href: "#" },
  ]

  const toggleMenu = (label: string) => {
    setExpandedMenu(expandedMenu === label ? null : label)
  }

  return (
    <nav className="bg-white">
      <div className="hidden items-center justify-between bg-[#EEEEEE] px-9 pb-5 md:flex">
        <div className="bg-white p-2">
          <p>English</p>
        </div>

        <div className="flex items-center space-x-4 pt-3.5">
          <h1 className="text-lg font-bold text-[#009482]">EAB Hub</h1>
          <div className="flex items-center space-x-1.5">
            <img src="/search.svg" alt="Search" className="h-6 w-6" />
            <p className="text-lg font-bold">Search</p>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-9">
        <div className="hidden items-center justify-between py-4 md:flex">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Logo" className="h-11.25 w-46.25" />
          </Link>

          <div className="flex items-center space-x-4.5">
            {menuItems.map((item) => (
              <div key={item.label} className="group relative">
                <button className="flex items-center space-x-1 text-lg font-bold text-gray-900 hover:text-gray-700">
                  <span>{item.label}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            ))}

            <div className="flex items-center gap-1.5 pl-2.5">
              <Button className="h-[46.18px] rounded-full bg-[#004A97] px-6 py-2 text-lg font-bold text-white hover:bg-blue-700">
                Apply
              </Button>
              <Button className="h-[46.18px] rounded-full bg-[#AD1644] px-6 py-2 text-lg font-bold text-white hover:bg-red-700">
                Donate
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 md:hidden">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Logo" className="h-11.25 w-46.25" />
          </Link>
          <div className="flex items-center space-x-2">
            <button className="text-gray-900">
              <img src="/search.svg" alt="Search" className="h-6 w-6" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="space-y-0">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => item.submenu && toggleMenu(item.label)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold text-gray-900"
                  >
                    <span>{item.label}</span>
                    {item.submenu ? (
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          expandedMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-blue-600" />
                    )}
                  </button>
                  {item.submenu && expandedMenu === item.label && (
                    <div className="border-t border-gray-200 bg-gray-50 py-2">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <a
                href="#"
                className="block px-4 py-3 font-semibold text-teal-600"
              >
                EAB Hub
              </a>
            </div>

            <div className="space-y-2 border-t border-gray-200 px-4 pt-4">
              <Button className="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700">
                Apply
              </Button>
              <Button className="w-full rounded-full bg-red-600 text-white hover:bg-red-700">
                Donate
              </Button>
            </div>

            <div className="border-t border-gray-200 px-4 pt-4 text-center">
              <select className="border border-gray-300 bg-white px-3 py-2 text-sm">
                <option>English</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
