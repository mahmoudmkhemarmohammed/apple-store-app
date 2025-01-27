import { FaCarSide } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { motion } from "motion/react";
const FeaturesIcons = () => {
  return (
    <section className="icons py-5">
      <div className="container flex justify-between gap-3 flex-wrap">

        <motion.div
          transition={{
            duration: 0.4,
          }}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" , scale: 0}}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1}}
          viewport={{ once: true }}
          className="col flex items-center gap-y-3 flex-col bg-white p-7 rounded-lg grow"
        >
          <FaCarSide className="bg-[#00aaff] text-6xl text-white p-2 rounded-full" />
          <h2 className="text-2xl font-bold text-center">
            FREE AND FAST DELIVERY
          </h2>
          <p>Free delivery for all orders over $140</p>
        </motion.div>


        <motion.div
          transition={{
            duration: 0.4,
            delay: .2
          }}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" , scale: 0}}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1}}
          viewport={{ once: true }}
          className="col flex items-center gap-y-3 flex-col bg-white p-7 rounded-lg grow"
        >
          <CiHeadphones className="bg-[#00aaff] text-6xl text-white p-2 rounded-full" />
          <h2 className="text-2xl font-bold text-center">
            24/7 CUSTOMER SERVICE
          </h2>
          <p>Friendly 24/7 customer support</p>
        </motion.div>


        <motion.div
          transition={{
            duration: 0.4,
            delay: .4
          }}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" , scale: 0}}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1}}
          viewport={{ once: true }}
          className="col flex items-center gap-y-3 flex-col bg-white p-7 rounded-lg grow"
        >
          <AiFillSafetyCertificate className="bg-[#00aaff] text-6xl text-white p-2 rounded-full" />
          <h2 className="text-2xl font-bold text-center">
            MONEY BACK GUARANTEE
          </h2>
          <p>We reurn money within 30 days</p>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesIcons;
