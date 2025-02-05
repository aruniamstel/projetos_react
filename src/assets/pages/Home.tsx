import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { useMeuContexto } from "./MeuContexto.tsx";

function format(num: number) {
  return num.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const Home = () => {
  const { valor, setValor, entrada, setEntrada } = useMeuContexto();
  const navigate = useNavigate();
  var entradaSelect = document.getElementById('entradaDropdown') as HTMLInputElement | null;
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

  // Efeito para recalcular a entrada sempre que "valor" mudar
  useEffect(() => {
    //entradaSelect = document.getElementById('entradaDropdown') as HTMLInputElement | null;
    if (opcaoSelecionada == '')
    setEntrada((valor * 25) / 100);
  else setEntrada((valor * (Number (opcaoSelecionada))) / 100);;
  }, [valor, opcaoSelecionada, setEntrada]); // Só executa quando "valor" for atualizado

  const handleClick = () => {
    const inputElement = document.getElementById('numberInput') as HTMLInputElement | null;
    if (inputElement) {
      setValor(Number(inputElement.value)); // Atualiza valor
    }
  };

    
  
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setOpcaoSelecionada(event.target.value);
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
            Você precisará de uma entrada de: {format(entrada)} reais
          </p>
        </div>

        <button id="botaoSimular" disabled={valor === 0} onClick={() => navigate('/Simular')}>
          Simular Financiamento
        </button>
      </div>

      <div>
      <label htmlFor="entradaDropdown">Selecione o quanto de entrada será dado: </label>
      <select id="entradaDropdown" value={opcaoSelecionada} onChange={handleChange}>
        <option value="20"> 20% de entrada </option>
        <option value="25"> 25% de entrada </option>
        <option value="30"> 30% de entrada </option>
      </select>

      {opcaoSelecionada && <p>Você selecionou: {Number (opcaoSelecionada)}</p>}
    </div>

      <p className="read-the-docs">
        O valor da entrada de um imóvel geralmente é calculado em 20 a 25% do seu valor total.
      </p>
    </div>
  );
};

export default Home;
