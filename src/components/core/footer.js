import * as React from "react";
import { Link } from "gatsby";

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="flex flex-wrap bg-white dark:bg-black text-black dark:text-gray-400">
      <div className="w-full md:w-1/3 p-4">
        <p className="text-xs pb-2">Kontakt:</p>
        <p>
          <span className="text-orange-400 font-bold">Pentoda</span> -
          radiotechnika z dawnych lat{" "}
        </p>
        <p>Adres: Łódź</p>
        <p>E-mail: radio@pentoda.pl</p>
      </div>
      <div className="w-full md:w-1/3 bg-white dark:bg-black text-black dark:text-gray-400 p-4">
        <p className="text-xs pb-4">Social:</p>
        <div className="flex flex-wrap">
          <a href="https://www.facebook.com/pentoda.radio">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="36px"
              height="36px"
              viewBox="0 0 48 48"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              ></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/pentoda.radio">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="36px"
              height="36px"
              viewBox="0 0 48 48"
            >
              <path
                fill="#f55376"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"
              ></path>
              <path
                fill="#fac8d5"
                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
              ></path>
              <circle cx="31.5" cy="16.5" r="1.5" fill="#fac8d5"></circle>
              <path
                fill="#fac8d5"
                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18 z"
              ></path>
            </svg>
          </a>
          <a href="https://www.youtube.com/@Pentoda">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="36px"
              height="36px"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FF3D00"
                d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
              ></path>
              <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/pentoda">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="36px"
              height="36px"
              viewBox="0 0 48 48"
            >
              <path
                fill="#0288D1"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
              ></path>
              <path
                fill="#FFF"
                d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-white dark:bg-black text-black dark:text-gray-400 p-4">
        <p className="text-xs md:pb-2">Linki:</p>
        <nav className="md:block md:items-center w-full md:w-auto">
          {[
            {
              route: `/`,
              title: `Home`,
            },
            {
              route: `/category`,
              title: `Eksponaty`,
            },
            {
              route: `/about`,
              title: `O nas`,
            },
          ].map((link) => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:mr-6 no-underline font-medium text-primary border-b-2 border-transparent hover:border-orange-400"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>

    <div className="w-full text-center p-8 bg-white dark:bg-black text-black dark:text-gray-400">
      © {new Date().getFullYear()}, made by w129
    </div>
  </footer>
);

export default Footer;
