export default function Hero(){

    return(

        <div data-aos="zoom-in-down" className="flex flex-col lg:flex-row p-8 lg:mt-40 gap-8">

            <div className="flex flex-1 justify-center items-center">
                <img src="logo-roxa.png" alt="" />
            </div>

            <div className="flex flex-col justify-center items-center flex-1 relative text-4xl sm:text-7xl lg:text-9xl text-purple-600">

                <p>SEJA<span className="drop-shadow-[0_5px_5px_rgb(128,0,128)] text-purple-300">TECNOLOGIA</span></p>
                <p><span className="drop-shadow-[0_5px_5px_rgb(128,0,128)] text-purple-300">SEJA</span>INOVAÇÃO</p>
                <p>SEJA<span className="drop-shadow-[0_5px_5px_rgb(128,0,128)] text-purple-300">OQUEQUISER</span></p>
                <p><span className="drop-shadow-[0_5px_5px_rgb(128,0,128)] text-purple-300">SEJA</span>DEV</p>
            </div>
        </div>
    )
}