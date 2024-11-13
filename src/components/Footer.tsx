import React from 'react'
import { FaYoutube, FaFacebook } from "react-icons/fa6";

import '../../src/SCSS/components/footer.scss'


const Footer = () => {
  return (
    <footer className="footer">
			<div className="container">
				<div className="wrap block">
          {/* column 1 */}
					<div className="wrap column 1">
						<div className="logo container">
							<a href="https://hyggegocbepnho.vn/">
								<img src="../logo.png" alt="" width={120} height={73}/>
							</a>
						</div>
						<h5>HYGGE- GÓC BẾP NHỎ</h5>
						<ul>
              <li>Công ty TNHH Hygge F&B Services</li>
              <li>Địa chỉ: 69/3 Cao Thắng, P3, Q3, Tp.HCM</li>
              <li>Hotline đặt tiệc: 0934.007.402</li>
              <li>Hotline đặt tiệc: 0934.007.402</li>
              <li>Email: contact@hyggegocbepnho.com</li>
              <li>MST: 0318231062</li>
            </ul>
					</div>
          {/* column 2 */}
          <div>
            <h5>ĐIỀU KHOẢN CHUNG</h5>
            <ul>
              <li>Chính sách quy định chung</li>
              <li>Quy định hình thức thanh toán</li>
              <li>Chính sách vận chuyển giao hàng</li>
              <li>Chính sách bảo mật thông tin</li>
            </ul>
          </div>
          {/* column 3 */}
          <div>
            <h5>THEO DÕI CHÚNG TÔI TẠI</h5>
            <ul>
              <li>
                <a href="https://www.facebook.com/hygge.gocbepnho"><FaFacebook /></a>
              </li>
              <li>
                <a href="https://www.facebook.com/hygge.gocbepnho"><FaYoutube /></a>
              </li>
            </ul>
          </div>
				</div>
			</div>


      <div className="wrapper flex justify-between items-start">
        <div className="flex w-[300px] flex-col gap-[20px] items-start shrink-0 flex-nowrap relative z-[3]">
          <span className="flex w-[264.505px] h-[24px] justify-start items-start shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[4]">
            HYGGE- GÓC BẾP NHỎ
          </span>
        <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[5]">
          <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-normal leading-[20px] text-[#fff] relative text-left whitespace-nowrap z-[6]">
            Công ty TNHH Hygge F&B Services
          </span>
          <span className="h-[20px] shrink-0 basis-auto font-['Manrope'] text-[14px] font-normal leading-[20px] text-[#fff] relative text-left whitespace-nowrap z-[7]">
            Địa chỉ: 69/3 Cao Thắng, P3, Q3, Tp.HCM
          </span>
          <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-normal leading-[20px] text-[#fff] relative text-left whitespace-nowrap z-[8]">
            Hotline đặt tiệc: 0934.007.402
          </span>
          <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-normal leading-[20px] text-[#fff] relative text-left whitespace-nowrap z-[9]">
            Hotline đặt tiệc: 0934.007.402
          </span>
          <span className="h-[20px] shrink-0 basis-auto font-['Manrope'] text-[14px] font-normal leading-[20px] text-[#fff] relative text-left whitespace-nowrap z-10">
            Email: contact@hyggegocbepnho.com
          </span>
					<span className="h-[20px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-normal leading-[20px] text-[#fff] relative text-left whitespace-nowrap z-[11]">
            MST: 0318231062
          </span>
        </div>
      </div>
      <div className="flex w-[270px] flex-col gap-[20px] items-start shrink-0 flex-nowrap relative z-[12]">
          <span className="h-[24px] shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[13]">
                        ĐIỀU KHOẢN CHUNG
                    </span>
                    <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[14]">
                        <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-normal leading-[20px] text-[#fff] relative text-left whitespace-nowrap z-[15]">
                            Chính sách quy định chung
                        </span>
                        <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-normal leading-[20px] text-[#fff] relative text-left whitespace-nowrap z-[16]">
                            Quy định hình thức thanh toán
                        </span>
                        <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-normal leading-[20px] text-[#fff] relative text-left whitespace-nowrap z-[17]">
                            Chính sách vận chuyển giao hàng
                        </span>
                        <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-normal leading-[20px] text-[#fff] relative text-left whitespace-nowrap z-[18]">
                            Chính sách bảo mật thông tin
                        </span>
                    </div>
                </div>
                <div className="flex w-[270px] flex-col gap-[20px] items-start shrink-0 flex-nowrap relative z-[19]">
                    <div className="w-[105px] h-[38px] shrink-0 bg-cover bg-no-repeat relative z-20" />
                    <span className="h-[24px] shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[21]">
                        THEO DÕI CHÚNG TÔI TẠI
                    </span>
                    <div className="flex w-[196px] gap-[12px] items-start shrink-0 flex-nowrap relative z-[22]">
                        <div className="flex w-[40px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] items-start shrink-0 flex-nowrap bg-[rgba(255,255,255,0.1)] rounded-[100px] border-solid border border-[rgba(255,255,255,0.24)] relative z-[23]">
                            <div className="w-[20px] h-[20px] shrink-0 relative z-[24]">
                                <div className="w-[20px] h-[20px] absolute top-0 left-0 z-[25]">

                                </div>
                            </div>
                        </div>
                        <div className="flex w-[40px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] items-start shrink-0 flex-nowrap bg-[rgba(255,255,255,0.1)] rounded-[100px] border-solid border border-[rgba(255,255,255,0.24)] relative z-[27]">
                            <div className="w-[20px] h-[20px] shrink-0 relative z-[28]">
                                <div className="w-[20px] h-[20px] absolute top-0 left-0 z-[29]">

                                </div>
                            </div>
                        </div>
                        <div className="flex w-[40px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] items-start shrink-0 flex-nowrap bg-[rgba(255,255,255,0.1)] rounded-[100px] border-solid border border-[rgba(255,255,255,0.24)] relative z-[31]">
                            <div className="w-[20px] h-[20px] shrink-0 relative overflow-hidden z-[32]">

                            </div>
                        </div>
                        <div className="flex w-[40px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] items-start shrink-0 flex-nowrap bg-[rgba(255,255,255,0.1)] rounded-[100px] border-solid border border-[rgba(255,255,255,0.24)] relative z-[34]">
                            <div className="w-[20px] h-[20px] shrink-0 relative overflow-hidden z-[35]">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper flex ">
                <span className="h-[20px] shrink-0 basis-auto font-['Manrope'] text-[14px] font-normal leading-[20px] text-[#fff] relative text-left whitespace-nowrap z-[38]">
                    © Copyright 2024 Hygge. All rights reserved.
                </span>
            </div>
    </footer>
  )
}

export default Footer