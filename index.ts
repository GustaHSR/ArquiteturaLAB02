// Importa as classes Funcionario e Empresa.
import { Funcionario } from "./funcionario";
import { Empresa } from "./empresa";

// Função principal que executa o programa.
function main() {
    // Cria uma instância da classe Empresa para gerenciar os funcionários.
    const empresa = new Empresa();

    // Cria instâncias da classe Funcionario com dados de exemplo.
    const Kleber = new Funcionario(1, "Kleber", "Operador de máquina", 2500); // Funcionário 1.
    const Dorival = new Funcionario(2, "Jose Dorival Rodrigues", "Chefe", 6000); // Funcionário 2.
    const Gustavo = new Funcionario(3, "Gustavo Henrique da Silva", "Financeiro", 3000); // Funcionário 3.

    // Adiciona os funcionários à lista da empresa.
    empresa.adicionarFuncionario(Kleber);
    empresa.adicionarFuncionario(Dorival);
    empresa.adicionarFuncionario(Gustavo);

    // Consulta e atualiza o salário de um funcionário existente (matrícula 3).
    empresa.consultarFuncionario(3); // Verifica se o funcionário com matrícula 3 existe.
    empresa.atualizarSalario(3, 4000); // Atualiza o salário de Gustavo para 4000.

    // Tenta consultar e atualizar o salário de um funcionário inexistente (matrícula 4).
    empresa.consultarFuncionario(4); // Não encontra o funcionário e exibe uma mensagem de erro.
    empresa.atualizarSalario(4, 3500); // Tenta atualizar o salário e exibe um erro.
}

// Chama a função principal para executar o programa.
main();
