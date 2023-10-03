import item from "../assets/item.png";

function Portfolio() {
  return (
    <div id="works" className="py-5 dark:bg-slate-900">
      <div className="container mx-auto  ">
        {/* top */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-lg  text-indigo-600 font-bold">PORTFOLIO</h1>
          <h1 className="text-3xl dark:text-white">Works & Projects</h1>
          <p className="w-1/2 text-center  text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            molestiae totam saepe a nostrum nihil ipsum sapiente dolores, nemo
            unde?
          </p>
        </div>
        {/* bottom */}

        <div className="p-5 sm:p-0 flex flex-wrap justify-between  ">
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl  rounded-lg    my-3 md:my-10  m-1  ">
            <img src={item} alt="" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl  rounded-lg  my-3 md:my-10 m-1   ">
            <img src={item} alt="" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl  rounded-lg  my-3 md:my-10 m-1  ">
            <img src={item} alt="" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl  rounded-lg  my-3 md:my-10 m-1  ">
            <img src={item} alt="" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl  rounded-lg  my-3 md:my-10 m-1  ">
            <img src={item} alt="" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl  rounded-lg  my-3 md:my-10 m-1  ">
            <img src={item} alt="" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl  rounded-lg  my-3 md:my-10 m-1  ">
            <img src={item} alt="" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl  rounded-lg  my-3 md:my-10 m-1  ">
            <img src={item} alt="" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl  rounded-lg  my-3 md:my-10 m-1  ">
            <img src={item} alt="" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl  rounded-lg  my-3 md:my-10 m-1  ">
            <img src={item} alt="" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl  rounded-lg  my-3 md:my-10 m-1  ">
            <img src={item} alt="" />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl  rounded-lg  my-3 md:my-10 m-1  ">
            <img src={item} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
