interface IFuncionario {
    trabalhar(): void;
    registrarPonto(): void;
}

interface IRemunerado{
    receberSalario(): void;
}

interface ILider{
    gerenciarEquipe(): void;
}

interface IDesenvolvedor{
    escreverCodigo(): void;
}

interface IBolsista{
    receberBolsa(): void;
}


class Gerente implements IFuncionario, IRemunerado, ILider {
    trabalhar(): void {
        console.log("Gerente trabalhando.");
    }
    registrarPonto(): void {
        console.log("Ponto registrado.");
    }
    receberSalario(): void {
        console.log("Salário recebido!");
    }
    gerenciarEquipe(): void {
        console.log("Gerenciando equipe.");
    }
    
}

class Desenvolvedor implements IFuncionario, IRemunerado, IDesenvolvedor{
    trabalhar(): void {
        console.log("Desenvolvedor trabalhando.");
    }
    registrarPonto(): void {
        console.log("Ponto registrado");
    }
    receberSalario(): void {
        console.log("Salário recebido.");
    }
    escreverCodigo(): void {
        console.log("Escrevendo código.");
    }

}

class Estagiario implements IFuncionario, IBolsista, IDesenvolvedor {
    trabalhar(): void {
        console.log("Estagiário trabalhando.")
    }
    registrarPonto(): void {
        console.log("Ponto registrado.")
    }
    receberBolsa(): void {
        console.log("Bolsa recebida.");
    }
    escreverCodigo(): void {
        console.log("Escrevendo código");
    }
    
}

class SistemaRH {
    constructor(
        private fucnionarios: IFuncionario[],
        private remunerados: IRemunerado[],
        private bolsistas: IBolsista[],
        private lideres: ILider[],
        private devs: IDesenvolvedor[]
    ){}

    registrarPontoTodos(): void{
        this.fucnionarios.forEach(f => f.registrarPonto());
    }

    pagarSalarios():void{
        this.remunerados.forEach(r => r.receberSalario());
    }

    pagarBolsas():void{
        this.bolsistas.forEach(b => b.receberBolsa());
    }

    conduzirReuniao():void{
        this.lideres.forEach(l => l.gerenciarEquipe());
    }

    iniciarSprint():void{
        this.devs.forEach(d => d.escreverCodigo());
    }
}