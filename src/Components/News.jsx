import React from "react";

function News() {
  return (
    <div>
      <section className="w-full h-full flex lg:flex-row lg:gap-0 gap-20 flex-col-reverse bg-[#2c272e] py-20 px-[15px] lg:px-20">
        <div className="w-full h-full flex lg:flex-row flex-col gap-10">
          <div className=" lg:w-[25vw] h-full bg-[#232323] p-4 flex flex-col gap-6 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-purple-900 hover:border-[#8620D6] hover:border-2 duration-300 transition-smooth">
            <img
              className="border-b-2 border-[#8620D6]"
              src="./Images/news-1.jpg"
              alt=""
            />

            <div className="flex flex-col pt-3 gap-5">
              <h1 className="text-2xl font-serif text-zinc-100">
                What is a digital asset manager and why do I need one?
              </h1>

              <h1 className="text-[#8620D6] text-[17px]">January 25, 2022</h1>

              <h1 className="text-zinc-400">
                Fusce consequat vitae enim et facilisis Phasellus tempus
                eleifend sagittis. Suspendisse cursus nisl et tincidunt
                sollicitudin. Donec interdum elementum pharetra. Quisque tempor
                elemen ultricies. Nullam
              </h1>

              <h1 className="text-[#8620D6] text-[17px]">Read More</h1>
            </div>
          </div>

          <div className="lg:w-[25vw] h-full bg-[#232323] p-4 flex flex-col gap-6 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-purple-900 hover:border-[#8620D6] hover:border-2 duration-300 transition-smooth">
            <img
              className="border-b-2 border-[#8620D6]"
              src="./Images/news-2.jpg"
              alt=""
            />

            <div className="flex flex-col pt-3 gap-5">
              <h1 className="text-2xl font-serif text-zinc-100">
                What is a digital asset manager and why do I need one?
              </h1>

              <h1 className="text-[#8620D6] text-[17px]">January 25, 2022</h1>

              <h1 className="text-zinc-400">
                Fusce consequat vitae enim et facilisis Phasellus tempus
                eleifend sagittis. Suspendisse cursus nisl et tincidunt
                sollicitudin. Donec interdum elementum pharetra. Quisque tempor
                elemen ultricies. Nullam
              </h1>

              <h1 className="text-[#8620D6] text-[17px]">Read More</h1>
            </div>
          </div>

          <div></div>
        </div>

        <div className="flex flex-col w-full h-full gap-6 lg:pt-20">
          <div className="flex items-center gap-5">
            <div className="w-20 h-3 bg-[#8620D6]"></div>
            <h1 className="text-zinc-100 text-xl">LATEST NEWS</h1>
          </div>

          <div className="text-zinc-100 lg:text-6xl text-4xl font-serif">
            <h1>Read Our Latest News</h1>
          </div>

          <h1 className="text-zinc-400 text-[16.2px] pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sodales at nunc quis semper. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Fusce
          </h1>

          <button className="text-zinc-100  border-2 border-[#8620D6] py-3 w-60 hover:text-[#8620D6]">
            VIEW OUR NEWS
          </button>
        </div>
      </section>

      <section className="w-full h-full flex lg:flex-row flex-col justify-between bg-[#232323]  px-[15px] lg:gap-0 gap-20 lg:px-20 py-28">
        <div className="flex flex-col w-full lg:w-[45vw] h-full gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-3 bg-[#8620D6]"></div>
            <h1 className="text-zinc-100 text-xl">LET'S TO TALK</h1>
          </div>

          <div className="text-zinc-100 lg:text-6xl text-4xl font-serif">
            <h1>Keep In Touch</h1>
          </div>

          <h1 className="text-zinc-400 text-[16.2px] pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sodales at nunc quis semper. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Fusce Clas.
          </h1>

          <button className="text-zinc-100  border-2 border-[#8620D6] py-3 w-40 hover:text-[#8620D6]">
            LETS CHAT
          </button>
        </div>

        <div className="w-full h-full flex flex-col items-center">
          <div className="w-full lg:w-[40vw] h-64 border-2 border-[#8620D6]"></div>

          <div className="text-3xl text-[#8620D6]">
            -------------✧-------------
          </div>
        </div>
      </section>
    </div>
  );
}

export default News;
