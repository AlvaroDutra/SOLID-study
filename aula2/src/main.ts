import { Desenvolvedor } from "./models/Desenvolvedor";
import { Estagiario } from "./models/Estagiario";
import { Gerente } from "./models/Gerente";
import { SistemaRH } from "./services/SistemaRHService";

const gerente = new Gerente();
const dev = new Desenvolvedor();
const estagiario = new Estagiario();

const rh = new SistemaRH(
    [gerente, dev, estagiario],   
    [gerente, dev],               
    [estagiario],                 
    [gerente],                    
    [dev, estagiario]             
);

rh.registrarPontoTodos();
rh.pagarSalarios();
rh.pagarBolsas();
rh.conduzirReuniao();
rh.iniciarSprint();