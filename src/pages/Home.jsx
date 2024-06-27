import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
return (
<>

  <div className="container">
    <div className="main flex-col flex-wrap text-center px-[15px] py-[30px]">
      <div className="main-img flex justify-center">
        <img className="rounded-full mb-[21px]" src="src/assets/images/parson-img.png" alt="img" />
      </div>
      <h4>
        <Link className="text-[26px] font-medium text-black mb-2 font-slab dark:text-white " to="#">
        Monalisa Ashley
        </Link>
      </h4>
      <span
        className="text-[14px] inline-block text-[#7b7b7b] font-poppins font-medium px-5 py-1 mb-[15px] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] dark:rounded-[5px]">
        Ui/Ux Designer
      </span>
      <ul className="flex justify-center flex-wrap gap-1 mb-[30px] ">
        <li>
          <Link
            className="facebook dark:bg-[#1d1d1d] w-10 h-10 m-1 bg-[#f3f6f6] text-[18px] text-[#1773ea] flex items-center justify-center rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition duration-300"
            to="#">
          <i className="fa-brands fa-facebook-f"></i>
          </Link>
        </li>
        <li>
          <Link
            className="twitter dark:bg-[#1d1d1d] w-10 h-10 m-1 bg-[#f3f6f6] text-[18px] text-[#1773ea] flex items-center justify-center rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition duration-300"
            to="#">
          <i className="fa-brands fa-twitter"></i>
          </Link>
        </li>
        <li>
          <Link
            className="instagram dark:bg-[#1d1d1d] w-10 h-10 m-1 bg-[#f3f6f6] text-[18px] text-[#1773ea] flex items-center justify-center rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition duration-300"
            to="#">
          <i className="fa-brands fa-instagram"></i>
          </Link>
        </li>
        <li>
          <Link
            className="linkdin dark:bg-[#1d1d1d] w-10 h-10 m-1 bg-[#f3f6f6] text-[18px] text-[#1773ea] flex items-center justify-center rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition duration-300"
            to="#">
          <i className="fa-brands fa-linkedin-in"></i>
          </Link>
        </li>
      </ul>
      <div className="main-cv flex justify-center">
        <Link
          className="flex justify-center items-center gap-[5px] px-[30px] py-3 text-[18px] text-[#F3F6F6] font-poppins font-normal bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-[30px]  transform hover:-translate-y-0.5"
          to="#">
        <i className="fa-regular fa-download"></i>
        <span>Download Cv</span>
        </Link>
      </div>
    </div>
  </div>

</>
)
}

export default Home