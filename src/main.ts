import { ImpostoAlimento } from "./impostos/ImpostoAlimento";
import { NotificacaoEmail } from "./notificacoes/NotificacaoEmail";
import { PagamentoCartao } from "./pagamentos/PagamentoCartao";
import { PedidoService } from "./PedidoService";

const impostoCobrado = new ImpostoAlimento()
const meioPagamento = new PagamentoCartao()
const notificador = new NotificacaoEmail()

const servico = new PedidoService(impostoCobrado, meioPagamento, notificador) 

const pedido1 = {
    preco: 60,
    quantidade: 2
}

servico.processarPedido(pedido1.preco, pedido1.quantidade)