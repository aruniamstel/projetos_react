import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import Home from './Home.tsx'
import { useMeuContexto } from "./MeuContexto";

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

const Simular = () => {
    const [anos, setAnos] = useState(0);
    const {valor, entrada} = useMeuContexto ();

   // var {entrada} = useMeuContexto ();

    /*const format = (value) => {
        return value.toFixed(2);
    }  */

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setAnos(Number (event.target.value));
    };

        const handleClick = () => {
            const inputElement = document.getElementById('numberInput') as HTMLInputElement | null;
            if (inputElement) {
              setAnos(Number(inputElement.value));
            }
          };

    return (
        <div>
            <h1>Calculadora de entradas</h1> <br/>
            <h2> Simular Financiamento </h2>
            <div className="simulacao">
                <form>
                    <label htmlFor="anoInput">Insira a quatidade de anos em que deseja financiar:</label>
                    <br />       
                </form>

            <p> Valor do imovel: {valor}</p>

                <input 
                        type="number" 
                        id="anoInput" 
                        name="anoInput" 
                        required 
                        value={anos} 
                        onChange={handleInputChange} 
                    />
                    <br />
                    <button 
                        type="button" 
                        id="bt_simparc"
                        onClick={handleClick}
                    >
                        Simular parcelas
                    </button>

                <p>
                Valor a ser financiado: {(anos > 0 ? (valor - entrada) : "0,00")}
                </p>
                <br/>
                <p>
                Cada parcela custará: {(anos > 0 ? ((valor - entrada) / (12 * anos)).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0,00")} reais
                </p>

                <Link to="/">
                        <button 
                            type="button" 
                            id="bt_simparc"
                        >
                            Voltar
                        </button>
                    </Link>

            </div>
        </div>
    );
}
export default Simular;

//Cada parcela custará: {(valor-entrada)/(12*anos)} reais