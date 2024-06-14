import React from "react";

function About() {
  return (
    <div>
      <section className="w-full h-full flex lg:flex-row flex-col justify-between px-[15px] bg-[#232323]  lg:px-20 py-20">
        <div className="lg:w-[50vw] h-full flex flex-col gap-8">
          <div className="flex items-center gap-5">
            <div className="w-20 h-3 bg-[#8620D6]"></div>
            <h1 className="text-zinc-100 text-xl">SOMETHINGS ABOUT ME</h1>
          </div>

          <div className="text-zinc-100 lg:text-7xl text-6xl font-serif">
            <h1>I'm Professional Photography</h1>
          </div>

          <div className="text-zinc-500 text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sodales at nunc quis semper.
          </div>

          <div className="flex gap-8 pb-10 border-b-[0.1px] border-zinc-700">
            <img
              className="w-6 h-6 bg-[#8620D6] rounded-full p-1"
              src="./Images/icons8-facebook-50.png"
              alt=""
            />
            <img
              className="w-6 h-6 bg-[#8620D6] rounded-full p-1"
              src="./Images/icons8-instagram-32.png"
              alt=""
            />
            <img
              className="w-6 h-6 bg-[#8620D6] rounded-full p-1"
              src="./Images/icons8-twitter-24.png"
              alt=""
            />
            <img
              className="w-6 h-6 bg-[#8620D6] rounded-full p-1"
              src="./Images/icons8-linkedin-2-30.png"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-3 text-lg">
            <h1 className="font-sans tracking-[4px] pb-2 text-[#8620D6]">
              MY AWARDS
            </h1>

            <div className="flex gap-3 items-center">
              <img className="w-6 h-6" src="./Images/arrow.png" alt="" />
              <h1 className=" lg:text-[18px] text-[16px] text-zinc-500">
                {" "}
                International Photography Awards
              </h1>
            </div>

            <div className="flex gap-3 items-center">
              <img className="w-6 h-6 " src="./Images/arrow.png" alt="" />
              <h1 className="lg:text-[18px] text-[16px] text-zinc-500">
                Sony World Photography Awards 2021
              </h1>
            </div>

            <div className="flex gap-3 items-center">
              <img className="w-6 h-6" src="./Images/arrow.png" alt="" />
              <h1 className="lg:text-[18px] text-[16px] text-zinc-500">
                {" "}
                The National Geographic Photography Contest
              </h1>
            </div>
          </div>
        </div>

        <div className="lg:w-[22vw] lg:h-full h-[40vh] py-20 justify-between flex lg:px-0 px-5">
          <div className="w-80 lg:h-[60vh] h-[40vh] border-2 border-[#8620D6] shadow-purple-500 shadow-lg"></div>

          <div className="w-[3px] bg-[#8620D6] h-[40vh] lg:h-[60vh]"></div>
        </div>
      </section>

       <section className="flex justify-between bg-[#232323]  lg:flex-row flex-col items-center gap-10 lg:gap-20 py-20 w-full lg:px-40">
        <img
          className="w-40 h-20 object-cover  hover:shadow-lg hover:shadow-purple-900 duration-500"
          src="./Images/logo-ipsum2.png"
          alt=""
        />
        <img
          className="w-40 h-20 object-cover  hover:shadow-lg hover:shadow-purple-900 duration-500"
          src="./Images/logo-ipsum1.png"
          alt=""
        />
        <img
          className="w-40 h-20 object-cover  hover:shadow-lg hover:shadow-purple-900 duration-500"
          src="./Images/logo-ipsum5.png"
          alt=""
        />
        <img
          className="w-40 h-20 object-cover hover:shadow-lg hover:shadow-purple-900 duration-500"
          src="./Images/logo-ipsum6.png"
          alt=""
        />
      </section>
    </div>
  );
}

export default About;
