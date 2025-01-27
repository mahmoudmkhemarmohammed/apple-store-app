const LazyImage = ({
  img,
  alt,
  className,
  onClick,
}: {
  img: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <img
      src={img}
      alt={alt}
      loading="lazy"
      className={className}
      onClick={onClick}
    />
  );
};

export default LazyImage;
