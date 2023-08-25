"use client"
import 'chart.js/auto';
import { Radar } from 'react-chartjs-2';

const data = {
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

const optionsRadar = {
  scales: {
    r: {
      suggestedMin: 0,
      suggestedMax: 100,
      angleLines: { color: "rgba(0, 0, 0, 0.2)" },
      grid: { color: "rgba(0, 0, 0, 0.1)" },
      pointLabels: {
        backdropColor: "rgba(255, 255, 255, 0.2)",
        backdropPadding: 5,
        fontColor: "black",
      },
    },
  },
  plugins: {
    legend: { display: true },
  },
};

const RadarSkill = () => {
  return (
    <div data-aos="flip-up" data-aos-duration="1500" className='mt-20 h-screen xl:h-full'>
      <div className="absolute right-4">
        {/* Some content here */}
      </div>
      <div className='m-auto -mt-16 w-[90%] xl:w-[40%]'>
        <Radar data={data} options={optionsRadar} />
      </div>
    </div>
  );
};

export default RadarSkill;
