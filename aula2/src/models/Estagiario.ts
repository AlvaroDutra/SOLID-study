import { IBolsista } from "../interfaces/IBolsista";
import { IDesenvolvedor } from "../interfaces/IDesenvolvedor";
import { IFuncionario } from "../interfaces/IFuncionario";

export class Estagiario implements IFuncionario, IBolsista, IDesenvolvedor {
    trabalhar(): void {
        console.log("Estagiário trabalhando.")
    }
    registrarPonto(): void {
        console.log("Ponto registrado.")
    }
    receberBolsa(): void {
        console.log("Bolsa recebida.");
    }
    escreverCodigo(): void {
        console.log("Escrevendo código");
    }
    
}