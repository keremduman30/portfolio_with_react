import man from "../assets/man.png";
function Content() {
  return (
    <div>
      <img
        className="absolute bottom-0 right-0- lg:left-0  mx-auto md:right-0  h-5/6 object-cover"
        src={man}
        alt=""
      />
      <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big1 h-big1  bg-indigo-900 rounded-full -z-10 "></div>
      <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl  lg:left-5 xl:left-48 xl:text-7xl font-bold">
        <span className="text-gray-600 ">Freelance</span>
        <p className="text-red-600">Developer</p>
      </div>
      <div className="hidden absolute lg:flex flex-col gap-5 rounded-md shadow-lg  top-0 bottom-0 right-10 p-6 m-auto bg-white dark:bg-slate-900 dark:shadow-slate-800  h-fit w-1/3  ">
        <h1 className="text-4xl font-bold text-indigo-900">Hi I am John</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa atque
          officiis in perspiciatis ea, sed dolorum saepe eos libero consectetur
          itaque natus quis nisi porro iure nesciunt suscipit nobis sapiente?
        </p>
        <a
          className="bg-indigo-600 text-white text-xl px-3 py-2 w-fit rounded-md font-semibold"
          href="#contact"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
}

export default Content;
