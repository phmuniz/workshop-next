import { useState } from "react";

const email = 'phmcarvalhofla@gmail.com'

export default function Duvidas(){

    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");

    function handleSubmit() {
        window.open(
            `mailto:${email}
            ?subject=${encodeURIComponent(assunto)}
            &body=${encodeURIComponent(mensagem)}`,
            "_blank"
          );
    }

    return (
        <div data-aos="fade-right"
        data-aos-duration="3000" id="duvidas" className="max-w-5xl mx-auto my-20">
            <div className="grid grid-cols-1 p-4">
                
                <h1 className="text-4xl font-bold max-w-sm text-purple-600 mb-4">
                    Ainda ficou com dúvida ?
                </h1>
                <p className="text-purple-600">
                    Entre em contato e nos diga o que precisa! Estamos ansiosos para tê-lo como cliente!
                </p>
                
                <div className="flex flex-col gap-4 mt-8">
                    <div>
                        <label className="text-sm text-purple-600" htmlFor="assunto">
                        Assunto
                        </label>
                        <input
                        onChange={(e) => setAssunto(e.target.value)}
                        id="assunto"
                        value={assunto}
                        type="text"
                        className={`
                            bg-purple-100 w-full h-9 p-2 text-black rounded-lg text-sm
                            outline-none focus:bg-white focus:border focus:border-purple-600
                        `}
                        />
                    </div>
                    <div>
                        <label className="text-sm text-purple-600" htmlFor="mensagem">
                        Mensagem
                        </label>
                        <textarea
                        name=""
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        id="mensagem"
                        rows={7}
                        className={`
                            bg-purple-100 w-full h-40 p-2 text-black rounded-lg text-sm
                            outline-none focus:bg-white focus:border focus:border-purple-600
                        `}
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                        onClick={() => handleSubmit()}
                        className={`
                        w-full sm:w-max rounded-lg text-purple-600
                        hover:bg-purple-600 hover:text-white duration-500 px-10 py-2 
                        `}
                        >
                        Enviar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}