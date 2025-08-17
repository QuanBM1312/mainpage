"use client";
import React from "react";

const FinancialPlanPreview: React.FC = () => {
  return (
    <div className="box-border overflow-hidden absolute p-0 m-0 rounded-xl h-[206px] left-[30px] top-[311px] w-[587px] max-md:relative max-md:left-0 max-md:top-5 max-md:w-full max-md:h-auto">
      <img
        src="/Financial_plan_background.png"
        alt="Financial plan background"
        className="box-border object-cover absolute top-0 left-0 p-0 m-0 rounded-xl h-[206px] w-[585px]"
      />
      <nav className="box-border flex absolute left-0 gap-1 justify-center items-center p-0 m-0 h-[30px] top-[11px] w-[585px] max-sm:flex-wrap max-sm:gap-2 max-sm:h-auto">
        <button className="box-border flex gap-2.5 justify-center items-center px-2.5 py-1.5 m-0 rounded-md border-white border-solid cursor-pointer border-[0.5px] max-sm:min-w-20">
          <span className="box-border p-0 m-0 text-xs font-medium text-black">
            Tích luỹ
          </span>
        </button>
        <button className="box-border flex gap-2.5 justify-center items-center px-2.5 py-1.5 m-0 rounded-md border-white border-solid cursor-pointer border-[0.5px] max-sm:min-w-20">
          <span className="box-border p-0 m-0 text-xs font-medium text-white">
            Chi tiêu
          </span>
        </button>
        <button className="box-border flex gap-2.5 justify-center items-center px-2.5 py-1.5 m-0 rounded-md border-white border-solid cursor-pointer border-[0.5px] max-sm:min-w-20">
          <span className="box-border p-0 m-0 text-xs font-medium text-white">
            Vay mượn
          </span>
        </button>
        <button className="box-border flex gap-2.5 justify-center items-center px-2.5 py-1.5 m-0 rounded-md border-white border-solid cursor-pointer border-[0.5px] max-sm:min-w-20">
          <span className="box-border p-0 m-0 text-xs font-medium text-white">
            Dự phòng
          </span>
        </button>
        <button className="box-border flex gap-2.5 justify-center items-center px-2.5 py-1.5 m-0 rounded-md border-white border-solid cursor-pointer border-[0.5px] max-sm:min-w-20">
          <span className="box-border p-0 m-0 text-xs font-medium text-white">
            Bảo vệ
          </span>
        </button>
      </nav>
      <article className="box-border flex absolute left-2.5 flex-col gap-2.5 justify-center items-start p-3.5 m-0 bg-white rounded-xl h-[95px] top-[55px] w-[567px]">
        <div className="box-border flex flex-col gap-1.5 items-start p-0 m-0 w-[534px]">
          <h4 className="box-border self-stretch p-0 m-0 text-xs font-semibold leading-4 text-black">
            MỤC TIÊU TÍCH LUỸ
          </h4>
          <p className="box-border self-stretch p-0 m-0 text-xs leading-4 text-black">
            Tăng lương trung bình 7%/năm, có thêm thu nhập khác và đảm bảo đầu
            tư sinh lời 11%/năm.
          </p>
        </div>
      </article>
    </div>
  );
};

export default FinancialPlanPreview;
