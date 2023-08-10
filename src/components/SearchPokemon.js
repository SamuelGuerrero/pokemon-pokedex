import { useForm } from "react-hook-form";

function SearchPokemon({ getPokemon }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        getPokemon(data.pokemonName);
      })}
      className="mt-5 flex flex-col space-y-2 items-center "
    >
      <input
        {...register("pokemonName")}
        className="w-1/2 py-2 px-4 border-[2px] placeholder:text-gray-500 rounded-md border-black bg-[#ffde00] font-bold text-lg"
        placeholder="Please submit a pokemon!"
      />
      <button className="bg-[#ef534f] shadow shadow-red-500 text-white font-bold py-2 px-2 rounded-md hover:bg-red-400 hover:shadow-xl active:scale-90 transition duration-150">Search Pokemon</button>
    </form>
  );
}

export default SearchPokemon;
