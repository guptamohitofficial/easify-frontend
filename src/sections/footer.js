"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Start Footer */}
      <footer className="relative bg-slate-900 dark:bg-slate-800">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="relative py-12">
              {/* Subscribe */}
              <div className="relative w-full">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                  <div className="md:col-span-3">
                    <a
                      href="#"
                      className="flex justify-center md:justify-start focus:outline-none"
                    >
                      <img
                        src="/assets/images/logo-light.png"
                        className=""
                        alt=""
                      />
                    </a>
                  </div>
                  {/*end col*/}
                  <div className="md:col-span-9">
                    <ul className="list-disc footer-list md:text-end text-center space-x-3">
                      <li className="inline-block">
                        <a
                          href="index.html"
                          className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium"
                        >
                          Home
                        </a>
                      </li>
                      <li className="inline-block mt-[10px] md:mt-0">
                        <a
                          href="services.html"
                          className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium"
                        >
                          How it works
                        </a>
                      </li>
                      <li className="inline-block mt-[10px] md:mt-0">
                        <a
                          href=""
                          className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium"
                        >
                          Create a job
                        </a>
                      </li>
                      <li className="inline-block mt-[10px] md:mt-0">
                        <a
                          href="aboutus.html"
                          className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium"
                        >
                          About us
                        </a>
                      </li>
                      <li className="inline-block mt-[10px] md:mt-0">
                        <a
                          href="contact.html"
                          className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium"
                        >
                          Contact us
                        </a>
                      </li>
                    </ul>
                    {/*end icon*/}
                  </div>
                  {/*end col*/}
                </div>
                {/*end grid*/}
              </div>
              {/* Subscribe */}
            </div>
          </div>
        </div>
        {/*end container*/}
        <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
          <div className="container text-center">
            <div className="grid md:grid-cols-2 items-center gap-6">
              <div className="md:text-start text-center">
                <p className="mb-0 text-gray-300 font-medium">
                  © <Link href='https://worksnet.in' target="_blank">WorksNet.</Link> Design with{" "}
                  <i className="mdi mdi-heart text-red-600" /> by{" "}
                  <Link
                    href="https://worksnet.in"
                    target="_blank"
                    className="text-reset"
                  >
                    WorksNet
                  </Link>
                  .
                </p>
              </div>
              <ul className="list-none md:text-end text-center space-x-0.5">
                <li className="inline">
                  <a
                    href="https://www.linkedin.com/in/garima-s-184422329"
                    target="_blank"
                    className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
                  >
                    <i className="uil uil-linkedin" title="Linkedin" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="mailto:garima@worksnet.in"
                    className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
                  >
                    <i
                      className="uil uil-envelope align-middle"
                      title="email"
                    />
                  </a>
                </li>
              </ul>
              {/*end icon*/}
            </div>
            {/*end grid*/}
          </div>
          {/*end container*/}
        </div>
      </footer>
      {/*end footer*/}
      {/* End Footer */}
      {/* Switcher */}
      <div className="fixed top-1/4 -left-2 z-50">
        <span className="relative inline-block rotate-90">
          <input
            type="checkbox"
            className="checkbox opacity-0 absolute"
            id="chk"
          />
          <label
            className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
            htmlFor="chk"
          >
            <i className="uil uil-moon text-[20px] text-yellow-500" />
            <i className="uil uil-sun text-[20px] text-yellow-500" />
            <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7" />
          </label>
        </span>
      </div>
      {/* Switcher */}
      {/* Back to top */}
      <button
        onClick={() => topFunction()}
        id="back-to-top"
        className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 size-9 text-center bg-emerald-600 text-white justify-center items-center"
      >
        <i className="uil uil-arrow-up" />
      </button>
      {/* Back to top */}
    </>
  );
}
