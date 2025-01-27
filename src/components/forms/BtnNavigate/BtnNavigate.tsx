import { Link } from "react-router-dom";

const BtnNavigate = ({ to, title }: { to: string; title: string }) => {
  return (
    <Link
      to={to}
      className="bg-[#0df] p-3 rounded-md text-white mt-2 text-center w-full block"
    >
      {title}
    </Link>
  );
};

export default BtnNavigate;
