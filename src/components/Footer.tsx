import { useState } from "react"

const Footer = () => {
  const [userType, setUserType] = useState("student")
  const [helpType, setHelpType] = useState("applications")

  return (
    <footer className="border-t border-t-white bg-[#0B3057] text-white">
      <div className="px-8 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-16 text-center lg:flex-row lg:text-left">
            <div className="md:ax-w-62.5 flex flex-col items-center space-y-8 lg:items-start lg:space-y-12.5">
              <img
                src="/logo-white.svg"
                alt="EAB Logo"
                className="-ml-5 h-11.25 w-46.25"
              />
              <p className="text-lg">
                <strong>EAB</strong> International, Third Floor, 56 New Oxford,
                WC1A 1BS, UK
              </p>
              {/* Social Icons */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className="transition-colors hover:text-blue-200">
                  <img src="/telegram.svg" alt="Telegram" className="h-7 w-7" />
                </a>
                <a href="#" className="transition-colors hover:text-blue-200">
                  <img src="/tiktok.svg" alt="TikTok" className="h-7 w-7" />
                </a>
                <a href="#" className="transition-colors hover:text-blue-200">
                  <img
                    src="/instagram.svg"
                    alt="Instagram"
                    className="h-7 w-7"
                  />
                </a>
                <a href="#" className="transition-colors hover:text-blue-200">
                  <img src="/youtube.svg" alt="YouTube" className="h-7 w-7" />
                </a>
                <a href="#" className="transition-colors hover:text-blue-200">
                  <img src="/x.svg" alt="Twitter" className="h-7 w-7" />
                </a>
              </div>
              <div className="pt-4">
                <img className="" src="fr-logo.svg" alt="Charity Badge" />
              </div>
            </div>

            <div className="space-y-8 lg:space-y-12.5">
              <h3 className="text-[25px] font-medium">Quick links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="transition-colors hover:text-blue-200">
                    What is EAB
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-200">
                    Academic Life
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-200">
                    EAB Schools & Colleges
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-200">
                    EAB Short Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-200">
                    Apply
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-8 lg:space-y-12.5">
              <h3 className="text-[25px] font-medium">Quick links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="transition-colors hover:text-blue-200">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-200">
                    Structure
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-200">
                    History
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-200">
                    Our impact
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-200">
                    National Committee
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-200">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-200">
                    Alumni Network
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-200">
                    History
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-200">
                    EAB Short Courses
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4 lg:col-span-2">
              <h3 className="text-[25px] font-medium">EAB around the world</h3>
              <img src="/map.svg" alt="World Map" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#07294C] px-8 pt-8 pb-1.5 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-wrap gap-4 text-xs font-semibold text-white">
            <a href="#">Sitemap</a>
            <span>|</span>
            <a href="#">Info for parents</a>
            <span>|</span>
            <a href="#">Info for educators</a>
            <span>|</span>
            <a href="#">FAQs</a>
            <span>|</span>
            <a href="#" className="">
              Media Kit
            </a>
            <span>|</span>
            <a href="#" className="">
              Terms & conditions
            </a>
            <span>|</span>
            <a href="#" className="">
              Data Protection Policy
            </a>
            <span>|</span>
            <a href="#" className="">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <div className="fixed right-0 bottom-0 left-0 hidden bg-[#004A97] px-8 py-4 md:px-12 lg:block lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 md:flex-row">
          <h3 className="text-lg font-semibold whitespace-nowrap text-white">
            How can we help you?
          </h3>
          <div className="flex w-full gap-2 md:w-auto">
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="h-13 w-60.25 flex-1 appearance-none border-0 bg-white bg-right bg-no-repeat px-6 py-3 pr-12 font-medium text-gray-900 focus:outline-none md:flex-none"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23374151' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundSize: "28px 28px",
                backgroundPosition: "right 10px center",
              }}
            >
              <option value="student">I'm a student</option>
              <option value="parent">I'm a parent</option>
              <option value="educator">I'm an educator</option>
            </select>
            <select
              value={helpType}
              onChange={(e) => setHelpType(e.target.value)}
              className="h-13 w-120.75 flex-1 appearance-none border-0 bg-white bg-right bg-no-repeat px-6 py-3 pr-12 font-medium text-gray-900 focus:outline-none md:flex-none"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23374151' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundSize: "28px 28px",
                backgroundPosition: "right 10px center",
              }}
            >
              <option value="applications">
                I want to find out about applications
              </option>
              <option value="learn">I want to learn more</option>
              <option value="donate">I want to donate</option>
            </select>
          </div>
        </div>
      </div>

      <div className="hidden h-24 lg:block"></div>
    </footer>
  )
}

export default Footer
