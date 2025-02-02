#!/bin/bash

docker-compose -f ./strapi/docker-compose.yaml up --build
docker-compose -f ./client/docker-compose.yaml up --build

