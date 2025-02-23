import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import Link from "next/link"


export const Header:React.FC = ()=>{

    return(
        <header className="bg-slate-400 p-2 text-white">
            <nav className="flex justify-between">
                <Link href="/">Главная</Link>
                <div>
                    <Menu>
                        <MenuButton className="outline-2 outline-dashed outline-red-300 p-2">Посты</MenuButton>
                        <MenuItems className="flex flex-col" anchor="bottom" transition>
                            <MenuItem><Link href="/posts/create" className="bg-slate-400 transition-all hover:bg-slate-500 p-2 text-white">Создать</Link></MenuItem>
                            <MenuItem><Link href="/posts/all" className="bg-slate-400 transition-all hover:bg-slate-500 p-2 text-white">Просмотр</Link></MenuItem>
                        </MenuItems>
                    </Menu>
                </div>
            </nav>
        </header>
    )
}