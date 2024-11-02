
export default class InfoModel {

    #titulo: string
    #desc: string
    #img: string

    constructor(titulo: string, desc: string, img: string){

        this.#titulo = titulo
        this.#desc = desc
        this.#img = img
    }

    get titulo(){
        return this.#titulo
    }

    get desc(){
        return this.#desc
    }

    get img(){
        return this.#img
    }
}