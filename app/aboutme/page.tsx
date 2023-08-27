

function Aboutme() {
  const listCV = [
    {
      title: "FrontEnd developer",
      jobPosition: "Front-end team in Hyponet",
      description:
        "ابتدا به عنوان کار آموز در این مجموعه مشغول به کار شدم و بعد از گذراندن دوره کارآموزی به عنوان یکی از اعضای تیم فرانت اند بر روی پروژه های مختلفی کار کردم.",
      yrS: "1400",
      yrE: "1402",
    },
    {
      title: "computer engineer",
      jobPosition: "Student in shomal university",
      description:
        "در رشته مهندسی کامپیوتر گرایش نرم افزار شروع به تحصیل کردم و همچنان مشغول  به تحصیل هستم.",
      yrS: "1399",
      yrE: "1402",
    },
    {
      title: "FrontEnd developer",
      jobPosition: "Freelancer",
      description:
        "به صورت فریلنسری پروژه های کوچک را برای به دست آوردن تجربه و مهارت انجام میدادم.",
      yrS: "1398",
      yrE: "1399",
    },
  ];
  return (
    <>
      <section className="flex-1 mt-[140px] mb-10">
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