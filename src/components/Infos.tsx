import InfoModel from "@/model/InfoModel"
import Info from "./Info"

export default function Infos(){

    const infos = [

        new InfoModel(
            '+2200',
            'Clientes satisfeitos com os serviços da SejaDEV',
            "cliente.jpg"
        ),
        new InfoModel(
            'Prêmios',
            'Startup reconhecida por Havard e MIT',
            "premios.jpg"
        ),
        new InfoModel(
            '16 países',
            'Temos clientes espalhados por todo o mundo',
            "paises.webp"
        )
    ]

    return(

        <div id="infos" className="flex flex-col md:flex-row justify-center items-center mt-20 gap-20">
            
            <Info info={infos[0]}/>
            <Info animacao="fade-up" duracao="2500" info={infos[1]}/>
            <Info animacao="fade-up" duracao="5000" info={infos[2]}/>
        </div>
    )
}