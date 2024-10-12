"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function NavbarRoyco() {
  const [state, setState] = React.useState(false)

  const firstMenus = [
    { title: "Feminino", path: "/Feminino" },
    { title: "Masculino", path: "/Masculino" },
    { title: "Relógio", path: "/Relogio" },
    { title: "Óculos", path: "/Oculos" },
    { title: "Calçados", path: "/Calçados" },
  ]

  return (
    <nav className="bg-white border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 w-full">
          {/* Logo no Início */}
          <div className="flex">
            <Link href="/">
              <h1 className="text-[30px] font-bold text-black uppercase">Royco</h1>
            </Link>
          </div>

          {/* Links do menu centralizados */}
          <div className="hidden md:flex md:space-x-6 absolute left-1/2 transform -translate-x-1/2">
            {firstMenus.map((item, idx) => (
              <Link target="" key={idx} href={item.path} className="text-[#181818] tracking-wide hover:text-black 
              uppercase font-semibold text-[12px] no-underline hover:underline underline-offset-8">
                {item.title}
              </Link>
            ))}
          </div>

          {/* Botão de menu no mobile */}
          <div className="md:hidden">
            <button
              className="text-black outline-none p-2 rounded-md focus:border-gray-200 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>

        {/* Menu colapsado no mobile */}
        <div
          className={`md:hidden flex-1 justify-self-center pb-3 mt-8 md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="space-y-8">
            {firstMenus.map((item, idx) => (
              <li key={idx} className="text-[#222] font-medium text-[18px] hover:text-black">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
