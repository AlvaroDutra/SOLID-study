# Atividade Prática: Identificação e Refatoração do Código Legado

Analise o sistema abaixo que gerencia funcionários de uma empresa. O código possui violações de **LSP**, **ISP** e **DIP**. Sua tarefa é identificar as
violações e refatorar o código.

~~~typescript
interface Funcionario {
    trabalhar(): void;
    registrarPonto(): void;
    receberSalario(): void;
    gerenciarEquipe(): void;
    escreverCodigi(): void;
}

class Gerente implements Funcionario {
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

class Desenvolvedor implements Funcionario {
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

class Estagiario implements Funcionario {
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
~~~

## Identificação

Violações identificadas:

- **ISP** - A interface *Funcionario* possui métodos que não se aplicam a todos os tipos de funcionarios, forçando a implementação de métodos desnecessários nas classes concretas.  

>~~~typescript
>interface Funcionario {
>    trabalhar(): void;
>    registrarPonto(): void;
>    receberSalario(): void;
>    gerenciarEquipe(): void;
>    escreverCodigi(): void;
>}
>~~~

- **LSP** - As classes retornam erros em métodos herdados. Se uma classe chamar um dos subtipos e tentar usar o método *receberSalario()*, por exemplo, vai funcionar para *Gerente* mas não para *Estagiario*.

>~~~typescript
> class Gerente implements Funcionario {
>   receberSalario(): void{
>       console.log("Salário recebido!");
>   }
>}
>
> class Estagiario implements Funiconario {
>   receberSalario(): void {
>       throw new Error("Estagiário recebe bolsa, não salário."); 
>   }    
>}
>~~~

## Refatoração
