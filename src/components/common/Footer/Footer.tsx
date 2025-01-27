import { CgProfile } from "react-icons/cg";
import {
  FaApple,
  FaCaretRight,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import payment from "@assets/images/payment.png"
import LazyImage from "../LazyImage/LazyImage";
const Footer = () => {
  return (
    <footer className="bg-white pt-8 mt-4">
      <div className="container grid grid-cols-gridColsFooter gap-12">
        <div className="col flex flex-col justify-between">
          <h3>
            <FaApple className="text-[40px] text-[#00aaff]" />
          </h3>
          <p className="mt-6 text-[18px] leading-normal">
            Browse all products and latest offers at the lowest price in Egypt
          </p>
          <p className="mt-6 text-[18px] leading-normal">
            24/7 Customer Services
          </p>
          <p className="mt-6 text-[18px] leading-normal">
            Free And Fast Delivery
          </p>
          <h3 className="text-2xl capitalize text-[#00aaff] my-4">Follow</h3>
          <ul className="flex items-center gap-5">
            <li>
              <a href="https://api.whatsapp.com/send/?phone=201151920359&text&type=phone_number&app_absent=0">
                <FaWhatsapp className="text-4xl text-[#33961d] duration-300 hover:scale-[1.2]" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100021987258084&mibexitd=ZbWKwL">
                <FaFacebook className="text-4xl text-[#05f] duration-300 hover:scale-[1.2]" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaLinkedin className="text-4xl text-[#4781ff] duration-300 hover:scale-[1.2]" />
              </a>
            </li>
            <li>
              <a href="https://github.com/mahmoudmkhemarmohammed">
                <FaGithub className="text-4xl text-[#1b1e22] duration-300 hover:scale-[1.2]" />
              </a>
            </li>
          </ul>
          <h3 className="text-2xl capitalize text-[#00aaff] my-4">Payment</h3>
          <LazyImage img={payment} alt="Payment"/>
        </div>

        <div className="col">
          <h3 className="text-3xl capitalize mb-7 text-[#00aaff]">Pages</h3>
          <ul className="*:*:text-[18px] *:*:capitalize flex flex-col justify-between gap-4 *:flex *:justify-between *:items-center *:hover:*:text-[#00aaff] *:*:*:last:text-[#ff0077]">
            <li>
              <Link to="/">home</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to={"/categories"}>categories</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to="/all-products">all products</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to="/cart">Cart</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to="/login">Log In</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to={"/about-us"}>about</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to={"/profile"}>Profile</Link>
              <FaCaretRight />
            </li>
          </ul>
        </div>

        <div className="col">
          <h3 className="text-3xl capitalize mb-7 text-[#00aaff]">
            categories
          </h3>
          <ul className="*:*:text-[18px] *:*:capitalize flex flex-col justify-between gap-4 *:flex *:justify-between *:items-center *:hover:*:text-[#00aaff] *:*:*:last:text-[#ff0077]">
            <li>
              <Link to={"/categories/products/mac"}>Mac</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to={"/categories/products/iphone"}>iphone</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to={"/categories/products/ipad"}>ipad</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to={"/categories/products/apple-watch"}>Apple Watch</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to={"/categories/products/airpods"}>Air Pods</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to={"/categories/products/apple-vision-pro"}>
                Apple Vision Pro
              </Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to={"/categories/products/airtag"}>Air Tag</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to={"/categories/products/apple-watch"}>Apple Watch</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to={"/categories/products/accessories"}>Accessories</Link>
              <FaCaretRight />
            </li>
          </ul>
        </div>

        <div className="col">
          <h3 className="text-3xl capitalize mb-7 text-[#00aaff]">Profile</h3>
          <div className="profile-icon flex items-center justify-center mb-[14px] border-[1px] border-[#ff00736a] py-3 rounded-md">
            <CgProfile className="text-5xl text-[#ff00736a]" />
          </div>
          <ul className="*:*:text-[18px] *:*:capitalize flex flex-col justify-between gap-4 *:flex *:justify-between *:items-center *:hover:*:text-[#00aaff] *:*:*:last:text-[#ff0077]">
            <li>
              <Link to={"/profile"}>account</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to={"/profile"}>inforamtion</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to={"/profile/orders"}>orders</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to={"/profile/settings"}>settings</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to={"/profile/delete-account"}>Delete Account</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to={"/cart"}>cart</Link>
              <FaCaretRight />
            </li>
            <li>
              <Link to={"/wishlist"}>wishlist</Link>
              <FaCaretRight />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
