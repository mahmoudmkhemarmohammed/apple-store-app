import LowAndHighPrice from "./LowAndHighPrice";
import InputRange from "./InputRange";
import Loading from "@components/feedback/Loading/Loading";
import CheckToRenderGridList from "@components/common/CheckToRenderGridList/CheckToRenderGridList";
import useCategories from "@hooks/useCategories";
import { CgSearch } from "react-icons/cg";
import { useState } from "react";
import { motion } from "motion/react";
import { IoIosCloseCircle } from "react-icons/io";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
const SideBar = ({
  setPrefix,
  handleSearch,
  sortWithoutRange,
  handlePriceRangeChange,
}: {
  setPrefix: (e: string) => void;
  sortWithoutRange: (value: string) => void;
  handleSearch: (value: string) => void;
  handlePriceRangeChange: (value: string[]) => void;
}) => {
  const { records, loading, error } = useCategories();
  const [searchValue, setSearchValue] = useState("");
  const [toggleExtendSidebar, setToggleExtendSidebar] = useState(false);

  return (
    <motion.div
      transition={{ duration: 0.8, type: "spring" }}
      initial={{ opacity: 0, x:-10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`min-w-[300px] bg-white p-4 rounded-md sticky z-50 top-20 h-fit shadow-sm max-md:w-full max-md:flex max-md:justify-between max-md:flex-wrap ${
        toggleExtendSidebar ? "max-md:h-fit" : "max-md:h-[165px] "
      } overflow-hidden`}
    >
      <div className="search flex justify-between flex-col gap-2 max-md:justify-start max-md:w-full">
        <label htmlFor="search" className="text-xl">
          Search
        </label>
        <div className="flex justify-between items-center w-[268px] max-md:w-full max-md:flex-col max-md:gap-3">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            onBlur={(e) => (e.target.value = "")}
            type="search"
            id="search"
            name="search"
            placeholder="Search"
            className="border border-[#00aaff] p-2 outline-none rounded-md mt-1 w-3/4 max-md:mt-0 max-md:w-full"
          />
          <div className="flex justify-between max-md:w-full">
            <CgSearch
              className="bg-[#00aaff] text-[42px] p-2 cursor-pointer rounded-md text-white w-full max-md:w-[75%]"
              onClick={() => handleSearch(searchValue)}
            />
            {toggleExtendSidebar ? (
              <IoIosCloseCircle
                className="hidden max-md:block text-[42px] p-2 cursor-pointer rounded-md text-white w-1/5 bg-[#ff005d]"
                onClick={() => setToggleExtendSidebar(!toggleExtendSidebar)}
              />
            ) : (
              <HiMiniBars3BottomRight
                className="hidden max-md:block text-[42px] p-2 cursor-pointer rounded-md text-white w-1/5 bg-[#00ff2f]"
                onClick={() => setToggleExtendSidebar(!toggleExtendSidebar)}
              />
            )}
          </div>
        </div>
      </div>

      <div className="mt-5 max-md:w-[48%]">
        <h2 className="text-xl font-bold mb-5">Categories</h2>
        <Loading status={loading} error={error} type="filter">
          <CheckToRenderGridList
            records={records}
            renderItem={(record) => (
              <div key={record.id} className="flex gap-4 mb-2">
                <input
                  onChange={(e) => setPrefix(e.target.name)}
                  key={record.id}
                  type="checkbox"
                  name={record.prefix}
                  id={record.prefix}
                  className="w-5 cursor-pointer"
                />
                <h3>{record.title}</h3>
              </div>
            )}
          />
        </Loading>
      </div>

      <div className="mt-5 max-md:w-[48%]">
        <h2 className="text-xl font-bold mb-5">Price</h2>
        <LowAndHighPrice
          title="Low to High"
          type="asc"
          sortWithoutRange={sortWithoutRange}
        />
        <LowAndHighPrice
          title="High to Low"
          type="desc"
          sortWithoutRange={sortWithoutRange}
        />
      </div>

      <div className="mt-5 max-md:w-full">
        <h2 className="text-xl font-bold mb-5">Range</h2>
        <InputRange
          title="10$ - 100$"
          min={10}
          max={100}
          handlePriceRangeChange={handlePriceRangeChange}
        />
        <InputRange
          title="100$ - 500$"
          min={100}
          max={500}
          handlePriceRangeChange={handlePriceRangeChange}
        />
        <InputRange
          title="1500$ - 3000$"
          min={1500}
          max={3000}
          handlePriceRangeChange={handlePriceRangeChange}
        />
        <InputRange
          title="3000$ - 4500$"
          min={3000}
          max={4500}
          handlePriceRangeChange={handlePriceRangeChange}
        />
        <InputRange
          title="4500$ - 5000$"
          min={4500}
          max={5000}
          handlePriceRangeChange={handlePriceRangeChange}
        />
      </div>
    </motion.div>
  );
};

export default SideBar;
