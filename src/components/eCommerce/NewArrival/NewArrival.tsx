import LazyImage from "@components/common/LazyImage/LazyImage";
import { motion } from "motion/react";
const NewArrival = () => {
  return (
    <section>
      <div className="container flex gap-3 max-xl:flex-col">
        <motion.div
          transition={{
            duration: 0.4,
          }}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)", scale: 0 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true }}
          className="card-parent min-h-[650px] min-w-[520px] relative max-xl:min-w-fit max-xl:h-[500px] max-[470px]:min-h-fit"
        >
          <h2 className="absolute text-[30px] top-8 font-bold p-6">
            Surprise Your Favourites With These Favourites.
          </h2>
          <LazyImage
            className="h-full rounded-2xl w-full"
            img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-holiday-quick-picks-202411?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1730226657180"
            alt="newArrival"
          />
        </motion.div>

        <div className="box min-h-[650px] flex-grow flex flex-wrap gap-3">
          <motion.div
            transition={{
              duration: 0.4,
            }}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)", scale: 0 }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true }}
            className="card h-[324px] min-w-[300px] relative flex-grow"
          >
            <h2 className="absolute text-[18px] top-8 p-6">
              Surprise Your Favourites With These Favourites.
            </h2>
            <LazyImage
              className="h-full rounded-2xl w-full"
              img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-pro-202411_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729180965302"
              alt="newArrival"
            />
          </motion.div>

          <motion.div
            transition={{
              duration: 0.4,
            }}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)", scale: 0 }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true }}
            className="card h-[324px] min-w-[300px] relative flex-grow"
          >
            <h2 className="absolute text-[18px] top-8 p-6">
              Surprise Your Favourites With These Favourites.
            </h2>
            <LazyImage
              className="h-full rounded-2xl w-full"
              img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728492746398"
              alt="newArrival"
            />
          </motion.div>

          <motion.div
            transition={{
              duration: 0.4,
            }}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)", scale: 0 }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true }}
            className="card h-[324px] min-w-[300px] relative flex-grow"
          >
            <h2 className="absolute text-[18px] top-8 p-6">
              Surprise Your Favourites With These Favourites.
            </h2>
            <LazyImage
              className="h-full rounded-2xl w-full"
              img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-ipad-mini-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728504973912"
              alt="newArrival"
            />
          </motion.div>

          <motion.div
            transition={{
              duration: 0.4,
            }}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)", scale: 0 }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true }}
            className="card h-[324px] relative flex-grow"
          >
            <h2 className="absolute text-[18px] top-8 p-6">
              Surprise Your Favourites With These Favourites.
            </h2>
            <LazyImage
              className="h-full rounded-2xl w-full"
              img="https://www.apple.com/v/displays/a/images/overview/routers/mac_for_you__95lbzl9lp36e_large.jpg"
              alt="newArrival"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
