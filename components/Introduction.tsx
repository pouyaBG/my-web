import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="flex-1 pt-20 xl:pt-48 padding-x">
        <h1 className="introduction__title">
          سلام من <strong className="text__primary"> پویا براری گلیرد</strong>
          هستم.
        </h1>
        <p className="introduction__subtitle">
          یک توسعه دهنده وب سایت که در حال حاضر تمرکزم روی طراحی رابط کاربری یا
          همون <strong className="text__primary">Front-End</strong> است.
        </p>

      </div>
      <div className="introduction__image-container">
        <div className="introduction__image">
          <Image
            src="/my1.png"
            alt="introduction"
            fill
            className="object-contain"
          />
        </div>

        <div className="introduction__image-overlay" />
      </div>
    </div>
  );
};

export default Introduction;
