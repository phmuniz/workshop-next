import InfoModel from "@/model/InfoModel"

interface InfoProps{

    info: InfoModel
    animacao?: string
    duracao?: string
}

export default function Info({ info, animacao, duracao } : InfoProps){

    return(

        <div data-aos={animacao} data-aos-duration={duracao} style={{backgroundImage: `url(${info.img})`}} 
        className={`
            bg-cover bg-center h-[500px] w-[300px] relative duration-500 
            hover:border-4 hover:border-purple-500 rounded-full
        `}>

            <div className='absolute bottom-0 p-8 bg-purple-500/80 rounded-b-full'>
                <span className='text-white text-[48px] flex justify-center'>
                    {info.titulo}
                </span>
                <p className='text-center'>
                    {info.desc}
                </p>
            </div>
        </div>
    )
}