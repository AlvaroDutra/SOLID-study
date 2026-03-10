import { ICalcularImposto } from "./ICalcularImposto";

export class ImpostoVestuario implements ICalcularImposto{
    calcular(valor: number): number {
        return valor * 0.10
    }
}