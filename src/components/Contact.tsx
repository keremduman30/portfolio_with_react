function Contact() {
  return (
    <div id="contact" className="dark:bg-slate-900">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-lg  text-indigo-600 font-bold">Contact</h1>
          <h1 className="text-3xl dark:text-white">Have a Question</h1>
          <p className="w-1/2 text-center  text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      {/* bottom */}
      <form action="" className="mt-5 p-8 flex flex-col gap-3 items-center">
        <input
          className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:ring-0 dark:bg-slate-800 dark:text-white"
          type="text"
          placeholder="Name"
        />
        <input
          className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:ring-0 dark:bg-slate-800 dark:text-white"
          type="email"
          placeholder="Email"
        />{" "}
        <textarea
          className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:ring-0 dark:bg-slate-800 dark:text-white"
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Message"
        ></textarea>
        <button className="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
