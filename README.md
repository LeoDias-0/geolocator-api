# GeoLocator API
## Descrição
RESTful API que utiliza a API de geolocalização do Google para calcular a distância entre múltiplos endereços.

<br/>

### Features

* Obter a latitude e a longitude de uma lista de endereços
* Obter distâncias entre dois endereço de um lista
* Dado um endereço, obter o mais próximo e o mais distante do mesmo

<br/>


## Tecnologias utilizadas
<p align="center" style="display: flex;">
	<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
	<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="28" role="img" aria-label="ESLINT"><g shape-rendering="crispEdges"><rect width="80" height="28" fill="#3a33d1"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="https://developers.google.com/maps/images/maps-icon.svg"/><text transform="scale(.1)" x="480.5" y="175" textLength="350" fill="#fff" font-weight="bold">MAPS</text></g></svg>

	

</p>

<br/>


## Rodando localmente

Para utilizar a API GeoLocator é necessário ter instalado em sua máquina:

* [Node.js](https://nodejs.org/en/)


### Instalando
```bash

$ git clone https://github.com/LeoDias-0/geolocator-api

$ cd geolocator-api

$ npm install

```

### Preparando o setup
Na raiz do projeto crie um arquivo `.env` com a sua [google api key](https://developers.google.com/maps/documentation/geocoding/get-api-key) assim como no arquivo `.env.example`.

## Rodando remotamente

Você pode executar esse projeto remotamente atráves do link https://geolocator-api-ld.herokuapp.com/

## Endpoints da API

### `POST /addresses`

É necessário o envio de um objeto com o atributo 'addresses' com uma lista de endereços.

```
{
    "addresses": [
		"1600 Amphitheatre Parkway, Mountain View, CA",
		"Florianópolis",
		"Av. Pres. Castelo Branco, Maracanã, Rio de Janeiro - RJ"
	]
}

```

dessa requisição a API retornará

```
[
  {
    "addressInfo": {
      "address": "Google Building 40, 1600 Amphitheatre Pkwy, Mountain View, CA 94043, EUA",
      "location": {
        "lat": 37.422388,
        "lng": -122.0841883
      }
    },
    "otherAddresses": [
      {
        "addressInfo": {
          "address": "Av. Pres. Castelo Branco - Maracanã, Rio de Janeiro - RJ, 20271-130, Brasil",
          "location": {
            "lat": -22.9102899,
            "lng": -43.2299243
          }
        },
        "distance": 10614.710014708444
      }
	  ...
    ],
    "nearest": {
      "addressInfo": {
        "address": "Florianópolis, SC, Brasil",
        "location": {
          "lat": -27.5948036,
          "lng": -48.5569286
        }
      },
      "distance": 10529.981277095683
    },
    "farest": {
      "addressInfo": {
        "address": "Av. Pres. Castelo Branco - Maracanã, Rio de Janeiro - RJ, 20271-130, Brasil",
        "location": {
          "lat": -22.9102899,
          "lng": -43.2299243
        }
      },
      "distance": 10614.710014708444
    }
  },
  ...
]
```

<br/>
