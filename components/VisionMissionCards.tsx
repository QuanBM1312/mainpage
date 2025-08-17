import React from "react";

const VisionMissionCards: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="box-border flex flex-wrap justify-center gap-8 items-center pt-32 w-full">
        <article className="box-border flex flex-col gap-2.5 justify-center mx-2 items-center px-1 py-6 h-48 bg-white rounded-xl border border-teal-600 border-solid w-[564px] max-md:w-full max-md:max-w-[500px]">
          <div className="box-border flex flex-col py-5 gap-5 items-start w-[505px] max-sm:w-full">
            <header className=" box-border flex gap-3.5 items-center pl-3 pt-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 shadow-md">
                <img
                  src="/Security.png"
                  className="w-6 h-6"
                  alt="Security icon"
                />
              </div>
              <h3 className="box-border text-2xl font-medium leading-6 text-black max-sm:text-2xl">
                Tầm nhìn
              </h3>
            </header>
            <p className="box-border self-stretch px-4 text-base leading-6 text-gray-500 max-sm:text-base max-sm:leading-6">
              Thay đổi mối quan hệ của chúng ta với tiền bạc. Finful tin rằng việc
              hiểu sâu sắc về tiền và được trang bị công cụ phù hợp sẽ giúp đạt
              được cuộc sống mong ước dễ dàng hơn.
            </p>
          </div>
        </article>
        <article className="box-border flex flex-col mx-2 gap-2.5 justify-center items-center px-1 py-6 h-48 bg-white rounded-xl border border-teal-600 border-solid w-[564px] max-md:w-full max-md:max-w-[500px]">
          <div className="box-border flex flex-col gap-5 items-start w-[505px] max-sm:w-full">
            <header className=" box-border flex gap-3.5 items-center pl-3 pt-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 shadow-md">
                <img
                  src="/Security.png"
                  className="w-6 h-6"
                  alt="Security icon"
                />
              </div>
              <h3 className="box-border text-2xl font-medium leading-6 text-black max-sm:text-2xl">
                Sứ mệnh
              </h3>
            </header>
            <p className="box-border self-stretch px-4 text-base leading-6 text-gray-500 max-sm:text-base max-sm:leading-6">
              Đồng hành với những cá nhân và gia đình trong việc lập kế hoạch cho
              những quyết định tài chính lớn nhất trong đời, bắt đầu từ ngôi nhà
              đầu tiên.
            </p>
          </div>
        </article>
      </section>
      <div className="box-border flex gap-2.5 justify-center items-center p-2.5 mt-10 mb-0 bg-gray-800 rounded-xl cursor-pointer h-[43px] w-[166px]">
        <button className="box-border p-0 m-0 text-base font-medium leading-7 text-white">
          Đọc thêm
        </button>
      </div>
    </div>
  );
};

export default VisionMissionCards;
