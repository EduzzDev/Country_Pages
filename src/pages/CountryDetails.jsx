import heroImage from "../assets/hero-image.jpg";
import heroImageSm from "../assets/hero-image-sm.jpg";
import logoSvg from "../assets/Logo.svg";
import { useSearchParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

function CountryDetails() {
  const [searchParams] = useSearchParams();
  const nameContry = searchParams.get("name");
  const flag = searchParams.get("flag");
  const nameOfficial = searchParams.get("nameOfficial");
  const population = searchParams.get("population");
  const area = searchParams.get("area");
  const capital = searchParams.get("capital");
  const subregion = searchParams.get("subregion");
  const languagesParam = searchParams.get("languages");
  const languages = languagesParam?.split(",") ?? [];
  const currenciesParam = searchParams.get("currencies");
  const currencies = currenciesParam?.split(",") ?? [];
  const continents = searchParams.get("continents");
  const bordersParams = searchParams.get("borders");
  const neighbor = bordersParams
    ? bordersParams.split("~").map((item) => {
        const [name, flagUrl] = item.split("|");
        return { name, flagUrl };
      })
    : [];

  return (
    <>
      <header className="w-full  bg-black flex justify-center items-center">
        <img
          className="relative h-90 top-0  object-cover  w-full"
          src={heroImage}
          srcSet={`${heroImageSm} 480w, ${heroImage} 1200w`}
          sizes="100%"
          alt="imagem do globo"
        />
        <img className="absolute  w-50" src={logoSvg} alt="Logo" />
      </header>
      <main className="w-full flex justify-center  mx-auto px-4 font-[Be_Vietnam_Pro, sans-serif] bg-[#1B1D1F]">
        <div className="w-160 text-[#D2D5DA] justify-center overflow-x-hiddenflex relative bottom-15 flex-col items-center  text-center left-[2dvw] h-390 lg:h-260  shadow-2xl border-double border border-[#282B30] rounded-[15px] p-8 bg-[#1B1D1F]">
          <img
            src={flag}
            alt={`Flags of S${nameContry}`}
            className="w-65 h-45 relative bottom-20 left-[26%]  object-cover border-0 rounded-lg "
          />
          <h1 className="bottom-15 text-[32px]  font-bold relative">
            {nameContry}
          </h1>
          <h2 className="text-[14px] bottom-15 relative font-bold  ">
            {nameOfficial}
          </h2>
          <div className="flex gap-x-10">
            <p className=" text-[14px] w-60 p-2 flex -m-6 relative font-semibold justify-center items-center ml-8 bg-[#282B30] rounded-xl">
              Population{" "}
              <span className="w-px font-black inline-block h-8 mr-3 ml-4 bg-black"></span>{" "}
              <span className="ml-1">{population}</span>
            </p>
            <p className=" text-[14px]  w-50 p-2 flex -m-6 relative font-semibold justify-center items-center ml-8 bg-[#282B30] rounded-xl">
              Area{"(km²) "}
              <span className="w-px font-black inline-block h-8 mr-3 ml-4 bg-black"></span>{" "}
              <span className="ml-1">{area}</span>
            </p>
          </div>
          <div className="flex justify-between items-center p-4 top-10 w-full relative border-[#282B30] border-t border-b">
            <span className="font-medium">Capital</span>
            <span>{capital}</span>
          </div>
          <div className="flex justify-between items-center p-4 top-10 w-full relative border-[#282B30] border-t border-b">
            <span className="font-medium">Subregion</span>
            <span>{subregion}</span>
          </div>
          <div className="flex justify-between items-center p-4 top-10 w-full relative border-[#282B30] border-t border-b">
            <span className="font-medium">Language</span>
            <span className="tracking-tigh flex gap-2">
              {languages.join(", ")}
            </span>
          </div>
          <div className="flex justify-between items-center p-4 top-10 w-full relative border-[#282B30] border-t border-b">
            <span className="font-medium">Currencies</span>
            <span className="tracking-tigh flex gap-2">{currencies}</span>
          </div>
          <div className="flex justify-between items-center p-4 top-10 w-full relative border-[#282B30] border-t border-b">
            <span className="font-medium">Continents</span>
            <span className="tracking-tigh flex gap-2">{continents}</span>
          </div>
          <div className="flex flex-col justify-between items-baseline  p-4 top-10 w-full relative border-[#282B30] border-t border-b">
            <span className="font-medium ">Neighbouring Countries</span>
            <div className="flex flex-wrap gap-3 j">
              {neighbor.length > 0 ? (
                neighbor.map((neighbor, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center relative mt-8 gap-1"
                  >
                    <img
                      src={neighbor.flagUrl}
                      alt={`Flag of ${neighbor.name}`}
                      className="w-18 h-14 object-cover rounded border border-[#282B30]"
                    />
                    <span className="text-xs">{neighbor.name}</span>
                  </div>
                ))
              ) : (
               <div className="flex space-x-2">
                  {Array.from({ length: 6 }).map((_, rowIdx) => (
                    <div
                      key={rowIdx}
                      className="flex flex-wrap gap-3 justify-end"
                    >
                      {/* Coluna 1 (maior) */}
                      <div className="flex flex-col items-center gap-1">
                        <Skeleton
                          className="lg:w-12.5 max-[480px]:w-[12.3dvw] w-[10dvw]"
                          variant="rectangular"
                          height={35}
                          animation={false}
                          sx={{ bgcolor: "#3A3D42", borderRadius: 1 }}
                        />
                      </div>                     
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default CountryDetails;
