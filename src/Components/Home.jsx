import React from "react";

function Home() {
  return (
    <div>
      <section className="w-full h-full flex lg:flex-row bg-[#232323] flex-col-reverse pt-40">
        <div className="px-[15px] lg:px-20 flex py-20 flex-col gap-16">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <div className="w-20 h-3 bg-[#8620D6]"></div>
              <h1 className="text-zinc-100 text-xl">
                PROFESSIONAL PHOTOGRAPER
              </h1>
            </div>

            <h1 className="lg:text-9xl text-5xl font-serif text-zinc-100">
              ALEXANDER
            </h1>
            <h1 className="lg:text-9xl text-5xl font-serif text-zinc-100">
              DURHAM
            </h1>
          </div>

          <div className="flex gap-6">
            <div className="w-6 h-48 bg-[#8620D6]"></div>

            <div className="flex flex-col gap-6">
              <div className="flex gap-8 py-2">
                <img
                  className="w-6 h-6 bg-[#8620D6] hover:border rounded-full p-1"
                  src="./Images/icons8-facebook-50.png"
                  alt=""
                />
                <img
                  className="w-6 h-6 bg-[#8620D6] hover:border rounded-full p-1"
                  src="./Images/icons8-instagram-32.png"
                  alt=""
                />
                <img
                  className="w-6 h-6 bg-[#8620D6] hover:border rounded-full p-1"
                  src="./Images/icons8-twitter-24.png"
                  alt=""
                />
                <img
                  className="w-6 h-6 bg-[#8620D6] hover:border rounded-full p-1"
                  src="./Images/icons8-linkedin-2-30.png"
                  alt=""
                />
              </div>

              <h1 className="text-zinc-500 text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sodales at nunc quis semper. class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Fusce
              </h1>

              <button className="text-zinc-100 border-2 border-[#8620D6] w-48 py-3">
                VIEW PORTFOILO
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-[50vw] lg:h-[70vh] lg:ml-0 ml-[10vw] lg:pl-20 pl-10 h-[60vh] relative border-2 border-[#8620D6]  ">
          <div className="lg:w-[26vw] lg:h-[70vh] h-[40vh] w-[70vw]   my-32 border-[#8620D6] shadow-lg shadow-purple-500 border-[15px] mr-20">
            <img
              className=" lg:w-[29vw] w-[77vw] absolute z-20 top-0 right-0 object-cover"
              src="./Images/burham-1-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="h-full w-full bg-[#2c272e] flex flex-col justify-center items-center gap-14 py-20 px-[20px]">
        <em className="text-[#8c8ca9] lg:w-[60vw] lg:text-4xl text-2xl text-center font-serif leading-[40px] lg:leading-[60px] font-thin">
          “ The best images are the ones that can maintain their strength and
          have an impact for years, regardless of how many times they are
          viewed.”
        </em>

        <div className="bg-[#8620D6] w-28 h-2"></div>

        <img className="w-66 h-16 lg:p-0 p-1" src="./Images/ttd.png" alt="" />
      </section>
    </div>
  );
}

export default Home;
