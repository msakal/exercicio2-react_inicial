import React from "react";

const ListaPosts() => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        async function getPosts() {
          try {
            /* const resposta = await fetch(`${servidorApi}/posts`); */
            const resposta = await fetch(`https://fakestoreapi.com/products`);
            const dados = await resposta.json();
            setPosts(dados);
            setLoading(false);
          } catch (error) {
            console.log("Deu ruim " + error.message);
          }
        }
        getPosts();
        /* É necessário indicar a url como dependência pos ela muda toda vez em que uma categoria é clicada
        
        Desta forma, o useEffect "entende" que ele deve executar novamente as suas ações (neste caso, executar novamente o fetch na API)
        */
      }, [url]);

      return (
        <div>
        {posts.map(({ id }) => (
          <article key={id} >
          <h3></h3>
          <p></p>
        </article>
        ))}
      </div>
      );
}

export default ListaPosts;
