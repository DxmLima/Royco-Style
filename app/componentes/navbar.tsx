"use client"

import * as React from "react"
import Link from "next/link"


export default function NavbarRoyco() {




  return (
    <nav className="bg-white border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-center py-3 md:py-5 w-full">
          {/* Logo no Início */}
          <div className="flex">
            <Link href="/">
              <h1 className="text-[30px] font-bold text-black uppercase">Royco</h1>
            </Link>
          </div>
      </div>
      </div>
    </nav>
  )
}
