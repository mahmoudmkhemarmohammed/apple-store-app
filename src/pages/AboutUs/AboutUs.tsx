import SpecialHeading from "@components/common/SpecialHeading/SpecialHeading";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReacthookform, SiRedux, SiZod } from "react-icons/si";
import { GrStorage } from "react-icons/gr";
import { SiAxios } from "react-icons/si";
import { MdOutlineSwipeRight } from "react-icons/md";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
const AboutUs = () => {
  return (
    <div className="container">
      
        <SpecialHeading title="About Developer" />
        <h2 className="text-xl leading-loose pl-2">
          Hello there! I'm
          <span className="text-[#00aaff]">Mahmoud Mkhemar</span>, the
          passionate developer behind this website. With a keen eye for detail
          and a love for crafting seamless digital experiences, I set out to
          create a unique and user-friendly online shopping platform.
        </h2>
        <SpecialHeading title="Frameworks and Technologies Used" />
        <h2 className="text-xl leading-loose mb-5 pl-2">
          In the development of this website, I've harnessed the power of the
          following React and technologies to create a modern,
        </h2>
        <div className="flex gap-3 flex-wrap *:flex *:flex-col *:gap-2 *:items-center *:w-40 *:grow *:bg-white *:p-4 *:justify-center *:rounded-md">
          <div>
            <FaReact className="text-5xl text-[#00aaff]" />
            <h3>React</h3>
          </div>

          <div>
            <SiTypescript className="text-5xl text-[#006eff]" />
            <h3>Type Script</h3>
          </div>

          <div>
            <RiTailwindCssFill className="text-5xl text-[#00aaff]" />
            <h3>Tailwind css</h3>
          </div>

          <div>
            <SiReacthookform className="text-5xl text-[#ff0080]" />
            <h3>React Hook Form</h3>
          </div>

          <div>
            <SiZod className="text-5xl text-[#ffee00]" />
            <h3>Zod</h3>
          </div>

          <div>
            <SiRedux className="text-5xl text-[#00aaff]" />
            <h3>Redux Toolkit</h3>
          </div>

          <div>
            <GrStorage className="text-5xl text-[#ff9500]" />
            <h3>Redux Persist</h3>
          </div>

          <div>
            <SiAxios className="text-5xl text-[#ff5500]" />
            <h3>Axios</h3>
          </div>

          <div>
            <MdOutlineSwipeRight className="text-5xl text-[#00e1ff]" />
            <h3>Swiper</h3>
          </div>

          <div>
            <TbBrandFramerMotion className="text-5xl text-[#b3ff00]" />
            <h3>Motion</h3>
          </div>
        </div>
        <SpecialHeading title="Let's Connect" />
        <h2 className="text-xl leading-loose pl-2">
          Explore the website, discover the offerings, and if you have any
          questions or suggestions, I'm here to listen. Your journey through
          this online shopping experience is as important to me as it is to you.
          Happy exploring!
        </h2>
    </div>
  );
};

export default AboutUs;
