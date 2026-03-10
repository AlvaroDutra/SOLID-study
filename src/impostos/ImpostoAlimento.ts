import { ICalcularImposto } from "./ICalcularImposto";

export class ImpostoAlimento implements ICalcularImposto{
    calcular(valor: number): number {
        return valor * 0.05
    }
}