import { workSamplesPhoto } from "@/constants";

function WorkSamples() {

  return (
    <>
      <div className=" h-full container m-auto">
        <h2 data-aos="flip-up" data-aos-duration="200" className="xl:text-[30px] text-[20px]  m-auto w-full text-center font-[700]  mt-16">توسعه داده شده توسط من</h2>

        <div className="w-full h-full flex flex-col xl:flex-row justify-center items-center m-auto p-5 mb-10">
          <div className="flex flex-col justify-center">
            <div className="imageBase">
              {workSamplesPhoto.map((item, id) => (
                <div data-aos="flip-up" data-aos-duration="1000" key={id} className="box">
                  <div className="imgBx w-[85%]">
                    <img src={item.src}></img>
                  </div>
                  <div className="content">
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.description}
                      </p>
                      {item?.btn ? <>
                        <p className="font-[900] text-15px my-2">
                          <a href={item.link}> مشاهده وب سایت</a>
                        </p>
                      </> : ""}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full m-auto mt-10 flex justify-center items-center">
          <button className="xl:text-[19px]   xl:px-10 xl:py-3 p-2 px-5 bg-[#0A88CE] text-white rounded-[19px] mt-5 hover:shadow-xl bordr-1 hover:scale-105 border-[#0A88CE] transition-all">جزئیات بیشتر</button>
        </div>
      </div>
      {/* <div  data-aos="fade-right" data-aos-duration="1200" className="w-screen h-8` bg-[#0A88CE] mt-[10%] md:mt-[5%]">
        <div className="w-screen h-8 bg-black text-white flex justify-between px-10 -rotate-2 items-center">
        </div>
      </div> */}
    </>
  );
}

export default WorkSamples;