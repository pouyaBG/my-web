"use client"
import { data, optionsRadar } from '@/constants';
import 'chart.js/auto';
import { Radar } from 'react-chartjs-2';

const RadarSkill = () => {
  return (
    <div data-aos="flip-up" data-aos-duration="1500" className='mt-20 h-screen xl:h-full'>
      <div className="absolute right-4">
      </div>
      <div className='m-auto -mt-16 w-[90%] xl:w-[40%]'>
        <Radar data={data} options={optionsRadar} />
      </div>
    </div>
  );
};

export default RadarSkill;
