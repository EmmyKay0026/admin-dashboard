"use client";
import React from "react";
import insta from "../../../public/instagram.png";
import linkedin from "../../../public/linkedin.png";
import twitter from "../../../public/twitter.png";
import github from "../../../public/github.png";
import whatsapp from "../../../public/whatsapp.png";
import Image from "next/image";

const Social = ({ className }) => {
  return (
    <>
      <div className={className}>
        <a target="_blank" href="https://www.linkedin.com/in/kadiri-o-emmanuel">
          <Image className="btn" src={linkedin} alt="linkedin-icon" />
        </a>
        <a
          target="_blank"
          href=" https://instagram.com/kadiri___emmanuel?igshid=OGY3MTU3OGY1Mw=="
        >
          <Image className="btn" src={insta} alt="instagram-icon" />
        </a>{" "}
        <a
          target="_blank"
          href="https://wa.me/+2348104064231?text=Hello,%20my%20name%20is_________"
        >
          <Image className="btn" src={whatsapp} alt="whatsapp-icon" />
        </a>
        <a target="_blank" href="https://github.com/EmmyKay0026">
          <Image className="btn" src={github} alt="git hub icon" />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/emmykay26?t=d39-vq4gUlYRiBrAZCXiLw&s=09"
        >
          <Image className="btn" src={twitter} alt="twitter-icon" />
        </a>
      </div>
    </>
  );
};

export default Social;
