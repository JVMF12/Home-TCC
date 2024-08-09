import React from 'react'
import Logo from '/LOGO.svg'

export default function Header() {
  return (
    <header className='flex'>
        <button className=''>
            <img src={Logo} alt="" />
        </button>

        <ul className='flex pl-5'>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Como Usar</a>
            </li>
            <li>
                <a href="">Materiais</a>
            </li>
            <li>
                <a href="">Referências</a>
            </li>
            <li>
                <a href="">Sobre nós</a>
            </li>
        </ul>
    </header>
  )
}
