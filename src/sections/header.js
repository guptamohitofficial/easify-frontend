"use client";

import Link from "next/link";

export default function Header() {
  return (
    <nav id="topnav" className="defaultscroll is-sticky">
      <div className="container">
        {/* Logo container*/}
        <Link className="logo" href="/">
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
        </Link>
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
            <Link
              href={"https://2ly.link/22xZt"}
              target="_blank"
              data-dropdown-toggle="dropdown"
              className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full"
              type="button"
            >
              Post Job
            </Link>
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
