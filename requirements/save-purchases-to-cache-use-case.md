# Gravar Compras no Cache

> ## Caso de sucesso
1. Sistema executa o comando "Salvar Compras"
2. Sistema cria data uma data para ser armazenada no Cache
3. 🟢 Sistema apaga os dados do Cache atual
4. Sistema grava os novos dados do Cache
5. Sistema não retorna nenhum erro

> ## Exceção - Erro ao apagar dados do Cache
1. 🟢 Sistema não grava os novos dados do Cache
2. 🟢 Sistema retorna erro

> ## Exceção - Erro ao gravar dados do Cache
1. Sistema retorna erro
