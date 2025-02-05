import React, { createContext, useContext, useState, ReactNode } from "react";

interface MeuContextoProps {
  valor: number;
  entrada: number;
  setValor: (valor: number) => void;
  setEntrada: (entrada: number) => void;
}

const MeuContexto = createContext<MeuContextoProps | undefined>(undefined);

export const MeuProvider = ({ children }: { children: ReactNode }) => {
  const [valor, setValor] = useState<number>(0); // Exemplo de valor inicial
  const [entrada, setEntrada] = useState<number>(0); // Exemplo de entrada inicial

  return (
    <MeuContexto.Provider value={{ valor, setValor, entrada, setEntrada }}>
      {children}
    </MeuContexto.Provider>
  );
};

export const useMeuContexto = () => {
  const context = useContext(MeuContexto);
  if (!context) {
    throw new Error("useMeuContexto deve ser usado dentro de um MeuProvider");
  }
  return context;
};
