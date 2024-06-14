import React from 'react'

function Skills() {
  return (
    <div>
      <section className="bg-[#2c272e] w-full flex gap-24 flex-col-reverse lg:mt-0 mt-[70vh] lg:flex-row  h-full py-28 px-[15px] lg:px-20">
        <div className="flex gap-6 lg:w-[60vw] ">
          <div className="w-2 lg:h-[110vh] bg-[#8620D6]"></div>

          <div className="lg:w-[38vw] lg:h-[110vh]">
            <img
              className="w-full h-full object-cover"
              src="./Images/durhm-experience.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-6 py-10">
          <div className="flex items-center gap-5">
            <div className="w-20 h-3 bg-[#8620D6]"></div>
            <h1 className="text-zinc-100 text-xl">ABOUT MY SKILLS</h1>
          </div>

          <div className="text-zinc-100 lg:text-7xl text-6xl font-serif">
            <h1>I Have Experience in This Field</h1>
          </div>

          <h1 className="text-zinc-400 text-[17px] pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sodales at nunc quis semper. ClasclassName aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Fusce
          </h1>

          <h1 className="text-zinc-400 text-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sodales at nunc quis semper. ClasclassName aptent taciti
            sociosqu ad litora torquent per conubia nostra.
          </h1>

          <div className="w-full h-full flex flex-col gap-8">
            <div className="w-full h-full flex flex-col gap-3">
              <h1 className="text-zinc-100 text-[17px] font-medium">Photography</h1>

              <div className="lg:w-[35vw] w-[70vw] h-[10px] lg:h-[8px] bg-zinc-700 rounded-md relative">
                <div className=" lg:w-[30vw] w-[60vw] h-[10px] lg:h-[8px] bg-[#8620D6] absolute overflow-hidden"></div>
              </div>
            </div>

            <div className="w-full h-full flex flex-col gap-3">
              <h1 className="text-zinc-100 text-[17px] font-medium">Photography</h1>

              <div className="lg:w-[35vw] w-[70vw] h-[10px] lg:h-[8px] bg-zinc-700 rounded-md relative">
                <div className=" lg:w-[30vw] w-[45vw] h-[10px] lg:h-[8px] bg-[#8620D6] absolute overflow-hidden"></div>
              </div>
            </div>

            <div className="w-full h-full flex flex-col gap-3">
              <h1 className="text-zinc-100 text-[17px] font-medium">Photography</h1>

              <div className="lg:w-[35vw] w-[70vw] h-[10px] lg:h-[8px] bg-zinc-700 rounded-md relative">
                <div className=" lg:w-[30vw] w-[50vw] h-[10px] lg:h-[8px] bg-[#8620D6] absolute overflow-hidden"></div>
              </div>
            </div>

            <div className="w-full h-full flex flex-col gap-3">
              <h1 className="text-zinc-100 text-[17px] font-medium">Photography</h1>

              <div className="lg:w-[35vw] w-[70vw] h-[10px] lg:h-[8px] bg-zinc-700 rounded-md relative">
                <div className=" lg:w-[30vw] w-[55vw] h-[10px] lg:h-[8px] bg-[#8620D6] absolute overflow-hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills
