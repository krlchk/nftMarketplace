const ArtistPageHeader = ({ artistHeader }) => {
  return (
    <section className="h-auto w-full">
      <div className="w-full bg-[#2B2B2B]">
        <div
          className="container relative min-h-[320px] w-full tablet:min-h-[280px] mobile:min-h-[250px]"
          style={{
            background: `linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #A259FF 100%), url(${artistHeader.backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-3/4 flex mobile:relative mobile:top-32 mobile:justify-center">
            <img
              className="max-h-[120px] max-w-[120px] rounded-3xl border-2 border-[#2B2B2B]"
              src={artistHeader.logoImage}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistPageHeader;
