**Bold**Ares frontend
  
  Características de Roles  
  
  * Classe 10  
  Destinada ao proprietário da plataforma Ares  

  * Classe 9
  Destinada a administradores da plataforma Ares  

  * Classe 8  
---------------
  * Classe 7
  Diretores/Gestores da empresa. É a pessoa responsável por gerir a empresa e tem acesso a todos os dados e relatórios referentes a sua empresa de todos os departamentos/divisões.  

  * Classe 6
  Supervisores da empresa. Tem acesso a todos os dados referentes a sua empresa de todos os departamentos/divisões podendo realizar consultas e inserir registros.  

  * Classe 5  

  *Ações:
  - Cria/Modifica Departamentos;
  - Cria Usuários;
  - Modifica gestor de departamento;
  - Bloqueia Departamentos e funcionários;
-----------------
  * Classe 4
  Funcionários da empresa diretores ou Supervisores de departamento. tem acesso a todos os dados referentes a sua divisão.  

  * Classe 3
  Funcionários da empresa diretores ou Supervisores de departamento. tem acesso a todos os dados referentes a sua divisão.  
-----------------
  * Classe 2
  Funcionários da empresa proprietária que podem fazer os registros  

  * Classe 1  
  Funcionários/Cedidos que fazem os registros sob supervisão  
-----------------
  * Classe 0  
  Destinada ao público em geral, seu acesso é bastante restrito
-----------------
  Caracterísitcas de Theme  

  São themas para departamentos/divisões, por exemplo:   

  * ADMIN: setor administrativo que gerencia as atividades como um todo;
  * AGRO: que trata de assuntos relacionados ao setor agropecuário;
  * RH: que trata de assuntos relacionados ao gerenciamento de pessoal/funcionários;
  * SAUDE: que trata de assuntos relacionados ao gerenciamento de dados da saude;
  * ESPORTE: que trata de assuntos relacionados ao gerenciamento de dados do esporte;
  * CULTURA: que trata de assuntos relacionados ao gerenciamento de dados da cultura;
  * SOCIAL: que trata de assuntos relacionados ao gerenciamento de dados sociais;
  * EDUCACAO: que trata de assuntos relacionados ao gerenciamento de dados da educação;  

  ** De acordo com o "tema" o usuário será direcionado para uma página pré definida que possui ferramentas específicas para o caso, bem como os projetos de programas. Em resumo, o usuário só tem acesso a dados da qual o setor que ele pertence, podendo fazer uso das ferramentas disponíveis.

  Ferramentas disponíveis:

  * ADMIN  

  * AGRO  

  * RH  

  * SAUDE  

  * ESPORTE  
  
  * CULTURA  
  
  * SOCIAL  
  
  * EDUCACAO  
  
  - Cadastrar Usuário
    * Só é possível cadastrar com a permissão de classe abaixo da do usuário logado.
      Ex.: O Gestor classe 7 só pode definir a classe do usuário como 6 ou menor.
    * O cadastro de usuário só é permitida a usuários de classe 3 ou superior.

  - Cadastrar Divisão/Departamento
    Ao indicar o representante, que pode ser qualquer funcionário previamente cadastrado, este passa a ter permissão de DIRETOR - Classe 5
  
  - Cadastrar projetos
    Somente usuário de classe 3 a 5 podem gerenciar os projetos, criando os registros ou atualizando os dados de cada um.