import PokemonList from "./components/Pokemons.js";

import { request } from "./components/api.js";

export default function App($app) {
  this.state = {
    startIdx: 0,
    sortBy: "",
    searchWord: "",
    type: "",
    data: [],
  };

  const pokemonList = new PokemonList({
    $app,
    initialState: this.state.data,
    handleLoadMore: async () => {
      const newStartIdx = this.state.startIdx + 40;
      const newPokemons = await request(
        newStartIdx,
        this.state.type,
        this.state.sortBy,
        this.state.searchWord
      );
      this.setState({
        ...this.state,
        startIdx: newStartIdx,
        data: {
          data: [...this.state.data, ...newPokemons],
          isEnd: newPokemons.isEnd,
        },
      });
    },
  });

  this.setState = (newState) => {
    this.state = newState;
    pokemonList.setState(this.state.data);
  };

  const init = async () => {
    const pokemons = await request(
      this.state.startIdx,
      this.state.type,
      this.state.sortBy,
      this.state.searchWord
    );
    this.setState({
      ...this.state,
      data: pokemons,
    });
  };

  init();
}
