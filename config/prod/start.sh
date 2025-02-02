#!/bin/bash

git pull origin main

docker-compose stop portfolio-client-prod 
docker-compose stop portfolio-strapi-prod 

docker-compose rm portfolio-client-prod 
docker-compose rm portfolio-strapi-prod 

docker-compose -f ./config/prod/strapi/docker-compose.yaml up --build
docker-compose -f ./config/prod/client/docker-compose.yaml up --build
