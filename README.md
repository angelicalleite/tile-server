tile-server
===========

Este projeto possui a aplicação node.js e as configurações que utilizam as bibliotecas Windshaft/Mapnik para renderizar os pontos no mapa do explorador visual de dados geográficos utilizado pelo  [portal-biodiversidade](https://github.com/sibbr/portal-biodiversidade).

## Dependências

* [Windshaft](https://github.com/CartoDB/Windshaft)

Para um guia de instalação do Windshaft, acesse [Configurando o Windshaft] (https://github.com/sibbr/tile-server/wiki/Configurando-o-Windshaft)

* redis

O Windshaft usa o Redis para manter o tiles renderizando.

```bash
sudo apt-get install redis-server
```

* Node.js 

Para um guia completo de instalação do Node.js, acesse  (http://nodejs.org)

* Node.js Package Manager (NPM)

O NPM é utilizado para baixar e instalar as aplicações e dependências do tiponode.js.

```bash
sudo apt-get install npm
```

Para um guia completo de instalação do NPM, acesse (https://www.npmjs.org)

## Configurando o tile-server 

* config.json - Configurar de acordo com seus parâmetros de acesso à base de dados, servidor redis, versão mapnik, etc.
* carto.css - Configurar de acordo com a aparência desejada para a exibição dos pontos no mapa

## Inicializando o tile-server

Para iniciar o tile-server, basta executar na linha de comando:

$ node tile-server.js

