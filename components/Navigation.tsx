"use client";
import React from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav className="max-md:flex-col box-border flex absolute z-10 justify-between items-center p-0 m-0 h-9 inset-x-[50px] top-[25px] max-md:inset-x-5 max-sm:inset-x-4">
      <img
        src="/FinfulLogo.png"
        alt="Finful Logo"
        className="box-border p-0 m-0 h-[33px] w-[115px] max-sm:h-7 max-sm:w-[100px]"
      />
      <div className="max-md:flex-col box-border flex gap-12 items-center p-0 m-0">
        <Link
          href="#"
          className="box-border p-0 m-0 text-base font-semibold tracking-normal leading-6 cursor-pointer text-slate-500"
        >
          Công cụ tài chính
        </Link>
        <Link
          href="#"
          className="box-border p-0 m-0 text-base font-semibold tracking-normal leading-6 cursor-pointer text-slate-500"
        >
          Giáo dục tài chính
        </Link>
        <Link
          href="#"
          className="box-border p-0 m-0 text-base font-semibold tracking-normal leading-6 cursor-pointer text-slate-500"
        >
          Về Finful
        </Link>
        <Link
          href="#"
          className="box-border p-0 m-0 text-base font-semibold tracking-normal leading-6 cursor-pointer text-slate-500"
        >
          Liên hệ
        </Link>
        <Link
          href="https://muanha.finful.co/"
          className="box-border flex flex-col gap-2.5 justify-center items-center px-3 py-2 m-0 h-9 bg-cyan-600 rounded-lg shadow-sm cursor-pointer w-[194px]"
        >
          <div className="box-border flex gap-2.5 items-center self-stretch p-0 m-0">
            <span className="box-border p-0 m-0 text-sm font-medium tracking-normal leading-6 text-center text-white">
              Lập kế hoạch mua nhà
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="box-border p-0 m-0 w-3 h-3"
            >
              <g clipPath="url(#clip0_373_133)">
                <path
                  d="M1.25 5.79529H11.75"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.45435 1.5L11.7498 5.79545L7.45435 10.0909"
                  stroke="white"
                  strokeWidth="1.27273"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_373_133">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </Link>
      </div>
      <div className="box-border hidden p-0 m-0 text-2xl cursor-pointer text-slate-500 max-md:block">
        <i className="ti ti-menu-2 box-border p-0 m-0" />
      </div>
    </nav>
  );
};

export default Navigation;
