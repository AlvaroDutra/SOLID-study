import { ICalcularImposto } from "./ICalcularImposto";

export class ImpostoEletronico implements ICalcularImposto{
    calcular(valor: number): number {
        return valor * 0.15
    }
}