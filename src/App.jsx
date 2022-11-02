import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [itens, setItens] = useState([]);
  useEffect(() => {
    async function getItens() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const dados = await res.json();
        setItens(dados);
      } catch (error) {
        console.log("Error: " + error.message);
      }
    }

    getItens();
  }, []);
  console.log(itens);

  return (
    <>
      <h1>Exercício 2 </h1>
      <section>
        <ul>
          {itens.map(({ id, title, image, price }) => (
            <li key={id}>
              <p>
                <img class="foto-produto" src={image} alt="" />
              </p>
              <h2>{title}</h2>
              <p>
                {price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
