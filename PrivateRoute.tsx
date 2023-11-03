// import React, {
//   Children,
//   ReactNode,
//   createContext,
//   useContext,
//   useState,
// } from "react";

// type RegisterContextDataProps = {
//   nome: string;
//   email: string;
//   senha: string;
// };

// type RegisterProviderProps = {
//   children: ReactNode;
// };

// const Registro = createContext({} as RegisterContextDataProps);

// function RegistroContextProvider({}: RegisterProviderProps) {
//   const [nome, setNome] = useState("");
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");

//   return (
//     <Registro.Provider
//       value={{
//         nome,
//         email,
//         senha,
//       }}
//     >
//       {children}
//     </Registro.Provider>
//   );
// }
