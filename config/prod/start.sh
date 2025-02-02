#!/bin/bash

git pull origin main

docker stop portfolio-client-prod 
docker stop portfolio-strapi-prod 

docker rm portfolio-client-prod 
docker rm portfolio-strapi-prod 

docker-compose -f ./config/prod/strapi/docker-compose.yaml up --build
docker-compose -f ./config/prod/client/docker-compose.yaml up --build
