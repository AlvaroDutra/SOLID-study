import { IPrecessadorPagamentos } from "../interfaces/IProcessadorPagamento";


class PagamentoBoleto implements IPrecessadorPagamentos{
    executar(valor: number): void {
        console.log("Processando pagamento via boleto...")
    }
}