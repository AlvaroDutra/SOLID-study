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


class Gerente implements IFuncionario {
    trabalhar(): void {
        console.log("Gerente trabalhando!");
    }
    registrarPonto(): void {
        console.log("Ponto registrado!");
    }
    receberSalario(): void {
        console.log("Salário recebido!");
    }
    gerenciarEquipe(): void {
        console.log("Gerenciando equipe");
    }
    escreverCodigo(): void {
        throw new Error("Gerente não escreve código!");
    }
}

class Desenvolvedor implements IFuncionario {
    trabalhar(): void {
        console.log("Desenvolvedor trabalhando!");
    }
    registrarPonto(): void {
        console.log("Ponto registrado!");
    }
    receberSalario(): void {
        console.log("Salário recebido!");
    }
    gerenciarEquipe(): void {
        throw new Error("Desenvolvedor não gerencia equipe.");
    }
    escreverCodigo(): void {
        console.log("Escrevendo código.");
    }
}

class Estagiario implements IFuncionario {
    trabalhar(): void {
        console.log("Estagiário trabalhando!");
    }
    registrarPonto(): void {
        console.log("Ponto registrado!");
    }
    receberSalario(): void {
        throw new Error("Estagiário recebe bolsa, não salário!");
    }
    gerenciarEquipe(): void {
        throw new Error("Estagiario não gerencia equipe.");
    }
    escreverCodigo(): void {
        console.log("Estagiário escrevendo código!");
    }
}