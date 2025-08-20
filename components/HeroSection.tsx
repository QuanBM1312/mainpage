import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="box-border overflow-hidden relative p-0 m-0 w-full h-[585px] max-sm:h-[500px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/ba9eabe8ab8575c455d234f4557ff57f96a4f6aa?width=2698"
        alt="Hero background"
        className="box-border object-cover absolute top-0 left-0 p-0 m-0 size-full"
      />
      <div className="box-border flex absolute left-2/4 flex-col gap-1.5 justify-center items-center p-0 m-0 -translate-x-2/4 h-[141px] top-[239px] w-[832px] max-md:max-w-[700px] max-md:w-[90%] max-md:w-[90%] max-sm:top-[150px] max-sm:w-[95%]">
        <h1 className="box-border self-stretch p-0 m-0 text-6xl font-semibold tracking-tighter text-center text-zinc-800 max-md:text-5xl max-md:tracking-tighter max-sm:text-3xl max-sm:tracking-tight">
          Kiến thức &amp; Công cụ tài chính hướng tới{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-teal-600 bg-clip-text text-transparent">
            lợi ích của người dùng
          </span>
        </h1>
      </div>
      <p className="box-border absolute left-2/4 p-0 m-0 text-lg font-medium leading-7 text-center text-gray-500 -translate-x-2/4 h-[52px] top-[410px] w-[540px] max-md:text-base max-md:leading-6 max-md:max-w-[480px] max-md:w-[90%] max-sm:text-sm max-sm:leading-5 max-sm:top-[300px] max-sm:w-[95%]">
        Finful đặt lợi ích và mong muốn tài chính của bạn lên hàng đầu, giúp bạn
        đạt được các mục tiêu tài chính quan trọng
      </p>
    </section>
  );
};

export default HeroSection;
