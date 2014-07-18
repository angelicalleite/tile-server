tile-server
===========

Este projeto possui a aplicação node.js e as configurações que utilizam as bibliotecas Windshaft/Mapnik para renderizar os pontos no mapa do explorador visual de dados geográficos utilizado pelo  [portal-biodiversidade](https://github.com/sibbr/portal-biodiversidade).

Para executar o tile-server, será necessário configurar e instalar as seguintes dependências:

## Dependências

* [Redis](http://redis.io/)

O Windshaft usa o Redis para manter o tiles renderizando.

```bash
sudo apt-get install redis-server
```

* [Node.js](http://nodejs.org)

Para instalar, acesse [http://nodejs.org/download](http://nodejs.org/download)

* [Node.js Package Manager (NPM)](https://www.npmjs.org)

O NPM é utilizado para baixar e instalar as aplicações e dependências do tipo Node.js.

```bash
sudo apt-get install npm
```

Para um guia completo de instalação do NPM, acesse (https://www.npmjs.org)

* [Windshaft](https://github.com/CartoDB/Windshaft)

Para um guia de instalação do Windshaft, acesse a página [configurando o Windshaft] (https://github.com/sibbr/tile-server/wiki/Configurando-o-Windshaft)

## Configurando o tile-server 

* config.json - Configurar de acordo com seus parâmetros de acesso à base de dados, servidor redis, versão mapnik, etc.
* carto.css - Configurar de acordo com a aparência desejada para a exibição dos pontos no mapa

## Inicializando o tile-server

Para iniciar o tile-server, basta executar na linha de comando:

$ node tile-server.js

