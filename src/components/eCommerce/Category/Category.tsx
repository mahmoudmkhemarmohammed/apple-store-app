import LazyImage from "@components/common/LazyImage/LazyImage";
import { Link } from "react-router-dom";
import {motion} from "motion/react"
type TCategoryProps = {
  img: string;
  title: string;
  prefix: string;
  index?: number;
};
const Category = ({ img, title, prefix , index}: TCategoryProps) => {
  return (
    <motion.div
    transition={{duration: .4 , delay: typeof index === "number" ? index * .1 : .4 }}
    initial={{opacity: 0 , y: 10 , filter: "blur(4px)"}}
    whileInView={{opacity: 1 , y: 0 ,filter: "blur(0px)"}}
    viewport={{once: true}}
    
    >
    <Link to={`/categories/products/${prefix}`}>
      <div className="box min-w-[300px] bg-white py-6 p-5 rounded-3xl shadow-sm duration-300 hover:-translate-y-2 hover:scale-[1.02]">
        <div className="text mt-7 mb-9">
          <h2 className="text-[27px] capitalize pl-5 font-bold">{title}</h2>
        </div>
        <div className="img">
          <LazyImage className="w-full" img={img} alt={title} />
        </div>
      </div>
    </Link>
    </motion.div>
  );
};

export default Category;
