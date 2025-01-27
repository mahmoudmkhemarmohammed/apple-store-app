import ContentLoader from "react-content-loader";

const FilterationSkeletons = () => {
  const items = Array(6)
    .fill(0)
    .map((_,i) => (
      <ContentLoader
      key={i}
        speed={1}
        width={"100%"}
        backgroundColor="#e8e8e8"
        foregroundColor="#ffffff"
      >
        <rect x="15" y="1" rx="4" ry="4" width="21" height="20" />
        <rect x="57" y="6" rx="0" ry="0" width="97" height="10" />
      </ContentLoader>
    ));
  return <div className="flex flex-col h-[275px]">{items}</div>;
};

export default FilterationSkeletons;
