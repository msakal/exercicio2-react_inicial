const ListaItens = () => {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    async function getItens() {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products");
        const dados = await resposta.json();
        setItens(dados);
      } catch (error) {
        console.log("Deu ruim " + error.message);
      }
    }

    getItens();
  }, []);

  console.log(itens);

  return (
    <>
      <h1>Exercício 2</h1>
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
};
