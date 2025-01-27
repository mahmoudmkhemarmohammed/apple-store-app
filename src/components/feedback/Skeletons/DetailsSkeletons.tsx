import ContentLoader from "react-content-loader";

const TextSkeletons = () => {
  return (
    <ContentLoader
      speed={1}
      width={"100%"}
      height={464}
      backgroundColor="#e8e8e8"
      foregroundColor="#ffffff"
    >
      <rect x="0" y="0" rx="5" ry="5" width="200" height="40" />
      <rect x="0" y="50" rx="5" ry="5" width="100%" height="100" />
      <rect x="0" y="160" rx="5" ry="5" width="100" height="20" />
      <rect x="0" y="200" rx="5" ry="5" width="150" height="50" />
      <rect x="0" y="260" rx="5" ry="5" width="100%" height="90" />
      <rect x="0" y="360" rx="5" ry="5" width="100%" height="90" />
    </ContentLoader>
  );
};

const DetailsSkeletons = () => {
  return (
    <>
      <ContentLoader
        speed={1}
        width={"80%"}
        className="max-xl:w-full"
        height={464}
        backgroundColor="#e8e8e8"
        foregroundColor="#ffffff"
      >
        <rect x="6" y="-1" rx="20" ry="20" width="100%" height="464" />
      </ContentLoader>
      <TextSkeletons />
    </>
  );
};

export default DetailsSkeletons;
