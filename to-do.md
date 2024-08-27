# API Prestador Web

## Principais Endpoints

### 1.[x ]`/login`

- Recebe dois parâmetros no body: **e-mail**, **nome de usuário** e **senha**.
- Se o usuário existir, é retornado um **JWT**.
- Se não existir, é retornada uma mensagem de erro.

### 2.[x] `/admin/usuario/novo`

- Recebe um objeto JSON com os dados para um novo usuário: **NOME**, **E-MAIL** e **senha**.
- Retorna uma mensagem de êxito.

### 3.[x]`/config/inss/novo`

- Cadastra um novo TETO MÁXIMO para o INSS em uma competência.
- Recebe um JSON com os dados: **Máximo a recolher**, **patronal(%)**, **segurado(%)**, **competência**.
- Retorna **200 (OK)** em caso de sucesso.
- Retorna **500 (Erro no servidor)** em caso de erro.

### 4. [x]`/config/secretaria/novo`

- Adiciona uma nova secretaria.
- Recebe um JSON com os dados: **código da secretaria**, **descrição**.
- Retorna **200 (OK)** em caso de sucesso.
- Retorna **500 (Erro no servidor)** em caso de erro.

### 5.[x] `/config/inss/atualiza`

- Atualiza dados referentes ao INSS de uma competência.
- Recebe um JSON com os dados: **id** e valores dos campos que serão atualizados.
- Retorna **200 (OK)** em caso de sucesso.
- Retorna **500 (Erro no servidor)** em caso de erro.

### 6.[x] `/config/secretaria/atualiza`

- Atualiza dados de uma secretaria.
- Recebe um JSON com os dados: **id** e valores que serão atualizados.
- Retorna **200 (OK)** em caso de sucesso.
- Retorna **500 (Erro no servidor)** em caso de erro.

### 7. [x]`/prestador/novo`

- Adiciona um novo prestador à base de dados.
- Recebe um JSON com os dados do prestador: **NOME**, **PIS/PASEP** válido.
- Retorna **200 (OK)** em caso de sucesso.
- Retorna **500 (Erro no servidor)** em caso de erro.

### 8. `/prestador/listar`

- Recupera uma lista com todos os prestadores cadastrados.
- Recebe o parâmetro: **NOME** - caso incluído na busca, senão é retornada uma lista completa.
- Retorna **200 (OK)** - lista de prestadores (JSON) com os campos **NOME** e **PIS/PASEP**.

### 9.[x] `/servico/listar`

- Recupera uma lista de serviços cadastrados por competência.
- Recebe um parâmetro: **COMPETÊNCIA**.
- Retorna **200 (OK)** - lista de serviços referente à competência informada.
- Retorna **400 (Not Found)** - caso não haja registros.

### 10. [x]`/servico/novo`

- Cadastra um novo serviço para um prestador e uma competência específica.
- Recebe um JSON com os dados: **COMPETÊNCIA**, **EMPENHO**, **FONTE**, **INSS_RETIDO**, **INSS_PATRONAL**, **SALÁRIO_BASE**, **COD_LOTAÇÃO**, **PISPASEP**.
- Retorna **200 (OK)** em caso de sucesso.
- Retorna **500 (Erro Interno)** em caso de erro.

### 11. `/config/inss/list`

- recupera uma lista de competencias para selecionar tributos.
- Sem parametros a receber.
- Retorna **200 (OK)** em caso de sucesso, com lista de tributos e meses de referencia.
- Retorna **500 (Erro Interno)** em caso de erro.