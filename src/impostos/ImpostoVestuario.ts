import { ICalcularImposto } from "../interfaces/ICalcularImposto";

class ImpostoVestuario implements ICalcularImposto{
    calcular(valor: number): number {
        return valor * 0.10
    }
}