import React from "react";

function Gallery() {
  return (
    <div>
      <section className="w-full h-full flex lg:flex-row flex-col">
        <div className="lg:w-[50vw] w-full lg:h-[100vh] h-[50vh]">
          <img
            className="w-full h-full object-cover"
            src="./Images/durhm-gallery-1.jpg"
            alt=""
          />
        </div>

        <div className="lg:w-[50vw] w-full h-[100vh] flex flex-col">
          <div className="w-full lg:h-[50vh] flex lg:flex-row flex-col">
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="./Images/durhm-gallery-2.jpg"
                alt=""
              />
            </div>

            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="./Images/durhm-gallery-3.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="w-full h-[50vh] flex lg:flex-row flex-col">
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="./Images/durhm-gallery-4.jpg"
                alt=""
              />
            </div>

            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="./Images/durhm-gallery-5.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
