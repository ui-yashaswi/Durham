import React from 'react'
import bgImg2 from "/Images/bg-para-02.jpg";

function Footer() {
  return (
    <div>
      <section className="w-full h-full flex lg:flex-row flex-col gap-20 px-[15px] lg:px-20 py-28 bg-[#2c272e]">
        <div className="lg:w-[41vw] w-full flex flex-col gap-10">
          <div className="relative h-[30vh]">
            <div
              className="absolute inset-0 bg-cover bg-center saturate-0"
              style={{ backgroundImage: `url(${bgImg2})` }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative flex items-center justify-center h-full">
              <h1 className="text-7xl tracking-[2px] font-serif text-[#8620D6]/40">
                GET IN TOUCH
              </h1>
            </div>
          </div>

          <div className="w-full flex h-[38vh] flex-col gap-4">
            <div className="w-full h-20 flex gap-4">
              <input
                className="text-lg w-full h-16 text-purple-900 bg-[#2c272e]"
                placeholder="Name"
                type="text"
              />
              <input
                className="text-lg w-full h-16 text-purple-900 bg-[#2c272e]"
                placeholder="Email"
                type="text"
              />
            </div>

            <textarea
              placeholder="Message"
              className="text-lg text-purple-900 h-48 bg-[#2c272e] border-b"
              name="Message"
              id=""
            ></textarea>
          </div>

          <button className="text-zinc-100  border-2 border-[#8620D6] py-3 hover:text-[#8620D6]">
            SUBMIT
          </button>
        </div>

        <div className="flex flex-col w-full lg:w-[45vw] h-full gap-6 pt-5">
          <div className="flex items-center gap-5">
            <div className="w-20 h-3 bg-[#8620D6]"></div>
            <h1 className="text-zinc-100 text-xl">CONTACT US</h1>
          </div>

          <div className="text-zinc-100 lg:text-6xl text-5xl font-serif">
            <h1>Have A Project?</h1>
          </div>

          <h1 className="text-zinc-400 text-[16.2px] pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sodales at nunc quis semper. className aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Fusce Clas.
          </h1>

          <h1 className="text-zinc-400 text-[16.2px] pt-2">
            className aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Fusce
          </h1>

          <div className="w-full h-full flex lg:flex-row flex-col lg:gap-0 gap-16 justify-between pt-10">
            <div className="w-full h-full flex flex-col gap-16">
              <div className="w-full h-full flex gap-3 items-center">
                <img
                  className="w-16 h-116 border-2 border-[#8620D6] p-3 rounded-full shadow-lg shadow-purple-900"
                  src="./Images/phone.png "
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h1 className="text-zinc-100 text-xl">Phone Number</h1>
                  <h1 className="text-[16.2px] text-zinc-400">123-234-1234</h1>
                </div>
              </div>

              <div className="w-full h-full flex gap-3 items-center">
                <img
                  className="w-16 h-116 border-2 border-[#8620D6] p-3 rounded-full shadow-lg shadow-purple-900"
                  src="./Images/website.png"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h1 className="text-zinc-100 text-xl">Website</h1>
                  <h1 className="text-[16.2px] text-zinc-400">
                    www.awesomesite.com
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-full h-full flex flex-col gap-16">
              <div className="w-full h-full flex gap-3 items-center">
                <div className="h-16 w-16 border-2 border-[#8620D6] p-3 rounded-full shadow-lg shadow-purple-900">
                  <img className="w-8 h-8" src="./Images/mail.png " alt="" />
                </div>

                <div className="flex flex-col gap-1">
                  <h1 className="text-zinc-100 text-xl">Email address</h1>
                  <h1 className="text-[16.2px] text-zinc-400">
                    hello@awesomesite.com
                  </h1>
                </div>
              </div>

              <div className="w-full h-full flex gap-3 items-center">
                <img
                  className="w-16 h-16 border-2 border-[#8620D6] p-3 rounded-full shadow-lg shadow-purple-900"
                  src="./Images/loaction.png"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h1 className="text-zinc-100 text-xl">Physical Address</h1>
                  <h1 className="text-[16.2px] text-zinc-400">
                    99 Roving St., Big City, PKU 23456
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full h-full bg-[#232323] px-[15px] lg:px-20 flex flex-col ">
        <div className="w-full h-full flex justify-between items-center py-10 border-b border-zinc-700 lg:flex-row flex-col">
          <div className=" flex-col flex lg:items-start items-center gap-2">
            <img
              className="w-28 h-28"
              src="./Images/icons8-photography-100.png"
              alt=""
            />

            <h1 className="text-zinc-400 px-6 lg:px-0 text-lg text-center lg:text-sm">
              In euismod dolor non justo vestibulum laoreet.
            </h1>
          </div>

          <div className="flex flex-col gap-8 lg:pt-0 pt-6">
            <div className="flex gap-5 text-wrap">
              <h1 className="text-md text-zinc-400 hover:text-[#8620D6]">
                Home
              </h1>
              <h1 className="text-md text-zinc-400 hover:text-[#8620D6]">
                About
              </h1>
              <h1 className="text-md text-zinc-400 hover:text-[#8620D6]">
                Portfolio
              </h1>
              <h1 className="text-md text-zinc-400 hover:text-[#8620D6]">
                Services
              </h1>
              <h1 className="text-md text-zinc-400 hover:text-[#8620D6]">
                Blog
              </h1>
              <h1 className="text-md text-zinc-400 hover:text-[#8620D6]">
                Contact Us
              </h1>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex gap-8 justify-center lg:justify-end">
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
            </div>
          </div>
        </div>

        <div className="w-full h-20 flex  items-center justify-center text-center text-zinc-400">
          Copyright 2022 © All Right Reserved Design by Rometheme
        </div>
      </footer>
    </div>
  );
}

export default Footer
