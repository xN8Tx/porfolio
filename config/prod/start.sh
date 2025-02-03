#!/bin/bash

docker stop portfolio-strapi-prod portfolio-client-prod
docker rm portfolio-strapi-prod portfolio-client-prod

docker-compose -f ./strapi/docker-compose.yaml up --build -d
docker-compose -f ./client/docker-compose.yaml up --build -d

