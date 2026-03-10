import { INotificador } from "../interfaces/INotificador";

export class NotificacaoEmail implements INotificador{
    enviar(mensagem:string) {
        console.log(`Notificação: '${mensagem}' enviada com sucesso por email.`)    
    }
}