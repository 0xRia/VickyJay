import Resume from "./resume";
import { ExpCircle } from "./svgs";
import resumeUrl from "../utils/Gloria Samuel - Resume.pdf";

const Experience = () => {
  // console.log("resume", resumeUrl)

  return (
    <>
      <div className={`flex flex-col ml-3 lg:items-end`}>
        <div className="font-pop">
          <h2
            className={`h-full flex items-center ml-0 lg:ml-20 font-clashbold text-white text-[20px] font-semibold lg:text- lg:text-[50px] lg:leading-[49.2px]`}
          >
            Experience <small className={`animate-bounce`}>🚀</small>
          </h2>
          <p
            className={`font-medium text-[#FFFFFF99] text-[15px] leading-[22.5px] text-left lg:text-[20px] lg:leading-[30px]]`}
          >
            Some list of my experience over the year..
          </p>
        </div>
        <div className="flex flex-row relative z-[100]  lg:justify-between mt-[30px]">
          <div className="w-0.5 h-[940px] lg:h-[740px] bg-[#1ED7601A]"></div>
          <div className={`flex flex-col space-y-[60px]`}>
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                 FinSec Engineer <span className="hidden">-</span> &nbsp;
                  <span className="hidden italic text-[#FFFFFF99]">
                    Present
                  </span>
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  FauxFinder -{" "}
                  <span className="italic animate-pulse text-[#FFFFFF99] text-sm">
                    some idea i'm cooking up...
                  </span>
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                  My current project, a fintech security solution that
                  provides robust protection against fraud and cyber threats
                  for financial institutions and their customers.
                </h5>
              </div>
            </div>
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Volunteer<span>-</span>&nbsp;
                  <span className="text-xs md:text-base italic text-[#FFFFFF99]">
                   DEC  2022 - AUG 2023

                  </span>
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  Google Developer Student Clubs - Admiralty University of Nigeria
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                  Google Developers Student Club is a tech community for those interested in technology. And who loves to volunteer at events and loves networking? As a member of GDSG ADUN, I was part of the volunteer team that:
                  I organise tutoring classes for those interested in web development.
                  Worked with the GDSC team to host a couple of events physically and virtually.

                </h5>
              </div>
            </div>
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Trainee&nbsp;
                  <span className="hidden">-</span> &nbsp;
                  <span className="italic hidden text-[#FFFFFF99]">
                    

                  </span>
                  <span className="text-xs md:text-base italic text-[#FFFFFF99]">
                  May, 2019 – November, 2022( with academic breaks)


                  </span>
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  Start Innovation Hub, Uyo  - Web Developer (Trainee)
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                  Start Innovation Hub is an ICT firm with an innovation lab in Uyo, Nigeria. At the Start Innovation Hub, completed hands-on training in Python, JavaScript, HTML, CSS, Typescript, Nest.js , Node.js, Laravel and PHP.
                  Focused on building and Debugging small-scale applications and web solutions.
                  Developed fundamental skills in fronted and backend coding, emphasizing problem-solving and clean code.
                  Continued independent learning and projects to deepen proficiency in Python and JavaScript.

                </h5>
              </div>
            </div>
            
            {/*<div className="relative flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>*/}

             
            {/* RESUME */}
            <Resume
              pdfUrl={resumeUrl}
              fileName="Gloria Samuel - Resume.pdf"
              buttonText="Download Resume"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
