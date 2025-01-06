"use client";

import JobCardAbstract from "@/components/job-card-abstract";
import { useGlobalContext } from "@/context/global";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [searchLocationOptions, setSearchLocationOptions] = useState([]);
  const [topJobServices, setTopJobServices] = useState([]);

  const { allJobs, allCompanies } = useGlobalContext();

  useEffect(() => {
    setSearchLocationOptions([
      "Anywhere",
      "Bengaluru",
      "Hyderabad",
      "Mumbai",
      "New Delhi",
      "Noida",
      "Gurgaon",
      "Faridabad",
      "Ghaziabad",
      "Pune",
      "Chennai",
      "Kolkata",
      "Ahmedabad",
      "Jaipur",
      "Chandigarh",
      "Kochi",
      "Indore",
      "Lucknow",
      "Surat",
      "Nagpur",
      "Bhopal",
      "Vadodara",
      "Bhubaneswar",
      "Coimbatore",
      "Thiruvananthapuram",
    ]);
    setTopJobServices([
      {
        title: "Product & Branding Design",
        image: "/assets/images/work/01.jpg",
        link: "",
      },
      {
        title: "Sales Executive",
        image: "/assets/images/work/03.jpg",
        link: "",
      },
      {
        title: "Admin & Customer Support",
        image: "/assets/images/work/04.jpg",
        link: "",
      },
      {
        title: "UX / UI Designer",
        image: "/assets/images/work/05.jpg",
        link: "",
      },
      {
        title: "Digital Marketing",
        image: "/assets/images/work/06.jpg",
        link: "",
      },
      {
        title: "Marketing Lead",
        image: "/assets/images/work/03.jpg",
        link: "",
      },
    ]);
  }, []);

  return (
    <>
      {/* Hero Start */}
      <section
        style={{ backgroundImage: "url('/assets/images/hero/bg.jpg')" }}
        className="relative h-screen flex justify-center items-center bg-cover"
      >
        <div className="absolute inset-0 bg-emerald-900/80" />
        <div className="container z-1">
          <div className="grid grid-cols-1 text-center mt-10 relative">
            <h4 className="lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5 font-bold text-white">
              Find &amp; Hire Experts <br /> in {"<"} 2 weeks
            </h4>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Find Jobs &amp; Career Opportunities. Some of the companies we've
              helped grown 10X with efficient candidates.
            </p>
            <div className="d-flex" id="reserve-form">
              <div className="md:w-5/6 mx-auto">
                <div className="lg:col-span-10 mt-8">
                  <div className="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3">
                    <form action="/jobs">
                      <div className="registration-form text-dark text-start">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                          <div className="filter-search-form relative filter-border">
                            <i className="uil uil-briefcase-alt icons" />
                            <input
                              name="name"
                              type="text"
                              id="job-keyword"
                              className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                              placeholder="Search your Job Keywords"
                            />
                          </div>
                          <div className="filter-search-form relative filter-border">
                            <i className="uil uil-map-marker icons" />
                            <select
                              className="form-select"
                              data-trigger=""
                              name="location"
                              id="choices-location"
                              aria-label="Default select example"
                            >
                              {searchLocationOptions?.map((city) => (
                                <option key={city} value={city}>
                                  {city}
                                </option>
                              ))}
                            </select>
                          </div>
                          <input
                            type="submit"
                            id="search"
                            style={{ height: 60 }}
                            className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-100"
                            defaultValue="Search"
                          />
                        </div>
                        {/*end grid*/}
                      </div>
                      {/*end container*/}
                    </form>
                  </div>
                </div>
                {/*ed col*/}
              </div>
            </div>
            {/*end grid*/}
            <div className="mt-4">
              <span className="text-white/60">
                <span className="text-white">Popular Searches :</span> Sales,
                Marketing, Python Developer, AI Jobs, Executive Assistant,
                Founder's office
              </span>
            </div>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* Hero End */}
      {/* Start */}
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
            <div className="lg:col-span-8 md:col-span-6">
              <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
                Trending Jobs
              </h3>
              <p className="text-slate-400 max-w-xl">
                Search all the open positions with us. Get your own personalized
                review. Tune in for jobs across the globe.
              </p>
            </div>
          </div>
          {/*end grid*/}
          <div className="grid grid-cols-1 mt-7 relative">
            <div className="tiny-five-item">
              {topJobServices?.map((job, index) => (
                <div className="tiny-slide" key={index}>
                  <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 transition duration-500 m-1">
                    <img src={job.image} alt={job.title} />
                    <div className="absolute inset-0 bg-slate-900/50" />
                    <div className="absolute bottom-0 p-4">
                      <Link
                        href={job.link ? job.link : "#"}
                        className="text-lg font-semibold text-white hover:text-emerald-600 transition-all duration-500"
                      >
                        {job.title}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*grid*/}
        </div>
        {/*end container*/}
        <div className="container md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
              Popular Jobs
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Explore top career opportunities and take the next step towards
              success! Connect with industry leaders, showcase your skills, and
              unlock new possibilities. Start your exciting journey today —
              Apply now and make a real impact!
            </p>
          </div>
          {/*end grid*/}
          <div className="grid grid-cols-1 mt-8 gap-[30px]">
            {allJobs.length > 0 ? (
              allJobs?.map((job) => (
                <JobCardAbstract
                  key={job.job_description}
                  job={job}
                  company={allCompanies[job.company_id]}
                />
              ))
            ) : (
              <div className="grid md:grid-cols-1 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center">
                  Loading Jobs ...
                </div>
              </div>
            )}
          </div>
          {/*end grid*/}
          <div className="grid md:grid-cols-1 grid-cols-1 mt-8">
            <div className="md:col-span-12 text-center">
              <Link
                href="/jobs"
                className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
              >
                See More Jobs <i className="uil uil-arrow-right align-middle" />
              </Link>
            </div>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
        <div className="container md:mt-24 mt-16">
          <div className="grid grid-cols-1">
            <div className="relative overflow-hidden bg-emerald-600 rounded-md shadow dark:shadow-gray-700">
              <div className="grid md:grid-cols-2 items-center gap-[30px]">
                <div className="relative">
                  <img src="/assets/images/about/ab05.jpg" alt="" />
                  {/* <div className="absolute md:bottom-1/2 md:translate-y-1/2 md:-end-10 ltr:md:translate-x-0 rtl:md:translate-x-0 -bottom-10 end-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 text-center">
                    <a
                      href="#!"
                      data-type="youtube"
                      data-id="S_CGed6E610"
                      className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white"
                    >
                      <i className="mdi mdi-play inline-flex items-center justify-center text-2xl" />
                    </a>
                  </div> */}
                </div>
                <div>
                  <div className="text-white p-4">
                    <h4 className="leading-normal text-4xl mb-3 font-semibold">
                      Launch Your Career with Confidence!
                    </h4>
                    <p className="text-white/70 text-lg max-w-xl">
                      Discover exciting opportunities and take the first step
                      towards your dream job. Get personalized insights on
                      salaries and company reviews to make informed decisions
                      about your future.
                    </p>
                    <ul className="list-none text-white/50 mt-4">
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-white text-xl me-2" />{" "}
                        Innovative Job Matches for Your Skillset
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-white text-xl me-2" />{" "}
                        Expert Guidance and Career Resources
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-white text-xl me-2" />{" "}
                        Personalize Your Career Path with Our Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
        <div className="container md:mt-24 mt-16">
          <div className="relative grid md:grid-cols-3 grid-cols-1 items-center gap-[30px] z-1">
            <div className="counter-box text-center">
              <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white">
                <span className="counter-value" data-target={250}>
                  1
                </span>
                +
              </h1>
              <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">
                Job Fulfilled
              </h5>
            </div>
            {/*end counter box*/}
            <div className="counter-box text-center">
              <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white">
                <span className="counter-value" data-target={1060}>
                  700
                </span>
                +
              </h1>
              <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">
                Pre-vetted Candidates
              </h5>
            </div>
            {/*end counter box*/}
            <div className="counter-box text-center">
              <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white">
                <span className="counter-value" data-target={4}>
                  0
                </span>
                +
              </h1>
              <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">
                Years Experience
              </h5>
            </div>
            {/*end counter box*/}
          </div>
        </div>
        {/*end container*/}
        <div className="container md:mt-24 md:pb-16 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
              <div className="relative">
                <div className="relative flex justify-end">
                  <img
                    src="/assets/images/about/ab03.jpg"
                    className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700"
                    alt=""
                  />
                  <div className="absolute top-0 translate-y-2/4 start-0 text-center">
                    <a
                      href="#!"
                      data-type="youtube"
                      data-id="S_CGed6E610"
                      className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white"
                    >
                      <i className="mdi mdi-play inline-flex items-center justify-center text-2xl" />
                    </a>
                  </div>
                </div>
                <div className="absolute md:-start-5 start-0 -bottom-16">
                  <img
                    src="/assets/images/about/ab04.jpg"
                    className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0 md:order-1 order-2">
              <div className="lg:me-5">
                <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">
                  Find Best Companies.
                </h3>
                <p className="text-slate-400 max-w-xl">
                  Search all the open positions on the web. Get your own
                  personalized salary estimate. Read reviews on over 30000+
                  companies worldwide.
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">
                  <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                    <div className="flex items-center">
                      <div className="size-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="/assets/images/company/spotify.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="employer-detail.html"
                          className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
                        >
                          Spotify
                        </a>
                        <span className="block text-sm text-emerald-600">
                          5 Vacancy
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                    <div className="flex items-center">
                      <div className="size-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="/assets/images/company/facebook-logo.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="employer-detail.html"
                          className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
                        >
                          Facebook
                        </a>
                        <span className="block text-sm text-emerald-600">
                          5 Vacancy
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                    <div className="flex items-center">
                      <div className="size-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="/assets/images/company/google-logo.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="employer-detail.html"
                          className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
                        >
                          Google
                        </a>
                        <span className="block text-sm text-emerald-600">
                          5 Vacancy
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                    <div className="flex items-center">
                      <div className="size-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="/assets/images/company/android.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="employer-detail.html"
                          className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
                        >
                          Android
                        </a>
                        <span className="block text-sm text-emerald-600">
                          5 Vacancy
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                    <div className="flex items-center">
                      <div className="size-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="/assets/images/company/lenovo-logo.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="employer-detail.html"
                          className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
                        >
                          Lenovo
                        </a>
                        <span className="block text-sm text-emerald-600">
                          5 Vacancy
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                    <div className="flex items-center">
                      <div className="size-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                          src="/assets/images/company/linkedin.png"
                          className="size-8"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <a
                          href="employer-detail.html"
                          className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
                        >
                          Linkedin
                        </a>
                        <span className="block text-sm text-emerald-600">
                          5 Vacancy
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                  <div className="md:col-span-12">
                    <a
                      href=""
                      className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
                    >
                      See More Companies{" "}
                      <i className="uil uil-arrow-right align-middle" />
                    </a>
                  </div>
                </div>
                {/*end grid*/}
              </div>
            </div>
          </div>
        </div>
        {/*end container*/}
        <div className="container md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
              Recruiters QnA
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Find solutions to your key recruitment questions and improve your
              hiring process. Our team supports you at every step, ensuring
              access to exceptional talent and streamlined hiring.{" "}
            </p>
          </div>
          {/*end grid*/}
          <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div className="flex">
              <i
                data-feather="help-circle"
                className="h-8 text-emerald-600 me-3"
              />
              <div className="flex-1">
                <h5 className="mb-2 text-lg font-semibold">
                  How do <span className="text-emerald-600">Easify Jobs</span>{" "}
                  work ?
                </h5>
                <p className="text-slate-400">
                  Our platform pairs your requirements with top candidates,
                  ensuring expert review from industry leaders. Enjoy a seamless
                  experience from job post to onboarding with personalized
                  support.
                </p>
              </div>
            </div>
            <div className="flex">
              <i
                data-feather="help-circle"
                className="h-8 text-emerald-600 me-3"
              />
              <div className="flex-1">
                <h5 className="mb-2 text-lg font-semibold">
                  {" "}
                  Can I make unlimited Job Posts?
                </h5>
                <p className="text-slate-400">
                  Absolutely! Our system is designed for ease and flexibility,
                  allowing you to manage as much jobs as you need without
                  limitations, ensuring you can focus on what matters most.
                </p>
              </div>
            </div>
            <div className="flex">
              <i
                data-feather="help-circle"
                className="h-8 text-emerald-600 me-3"
              />
              <div className="flex-1">
                <h5 className="mb-2 text-lg font-semibold">
                  {" "}
                  How can I get started with{" "}
                  <span className="text-emerald-600">Easify Jobs</span>?
                </h5>
                <p className="text-slate-400">
                  Simply post your job and wait for approval on the job post to
                  go live, Our platform and team connects you with top talent,
                  streamlining your recruitment process for efficiency and
                  success.
                </p>
              </div>
            </div>
            <div className="flex">
              <i
                data-feather="help-circle"
                className="h-8 text-emerald-600 me-3"
              />
              <div className="flex-1">
                <h5 className="mb-2 text-lg font-semibold">
                  {" "}
                  Is <span className="text-emerald-600">Easify Jobs</span> safe
                  with my data?
                </h5>
                <p className="text-slate-400">
                  Your security is our priority. We employ advanced security
                  measures to protect your data, ensuring a safe and reliable
                  experience every step of the way.
                </p>
              </div>
            </div>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
        <div className="container-fluid md:mt-10 mt-10">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                  <div className="lg:col-span-8 md:col-span-7">
                    <div className="md:text-start text-center relative z-1">
                      <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
                        Exploring a job?
                      </h3>
                      <p className="text-slate-400 max-w-xl">
                        Advance your career! Submit your resume to explore
                        tailored opportunities and connect with companies that
                        value your talent. Unlock your potential with us!{" "}
                      </p>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="lg:col-span-4 md:col-span-5">
                    <div className="text-end relative z-1">
                      <Link
                        href={"https://2ly.link/22xZM"}
                        target="_blank"
                        className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md"
                      >
                        Submit Now
                      </Link>
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
        {/*end container*/}
        <div className="container-fluid md:mt-10 mt-10">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                  <div className="lg:col-span-8 md:col-span-7">
                    <div className="md:text-start text-center relative z-1">
                      <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
                        Find right candidates now!
                      </h3>
                      <p className="text-slate-400 max-w-xl">
                        Need top talent? Post your job requirements and access a
                        diverse pool of candidates. Streamline your hiring
                        process and connect with skilled professionals today!{" "}
                      </p>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="lg:col-span-4 md:col-span-5">
                    <div className="text-end relative z-1">
                      <Link
                        href={"https://2ly.link/22xZt"}
                        target="_blank"
                        className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md"
                      >
                        Post Job Now
                      </Link>
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
