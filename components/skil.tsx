import Image from "next/image";

const listSkillRight = [
    {
        titel: "JavaScript",
        color: "#FFC900",
        svg: "./svg/js.svg",
        description: "مهارت کافی در استفاده از زبان جاوااسکریپت.",
    },
    {
        titel: "React.js",
        color: "#2CCBDF",
        svg: "./svg/react.svg",
        description:
            "ایجاد اپلیکیشن با استفاده از کتابخانه  react.js.با اجزای کاربردی قابل استفاده مجدد، قابل نگهداری و مدیریت.",
    },
    {
        titel: "Next.js",
        color: "#000",
        svg: "./svg/next.svg",
        description: "ایجاد یک وبسایت با استفاده از next.js.",
    },
    {
        titel: "TypeScript",
        color: "#083982",
        svg: "./svg/type.svg",
        description: "استفاده از تایپ اسکریپت برای جلوگیری از خطاهای منطقی برنامه.",
    },
];
const listSkillLeft = [
    {
        titel: "Tailwind",
        color: "#00ACC1",
        svg: "./svg/tail.svg",
        description:
            "استفاده از تیلویند برای بهبود استایل برنامه و ریسپانسیو بهتر.",
    },
    {
        titel: "Git",
        color: "#F48218",
        svg: "./svg/git.svg",
        description:
            "استفاده از گیت و گیت هاب برای نگهداری کد ها ، کامیت گذاری درست.",
    },
    {
        titel: "Sass",
        color: "#F06292",
        svg: "./svg/sass.svg",
        description: "استفاده از پیش پردازنده sass برای بهنیه بودن کد های css خام.",
    },
    {
        titel: "REST API",
        color: "#000",
        svg: "./svg/ra.svg",
        description: ">استفاده از api در برنامه.",
    },
];
const pathSvgRight = [
    { src: "./svg/jsP.svg", leftP: "49%" },
    { src: "./svg/reP.svg", leftP: "49%" },
    { src: "./svg/neP.svg", leftP: "48%" },
    { src: "./svg/teP.svg", leftP: "49%" },
];
const pathSvgLeft = [
    { src: "./svg/taP.svg", rightP: "49" },
    { src: "./svg/gitP.svg", rightP: "49" },
    { src: "./svg/ssP.svg", rightP: "49" },
    { src: "./svg/raP.svg", rightP: "49" },
];
function Skill() {
    return (
        <>
            <div className="w-full   mt-16 xl:mt-2 " >
                <div className="flex flex-col xl:flex-row justify-center items-center px-[5rem]  container m-auto ">
                    <div className="flex flex-col md:w-[75%]  items-center xl:mt-24 ">
                        <div className="xl:hidden flex flex-col  items-center ">
                            <h2 className="mb-16 text-[20px]  font-[700]">مهارت های من</h2>
                        </div>
                        {pathSvgRight.map((item, id) => (
                            <div data-aos="zoom-in" data-aos-duration="1200" key={id} className={`hidden xl:flex absolute left-[49%]`}>
                                <img src={item.src}></img>
                            </div>
                        ))}
                        {listSkillRight.map((item, id) => (
                            <div data-aos="zoom-in" data-aos-duration="1500" style={{ borderColor: item.color }} key={id} className={`cv-timeline-container flex  flex-col w-full mb-5 border-2 p-3 rounded-[19px]  border-opacity-25 cursor-pointer hover:shadow-xl transition-all hover:bg-white hover:scale-105`}>
                                <div className="flex  items-center w-full">
                                    <p className="text-[17px] font-[600]">{item.titel}</p>
                                    <img className="mr-1" src={item.svg}></img>
                                </div>
                                <p className="text-[16px]">{item.description}</p>
                            </div>
                        ))}
                    </div>  
                    <div data-aos="zoom-in" data-aos-duration="500" className="hidden xl:flex flex-col  items-center z-50">
                        <h2 className="mb-16 text-[20px] xl:text-[30px] font-[700]">مهارت های من</h2>
                        <div className="w-[39%] mt-5 ">
                            <img src="/img/my2.png" width={1550} height={800} alt="myimage"></img>
                        </div>
                    </div>
                    <div className="flex flex-col md:w-[75%]  items-center mt-[8%]" >

                        {pathSvgLeft.map((item, id) => (
                            <div data-aos="zoom-in" data-aos-duration="1200" key={id} className={`hidden xl:flex absolute right-[49%]`}>
                                <img src={item.src}></img>
                            </div>
                        ))}
                        {listSkillLeft.map((item, id) => (
                            <div data-aos="zoom-in" data-aos-duration="1500" style={{ borderColor: item.color }} key={id} className={`flex flex-col w-full  mb-5 border-2 p-3 rounded-[19px] border-[${item.color}] border-opacity-25 cursor-pointer hover:shadow-xl transition-all hover:bg-white hover:scale-105`}>
                                <div className="flex  items-center w-full">
                                    <p className="text-[17px] font-[600]">{item.titel}</p>
                                    <img className="mr-1" src={item.svg}></img>
                                </div>
                                <p className="text-[16px]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div data-aos="zoom-out" data-aos-duration="2000" className="w-full m-auto flex justify-center items-center cursor-pointer">
                    <a href="/file/Pouya BARARI.CV.pdf" download className="z-50">
                        <button className="cursor-pointer xl:text-[19px] xl:px-10 text-[16px] xl:py-3 py-[8px] px-5 bg-[#0A88CE] text-white rounded-[19px] mt-5 hover:shadow-xl bordr-1 hover:scale-105 border-[#0A88CE] transition-all ">دریاف رزومه</button>
                    </a>
                </div>
                <div data-aos="fade-right" data-aos-duration="2100" className="w-screen h-8` bg-[#0A88CE] mt-10">
                    <div className="w-screen h-8 bg-black text-white flex justify-between px-10 -rotate-2 items-center">
                    </div>
                </div>
            </div>
        </>
    );
}
export default Skill;