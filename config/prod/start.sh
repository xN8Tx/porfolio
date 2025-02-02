#!/bin/bash

git pull origin main

docker-compose -f config/prod/strapi/docker-compose.yaml up --build
docker-compose -f config/prod/client/docker-compose.yaml up --build
