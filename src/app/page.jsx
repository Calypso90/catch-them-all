import Beer from "@/components/beers.jsx";
import Dogs from "@/components/dogs.jsx";
import Memes from "@/components/memes.jsx";
import Pokemon from "@/components/pokemon.jsx";

export default function Home() {
  return (
    <div>
      <h1>Can you catch them all?</h1>
      <Dogs />
      <Memes />
      <Pokemon />
      <Beer />
    </div>
  );
}
