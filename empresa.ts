// Importa a classe Funcionario para ser utilizada na classe Empresa.
import { Funcionario } from "./funcionario";

// Classe que representa uma empresa, gerenciando seus funcionários.
export class Empresa {
    // Lista que armazena os funcionários da empresa.
    private funcionarios: Funcionario[];

    // Construtor que inicializa a lista de funcionários como vazia.
    constructor() {
        this.funcionarios = []; // Inicializa a lista de funcionários
    }

    // Retorna a lista de funcionários da empresa.
    getFuncionarios(): Funcionario[] {
        return this.funcionarios;
    }

    // Adiciona um funcionário à lista e exibe uma mensagem de sucesso.
    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
        console.log('Funcionário adicionado com sucesso!');
    }

    // Atualiza o salário de um funcionário com base na matrícula.
    atualizarSalario(matricula: number, salario: number): void {
        try {
            // Procura o funcionário pela matrícula.
            const funcionario = this.funcionarios.find(f => f.getMatricula() === matricula);
            if (funcionario) {
                // Atualiza o salário do funcionário encontrado.
                funcionario.setSalario(salario);
                console.log(`Salário do funcionário ${funcionario.getNome()} alterado com sucesso!`);
            }
        } catch {
            // Exibe uma mensagem de erro caso a matrícula não seja encontrada.
            console.error(`Matrícula ${matricula} não encontrada!`);
        }
    }

    // Consulta um funcionário pela matrícula.
    consultarFuncionario(matricula: number): Funcionario | undefined {
        try {
            // Procura o funcionário pela matrícula.
            const funcionario = this.funcionarios.find(f => f.getMatricula() === matricula);
            if (funcionario) {
                console.log(`Matrícula ${matricula} encontrada!`);
                return funcionario; // Retorna o funcionário encontrado.
            }
        } catch {
            // Exibe uma mensagem de erro caso a matrícula não seja encontrada.
            console.error(`Matrícula ${matricula} não encontrada!`);
            return undefined;
        }
    }
}
