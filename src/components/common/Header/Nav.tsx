import { NavLink } from "react-router-dom";

const Nav = ({
  nav,
  accessToken,
}: {
  nav: boolean;
  accessToken: string | null;
}) => {
  return (
    <ul
      className={`flex justify-between items-center gap-[20px] *:*:text-[19px] *:*:capitalize max-lg:fixed max-lg:top-[85px] max-lg:flex-col max-lg:bg-[#FFF] max-lg:w-full max-lg:h-heightNav z-[100] max-lg:justify-center max-lg:gap-10 duration-300 max-lg:-left-full ${
        nav && "max-lg:left-0"
      }`}
    >
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-products"}>Products</NavLink>
      </li>
      <li>
        <NavLink to={"/categories"}>categories</NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"}>About</NavLink>
      </li>
      {accessToken !== null ? (
        ""
      ) : (
        <>
          <li>
            <NavLink to={"/register"}>Sign Up</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Sign In</NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default Nav;
