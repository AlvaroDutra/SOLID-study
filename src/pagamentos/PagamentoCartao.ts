import { IProcessadorPagamentos } from "./IProcessadorPagamento";


export class PagamentoCartao implements IProcessadorPagamentos{
    executar(valor: number): void {
        console.log(`Processando pagamento no valor de ${valor} via cartão...`)
    }
}