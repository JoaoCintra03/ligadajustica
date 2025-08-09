import { useEffect } from 'react'
import style from './header.module.css'

export const Header = () =>{
    useEffect(() => {
        console.log('Iniciou o header')

        return () => {
            console.log('morreu header')
        }
    }, [])
    return(
         <header className={style.cabecalho}>
              <h1>Liga da Justiça</h1>
            </header>
    )
}