// Classe que representa um funcionário da empresa.
export class Funcionario {
    // Atributos privados que armazenam as informações do funcionário.
    private matricula: number; // Número de matrícula do funcionário.
    private nome: string;      // Nome do funcionário.
    private cargo: string;     // Cargo do funcionário.
    private salario: number;   // Salário do funcionário.

    // Construtor para inicializar os atributos do funcionário.
    constructor(matricula: number, nome: string, cargo: string, salario: number) {
        this.matricula = matricula;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    // Métodos "getter" para acessar os atributos do funcionário.

    // Retorna a matrícula do funcionário.
    getMatricula(): number {
        return this.matricula;
    }

    // Retorna o nome do funcionário.
    getNome(): string {
        return this.nome;
    }

    // Retorna o cargo do funcionário.
    getCargo(): string {
        return this.cargo;
    }

    // Retorna o salário do funcionário.
    getSalario(): number {
        return this.salario;
    }

    // Atualiza o salário do funcionário.
    setSalario(salario: number): void {
        this.salario = salario;
    }
}
