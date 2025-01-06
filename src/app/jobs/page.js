"use client";

export default function Jobs() {
  return (
    <>
      {/* Start Hero */}
      <section className="relative table w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-emerald-900/90" />
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">
              Job Vacancies
            </h3>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
            <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
              <a href="/">Easify</a>
            </li>
            <li
              className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Job Listing
            </li>
          </ul>
        </div>
      </section>
      {/*end section*/}
      <div className="relative">
        <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      {/* End Hero */}
      {/* Start */}
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-6">
              <div className="shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                <form>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label htmlFor="searchname" className="font-semibold">
                        Search Company
                      </label>
                      <div className="relative mt-2">
                        <i className="uil uil-search text-lg absolute top-[5px] start-3" />
                        <input
                          name="search"
                          id="searchname"
                          type="text"
                          className="form-input border border-slate-100 dark:border-slate-800 ps-10"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-semibold">Categories</label>
                      <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                        <option value="WD">Web Designer</option>
                        <option value="WD">Web Developer</option>
                        <option value="UI">UI / UX Desinger</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-semibold">Location</label>
                      <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                        <option value="NY">New York</option>
                        <option value="MC">North Carolina</option>
                        <option value="SC">South Carolina</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-semibold">Job Types</label>
                      <div className="block mt-2">
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              defaultValue=""
                              id="fulltime"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              htmlFor="fulltime"
                            >
                              Full Time
                            </label>
                          </div>
                          <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            3
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              defaultValue=""
                              id="parttime"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              htmlFor="parttime"
                            >
                              Part Time
                            </label>
                          </div>
                          <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            7
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              defaultValue=""
                              id="Freelancing"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              htmlFor="Freelancing"
                            >
                              Freelancing
                            </label>
                          </div>
                          <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            4
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              defaultValue=""
                              id="fixedprice"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              htmlFor="fixedprice"
                            >
                              Fixed Price
                            </label>
                          </div>
                          <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            6
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              defaultValue=""
                              id="Remote"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              htmlFor="Remote"
                            >
                              Remote
                            </label>
                          </div>
                          <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            7
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              defaultValue=""
                              id="hourlybasis"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              htmlFor="hourlybasis"
                            >
                              Hourly Basis
                            </label>
                          </div>
                          <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            44
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="font-semibold">Salary</label>
                      <div className="block mt-2">
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              name="radio-colors"
                              defaultValue={1}
                              defaultChecked=""
                            />
                            <span className="text-slate-400">10k - 15k</span>
                          </label>
                        </div>
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              name="radio-colors"
                              defaultValue={1}
                            />
                            <span className="text-slate-400">15k - 25k</span>
                          </label>
                        </div>
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              name="radio-colors"
                              defaultValue={1}
                            />
                            <span className="text-slate-400">
                              more than 25K
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <input
                        type="submit"
                        className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full"
                        defaultValue="Apply Filter"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/*end col*/}
            <div className="lg:col-span-8 md:col-span-6">
              <div className="grid grid-cols-1 gap-[30px]">
                <div className="group relative overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 hover:-mt-2 rounded-md transition-all duration-500 h-fit">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="size-14 min-w-[56px] flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="assets/images/company/facebook-logo.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="job-detail-three.html"
                          className="inline-block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500 me-1"
                        >
                          Web Designer
                        </a>
                        <span className="inline-block text-sm text-slate-400">
                          2 days ago
                        </span>
                        <div>
                          <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                            Full Time
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Est. time:{" "}
                            <span className="text-slate-400">
                              1 to 3 months
                            </span>
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Hourly:{" "}
                            <span className="text-slate-400">$16 - $20</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 py-3">
                      Looking for an experienced Web Designer for an our
                      company.
                    </p>
                    <div>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        HTML
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        CSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SASS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SCSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Photoshop
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Graphics
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Bootstrap
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 lg:flex justify-between items-center">
                    <div className="lg:inline-block flex justify-between">
                      <span className="inline-block me-1 font-semibold">
                        <i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1" />
                        Verified
                      </span>
                      <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                      </ul>
                      <span className="inline-block me-1 text-slate-400">
                        <i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1" />
                        Australia
                      </span>
                    </div>
                    <a
                      href="job-apply.html"
                      className="btn btn-sm rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4"
                    >
                      Apply Now
                    </a>
                  </div>
                  <a
                    href=""
                    className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white absolute top-0 end-0 m-3"
                  >
                    <i data-feather="bookmark" className="size-4" />
                  </a>
                </div>
                {/*end content*/}
                <div className="group relative overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 hover:-mt-2 rounded-md transition-all duration-500 h-fit">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="size-14 min-w-[56px] flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="assets/images/company/google-logo.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="job-detail-three.html"
                          className="inline-block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500 me-1"
                        >
                          Marketing Director
                        </a>
                        <span className="inline-block text-sm text-slate-400">
                          2 days ago
                        </span>
                        <div>
                          <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                            Part Time
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Est. time:{" "}
                            <span className="text-slate-400">
                              1 to 3 months
                            </span>
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Hourly:{" "}
                            <span className="text-slate-400">$16 - $20</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 py-3">
                      Looking for an experienced Web Designer for an our
                      company.
                    </p>
                    <div>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        HTML
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        CSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SASS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SCSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Photoshop
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Graphics
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Bootstrap
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 lg:flex justify-between items-center">
                    <div className="lg:inline-block flex justify-between">
                      <span className="inline-block me-1 font-semibold">
                        <i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1" />
                        Verified
                      </span>
                      <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                      </ul>
                      <span className="inline-block me-1 text-slate-400">
                        <i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1" />
                        USA
                      </span>
                    </div>
                    <a
                      href="job-apply.html"
                      className="btn btn-sm rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4"
                    >
                      Apply Now
                    </a>
                  </div>
                  <a
                    href=""
                    className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white absolute top-0 end-0 m-3"
                  >
                    <i data-feather="bookmark" className="size-4" />
                  </a>
                </div>
                {/*end content*/}
                <div className="group relative overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 hover:-mt-2 rounded-md transition-all duration-500 h-fit">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="size-14 min-w-[56px] flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="assets/images/company/android.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="job-detail-three.html"
                          className="inline-block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500 me-1"
                        >
                          App Developer
                        </a>
                        <span className="inline-block text-sm text-slate-400">
                          2 days ago
                        </span>
                        <div>
                          <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                            Remote
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Est. time:{" "}
                            <span className="text-slate-400">
                              1 to 3 months
                            </span>
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Hourly:{" "}
                            <span className="text-slate-400">$16 - $20</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 py-3">
                      Looking for an experienced Web Designer for an our
                      company.
                    </p>
                    <div>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        HTML
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        CSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SASS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SCSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Photoshop
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Graphics
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Bootstrap
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 lg:flex justify-between items-center">
                    <div className="lg:inline-block flex justify-between">
                      <span className="inline-block me-1 font-semibold">
                        <i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1" />
                        Verified
                      </span>
                      <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                      </ul>
                      <span className="inline-block me-1 text-slate-400">
                        <i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1" />
                        China
                      </span>
                    </div>
                    <a
                      href="job-apply.html"
                      className="btn btn-sm rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4"
                    >
                      Apply Now
                    </a>
                  </div>
                  <a
                    href=""
                    className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white absolute top-0 end-0 m-3"
                  >
                    <i data-feather="bookmark" className="size-4" />
                  </a>
                </div>
                {/*end content*/}
                <div className="group relative overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 hover:-mt-2 rounded-md transition-all duration-500 h-fit">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="size-14 min-w-[56px] flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="assets/images/company/lenovo-logo.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="job-detail-three.html"
                          className="inline-block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500 me-1"
                        >
                          Product Designer
                        </a>
                        <span className="inline-block text-sm text-slate-400">
                          2 days ago
                        </span>
                        <div>
                          <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                            WFH
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Est. time:{" "}
                            <span className="text-slate-400">
                              1 to 3 months
                            </span>
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Hourly:{" "}
                            <span className="text-slate-400">$16 - $20</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 py-3">
                      Looking for an experienced Web Designer for an our
                      company.
                    </p>
                    <div>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        HTML
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        CSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SASS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SCSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Photoshop
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Graphics
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Bootstrap
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 lg:flex justify-between items-center">
                    <div className="lg:inline-block flex justify-between">
                      <span className="inline-block me-1 font-semibold">
                        <i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1" />
                        Verified
                      </span>
                      <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                      </ul>
                      <span className="inline-block me-1 text-slate-400">
                        <i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1" />
                        Dubai
                      </span>
                    </div>
                    <a
                      href="job-apply.html"
                      className="btn btn-sm rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4"
                    >
                      Apply Now
                    </a>
                  </div>
                  <a
                    href=""
                    className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white absolute top-0 end-0 m-3"
                  >
                    <i data-feather="bookmark" className="size-4" />
                  </a>
                </div>
                {/*end content*/}
                <div className="group relative overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 hover:-mt-2 rounded-md transition-all duration-500 h-fit">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="size-14 min-w-[56px] flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="assets/images/company/spotify.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="job-detail-three.html"
                          className="inline-block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500 me-1"
                        >
                          C++ Developer
                        </a>
                        <span className="inline-block text-sm text-slate-400">
                          2 days ago
                        </span>
                        <div>
                          <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                            Full Time
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Est. time:{" "}
                            <span className="text-slate-400">
                              1 to 3 months
                            </span>
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Hourly:{" "}
                            <span className="text-slate-400">$16 - $20</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 py-3">
                      Looking for an experienced Web Designer for an our
                      company.
                    </p>
                    <div>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        HTML
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        CSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SASS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SCSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Photoshop
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Graphics
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Bootstrap
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 lg:flex justify-between items-center">
                    <div className="lg:inline-block flex justify-between">
                      <span className="inline-block me-1 font-semibold">
                        <i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1" />
                        Verified
                      </span>
                      <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                      </ul>
                      <span className="inline-block me-1 text-slate-400">
                        <i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1" />
                        India
                      </span>
                    </div>
                    <a
                      href="job-apply.html"
                      className="btn btn-sm rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4"
                    >
                      Apply Now
                    </a>
                  </div>
                  <a
                    href=""
                    className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white absolute top-0 end-0 m-3"
                  >
                    <i data-feather="bookmark" className="size-4" />
                  </a>
                </div>
                {/*end content*/}
                <div className="group relative overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 hover:-mt-2 rounded-md transition-all duration-500 h-fit">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="size-14 min-w-[56px] flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="assets/images/company/linkedin.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="job-detail-three.html"
                          className="inline-block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500 me-1"
                        >
                          Php Developer
                        </a>
                        <span className="inline-block text-sm text-slate-400">
                          2 days ago
                        </span>
                        <div>
                          <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                            Remote
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Est. time:{" "}
                            <span className="text-slate-400">
                              1 to 3 months
                            </span>
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Hourly:{" "}
                            <span className="text-slate-400">$16 - $20</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 py-3">
                      Looking for an experienced Web Designer for an our
                      company.
                    </p>
                    <div>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        HTML
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        CSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SASS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SCSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Photoshop
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Graphics
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Bootstrap
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 lg:flex justify-between items-center">
                    <div className="lg:inline-block flex justify-between">
                      <span className="inline-block me-1 font-semibold">
                        <i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1" />
                        Verified
                      </span>
                      <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                      </ul>
                      <span className="inline-block me-1 text-slate-400">
                        <i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1" />
                        Pakistan
                      </span>
                    </div>
                    <a
                      href="job-apply.html"
                      className="btn btn-sm rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4"
                    >
                      Apply Now
                    </a>
                  </div>
                  <a
                    href=""
                    className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white absolute top-0 end-0 m-3"
                  >
                    <i data-feather="bookmark" className="size-4" />
                  </a>
                </div>
                {/*end content*/}
                <div className="group relative overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 hover:-mt-2 rounded-md transition-all duration-500 h-fit">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="size-14 min-w-[56px] flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="assets/images/company/circle-logo.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="job-detail-three.html"
                          className="inline-block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500 me-1"
                        >
                          Web Designer
                        </a>
                        <span className="inline-block text-sm text-slate-400">
                          2 days ago
                        </span>
                        <div>
                          <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                            Full Time
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Est. time:{" "}
                            <span className="text-slate-400">
                              1 to 3 months
                            </span>
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Hourly:{" "}
                            <span className="text-slate-400">$16 - $20</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 py-3">
                      Looking for an experienced Web Designer for an our
                      company.
                    </p>
                    <div>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        HTML
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        CSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SASS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SCSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Photoshop
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Graphics
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Bootstrap
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 lg:flex justify-between items-center">
                    <div className="lg:inline-block flex justify-between">
                      <span className="inline-block me-1 font-semibold">
                        <i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1" />
                        Verified
                      </span>
                      <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                      </ul>
                      <span className="inline-block me-1 text-slate-400">
                        <i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1" />
                        Australia
                      </span>
                    </div>
                    <a
                      href="job-apply.html"
                      className="btn btn-sm rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4"
                    >
                      Apply Now
                    </a>
                  </div>
                  <a
                    href=""
                    className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white absolute top-0 end-0 m-3"
                  >
                    <i data-feather="bookmark" className="size-4" />
                  </a>
                </div>
                {/*end content*/}
                <div className="group relative overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 hover:-mt-2 rounded-md transition-all duration-500 h-fit">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="size-14 min-w-[56px] flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="assets/images/company/skype.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="job-detail-three.html"
                          className="inline-block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500 me-1"
                        >
                          Marketing Director
                        </a>
                        <span className="inline-block text-sm text-slate-400">
                          2 days ago
                        </span>
                        <div>
                          <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                            Part Time
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Est. time:{" "}
                            <span className="text-slate-400">
                              1 to 3 months
                            </span>
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Hourly:{" "}
                            <span className="text-slate-400">$16 - $20</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 py-3">
                      Looking for an experienced Web Designer for an our
                      company.
                    </p>
                    <div>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        HTML
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        CSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SASS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SCSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Photoshop
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Graphics
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Bootstrap
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 lg:flex justify-between items-center">
                    <div className="lg:inline-block flex justify-between">
                      <span className="inline-block me-1 font-semibold">
                        <i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1" />
                        Verified
                      </span>
                      <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                      </ul>
                      <span className="inline-block me-1 text-slate-400">
                        <i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1" />
                        USA
                      </span>
                    </div>
                    <a
                      href="job-apply.html"
                      className="btn btn-sm rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4"
                    >
                      Apply Now
                    </a>
                  </div>
                  <a
                    href=""
                    className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white absolute top-0 end-0 m-3"
                  >
                    <i data-feather="bookmark" className="size-4" />
                  </a>
                </div>
                {/*end content*/}
                <div className="group relative overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 hover:-mt-2 rounded-md transition-all duration-500 h-fit">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="size-14 min-w-[56px] flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="assets/images/company/snapchat.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="job-detail-three.html"
                          className="inline-block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500 me-1"
                        >
                          App Developer
                        </a>
                        <span className="inline-block text-sm text-slate-400">
                          2 days ago
                        </span>
                        <div>
                          <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                            Remote
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Est. time:{" "}
                            <span className="text-slate-400">
                              1 to 3 months
                            </span>
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Hourly:{" "}
                            <span className="text-slate-400">$16 - $20</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 py-3">
                      Looking for an experienced Web Designer for an our
                      company.
                    </p>
                    <div>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        HTML
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        CSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SASS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SCSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Photoshop
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Graphics
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Bootstrap
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 lg:flex justify-between items-center">
                    <div className="lg:inline-block flex justify-between">
                      <span className="inline-block me-1 font-semibold">
                        <i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1" />
                        Verified
                      </span>
                      <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                      </ul>
                      <span className="inline-block me-1 text-slate-400">
                        <i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1" />
                        China
                      </span>
                    </div>
                    <a
                      href="job-apply.html"
                      className="btn btn-sm rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4"
                    >
                      Apply Now
                    </a>
                  </div>
                  <a
                    href=""
                    className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white absolute top-0 end-0 m-3"
                  >
                    <i data-feather="bookmark" className="size-4" />
                  </a>
                </div>
                {/*end content*/}
                <div className="group relative overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 hover:-mt-2 rounded-md transition-all duration-500 h-fit">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="size-14 min-w-[56px] flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="assets/images/company/shree-logo.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="job-detail-three.html"
                          className="inline-block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500 me-1"
                        >
                          Product Designer
                        </a>
                        <span className="inline-block text-sm text-slate-400">
                          2 days ago
                        </span>
                        <div>
                          <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                            WFH
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Est. time:{" "}
                            <span className="text-slate-400">
                              1 to 3 months
                            </span>
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Hourly:{" "}
                            <span className="text-slate-400">$16 - $20</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 py-3">
                      Looking for an experienced Web Designer for an our
                      company.
                    </p>
                    <div>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        HTML
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        CSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SASS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SCSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Photoshop
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Graphics
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Bootstrap
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 lg:flex justify-between items-center">
                    <div className="lg:inline-block flex justify-between">
                      <span className="inline-block me-1 font-semibold">
                        <i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1" />
                        Verified
                      </span>
                      <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                      </ul>
                      <span className="inline-block me-1 text-slate-400">
                        <i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1" />
                        Dubai
                      </span>
                    </div>
                    <a
                      href="job-apply.html"
                      className="btn btn-sm rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4"
                    >
                      Apply Now
                    </a>
                  </div>
                  <a
                    href=""
                    className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white absolute top-0 end-0 m-3"
                  >
                    <i data-feather="bookmark" className="size-4" />
                  </a>
                </div>
                {/*end content*/}
                <div className="group relative overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 hover:-mt-2 rounded-md transition-all duration-500 h-fit">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="size-14 min-w-[56px] flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="assets/images/company/telegram.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="job-detail-three.html"
                          className="inline-block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500 me-1"
                        >
                          C++ Developer
                        </a>
                        <span className="inline-block text-sm text-slate-400">
                          2 days ago
                        </span>
                        <div>
                          <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                            Full Time
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Est. time:{" "}
                            <span className="text-slate-400">
                              1 to 3 months
                            </span>
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Hourly:{" "}
                            <span className="text-slate-400">$16 - $20</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 py-3">
                      Looking for an experienced Web Designer for an our
                      company.
                    </p>
                    <div>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        HTML
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        CSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SASS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SCSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Photoshop
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Graphics
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Bootstrap
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 lg:flex justify-between items-center">
                    <div className="lg:inline-block flex justify-between">
                      <span className="inline-block me-1 font-semibold">
                        <i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1" />
                        Verified
                      </span>
                      <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                      </ul>
                      <span className="inline-block me-1 text-slate-400">
                        <i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1" />
                        India
                      </span>
                    </div>
                    <a
                      href="job-apply.html"
                      className="btn btn-sm rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4"
                    >
                      Apply Now
                    </a>
                  </div>
                  <a
                    href=""
                    className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white absolute top-0 end-0 m-3"
                  >
                    <i data-feather="bookmark" className="size-4" />
                  </a>
                </div>
                {/*end content*/}
                <div className="group relative overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 hover:-mt-2 rounded-md transition-all duration-500 h-fit">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="size-14 min-w-[56px] flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="assets/images/company/whatsapp.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="job-detail-three.html"
                          className="inline-block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500 me-1"
                        >
                          Php Developer
                        </a>
                        <span className="inline-block text-sm text-slate-400">
                          2 days ago
                        </span>
                        <div>
                          <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                            Remote
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Est. time:{" "}
                            <span className="text-slate-400">
                              1 to 3 months
                            </span>
                          </span>
                          <span className="text-sm font-medium inline-block me-1">
                            Hourly:{" "}
                            <span className="text-slate-400">$16 - $20</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 py-3">
                      Looking for an experienced Web Designer for an our
                      company.
                    </p>
                    <div>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        HTML
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        CSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SASS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        SCSS
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Photoshop
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Graphics
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                        Bootstrap
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 lg:flex justify-between items-center">
                    <div className="lg:inline-block flex justify-between">
                      <span className="inline-block me-1 font-semibold">
                        <i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1" />
                        Verified
                      </span>
                      <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star text-lg" />
                        </li>
                      </ul>
                      <span className="inline-block me-1 text-slate-400">
                        <i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1" />
                        Pakistan
                      </span>
                    </div>
                    <a
                      href="job-apply.html"
                      className="btn btn-sm rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4"
                    >
                      Apply Now
                    </a>
                  </div>
                  <a
                    href=""
                    className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white absolute top-0 end-0 m-3"
                  >
                    <i data-feather="bookmark" className="size-4" />
                  </a>
                </div>
                {/*end content*/}
              </div>
              {/*end grid*/}
              <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center">
                  <nav aria-label="Page navigation example">
                    <ul className="inline-flex items-center -space-x-px">
                      <li>
                        <a
                          href="#"
                          className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
                        >
                          <i className="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
                        >
                          1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-current="page"
                          className="z-10 size-[40px] inline-flex justify-center items-center text-white bg-emerald-600 border border-emerald-600"
                        >
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
                        >
                          4
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
                        >
                          5
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
                        >
                          <i className="uil uil-angle-right text-[20px] rtl:rotate-180 rtl:-mt-1" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/*end col*/}
              </div>
              {/*end grid*/}
            </div>
          </div>
        </div>
        {/*end container*/}
        <div className="container md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
              Here's why you'll love it Easify
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30000+
              companies worldwide.
            </p>
          </div>
          {/*end grid*/}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
              <div className="size-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
                <i className="uil uil-phone text-[30px] text-emerald-600 group-hover:text-white" />
              </div>
              <div className="mt-4">
                <a
                  href=""
                  className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500"
                >
                  24/7 Support
                </a>
                <p className="text-slate-400 mt-3 mb-2">
                  Many desktop publishing now use and a search for job.
                </p>
                <a
                  href=""
                  className="hover:text-emerald-600 font-medium transition-all duration-500"
                >
                  Read More <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
            {/*end content*/}
            <div className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
              <div className="size-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
                <i className="uil uil-atom text-[30px] text-emerald-600 group-hover:text-white" />
              </div>
              <div className="mt-4">
                <a
                  href=""
                  className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500"
                >
                  Tech &amp; Startup Jobs
                </a>
                <p className="text-slate-400 mt-3 mb-2">
                  Many desktop publishing now use and a search for job.
                </p>
                <a
                  href=""
                  className="hover:text-emerald-600 font-medium transition-all duration-500"
                >
                  Read More <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
            {/*end content*/}
            <div className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
              <div className="size-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
                <i className="uil uil-user-arrows text-[30px] text-emerald-600 group-hover:text-white" />
              </div>
              <div className="mt-4">
                <a
                  href=""
                  className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500"
                >
                  Quick &amp; Easy
                </a>
                <p className="text-slate-400 mt-3 mb-2">
                  Many desktop publishing now use and a search for job.
                </p>
                <a
                  href=""
                  className="hover:text-emerald-600 font-medium transition-all duration-500"
                >
                  Read More <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
            {/*end content*/}
            <div className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
              <div className="size-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
                <i className="uil uil-hourglass text-[30px] text-emerald-600 group-hover:text-white" />
              </div>
              <div className="mt-4">
                <a
                  href=""
                  className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500"
                >
                  Save Time
                </a>
                <p className="text-slate-400 mt-3 mb-2">
                  Many desktop publishing now use and a search for job.
                </p>
                <a
                  href=""
                  className="hover:text-emerald-600 font-medium transition-all duration-500"
                >
                  Read More <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
            {/*end content*/}
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
        <div className="container-fluid md:mt-24 mt-16">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                  <div className="lg:col-span-8 md:col-span-7">
                    <div className="md:text-start text-center relative z-1">
                      <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
                        Explore a job now!
                      </h3>
                      <p className="text-slate-400 max-w-xl">
                        Search all the open positions on the web. Get your own
                        personalized salary estimate. Read reviews on over
                        30000+ companies worldwide.
                      </p>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="lg:col-span-4 md:col-span-5">
                    <div className="text-end relative z-1">
                      <a
                        href="employer-detail.html"
                        className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md"
                      >
                        Apply Now
                      </a>
                      <a
                        href="aboutus.html"
                        className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ms-2"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end grid*/}
                <div className="absolute -top-5 -start-5">
                  <div className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45" />
                </div>
                <div className="absolute -bottom-5 -end-5">
                  <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90" />
                </div>
              </div>
            </div>
            {/*end grid*/}
          </div>
          {/*end container*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End */}
    </>
  );
}
