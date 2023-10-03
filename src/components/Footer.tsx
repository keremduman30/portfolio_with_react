import logo from "../assets/logo.png";
import face from "../assets/facebook.png";
import inst from "../assets/instagram.png";
import link from "../assets/linkedin.png";

function Footer() {
  return (
    <div>
      <div className="w-full  bg-gray-800">
        <div className="container mx-auto flex py-5 justify-between items-center">
          <div className="flex gap-2 items-center">
            <img className="w-8" src={logo} alt="" />
            <span className="text-2xl font-bold text-white">Portwind</span>
          </div>
          <span className="hidden md:block font-medium text-white">
            @ 2023 Portwind. Design with & by Duman Dev
          </span>
          <div className="flex gap-2">
            <img className="w-6 cursor-pointer" src={face} alt="" />
            <img className="w-6 cursor-pointer" src={inst} alt="" />
            <img className="w-6 cursor-pointer" src={link} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
