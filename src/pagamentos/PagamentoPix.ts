import { IPrecessadorPagamentos } from "../interfaces/IProcessadorPagamento";


class PagamentoPix implements IPrecessadorPagamentos{
    executar(valor: number): void {
        console.log("Processando pagamento via Pix...")
    }
}