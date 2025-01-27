const LowAndHighPrice = ({
  title,
  type,
  sortWithoutRange,
}: {
  title: string;
  type: string;
  sortWithoutRange: (value:string) => void
}) => {
  return (
    <div className="flex gap-4 mb-2">
      <input
      onChange={(e) => sortWithoutRange(e.target.id)}
        type="radio"
        name="price"
        id={type}
        className="w-5 cursor-pointer"
      />
      <h3>{title}</h3>
    </div>
  );
};

export default LowAndHighPrice;
