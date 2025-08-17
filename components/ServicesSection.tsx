"use client";
import React from "react";
import FinancialChart from "./FinancialChart";
import FinancialPlanPreview from "./FinancialPlanPreview";
import Link from "next/link";

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = React.useState("home-planner");

  const services = [
    {
      id: "home-planner",
      icon: "/home_planner.png",
      title: "Công cụ lập kế hoạch mua nhà",
      description:
        "Giúp người dùng lập kế hoạch tài chính để mua được căn nhà mơ ước. Chỉ cần nhập thông tin về căn nhà muốn mua và khả năng tài chính, chúng tôi sẽ thiết kế kế hoạch hành động phù hợp.",
      buttonText: "Truy cập Công cụ lập kế hoạch mua nhà",
      link: "https://muanha.finful.co/", // URL đích
    },
    {
      id: "corporate-education",
      icon: "/corporate-education.png",
      title: "Giáo dục tài chính cho doanh nghiệp",
      description:
        "Giúp các tổ chức tài chính xây dựng chương trình giáo dục về đa dạng chủ đề tài chính, hướng tới thay đổi hành vi của người dùng, qua đó tạo tác động tích cực tới kết quả kinh doanh.",
      buttonText: "Truy cập Giáo dục tài chính cho doanh nghiệp",
      link: "https://global.finful.co/sign-in?redirect_url=https%3A%2F%2Fglobal.finful.co%2Fcourse%2F654b4b6c919baafbb5c4e975%3Ffbclid%3DIwY2xjawGXuPtleHRuA2FlbQIxMAABHVmJVUh1h6PjYXMWcGrc4Rk4_QmPn22qZimfZLo3aj_a-POutj-ma8d90w_aem_j78gg5nee3mqU6GYcU4ItAp", // URL đích
    },
    {
      id: "personal-education",
      icon: "/personal-education.png",
      title: "Giáo dục tài chính cho cá nhân",
      description:
        "Một thư viện cung cấp kiến thức nền tảng về tài chính cá nhân, mở miễn phí cho tất cả mọi người, giúp bất kỳ ai muốn hiểu và xây dựng nền tảng tài chính tốt hơn.",
      buttonText: "Truy cập Giáo dục tài chính cho cá nhân",
      link: "https://app.finful.co/sign-in?redirect_url=https%3A%2F%2Fapp.finful.co%2Fcourse%2F65fb0e91feebb569c2191340%3Ffbclid%3DIwY2xjawGXuQ9leHRuA2FlbQIxMAABHQz4oKhOcoGY-vfIIYNQ0Bi8Grznu_ZpfIf_M0V_mZ5CF8qkodGIA2rAcQ_aem_ZUu0TxwVY7QuOmaOqMPvDA", // URL đích
    },
  ];

  const activeServiceData = services.find(
    (service) => service.id === activeService
  );

  return (
    <section className="box-border flex flex-col items-center justify-center w-full gap-14 px-16 py-0 mx-auto mt-52 mb-0 max-w-[1226px] max-md:px-5 max-md:py-0 max-md:mt-36 max-sm:px-4 max-sm:py-0 max-sm:mt-24">
      <header className="box-border flex flex-col items-center gap-1.5 p-0 m-0">
        <h2 className="box-border self-stretch p-0 m-0 text-5xl font-semibold tracking-tighter leading-10 text-center text-neutral-800 max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-8">
          Chúng tôi giúp tổ chức &amp; cá nhân
        </h2>
        <h2 className="box-border self-stretch p-0 m-0 text-5xl font-semibold tracking-tighter leading-none text-center bg-clip-text h-[59px] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-8">
          đạt được mục tiêu tài chính
        </h2>
      </header>
      <div className="box-border self-stretch p-0 m-0 h-px bg-gray-300" />
      <div className="box-border flex gap-8 p-0 m-0 w-full h-[542px] max-md:flex-col max-md:gap-10 max-md:h-auto">
        <div className="box-border flex flex-col gap-12 items-start p-0 m-0 h-[542px] w-[547px] max-md:w-full">
          <div className="box-border flex flex-col self-stretch gap-4 items-start p-0 m-0">
            {services.map((service) => {
              const isActive = activeService === service.id;
              return (
                <article
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`box-border flex relative flex-col gap-2.5 items-start self-stretch px-6 py-7 m-0 rounded-xl cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-600 text-white"
                      : "bg-gray-100 text-zinc-800"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <img
                        src={service.icon}
                        alt="Task icon"
                        className={`box-border p-0 m-0 w-6 h-6 aspect-[1/1] ${
                          isActive ? "brightness-0 invert" : "brightness-0"
                        }`}
                      />
                      <h3 className="box-border p-0 m-0 text-2xl font-semibold tracking-tight leading-10 max-sm:text-lg max-sm:leading-6">
                        {service.title}
                      </h3>
                    </div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c85af886dd5e81fdc8834dd08a410fe2d44ac342?width=42"
                      alt="Arrow icon"
                      className={`box-border p-0 m-0 aspect-[1/1] h-[21px] w-[21px] transition-all duration-300 ${
                        isActive ? "" : "transform rotate-180 brightness-0"
                      }`}
                    />
                  </div>
                  {isActive && (
                    <div className="box-border flex flex-col gap-4 items-start p-0 m-0 ml-9 max-sm:ml-8 max-sm:w-full">
                      <p className="box-border self-stretch p-0 m-0 text-lg tracking-tight leading-6 opacity-80 max-sm:text-base max-sm:leading-6">
                        {service.description}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
          <Link href={activeServiceData?.link || "#"} target="_blank" className="w-full">
            <button className="box-border flex gap-2.5 justify-center items-center self-stretch p-2.5 m-0 rounded-3xl shadow-sm cursor-pointer h-[47px] bg-cyan-600 w-full">
              <span className="box-border p-0 m-0 text-base font-medium tracking-tight text-center text-white">
                {activeServiceData?.buttonText}
              </span>
            </button>
          </Link>
        </div>
        <div className="box-border relative p-0 m-0 bg-gray-100 rounded-xl h-[542px] w-[647px] max-md:p-2 max-md:w-full max-md:h-auto">
          {activeService === "home-planner" && (
            <div className="flex flex-col w-full h-full gap-4">
              <img
                src="/Frame 1321315865.png"
                alt="Tổng quan kế hoạch"
                className="w-full h-auto rounded-xl shadow-sm"
              />
              <img
                src="/Group 1000002581.png"
                alt="Xem trước kế hoạch"
                className="w-full h-auto rounded-xl shadow-sm"
              />
              <div className="flex items-center justify-between px-6 py-2 mt-auto bg-white rounded-lg">
                <button className="text-sm italic font-light tracking-tight cursor-pointer text-zinc-800">
                  Xem báo cáo đầy đủ
                </button>
                <span className="text-sm italic font-light tracking-tight text-zinc-800">
                  &gt;&gt;
                </span>
              </div>
            </div>
          )}
          {activeService === "corporate-education" && (
            <div className="flex flex-col w-full h-full gap-4 p-8">
              <div className="w-full h-1/2 bg-white rounded-lg"></div>
              <div className="w-full h-1/2 bg-white rounded-lg"></div>
            </div>
          )}
          {activeService === "personal-education" && (
             <div className="flex flex-col w-full h-full gap-4 p-8">
                <div className="w-full flex-grow bg-white rounded-lg"></div>
                <div className="w-full flex-grow bg-white rounded-lg"></div>
                <div className="flex items-center justify-between px-6 py-2 mt-4 bg-cyan-600 text-white rounded-lg">
                    <button className="text-sm italic font-light tracking-tight cursor-pointer">
                        Truy cập thư viện miễn phí
                    </button>
                    <span className="text-sm italic font-light tracking-tight">
                        &gt;&gt;
                    </span>
                </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
