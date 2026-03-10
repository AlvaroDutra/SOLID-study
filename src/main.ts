import { ImpostoAlimento } from "./impostos/ImpostoAlimento";
import { NotificacaoEmail } from "./notificoes/NotificacaoEmail";
import { PagamentoCartao } from "./pagamentos/PagamentoCartao";
import { PedidoService } from "./PedidoService";

const impostoCobrado = new ImpostoAlimento()
const meioPagamento = new PagamentoCartao()
const notificador = new NotificacaoEmail()

const servico = new PedidoService(impostoCobrado, meioPagamento, notificador) 

const pedido1 = {
    preco: 60,
    quantidade: 1
}

servico.processarPedido(60, 1)