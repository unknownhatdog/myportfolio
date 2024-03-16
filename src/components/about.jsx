
import { RiReactjsFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { Fade, Zoom } from "react-awesome-reveal";

export const About = () => {

    return (
        <div className="bg-[#1E252B] h-fit w-full p-10 mobile:p-5">
            <h3 className="text-purple-700 font-bold text-[4rem] tablet:text-[2.5rem] mobile:text-[2rem]">
                <Fade delay={200} fraction={0} cascade damping={1e-1}>
                    ABOUT ME
                </Fade>
            </h3>
            <Zoom>
                <p className="text-gray-400 text-[1.2rem] mobile:text-[1rem]">

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam doloribus tempora necessitatibus corrupti? Dolores at voluptatum aut expedita incidunt cumque! Nostrum, repellendus corrupti? Sunt, pariatur. Ex a odit officia. Dolores at voluptatum aut expedita incidunt cumque!
                    Ullam numquam doloribus tempora necessitatibus corrupti? Dolores at voluptatum aut expedita incidunt cumque! Nostrum, repellendus corrupti? Sunt, pariatur. Ex a odit officia. Dolores at voluptatum aut expedita incidunt cumque!
                </p>
            </Zoom>
            <div className="mt-20 mobile:mt-8">
                <h3 className="text-purple-700 font-bold text-center text-[4rem] tablet:text-[2.5rem] mobile:text-[2rem]">
                    <Fade delay={200} fraction={0} cascade damping={1e-1}>
                        MY SKILLS
                    </Fade>
                </h3>

                <Zoom>
                    <div className="flex flex-row flex-wrap justify-center gap-8 mobile:gap-4">
                      

                            <div className="tablet:h-[17rem] tablet:w-[15rem] mobile:h-[8rem] mobile:w-[6rem] mo h-[20rem] w-[17rem] bg-gray-800 hover:bg-gray-700 rounded-[1rem]  shadow-[5px_5px_0px_0px_rgba(109,40,217)]
                     flex flex-col items-center justify-center  mobile:rounded-sm 
                    ">
                                <RiReactjsFill className="text-blue-500 text-[9rem] mobile:text-[3rem]" />
                                <h3 className="text-blue-500 text-[3rem] font-bold mobile:text-[1.2rem]">REACT</h3>
                            </div>
                      

                        <div className="tablet:h-[17rem] tablet:w-[15rem] mobile:h-[8rem] mobile:w-[6rem] mo h-[20rem] w-[17rem] bg-gray-800 hover:bg-gray-700 rounded-[1rem]  shadow-[5px_5px_0px_0px_rgba(109,40,217)]
                     flex flex-col items-center justify-center  mobile:rounded-sm 
                    ">
                            <FaPhp className="text-violet-500 text-[9rem] mobile:text-[3rem]" />
                            <h3 className="text-violet-500 text-[3rem] font-bold mobile:text-[1.2rem]">PHP</h3>
                        </div>
                     

                        <div className="tablet:h-[17rem] tablet:w-[15rem] mobile:h-[8rem] mobile:w-[6rem] mo h-[20rem] w-[17rem] bg-gray-800 hover:bg-gray-700 rounded-[1rem]  shadow-[5px_5px_0px_0px_rgba(109,40,217)]
                     flex flex-col items-center justify-center  mobile:rounded-sm 
                    ">
                            <IoLogoJavascript className="text-yellow-400 text-[9rem] mobile:text-[3rem]" />
                            <h3 className="text-yellow-400 text-[2.5rem] font-bold mobile:text-[.4rem]">JAVASCRIPT</h3>
                        </div>
                    

                        <div className="tablet:h-[17rem] tablet:w-[15rem] mobile:h-[8rem] mobile:w-[6rem] mo h-[20rem] w-[17rem] bg-gray-800 hover:bg-gray-700 rounded-[1rem]  shadow-[5px_5px_0px_0px_rgba(109,40,217)]
                     flex flex-col items-center justify-center  mobile:rounded-sm 
                    ">
                            <SiTailwindcss className="text-blue-500 text-[9rem] mobile:text-[3rem]" />
                            <h3 className="text-blue-500 text-[3rem] font-bold mobile:text-[.5rem]">TAILWIND</h3>
                        </div>
                    

                        <div className="tablet:h-[17rem] tablet:w-[15rem] mobile:h-[8rem] mobile:w-[6rem] mo h-[20rem] w-[17rem] bg-gray-800 hover:bg-gray-700 rounded-[1rem]  shadow-[5px_5px_0px_0px_rgba(109,40,217)]
                     flex flex-col items-center justify-center  mobile:rounded-sm 
                    ">
                            <FaCss3 className="text-blue-600 text-[9rem] mobile:text-[3rem]" />
                            <h3 className="text-blue-600 text-[3rem] font-bold mobile:text-[1.2rem]">CSS</h3>
                        </div>
                      

                        <div className="tablet:h-[17rem] tablet:w-[15rem] mobile:h-[8rem] mobile:w-[6rem] mo h-[20rem] w-[17rem] bg-gray-800 hover:bg-gray-700 rounded-[1rem]  shadow-[5px_5px_0px_0px_rgba(109,40,217)]
                     flex flex-col items-center justify-center  mobile:rounded-sm 
                    ">
                            <FaHtml5 className="text-orange-500 text-[9rem] mobile:text-[3rem]" />
                            <h3 className="text-orange-500 text-[3rem] font-bold mobile:text-[1.2rem]">HTML</h3>
                        </div>
                      

                    </div>
                    </Zoom>

            </div>
        </div>

    )
}