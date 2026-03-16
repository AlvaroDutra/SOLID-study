import { IFuncionario } from "../interfaces/IFuncionario";
import { ILider } from "../interfaces/ILider";
import { IRemunerado } from "../interfaces/IRemunerado";

export class Gerente implements IFuncionario, IRemunerado, ILider {
    trabalhar(): void {
        console.log("Gerente trabalhando.");
    }
    registrarPonto(): void {
        console.log("Ponto registrado.");
    }
    receberSalario(): void {
        console.log("Salário recebido!");
    }
    gerenciarEquipe(): void {
        console.log("Gerenciando equipe.");
    }
    
}