import icon from "../assets/icon.png";

function Services() {
  return (
    <div id="services" className="dark:bg-slate-900">
      <div className="container mx-auto  ">
        {/* top */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-lg dark:text-white  text-indigo-600 font-bold">
            SERVICES
          </h1>
          <h1 className="text-3xl dark:text-white ">What do ı offer</h1>
          <p className="w-1/2 text-center  text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            molestiae totam saepe a nostrum nihil ipsum sapiente dolores, nemo
            unde?
          </p>
        </div>
        {/* bottom */}

        <div className="p-5 sm:p-0 flex flex-wrap ">
          <div className="w-full md:w-4/12 shadow-xl  rounded-lg   p-5 my-3 md:my-10  flex flex-col  gap-3">
            {/* card */}
            <img className="w-10" src={icon} alt="" />
            <h1 className="font-medium text-lg dark:text-white">
              UX/UI Design
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              quo!
            </p>
            <a className="text-indigo-600 font-semibold text-sm " href="#">
              Read More
            </a>
          </div>
          <div className="w-full md:w-4/12 shadow-xl  rounded-lg p-5 my-3 md:my-10 flex flex-col  gap-3">
            {/* card */}
            <img className="w-10" src={icon} alt="" />
            <h1 className="font-medium text-lg dark:text-white">
              UX/UI Design
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              quo!
            </p>
            <a className="text-indigo-600 font-semibold text-sm " href="#">
              Read More
            </a>
          </div>
          <div className="w-full md:w-4/12 shadow-xl  rounded-lg p-5 my-3 md:my-10 flex flex-col  gap-3">
            {/* card */}
            <img className="w-10" src={icon} alt="" />
            <h1 className="font-medium text-lg dark:text-white">
              UX/UI Design
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              quo!
            </p>
            <a className="text-indigo-600 font-semibold text-sm " href="#">
              Read More
            </a>
          </div>
          <div className="w-full md:w-4/12 shadow-xl  rounded-lg p-5 my-3 md:my-10 flex flex-col  gap-3">
            {/* card */}
            <img className="w-10" src={icon} alt="" />
            <h1 className="font-medium text-lg dark:text-white">
              UX/UI Design
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              quo!
            </p>
            <a className="text-indigo-600 font-semibold text-sm " href="#">
              Read More
            </a>
          </div>
          <div className="w-full md:w-4/12 shadow-xl  rounded-lg p-5 my-3 md:my-10 flex flex-col  gap-3">
            {/* card */}
            <img className="w-10" src={icon} alt="" />
            <h1 className="font-medium text-lg dark:text-white">
              UX/UI Design
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              quo!
            </p>
            <a className="text-indigo-600 font-semibold text-sm " href="#">
              Read More
            </a>
          </div>
          <div className="w-full md:w-4/12 shadow-xl  rounded-lg p-5 my-3 md:my-10 flex flex-col  gap-3">
            {/* card */}
            <img className="w-10" src={icon} alt="" />
            <h1 className="font-medium text-lg dark:text-white">
              UX/UI Design
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              quo!
            </p>
            <a className="text-indigo-600 font-semibold text-sm " href="#">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
