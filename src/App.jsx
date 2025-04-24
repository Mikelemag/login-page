import { useState } from "react"
import imgAnimada from "../public/animada.svg"
import { ToastContainer, toast } from 'react-toastify';

export default function App(){
  //hooks(vai pegar a informaçao e amazenar)
  const[user,setUser] = useState("")
  const[pass,setPass] = useState("")

  //funçao para usar no click do botão
  function clickLogin(){
    if(!user || !pass)
      return toast.error("Preencha todos os campos")
    if(user.length < 8 || pass.length < 8){
      return toast.error("Usuario ou senha inválidos")

    }
     
    console.log(user)
    console.log(pass)
    return toast.success("🦄 Login realizado com sucesso!")

  }

  return (
    
    <div className="w-full h-screen flex bg-[#201B2C]">
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      theme="colored"
      />
      <toastSuccess
      position="top-right"
      autoClose={5000}
      theme="colored"
      />
      <div className="w-[50%] h-full flex items-center justify-center flex-col">
        <h1 className="text-[30px] font-bold text-[#00ff88]">Entre para o nosso time</h1>
        <img src={imgAnimada} alt="imagem-animada" width={500}/>
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
          <div className="w-[50%] h-[350px] bg-[#2f2942] rounded-md">
          <div className="w-full h-[15%] flex items-center justify-center">
            <h1 className="text-[30px] text-[#00ff88] font-bold">LOGIN</h1>
          </div>
          <div className="w-full h-[60%] p-[20px]">
            <label htmlFor="user" className="text-white">Usuário</label>
            <input 
                onChange={
              (event) =>{setUser(event.target.value)}
            }
               type="text" 
               id="user" 
               className="w-full rounded-md p-[10px] bg-[#514768] text-white mb-4"
            />
            <label htmlFor="pass" className="text-white">Senha</label>
            <input 
                onChange={
                (event)=> {setPass(event.target.value)}
              }
              type="password"
              id="pass" 
            className="w-full rounded-md p-[10px] bg-[#514768] text-white"
            />
            <div className="w-full flex items-center justify-center text-white pt-1">
              <a href="">Esqueceu sua Senha?</a>
            </div>
          </div>
          
          <div className="w-full h-[25%] p-[20px] flex items-center">
            <button 
            onClick={clickLogin}
            className="w-full h-[50px] rounded-lg bg-[#00ff88] text-[18px] font-bold text-[#201b2c] shadow-1 shadow-md shadow-[#87bba2]">LOGIN</button>

          </div>
          </div>
      </div>
    </div>
  )
}