import { listCV } from "@/public/svg";

function Aboutme() {
  return (
    <>
      <section className="flex-1 mt-[110px]">
        <div className="mt-10 px-4">
          <div className="max-w-screen  mx-auto">
            <div className="cv-timeline-container pl-10 my-8 ">
              <ul className="flex justify-center flex-wrap w-full">
                {listCV.map((item, id) => (
                  <li data-aos="zoom-in" data-aos-duration="1500" key={id} className="bg-white rounded-xl shadow-lg md:w-1/2  mb-10">
                    <div className="title text-[#0A88CE] font-bold">{item.title}</div>
                    <div className="">{item.jobPosition}</div>
                    <div className=" text-xs md:text-base mt-4 ">{item.description}</div>
                    <span className="number">
                      <span style={{ fontSize: "14px", marginRight: "-10px", marginTop: "4px" }} >{item.yrE}</span>
                      <span style={{ fontSize: "14px", marginRight: "-10px", marginTop: "4px" }} >{item.yrS}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutme;