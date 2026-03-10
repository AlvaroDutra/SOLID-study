import { IPrecessadorPagamentos } from "../interfaces/IProcessadorPagamento";


export class PagamentoCartao implements IPrecessadorPagamentos{
    executar(valor: number): void {
        console.log(`Processando pagamento no valor de ${valor} via cartão...`)
    }
}