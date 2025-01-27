import ContentLoader from "react-content-loader";
const CartSkeletons = () => {
  return (
    <ContentLoader
      speed={1}
      width={"100%"}
      height={"500"}
      backgroundColor="#e8e8e8"
      foregroundColor="#ffffff"
    >
      <rect x="0" y="0" rx="5" ry="5" width="19%" height="100" />
      <rect x="20%" y="0" rx="5" ry="5" width="19%" height="100" />
      <rect x="40%" y="0" rx="5" ry="5" width="19%" height="100" />
      <rect x="60%" y="0" rx="5" ry="5" width="19%" height="100" />
      <rect x="80%" y="0" rx="5" ry="5" width="20%" height="100" />
      <rect x="0" y="120" rx="5" ry="5" width="100%" height="110" />
      <rect x="0" y="240" rx="5" ry="5" width="100%" height="110" />
      <rect x="0" y="360" rx="5" ry="5" width="32%" height="60" />
      <rect x="34%" y="360" rx="5" ry="5" width="32%" height="60" />
      <rect x="68%" y="360" rx="5" ry="5" width="32%" height="60" />
    </ContentLoader>
  );
};

export default CartSkeletons;
