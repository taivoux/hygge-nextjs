import React from "react";
import { FaYoutube, FaFacebook } from "react-icons/fa6";
import Image from "next/image";

import "../compiled/style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__block md:grid-cols-3">
          {/* column 1 */}
          <div className="footer__wrap">
            <div className="footer__logo">
              <a href="https://hyggegocbepnho.vn/">
                <Image src="/logo.png" alt="" width={120} height={73} />
              </a>
            </div>
            <h5>HYGGE- GÓC BẾP NHỎ</h5>
            <ul className="footer__list">
              <li>Công ty TNHH Hygge F&B Services</li>
              <li>Địa chỉ: 69/3 Cao Thắng, P3, Q3, Tp.HCM</li>
              <li>Hotline đặt tiệc: 0934.007.402</li>
              <li>Hotline đặt tiệc: 0934.007.402</li>
              <li>Email: contact@hyggegocbepnho.com</li>
              <li>MST: 0318231062</li>
            </ul>
          </div>
          {/* column 2 */}
          <div className="footer__wrap">
            <div className="footer__buffer" aria-hidden="true"></div>
            <h5>ĐIỀU KHOẢN CHUNG</h5>
            <ul className="footer__list">
              <li>Chính sách quy định chung</li>
              <li>Quy định hình thức thanh toán</li>
              <li>Chính sách vận chuyển giao hàng</li>
              <li>Chính sách bảo mật thông tin</li>
            </ul>
          </div>
          {/* column 3 */}
          <div className="footer__wrap">
            <div className="footer__buffer" aria-hidden="true"></div>
            <h5>THEO DÕI CHÚNG TÔI TẠI</h5>
            <ul className="social__list">
              <li className="social__item">
                <a href="https://www.facebook.com/hygge.gocbepnho">
                  <FaFacebook className="social__logo" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.facebook.com/hygge.gocbepnho">
                  <FaYoutube className="social__logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* copyright */}
      <hr className="copyright__separator" />
      <div className="copyright__container">
        <p>© Copyright 2024 Hygge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
