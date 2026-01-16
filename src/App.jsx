import "./index.css";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Hover from "./components/Hover";
import InputCheck from "./components/InputCheck";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import heroImage from "./assets/hero-image.jpg";
import heroImageSm from "./assets/hero-image-sm.jpg";
import logoSvg from "./assets/Logo.svg";

function App() {
  // Estados (State)
  const [countries, setCountries] = useState([]); // Paises
  const [inputValue, setInputValue] = useState(""); /// input
  const [filterRegions, setFilterRegions] = useState([]); // filtro de regiões
  const [countriesData, setCountriesData] = useState([]);
  const [filterUn, setFilterUn] = useState(false); // filtro dos paises das nations united
  const [filterIndependent, setFilterIndependent] = useState(false); // filtro dos paises independentes

  const region = [
    "africa",
    "americas",
    "antarctic",
    "asia",
    "europe",
    "oceania",
  ];
  // Pesquisa de Países e pegando a api
  async function searchCountry(regionName) {
    // tirando os espaços e deixando tudo minúsculo
    const query = inputValue.trim().toLowerCase();
    const hasRegionFilter = filterRegions.length > 0;

    const isRegion = region.includes(query);

    let url = "";
    if (isRegion) {
      url = `https://restcountries.com/v3.1/region/${query}`;
    }
    if (regionName) {
      url = `https://restcountries.com/v3.1/region/${regionName}`;
    } else {
      url = `https://restcountries.com/v3.1/name/${encodeURIComponent(query)}`;
    }

    //verificando se há algo no input se não tiver retornar vazio
    if (!query && !hasRegionFilter) {
      setCountries([]);
      return;
    }
    // pegando dados da api e usando encodeuricomponent para formatar da melhor forma
    try {
      const res = await fetch(url);

      //verficando o se api retornou algo se não retorna um array vazio
      if (!res.ok) {
        setCountries([]);
        return;
      }
      // transformando em json
      let data = await res.json();
      // filtrando região data caso ele o query seja diferente do regionName
      if (regionName && query && query !== regionName) {
        data = data.filter((c) => c.name.common.toLowerCase().includes(query));
      }
      //armazenando os dados brutos
      setCountriesData(data);

      //limitando a quantidade dados
      const limit = data.slice(0, 13);
      setCountries(Array.isArray(limit) ? limit : []);
      //limpando o input
      //setInputValue("");
      setFilterRegions("");
      //verificando se há um erro caso tenha retorna um array vazio
    } catch (err) {
      console.error(err);
      setCountries([]);
    }
  }
  function filterRegion(regionName) {
    if (filterRegion == regionName) {
      setFilterRegions("");
      searchCountry("");
    } else {
      setFilterRegions(regionName);
      searchCountry(regionName);
    }
  }
  function handleFilterUn() {
    setFilterUn(!filterUn);
  }
  function handleFilterIndependent() {
    setFilterIndependent(!filterIndependent);
  }

  useEffect(() => {
    if (countriesData === 0) return;

    let filtered = [...countriesData];

    if (filterUn) {
      filtered = filtered.filter((c) => c.unMember === true);
    }
    if (filterIndependent) {
      filtered = filtered.filter((c) => c.independent === true);
    }

    //limitar tamanho
    const limit = filtered.slice(0, 13);
    setCountries(Array.isArray(limit) ? limit : []);
  }, [filterUn, filterIndependent, countriesData]);

  return (
    <>
      <header className="w-full bg-black justify-center flex lg:justify-center lg:items-center">
        <img
          className="relative h-70 lg:top-0 top-16 object-cover  lg:h-full w-full"
          src={heroImage}
          srcSet={`${heroImageSm} 480w, ${heroImage} 1200w`}
          sizes="100%"
          alt="imagem do globo"
        />
        <img
          className="absolute lg:top-[15dvw] top-15 w-50"
          src={logoSvg}
          alt="Logo"
        />
      </header>
      <main className="w-full lg:min-w-5xl mx-auto px-4 font-[Be_Vietnam_Pro, sans-serif] bg-[#1B1D1F]">
        <div className="lg:w-[95dvw] w-[90dvw] bottom-25 left-[2dvw] h-390 lg:h-260  lg:flex-col lg:bottom-15 relative lg:ml-6.5 shadow-2xl border-double border border-[#282B30] rounded-[15px] p-8 bg-[#1B1D1F]">
          <h2 className="text-[#D2D5DA] -ml-4 text-[20px] lg:text-[22px] lg:ml-6 font-medium">
            Found 234 countries
          </h2>
          <div className="flex top-6 lg:top-0 lg:w-full w-screen relative right-11 lg:-mt-8 lg:justify-end-safe lg:items-center">
            <button className="relative z-10 left-8" aria-label="Search">
              <Search className="text-[#D2D5DA] w-5.5  h-7" />
            </button>
            {/* Inputs de pesquisa */}
            {/* Mobile */}
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") searchCountry();
              }}
              className="block lg:hidden lg:w-80 w-[85dvw] h-11 text-[#D2D5DA] pl-10 rounded-[10px] placeholder:text-[14.5px] bg-[#282B30] placeholder-[#D2D5DA] font-medium"
              placeholder="Search by Name, Region..."
            />
            {/* PC */}
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") searchCountry();
              }}
              className="hidden lg:block w-80  h-11 text-[#D2D5DA] pl-10 rounded-[10px] placeholder:text-[14.5px] bg-[#282B30] placeholder-[#D2D5DA] font-medium"
              placeholder="Search by Name, Region, Subregion"
            />
          </div>
          <div className="relative w-screen right-2 top-15 lg:top-0 lg:flex lg:flex-col text-[#D2D5DA] lg:ml-6 lg:mt-8">
            <h3 className=" text-[14px] pb-2 font-bold ">Sort by</h3>
            <div className="flex lg:pb-9 flew-row">
              <select className="lg:w-60 w-[85dvw] lg:right-0 right-3 relative h-12 appearance-none p-2 pl-5 text-[16px] font-medium border-[#282B30] border-double border-2 rounded-[9px]">
                <option value="Population">Population</option>
              </select>
              <ChevronDown className=" size-6 relative -ml-10 -bottom-2.5" />
            </div>
            <section
              className="md:top-0  lg:right-0 relative top-9 right-1"
              aria-labelledby="region-label"
            >
              <h3 className="text-[14px] pb-2 font-bold">Region</h3>
              <div className=" lg:w-50 right-5 left-2 lg:left-0 relative flex lg:grid text-center pb-8 pl-2 grid-cols-2 gap-1 lg:gap-4">
                <div>
                  <Hover
                    active={filterRegions === "americas"}
                    onClick={() => filterRegion("americas")}
                  >
                    Americas
                  </Hover>
                </div>
                <div>
                  <Hover
                    active={filterRegions === "antartic"}
                    onClick={() => filterRegion("antarctic")}
                  >
                    Antarctic
                  </Hover>
                </div>
                <div className="lg:w-50 block sm:flex lg:grid grid-cols-3 gap-1 sm:gap-4">
                  <div>
                    <Hover
                      active={filterRegions === "africa"}
                      onClick={() => filterRegion("africa")}
                    >
                      Africa
                    </Hover>
                  </div>
                  <div className=" right-44 sm:right-0 relative">
                    <Hover
                      active={filterRegions === "asia"}
                      onClick={() => filterRegion("asia")}
                    >
                      Asia
                    </Hover>
                  </div>
                  <div className=" right-20 bottom-10 sm:bottom-0 sm:right-0  relative">
                    <Hover
                      active={filterRegions === "europe"}
                      onClick={() => filterRegion("europe")}
                    >
                      Europe
                    </Hover>
                  </div>
                  <div className=" bottom-20  sm:bottom-0   sm:right-0  relative">
                    <Hover
                      active={filterRegions === "oceania"}
                      onClick={() => filterRegion("oceania")}
                    >
                      Oceania
                    </Hover>
                  </div>
                </div>
              </div>
              <div className="relative bottom-22 md:bottom-0 lg:bottom-0">
                <h3 className=" relative text-[14px] font-medium mb-4">
                  Status
                </h3>
                <div>
                  <InputCheck onClick={() => handleFilterUn()} />
                  <span className="text-[14px] relative bottom-1.5 font-medium">
                    Member of the United Nations
                  </span>
                </div>
                <div>
                  <InputCheck onClick={() => handleFilterIndependent()} />
                  <span className="text-[14px] relative bottom-1.5 font-medium">
                    Independent
                  </span>
                </div>
              </div>
            </section>
          </div>
          <div className="flex justify-center w-full max-[480px]:hidden absolute lg:top-12 xl:top-15 mt-16 text-[#D2D5DA] font-medium  pl-18">
            <div className=" text-[3.8dvw] min-[500px]:text-[14px] lg:text-[14px]  lg:w-[70%] w-full bottom-10 md:bottom-0 right-22 lg:right-0 lg:left-25 relative grid grid-cols-5 gap-x-6 lg:gap-x-24 border-b border-b-[#282B30] pb-6">
              <div className=" relative min-[600px]:left-5 lg:left-1">
                <h3>Flag</h3>
              </div>
              <div className="relative right-1  lg:right-16">
                <h3>Name</h3>
              </div>
              <div className="relative right-2 lg:right-16">
                <h3>Population</h3>
              </div>
              <div className="relative -right-4 w-screen lg:right-16">
                <h3>Area (km²)</h3>
              </div>
              <div className="relative -right-7 lg:right-18">
                <h3>Region</h3>
              </div>
            </div>
          </div>
          <div className=" absolute top-148 md:top-130 w-full max-[480px]:hidden  lg:top-45 lg:w-full text-[#D2D5DA] font-medium  flex lg:justify-center lg:pl-10">
            <div className="md:text-[16px] max-[480px]:w-[125dvw] max-[480px]:text-[10px]  absolute w-full lg:w-[70%] xl:right-5.5 lg:-right-6  grid gap-y-7">
              {countries && countries.length > 0 ? (
                countries.map((c) => (
                  <div
                    key={c.cca3 || c.ccn3 || c.name.common}
                    className=" w-full relative -left-2 grid grid-cols-5 gap-x-20 lg:gap-x-5"
                  >
                    <div>
                      <img
                        src={c.flags && (c.flags.svg || c.flags.png)}
                        alt={`Flags of S${c.name.common}`}
                        className="w-15 h-8 object-cover"
                      />
                    </div>
                    <span className=" relative   right-12 lg:right-18 font-semibold">
                      {c.name.common}
                    </span>
                    <div className=" relative  right-17 lg:right-15">
                      {c.population?.toLocaleString()}
                    </div>
                    <div className="relative   right-21  lg:right-12">
                      {c.area ? c.area.toLocaleString() : "-"}
                    </div>
                    <div className="relative  right-30 lg:right-13">
                      {c.region}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full  py-5 relative right-6 lg:right-[5dvw] space-y-5">
                  {Array.from({ length: 13 }).map((_, rowIdx) => (
                    <div
                      key={rowIdx}
                      className="grid grid-cols-5  items-center"
                    >
                      {/* Coluna 1 (maior) */}
                      <div className="flex justify-center">
                        <Skeleton
                          className="lg:w-12.5 max-[480px]:w-[12.3dvw] w-[10dvw]"
                          variant="rectangular"
                          height={35}
                          animation={false}
                          sx={{ bgcolor: "#3A3D42", borderRadius: 1 }}
                        />
                      </div>

                      {/* Colunas 2 a 5 (menores) */}
                      {Array.from({ length: 4 }).map((_, colIdx) => (
                        <div
                          key={colIdx}
                          className="flex justify-items-start  relative lg:left-2"
                        >
                          <Skeleton
                            className="lg:w-13 w-[8.5dvw]"
                            height={18}
                            animation={false}
                            sx={{ bgcolor: "#3A3D42 ", borderRadius: 2 }}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* mobile */}
          <div className="w-screen px-4 mt-8 flex justify-center">  
            <div className="w-full min-[600px]:hidden relative right-12.5 overflow-x-auto bg-[#1C1E21] rounded-lg border border-[#282B30]">
              <div className="min-w-120">
                {/* Cabeçalho */}
                <div className="grid grid-cols-5 gap-4 text-[#D2D5DA] font-medium text-sm border-b border-[#282B30] p-4 sticky top-0 bg-[#1C1E21]">
                  <div>Flag</div>
                  <div>Name</div>
                  <div>Population</div>
                  <div>Area (km²)</div>
                  <div>Region</div>
                </div>

                {/* Corpo da Lista */}
                <div className="text-[#D2D5DA] text-sm">
                  {countries && countries.length > 0
                    ? countries.map((c) => (
                        <div
                          key={c.cca3 || c.name.common}
                          className="grid grid-cols-5 gap-4 items-center p-4 hover:bg-[#282B30] transition-colors border-b border-[#212429] last:border-0"
                        >
                          <div>
                            <img
                              src={c.flags?.svg || c.flags?.png}
                              alt={c.name.common}
                              className="w-10 h-7 object-cover rounded-sm"
                            />
                          </div>
                          <span className="font-semibold truncate">
                            {c.name.common}
                          </span>
                          <div className="truncate">{c.population?.toLocaleString()}</div>
                          <div>{c.area ? c.area.toLocaleString() : "-"}</div>
                          <div>{c.region}</div>
                        </div>
                      ))
                    : /* Skeletons */
                      Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-5 gap-4 p-4 items-center"
                        >
                          <Skeleton
                            variant="rectangular"
                            width={48}
                            height={28}
                            sx={{ bgcolor: "#3A3D42", borderRadius: 0.5 }}
                          />
                          <Skeleton
                            width="80%"
                            height={20}
                            sx={{ bgcolor: "#3A3D42" }}
                          />
                          <Skeleton
                            width="60%"
                            height={20}
                            sx={{ bgcolor: "#3A3D42" }}
                          />
                          <Skeleton
                            width="60%"
                            height={20}
                            sx={{ bgcolor: "#3A3D42" }}
                          />
                          <Skeleton
                            width="50%"
                            height={20}
                            sx={{ bgcolor: "#3A3D42" }}
                          />
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
