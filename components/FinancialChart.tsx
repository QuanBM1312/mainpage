import React from "react";

const FinancialChart: React.FC = () => {
  return (
    <div>
      <div className="box-border absolute p-0 m-0 bg-white rounded-xl border border-solid shadow-sm border-zinc-300 h-[267px] left-[30px] top-[25px] w-[587px] max-md:relative max-md:top-0 max-md:left-0 max-md:w-full max-md:h-auto">
        <img
          src="URL_HINH_ANH_BIEU_DO_CUA_BAN"
          alt="Tổng quan kế hoạch tài chính"
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="box-border absolute p-0 m-0 bg-white rounded-xl border border-solid shadow-sm border-zinc-300 h-[267px] left-[30px] top-[25px] w-[587px] max-md:relative max-md:top-0 max-md:left-0 max-md:w-full max-md:h-auto">
        <img
          src="URL_HINH_ANH_BIEU_DO_CUA_BAN"
          alt="Tổng quan kế hoạch tài chính"
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default FinancialChart;
