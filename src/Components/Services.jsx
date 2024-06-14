import React from "react";

import bgImg from "/Images/bg-image-1.jpg"

function Services() {
  return (
    <div>
      <section className="w-full h-full flex lg:flex-row flex-col bg-[#2c272e] gap-20 lg:px-20 px-[15px] py-28">
        <div className="lg:w-[45vw] w-full flex flex-col gap-20 lg:gap-14">
          <div className="w-full h-full flex lg:flex-row flex-col gap-16 lg:gap-10">
            <div className="flex flex-col gap-4">
              <img
                className="w-24 h-24  object-cover shadow-lg p-4 border  border-purple-600 shadow-zinc-600 rounded-full"
                src="./Images/icons8-wedding-64.png"
                alt=""
              />
              <h1 className="text-[27px] font-serif text-zinc-100">
                Wedding & Prewedding
              </h1>
              <h1 className="lg:text-[16px] text-[17px] text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </h1>
            </div>

            <div className="flex flex-col gap-4">
              <img
                className="w-24 h-24  object-cover shadow-lg p-4 border  border-purple-600 shadow-zinc-600 rounded-full"
                src="./Images/icons8-office-50.png"
                alt=""
              />
              <h1 className="text-[27px] font-serif text-zinc-100">
                Company Profile
              </h1>
              <h1 className="lg:text-[16px] text-[17px] text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </h1>
            </div>
          </div>

          <div className="w-full h-full flex lg:flex-row flex-col gap-16 lg:gap-10">
            <div className="flex flex-col gap-4">
              <div className="w-24 h-24 flex items-center justify-center shadow-lg p-4 border border-purple-600 shadow-zinc-600 rounded-full">
                <img
                  className="  object-cover "
                  src="./Images/icons8-women-shoe-50.png"
                  alt=""
                />
              </div>
              <h1 className="text-[27px] font-serif text-zinc-100">
                Model Photoshot
              </h1>
              <h1 className="lg:text-[16px] text-[17px] text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </h1>
            </div>

            <div className="flex flex-col gap-4">
              <img
                className="w-24 h-24 flex items-center justify-center shadow-lg p-4 border border-purple-600 shadow-zinc-600 rounded-full"
                src="./Images/icons8-video-camera-50.png"
                alt=""
              />
              <h1 className="text-[27px] font-serif text-zinc-100">
                Videography
              </h1>
              <h1 className="lg:text-[16px] text-[17px] text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:w-[43vw] h-full gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-3 bg-[#8620D6]"></div>
            <h1 className="text-zinc-100 text-xl">WHY CHOOSE US</h1>
          </div>

          <div className="text-zinc-100 lg:text-7xl text-5xl font-serif">
            <h1>The Best Service For Our Customers</h1>
          </div>

          <h1 className="text-zinc-400 text-[16.2px] pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sodales at nunc quis semper. className aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Fusce
          </h1>

          <h1 className="text-zinc-400 text-[16.2px]">
            className aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Fusce
          </h1>

          <button className="text-zinc-100  border-2 border-[#8620D6] py-3 w-48 px-8 hover:text-[#8620D6]">
            VIEW PORTFOLIO
          </button>
        </div>
      </section>

      <section className="relative h-[60vh] lg:h-[80vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center px-[15px] lg:px-20 h-full">
          <div className=" ">
            <div className="flex flex-col lg:w-[41vw] h-full gap-6">
              <div className="flex items-center gap-5">
                <div className="w-20 h-3 bg-[#8620D6]"></div>
                <h1 className="text-zinc-100 lg:text-xl">
                  LATEST TESTIMONIALS
                </h1>
              </div>

              <div className="text-zinc-100 lg:text-6xl text-4xl font-serif">
                <h1>Words From My Clients</h1>
              </div>

              <h1 className="text-zinc-400 text-[16.2px] pt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sodales at nunc quis semper. className aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Fusce
              </h1>

              <button className="text-zinc-100  border-2 border-[#8620D6] py-3 w-60 hover:text-[#8620D6]">
                VIEW TESTIMONIALS
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
