const InputRange = ({
  title,
  min,
  max,
  handlePriceRangeChange,
}: {
  title: string;
  min: number;
  max: number;
  handlePriceRangeChange: (value: string[]) => void;
}) => {
  return (
    <div className="flex gap-4 mb-2">
      <input
        onChange={(e) => handlePriceRangeChange([e.target.min,e.target.max])}
        type="radio"
        name="priceRange"
        min={min}
        max={max}
        className="w-5 cursor-pointer"
      />
      <h3>{title}</h3>
    </div>
  );
};

export default InputRange;
