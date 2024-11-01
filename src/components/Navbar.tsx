import { IconeMenu } from "./Icons"
import { useState } from "react"

const paginas = [

    {
        name: 'HOME',
        id: 'home'
    },
    {
        name: 'SERVIÇOS',
        id: 'servicos'
    },
    {
        name: 'DÚVIDAS',
        id: 'duvidas'
    }
]

export default function Navbar(){

    function navegar(id: string){

        setVisivel(false)

        const elemento = document.getElementById(id)

        elemento?.scrollIntoView({behavior: 'smooth'})
    }

    const [visivel, setVisivel] = useState(false)

    return(

        <div className="sticky top-0 z-50 bg-purple-600 w-100 flex flex-col justify-center items-center">

            <div className="lg:hidden flex p-6" >
                <span onClick={() => setVisivel(!visivel)}>{IconeMenu}</span>
            </div>

            <nav className={`
                ${visivel ? 'flex' : 'hidden'} 
                flex-col md:flex-row md:flex items-center
                animate__animated animate__backInDown
            `}>

                {
                    paginas.map(pagina => {
                        return (

                            <div className="p-6" key={pagina.id}>
                                <span
                                    onClick={() => navegar(pagina.id)}
                                    className={`
                                        cursor-pointer p-2 rounded-full duration-300
                                        hover:bg-white hover:text-purple-500
                                    `}
                                >
                                    {pagina.name}
                                </span>
                            </div>
                        )
                    })
                }
            </nav>
        </div>
    )    
}