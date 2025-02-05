import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Simular from './Simular';
import { useMeuContexto } from "./MeuContexto.tsx";

function format(num: number) {
  // Converta o número para string
  let numString = num.toString();

  // Invertendo a string para facilitar a separação dos milhares
  let reversed = numString.split('').reverse().join('');

  // Agrupe os números em blocos de 3
  let grouped = reversed.match(/\d{1,3}/g) ?? []; // Garante que grouped nunca será null

  // Reverter novamente e juntar com pontos
  return grouped.join('.').split('').reverse().join('');
}

function olayas() {
  const input = document.getElementById('numberInput') as HTMLInputElement | null;
  if (input) {
    input.addEventListener('input', () => {
      input.value = Number(input.value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }); // Formata com separadores
    });
  }
}

/*const setValor (var val) {
  valor = Number (val);
}*/

const Home = () => {
    console.log ("renderizando home...");
  //const [valor, setValor] = useState(0);
  //const [setValor] = useState(0);
  const { valor, setValor } = useMeuContexto();
  const {entrada, setEntrada} = useMeuContexto ();
  const navigate = useNavigate(); // useNavigate deve ser chamado dentro do componente

  const handleClick = () => {
    const inputElement = document.getElementById('numberInput') as HTMLInputElement | null;
    if (inputElement) {
      setValor(Number(inputElement.value));
      setEntrada ((valor * 25) / 100);
      //entrada = ((valor * 25) / 100);
    }
  };

  return (
    <div>
      <h1>Calculadora de entradas</h1>
      <div className="card">
        <div className="suricato">
          <form>
            <label htmlFor="numberInput">Insira um valor:</label>
          </form>

          <input type="number" id="numberInput" name="numberInput" required />
          <br />
          <button id="botaoAprovar" type="button" onClick={handleClick}>
            Ver valor de entrada
          </button>

          <p>
            Você precisará de uma entrada de: {format((valor * 25) / 100) /*format(entrada)*/} reais
          </p>
        </div>

        <button id="botaoSimular" disabled={valor === 0} onClick={() => navigate('/Simular')}>
          Simular Financiamento
        </button>
      </div>
      <p className="read-the-docs">
        O valor da entrada de um imóvel geralmente é calculado em 20 a 25% do seu valor total.
      </p>
    </div>
  );
};

export default Home;
