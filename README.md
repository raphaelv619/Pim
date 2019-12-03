# Pim
 repo for app and web projects
 
 ***Tutorial para rodar as aplicações***
 
 ***Configurando a API***
 
 Segue os passos para rodar a aplicação em sua localhost.
 
 1 - Baixar o XAMPP. link: https://www.apachefriends.org/download.html (lembre-se que o Server Apache deve estar rodando para que tudo funcione).
 
 2 - Entre nas configurações do MySQL para abrir o PhpMyAdmin e crie seu banco de dados, depois importe a tabela que está dentro da pasta 'bancoDados'.
 
 3 - Agora você precisará criar um alias para que o XAMPP reconheça a API direto da pasta do projeto, para isso, siga este tutorial: https://willi.am/blog/2011/02/24/creating-xampp-alias-directories/
 
 4 - Abra o arquivo ClassConexao.php na pasta 'api' e edite a linha de conexão com o banco de acordo com os dados do seu banco.
 
 5 - Em ambos os projetos (app e web), abra a pasta 'src/util/config.js' e edite a constante API2, colocando seu IP onde estão os '*'.
 
 ***Passos para rodar o App.***
 
 1 - Caso queira apenas instalar o app no seu dispositivo, basta baixar e instalar a apk que se encontra na pasta 'apk' na raiz do projeto app.
 
 2 - Se quiser fazer alterações no projeto, siga os próximos passos...
 
 2.1 - Instalar o react native, separei este tutorial que faz a instalação sem a necessidade do Android Studio, que pode ser muito pesado para algumas maquinas. Segue o link: https://medium.com/@vitaoloureiro/react-native-sem-instalar-o-android-studio-dff6c028e03b
 
 2.2 - Depois de fazer a instalação, na pasta do projeto app rode 'npm install' para instalar todas as dependecias do projeto.
 
 ***Passos para rodar o Web***
 
 1 - Primeiro dê 'npm install' na raiz do projeto para instalar todas as dependencias.
 
 2 - Para rodar a versão de produção rode 'npm run build', seguido de 'npm install -g serve' e depois 'serve -s build'. (Rode na raiz do projeto web)
 
 3 - Para rodar a versão de desenvolvimento rode 'npm run web'.
 
 
 
 
