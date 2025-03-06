export const RootRoute = () => {
    return <div className="flex-1">{data.map((item) => {
        return <div className="flex flex_wrap" style={{width:'100px'}}>{item.name}
        <img src={item.image}/>
        </div>
    })}</div>
    }
    const data = [
        {
          id: 1,
          image:
            "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/644.png",
          name: "Zekrom",
          types: ["Dragonite, "],
        },
        {
          id: 4,
          image:
            "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/248.png",
          name: "Tyranitar",
          types: ["fire"],
        },
        {
          id: 7,
          image:
            "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/487.png",
          name: "Giratina",
          types: ["water"],
        },
        {
          id: 10,
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
          name: "Caterpie",
          types: ["bug"],
        },
        {
          id: 25,
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
          name: "Pikachu",
          types: ["electric"],
        },
        {
          id: 74,
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
          name: "Geodude",
          types: ["rock", "ground"],
        },
      ];
