import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageComp from "../../public/computador.webp"
import ImageMobile from "../../public/celulares.jpg"
import Image from 'next/image';

const servicos = [

    {
        nome: 'WEB',
        desc: 'Oferecemos serviços completos de desenvolvimento de sites para empresas de todos os tamanhos e segmentos. Nosso objetivo é criar uma experiência digital única e envolvente que reflita sua marca, atraia mais clientes e otimize seus processos de negócios.',
        img: ImageComp
    },
    {
        nome: 'MOBILE',
        desc: 'Oferecemos desenvolvimento de aplicativos móveis personalizados, pensados para proporcionar uma experiência envolvente e intuitiva para o usuário. Nossa equipe é especializada em transformar as necessidades do seu negócio em soluções digitais completas, funcionais e de alta qualidade.',
        img: ImageMobile
    },
]

export default function Servicos(){

    return(

        <div data-aos="zoom-in-down" id='servicos' className='bg-purple-600 flex justify-center items-center p-8 lg:mt-40'>

            <Carousel width="100%" showThumbs={false}>

                {
                    servicos.map((servico) => {

                    return (
                        <div className='h-full relative' key={servico.nome}>
                            <Image className='h-full' src={servico.img} alt=''/>
                            <div className='absolute bottom-10 p-8 bg-zinc-500/45'>
                                <span className='text-white text-[30px] md:text-[200px] flex justify-start'>{servico.nome}</span>
                                <p className='text-[10px] md:text-lg'>
                                {servico.desc}
                                </p>
                            </div>
                        </div>
                    )
                    })
                }
                
            </Carousel>
        </div>
    )
}