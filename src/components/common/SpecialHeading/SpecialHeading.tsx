const SpecialHeading = ({ title }: { title: string }) => {
  return (
    <div className="special-heading">
      <div className="container py-6 max-sm:py-3">
        <h2 className="text-[40px] text-[#00aaff] font-bold capitalize max-sm:text-[30px]">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SpecialHeading;
