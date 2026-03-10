import { IProcessadorPagamentos } from "./IProcessadorPagamento";


export class PagamentoPix implements IProcessadorPagamentos{
    executar(valor: number): void {
        console.log("Processando pagamento via Pix...")
    }
}