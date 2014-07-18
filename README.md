tile-server
===========

Este projeto possui a aplicação node.js e as configurações que utilizam as bibliotecas Windshaft/Mapnik para renderizar os pontos no mapa do explorador visual de dados geográficos utilizado pelo  [portal-biodiversidade](https://github.com/sibbr/portal-biodiversidade).

## Dependências

* Windshaft

Para um guia de instalação do Windshaft, acesse [Configurando o Windshaft] (https://github.com/sibbr/tile-server/wiki/Configurando-o-Windshaft)

* redis

´´´bash
sudo aptitude install redis-server

## Configurando o tile-server 

* config.json - Configurar de acordo com seus parâmetros de acesso à base de dados, servidor redis, versão mapnik, etc.
* tile-server.js - Configurar diretório das bibliotecas Windshaft,

## Inicializando o tile-server

Para iniciar o tile-server, basta executar na linha de comando:

´´´bash
node tile-server.js
´´´
