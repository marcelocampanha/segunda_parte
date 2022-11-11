import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/*
O env.local dá acesso somente ao lado do servidor, não vai ao cliente.
quando se coloca o prefixo NEXT_PUBLIC_ a variavel passa  a ser vista
também pelo cliente

para resolver o problema de hydratation (que é ao primeiro render),
 use useSate com useEffect para salvar o estdo do variavel
*/

//quando se quer expor algo do servidor tem que usar estes modelos de get...
export function getServerSideProps() {
  return {
    props: {},
  };
}

/*
   {locale === "pt" ? "Português" : "Inglês"}
      <div>
        {process.env.TIPOLOCAL
          ? process.env.tipo
          : "Não tenho acesso a variável local 'tipo local'"}
      </div>
      <div>
        {process.env.NEXT_PUBLIC_TIPOCLIENTE
          ? process.env.NEXT_PUBLIC_TIPOCLIENTE
          : "Não tenho acesso a variável local 'tipo cliente'"}
      </div>*/

export default function Home(props: any) {
  const [products, setProducts] = useState([{}]);
  const { locale } = useRouter();

 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div>
   
      <ul>
        {products.map((i: any) => (
          <li key={i.id}>
            <Image src={i.image} width={100} height={100} alt="picture" />
          </li>
        ))}
      </ul>
    </div>
  );
}
