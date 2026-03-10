import { ICalcularImposto } from "./interfaces/ICalcularImposto";
import { INotificador } from "./interfaces/INotificador";
import { IPrecessadorPagamentos } from "./interfaces/IProcessadorPagamento";

export class PedidoService{
    private imposto: ICalcularImposto;
    private pagamento: IPrecessadorPagamentos;
    private notificao: INotificador;

    constructor (imposto: ICalcularImposto, pagamento: IPrecessadorPagamentos, notificao: INotificador){
        this.imposto = imposto;
        this.pagamento = pagamento;
        this.notificao = notificao;
    }

    processarPedido(preco: number, quantidade: number): void{
        let total = preco * quantidade;
        let impostoItem = this.imposto.calcular(preco);
        let valorCompra = total + impostoItem;
        this.pagamento.executar(valorCompra);
        this.notificao.enviar(`Compra no valor de ${valorCompra} aprovada.`)
    }
}