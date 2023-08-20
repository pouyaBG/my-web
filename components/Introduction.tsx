import React from "react";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="introduction__title">
          .سلام من{" "}
          <span className="md:text-[25px] text-[15px] font-[600] text-[#0A88CE]">
            پویا براری گلیرد
          </span>{" "}
          هستم
        </h1>
        <p className="text-[15px]  md:text-[29px] font-[600] mb-6">
          یک توسعه دهنده وب سایت که در حال حاضر تمرکزم روی طراحی رابط کاربری یا
          همون{" "}
          <span className="md:text-[35px] text-[18px] font-[400] text-[#0A88CE]">
            Front-end
          </span>{" "}
          است.
        </p>
      </div>
      <div className="introduction__image-container"></div>
    </div>
  );
};

export default Introduction;
