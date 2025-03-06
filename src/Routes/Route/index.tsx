import { Card } from "../../assets/components/grid/Card";
export const RootRoute = () => {
    return <div className="flex flex_wrap gap-4 item-center justify-center">{data.map((item) => <Card
    id={item.id}
    image={item.image}
    name={item.name}
    types={item.types}
        >            
        </Card>
    )}</div>
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
        
      ];
