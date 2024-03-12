import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom"
// import GooglePlayStore from "../../assets/icons/google.svg";
// import AppStore from "../../assets/icons/app-store.svg";
// import Twitter from "../../assets/icons/twitter.svg";
import Layout from "../../layout/Layout";

const Footer = () => {
  return (
    <footer className="mt-14 bg-primary sm:mt-4">
      <Layout>
        <div className="px-40 lg:px-8 xs:px-4 flex justify-between items-center md:flex-col md:items-start sm:text-xs">
          <Link to="/">
            <div>
              <img
                className="w-[180px] h-[60px] object-cover cursor-pointer sm:w-[120px]"
                src={Logo}
                alt="Logo"
              />
            </div>
          </Link>
          <p className="sm:pb-2">copyright © 2024 Docoptimizer</p>
          <ul className="flex md:flex-col">
            <li className="mr-4 md:pb-1">
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
          {/* <div className="flex flex-wrap xs:flex-col border-t-[1px] py-6 border-border">
          <div className="w-1/6 md:w-1/2 pr-10 md:pr-5 xs:pr-0 xs:w-full md:mb-5 xs:mb-2">
            <div className="mb-2 xs:mb-2">
              <img className="w-[180px] cursor-pointer" src={Logo} alt="Logo" />
            </div>
            <div className="pb-3">
              <img
                src={GooglePlayStore}
                alt="logo"
                className="w-[150] xs:w-40 cursor-pointer"
              />
            </div>
            <div>
              <img
                src={AppStore}
                alt="logo"
                className="w-[150] xs:w-40 cursor-pointer"
              />
            </div>
            <p className="text-sm mt-6">© 2024 DocHub, LLC</p>
          </div>

          <div className="w-1/6 md:w-1/2 mt-4 xs:w-full xs:mb-0">
            <h3 className="font-semibold mb-6 xs:mb-2">Products</h3>
            <ul className="text-sm">
              <li>
                <a href="/">PDF Editor</a>
              </li>
              <li>
                <a href="/">Forms & Templates</a>
              </li>
              <li>
                <a href="/">Sign Documents</a>
              </li>
              <li>
                <a href="/">Server Status</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Forms Library</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Functions</a>
              </li>
            </ul>
          </div>
          <div className="w-1/6 md:w-1/3 mt-4 xs:w-full xs:mb-0">
            <h3 className="font-semibold mb-6 xs:mb-2">Company</h3>
            <ul className="text-sm">
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Terms</a>
              </li>
              <li>
                <a href="/">Privacy Notice</a>
              </li>
              <li>
                <a href="/">Legal</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
            </ul>
          </div>
          <div className="w-1/6 md:w-1/3 mt-4 xs:w-full xs:mb-0">
            <h3 className="font-semibold mb-6 xs:mb-2">Resources</h3>
            <ul className="text-sm">
              <li>
                <a href="/">pdfFiller</a>
              </li>
              <li>
                <a href="/">US Legal Forms</a>
              </li>
              <li>
                <a href="/">Electronic Signature</a>
              </li>
              <li>
                <a href="/">No-code document</a>
              </li>
              <li>
                <a href="/">workflows</a>
              </li>
              <li>
                <a href="/">DocHub Mobile App</a>
              </li>
            </ul>
          </div>
          <div className="w-1/6 md:w-1/3 mt-4 xs:mb-0">
            <h3 className="font-semibold mb-6 xs:mb-2">What's New</h3>
            <div className="bg-success px-2 py-1 inline-block rounded-md text-mainWhite text-sm">
              New
            </div>
            <ul className="text-sm :hover-underline">
              <li>
                <a href="/">DocHub v5.1.1 Released!</a>
              </li>
              <li>
                <a href="/">Many updates and</a>
              </li>
              <li>
                <a href="/"> improvements!</a>
              </li>
            </ul>
          </div>
          <div className="w-1/6 md:w-1/3 mt-4 xs:mb-0">
            <h3 className="font-semibold mb-6 xs:mb-2">support@dochub.com</h3>
            <ul className="text-sm">
              <li>
                <a href="/"> 17 Station St., Ste 3</a>
              </li>
              <li>
                <a href="/">Brookline, MA 02445</a>
              </li>
            </ul>
            <div className="flex items-center mt-3 cursor-pointer">
              <img src={Twitter} alt="twitter" className="w-6 text-xs" />
              <p>Follow Us</p>
            </div>
          </div>
        </div> */}
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
