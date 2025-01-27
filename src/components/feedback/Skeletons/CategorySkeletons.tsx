import ContentLoader from "react-content-loader";

const CategorySkelectons = () => {
  const itemRenderd = Array(8)
    .fill(0)
    .map((_, i) => (
      <ContentLoader
        key={i}
        speed={1}
        width={"100%"}
        height={363}
        backgroundColor="#e8e8e8"
        foregroundColor="#ffffff"
      >
        <rect x="0" y="0" rx="22" ry="22" width="100%" height="363" />
      </ContentLoader>
    ));
  return itemRenderd;
};

export default CategorySkelectons;
