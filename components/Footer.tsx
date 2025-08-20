import React from "react";

function Footer() {
  return (
    // Bỏ `relative`, thêm `w-full` và màu nền trực tiếp vào thẻ `footer`
    <footer className="w-full bg-gray-800 text-white py-12 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-start gap-10">
        
        {/* Phần Logo và thông tin liên hệ */}
        <div className="flex-shrink-0 w-full md:w-auto">
          <img
            // Thay bằng logo SVG hoặc URL ảnh mới của bạn
            src="/1 9.png"
            className="w-32 h-auto"
            alt="Finful logo"
          />
          <p className="mt-4 text-sm text-gray-400">
            © 2025 Finful, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-6">
            {/* Thay bằng SVG icons nếu có thể */}
            <a href="https://www.facebook.com/finful.co" target="_blank" aria-label="Facebook">
              <img
                src="/face.png"
                className="w-7 h-7"
                alt="Facebook icon"
              />
            </a>
            <a href="https://www.linkedin.com/company/finful/" target="_blank" aria-label="LinkedIn">
               <img
                src="/Linkedin.png"
                className="w-7 h-7"
                alt="LinkedIn icon"
              />
            </a>
          </div>
          <a href="mailto:hello@finful.co" className="mt-6 inline-block text-sm text-gray-300 hover:text-white">
            hello@finful.co
          </a>
        </div>

        {/* Phần các liên kết */}
        <nav className="flex flex-wrap gap-10">
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider">Công ty</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Về chúng tôi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Liên hệ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider">Dành cho cá nhân</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="" className="text-gray-400 hover:text-white">Công cụ lập kế hoạch mua nhà</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Thư viện tài chính cá nhân</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Thư viện phân tích chứng khoán</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider">Dành cho tổ chức</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Chương trình giáo dục tài chính</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
