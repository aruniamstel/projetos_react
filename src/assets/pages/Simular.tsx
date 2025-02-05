import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import Home from './Home.tsx'
import { useMeuContexto } from "./MeuContexto";

function format(num: number) {
    return num.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const Simular = () => {
    const [anos, setAnos] = useState(0);
    const {valor, entrada} = useMeuContexto ();
    var jurosMensais = 0.5;

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

            <p> Valor do imovel: {format (valor)}</p>

                <input 
                        type="number" 
                        id="anoInput" 
                        name="anoInput" 
                        required 
                        label
                        value={anos || ''} 
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
                Valor a ser financiado: {format (anos > 0 ? (valor - entrada) : "0,00")}
                </p>
                <br/>
                <p>
                Cada parcela custará: {(anos > 0 ? ((valor - entrada) / ((12 * jurosMensais) * anos)).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0,00")} reais
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