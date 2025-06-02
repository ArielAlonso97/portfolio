"use client"
import { Children, createContext, ReactNode, SetStateAction, useContext, useState } from "react";


interface IAlertContext{
  alert:IAlert|null;
createAlert:(text: string, type?: "error" | "alert") =>void
setalert: React.Dispatch<SetStateAction<IAlert | null>>
}



const AlertContext = createContext<IAlertContext|null>(null)

export function useAlert() {
    const context = useContext(AlertContext)
    if(!context){
        throw new Error("Error accediendo al contexto");
        
    }

    return context
}

const AlertProvider = ({children}:{children:ReactNode}) => {
  const [alert, setalert] = useState<IAlert|null>(null)

  function createAlert(text:string,type:"error"|"alert"="error") {
    if(text == ""){
      setalert(null)
      return
    }
    setalert({text,type})
  }
  
    
  return (
    <AlertContext.Provider value={{createAlert,alert, setalert}}>
        {children}
    </AlertContext.Provider>
  )
}

export default AlertProvider