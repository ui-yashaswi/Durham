import React from 'react'

function Recent() {
  return (
    <div>
      <section className="w-full h-full flex lg:flex-row flex-col  bg-[#232323]  py-20  px-[15px] lg:pl-20">
        <div className="flex flex-col lg:w-[43vw] h-full gap-6 lg:pt-40">
          <div className="flex items-center gap-5">
            <div className="w-20 h-3 bg-[#8620D6]"></div>
            <h1 className="text-zinc-100 text-xl">OUR PORTFOLIO</h1>
          </div>

          <div className="text-zinc-100 lg:text-7xl text-6xl font-serif">
            <h1>Recent Work Completed</h1>
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

        <div className="w-[96vw] lg:w-[50vw] h-[60vh] lg:h-[100vh] py-8 mt-12 bg-yellow-0 relative">
          <img
            className="absolute lg:w-[26vw] w-[70vw] top-0 left-0 lg:left-20 lg:top-0 z-10"
            src="./Images/recent-lg.jpg"
            alt=""
          />

          <img
            className="absolute lg:w-[20vw] w-[50vw]  bottom-0 right-0 lg:right-0 lg:bottom-10 z-20 "
            src="./Images/recent-sm.jpg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default Recent
