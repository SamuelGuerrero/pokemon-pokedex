function PokemonCard({ pokemonData }) {
  return (
    <div className="w-[400px] bg-slate-200 shadow-md shadow-black text-xl rounded-lg border">
      <div className="flex w-full justify-end">
        <div className="bg-black w-10 flex rounded-full justify-center items-center h-10 mx-4 mt-4 ">
          <h1 className="text-white font-bold">{pokemonData.id}</h1>
        </div>
      </div>
      <img src={pokemonData.sprites.other.home.front_default} className="w" />

      <h1 className="font-bold text-2xl capitalize"> {pokemonData.name}</h1>

      <div className="text-black bg-yellow-400 shadow-xl rounded-lg w-1/2 mx-auto">
        <h1 className="capitalize font-semibold ">
          {pokemonData.types[0].type.name}
        </h1>
      </div>

      <div className="flex mx-4 justify-between mt-4">
        <h1 className="font-bold">
          Weight: <span className="font-normal">{pokemonData.weight}</span>
        </h1>
        <h1 className="font-bold">
          Height: <span className="font-normal">{pokemonData.height}</span>
        </h1>
      </div>

      <div className="flex flex-col mt-5">
        <div className="flex mx-4 justify-between">
          <h1 className="capitalize font-semibold text-base">
            {pokemonData.stats[0].stat.name}
          </h1>
          <div className="bg-white border rounded-md w-[200px]">
            <div
              style={{
                width: `${(pokemonData.stats[0].base_stat * 100) / 200}%`,
              }}
              className="bg-[#ef534f] h-full rounded-md"
            >
              <h1>{pokemonData.stats[0].base_stat}</h1>
            </div>
          </div>
        </div>

        <div className="flex mx-4 justify-between">
          <h1 className="capitalize font-semibold text-base">
            {pokemonData.stats[1].stat.name}
          </h1>
          <div className="bg-white border rounded-md w-[200px]">
            <div
              style={{
                width: `${(pokemonData.stats[1].base_stat * 100) / 200}%`,
              }}
              className="bg-[#ef534f] h-full rounded-md"
            >
              <h1>{pokemonData.stats[1].base_stat}</h1>
            </div>
          </div>
        </div>

        <div className="flex mx-4 justify-between">
          <h1 className="capitalize font-semibold text-base">
            {pokemonData.stats[2].stat.name}
          </h1>
          <div className="bg-white border rounded-md w-[200px]">
            <div
              style={{
                width: `${(pokemonData.stats[2].base_stat * 100) / 200}%`,
              }}
              className="bg-[#ef534f] h-full rounded-md"
            >
              <h1>{pokemonData.stats[2].base_stat}</h1>
            </div>
          </div>
        </div>

        <div className="flex mx-4 justify-between">
          <h1 className="capitalize font-semibold text-base">
            {pokemonData.stats[3].stat.name}
          </h1>
          <div className="bg-white border rounded-md w-[200px]">
            <div
              style={{
                width: `${(pokemonData.stats[3].base_stat * 100) / 200}%`,
              }}
              className="bg-[#ef534f] h-full rounded-md"
            >
              <h1>{pokemonData.stats[3].base_stat}</h1>
            </div>
          </div>
        </div>

        <div className="flex mx-4 justify-between">
          <h1 className="capitalize font-semibold text-base">
            {pokemonData.stats[4].stat.name}
          </h1>
          <div className="bg-white border rounded-md w-[200px]">
            <div
              style={{
                width: `${(pokemonData.stats[4].base_stat * 100) / 200}%`,
              }}
              className="bg-[#ef534f] h-full rounded-md"
            >
              <h1>{pokemonData.stats[4].base_stat}</h1>
            </div>
          </div>
        </div>

        <div className="flex mx-4 justify-between">
          <h1 className="capitalize font-semibold text-base">
            {pokemonData.stats[5].stat.name}
          </h1>
          <div className="bg-white border rounded-md w-[200px]">
            <div
              style={{
                width: `${(pokemonData.stats[5].base_stat * 100) / 200}%`,
              }}
              className="bg-[#ef534f] h-full rounded-md"
            >
              <h1>{pokemonData.stats[5].base_stat}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
