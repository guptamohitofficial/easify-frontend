"use client";

import Link from "next/link";

export default function Header() {
  return (
    <nav id="topnav" className="defaultscroll is-sticky">
      <div className="container">
        {/* Logo container*/}
        <a className="logo" href="index.html">
          <div className="block sm:hidden">
            <img
              src="/logo/logo-128.png"
              className="h-10 inline-block dark:hidden"
              alt=""
            />
            <img
              src="/logo/logo-128-white.png"
              className="h-10 hidden dark:inline-block"
              alt=""
            />
          </div>
          <div className="sm:block hidden">
            <span className="inline-block dark:hidden">
              <img
                src="/logo/logo-long-500-greener.png"
                className="h-[24px] l-dark"
                alt=""
              />
              <img
                src="/logo/logo-long-light-500.png"
                className="h-[24px] l-light"
                alt=""
              />
            </span>
            <img
              src="/logo/logo-long-all-white-high-500.png"
              className="h-[24px] hidden dark:inline-block"
              alt=""
            />
          </div>
        </a>
        {/* End Logo container*/}
        {/* Start Mobile Toggle */}
        <div className="menu-extras">
          <div className="menu-item">
            <a
              className="navbar-toggle"
              id="isToggle"
              onClick={() => {
                toggleMenu();
              }}
            >
              <div className="lines">
                <span />
                <span />
                <span />
              </div>
            </a>
          </div>
        </div>
        {/* End Mobile Toggle */}
        {/*Login button Start*/}
        <ul className="buy-button list-none mb-0">
          <li className="dropdown inline-block relative ps-1">
            {/* <button
              data-dropdown-toggle="dropdown"
              className="dropdown-toggle items-center"
              type="button"
            >
              <span className="btn btn-icon rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white">
                <img
                  src="https://shreethemes.in/jobstack/layouts/assets/images/team/01.jpg"
                  className="rounded-full"
                  alt=""
                />
              </span>
            </button> */}
            <button
              data-dropdown-toggle="dropdown"
              className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full"
              type="button"
            >
              Post Job
            </button>
            {/* Dropdown menu */}
            <div
              className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <ul className="py-2 text-start">
                <li>
                  <a
                    href="candidate-profile.html"
                    className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"
                  >
                    <i data-feather="user" className="size-4 me-2" />
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="candidate-profile-setting.html"
                    className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"
                  >
                    <i data-feather="settings" className="size-4 me-2" />
                    Settings
                  </a>
                </li>
                <li className="border-t border-gray-100 dark:border-gray-800 my-2" />
                <li>
                  <a
                    href="lock-screen.html"
                    className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"
                  >
                    <i data-feather="lock" className="size-4 me-2" />
                    Lockscreen
                  </a>
                </li>
                <li>
                  <a
                    href="login.html"
                    className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"
                  >
                    <i data-feather="log-out" className="size-4 me-2" />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </li>
          {/*end dropdown*/}
        </ul>
        {/*Login button End*/}
        <div id="navigation">
          {/* Navigation Menu*/}
          <ul className="navigation-menu justify-end nav-light">
            <li className="sub-menu-item">
              <Link href="/">Home</Link>
            </li>
            <li className="sub-menu-item">
              <Link href="/jobs">Jobs</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
          </ul>
          {/*end navigation menu*/}
        </div>
        {/*end navigation*/}
      </div>
      {/*end container*/}
    </nav>
  );
}
