import { IBolsista } from "../interfaces/IBolsista";
import { IDesenvolvedor } from "../interfaces/IDesenvolvedor";
import { IFuncionario } from "../interfaces/IFuncionario";
import { ILider } from "../interfaces/ILider";
import { IRemunerado } from "../interfaces/IRemunerado";

export class SistemaRH {
    constructor(
        private fucnionarios: IFuncionario[],
        private remunerados: IRemunerado[],
        private bolsistas: IBolsista[],
        private lideres: ILider[],
        private devs: IDesenvolvedor[]
    ){}

    registrarPontoTodos(): void{
        this.fucnionarios.forEach(f => f.registrarPonto());
    }

    pagarSalarios():void{
        this.remunerados.forEach(r => r.receberSalario());
    }

    pagarBolsas():void{
        this.bolsistas.forEach(b => b.receberBolsa());
    }

    conduzirReuniao():void{
        this.lideres.forEach(l => l.gerenciarEquipe());
    }

    iniciarSprint():void{
        this.devs.forEach(d => d.escreverCodigo());
    }
}