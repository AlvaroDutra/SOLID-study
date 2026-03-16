import { IDesenvolvedor } from "../interfaces/IDesenvolvedor";
import { IFuncionario } from "../interfaces/IFuncionario";
import { IRemunerado } from "../interfaces/IRemunerado";

export class Desenvolvedor implements IFuncionario, IRemunerado, IDesenvolvedor{
    trabalhar(): void {
        console.log("Desenvolvedor trabalhando.");
    }
    registrarPonto(): void {
        console.log("Ponto registrado");
    }
    receberSalario(): void {
        console.log("Salário recebido.");
    }
    escreverCodigo(): void {
        console.log("Escrevendo código.");
    }

}