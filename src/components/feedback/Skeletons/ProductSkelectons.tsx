import ContentLoader from "react-content-loader";

const ProductSkelectons = () => {
  const itemRenderd = Array(4)
    .fill(0)
    .map((_, i) => (
      <ContentLoader
        key={i}
        speed={1}
        width={"100%"}
        height={448}
        backgroundColor="#e8e8e8"
        foregroundColor="#ffffff"
      >
        <rect x="0" y="0" rx="22" ry="22" width="100%" height="448" />
      </ContentLoader>
    ));
  return itemRenderd;
};

export default ProductSkelectons;
