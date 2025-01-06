"use client";
import Link from "next/link";

export default function JobCardAbstract({ job = {}, company = {} }) {
  return (
    <div className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5">
      <div className="flex items-center">
        <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
          <img src={company?.logo_url} className="size-8" alt="" />
        </div>
        <Link
          href={`/jobs/${job.job_id}`}
          className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]"
        >
          {job.job_title}
        </Link>
      </div>
      <div className="md:block flex justify-between md:mt-0 mt-4">
        <span className="block">
          <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">
            {job.employment_type}
          </span>
        </span>
        <span className="block text-slate-400 text- md:mt-1 mt-0">
          <i className="uil uil-clock" /> {job.years_of_exp_required}
        </span>
      </div>
      <div className="md:block flex justify-between md:mt-0 mt-2">
        <span className="text-slate-400">
          <i className="uil uil-map-marker" /> {job.location_city}
        </span>
        <span className="block font-semibold md:mt-1 mt-0">
          ₹{" "}
          {`${job.min_salary}${job.max_salary && ` - ${job.max_salary} `}${
            job.salary_end_text
          }`}
        </span>
      </div>
      <div className="md:mt-0 mt-4">
        <Link
          href={`/jobs/${job.job_id}/view#top`}
          className="btn btn-icon rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border-emerald-600/10 text-emerald-600 group-hover:text-white ms-1"
        >
          <i className="uil uil-arrow-up-right"></i>
        </Link>
        <Link
          href={`/jobs/${job.job_id}/view#apply-now`}
          className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto"
        >
          Apply Now
        </Link>
      </div>
      {job.highlight === "star" && (
        <span className="w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1">
          <i className="uil uil-star" />
        </span>
      )}
    </div>
  );
}
