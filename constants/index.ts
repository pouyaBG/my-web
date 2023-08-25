export const listSkillRight = [
  {
    titel: "JavaScript",
    color: "#FFC900",
    svg: "/js.svg",
    description: "مهارت کافی در استفاده از زبان جاوااسکریپت.",
  },
  {
    titel: "React.js",
    color: "#2CCBDF",
    svg: "/react.svg",
    description:
      "ایجاد اپلیکیشن با استفاده از کتابخانه  react.js.با اجزای کاربردی قابل استفاده مجدد، قابل نگهداری و مدیریت.",
  },
  {
    titel: "Next.js",
    color: "#000",
    svg: "/next.svg",
    description: "ایجاد یک وبسایت با استفاده از next.js.",
  },
  {
    titel: "TypeScript",
    color: "#083982",
    svg: "/type.svg",
    description: "استفاده از تایپ اسکریپت برای جلوگیری از خطاهای منطقی برنامه.",
  },
];
export const listSkillLeft = [
  {
    titel: "Tailwind",
    color: "#00ACC1",
    svg: "/tail.svg",
    description:
      "استفاده از تیلویند برای بهبود استایل برنامه و ریسپانسیو بهتر.",
  },
  {
    titel: "Git",
    color: "#F48218",
    svg: "/git.svg",
    description:
      "استفاده از گیت و گیت هاب برای نگهداری کد ها ، کامیت گذاری درست.",
  },
  {
    titel: "Sass",
    color: "#F06292",
    svg: "/sass.svg",
    description: "استفاده از پیش پردازنده sass برای بهنیه بودن کد های css خام.",
  },
  {
    titel: "REST API",
    color: "#000",
    svg: "/ra.svg",
    description: ">استفاده از api در برنامه.",
  },
];
export const pathSvgRight = [
  { src: "/jsP.svg", leftP: "49%" },
  { src: "/reP.svg", leftP: "49%" },
  { src: "/neP.svg", leftP: "48%" },
  { src: "/teP.svg", leftP: "49%" },
];
export const pathSvgLeft = [
  { src: "/taP.svg", rightP: "49" },
  { src: "/gitP.svg", rightP: "49" },
  { src: "/ssP.svg", rightP: "49" },
  { src: "/raP.svg", rightP: "49" },
];
export const listCV = [
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

export const data = {
  labels: [
    "HTML&Css",
    "JavaScript",
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Git&GitHub",
    "Sass",
    "Rest Api",
  ],
  datasets: [
    {
      label: "Proficiency",
      data: [95, 60, 80, 68, 40, 86, 94, 84, 90],
      backgroundColor: "rgba(10,136,206,0.2)",
      borderColor: "rgba(10,136,206,0.5)",
      borderWidth: 2,
    },
  ],
};

export const optionsRadar = {
  scales: {
    r: {
      suggestedMin: 0,
      suggestedMax: 100,
      angleLines: { color: "rgba(0, 0, 0, 0.2)" },
      grid: { color: "rgba(0, 0, 0, 0.1)" },
      pointLabels: { fontSize: 40 },
    },
  },
  plugins: {
    legend: { display: true },
  },
};

export const workSamplesPhoto = [
  {
    src: "/carina.png",
    title: "Carina Tower",
    description: "توسعه داده شده توسط next.js.",
    btn: true,
    link: "https://carina-tower.com/",
  },
  {
    src: "/airline.png",
    title: "airline",
    description:
      "یک پنل ساخته شده با استفاده از React.js که برای امور حسابداری آژانس های هواپیمایی می باشد و همچنان در حال توسعه است.",
    btn: false,
    link: "",
  },
  {
    src: "/shop.png",
    title: "Shoping Page",
    description: "توسعه داده شده توسط js",
    btn: true,
    link: "https://jazzy-platypus-b98461.netlify.app/",
  },
];
