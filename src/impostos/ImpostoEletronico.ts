import { ICalcularImposto } from "../interfaces/ICalcularImposto";

class ImpostoEletronico implements ICalcularImposto{
    calcular(valor: number): number {
        return valor * 0.15
    }
}