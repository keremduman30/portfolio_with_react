import dots from "../assets/dots.png";
import portrait from "../assets/portrait.png";

function AboutSection() {
  return (
    <div id="about" className="px-10  dark:bg-slate-900">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center py-36 gap-20">
        <div className="relative">
          <img
            className=" h-1/4 absolute top-0 left-0  -z-20"
            src={dots}
            alt=""
          />
          <div className="h-full  rounded-full overflow-hidden">
            <img src={portrait} alt="" />
          </div>
        </div>
        <div className="my-auto flex flex-col gap-3">
          <h1 className="text-indigo-600 font-bold">About Me</h1>
          <h1 className="text-3xl font-medium dark:text-gray-100">
            Better Design
          </h1>
          <h1 className="text-3xl font-medium dark:text-gray-100">
            Better Experience
          </h1>
          <p className="text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            officia autem, consequatur totam obcaecati beatae, voluptates
            dignissimos ratione doloremque minus necessitatibus a facere vel
            perferendis recusandae. Sunt perspiciatis porro voluptatibus.
          </p>
          <h2 className="text-gray-400 font-medium">HTML</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-full bg-indigo-800 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">JS</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-4/6 bg-indigo-800 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">React</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-3/6 bg-indigo-800 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">Flutter</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-4/6 bg-indigo-800 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">NodeJS</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-2/4 bg-indigo-800 h-1.5 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
