MAKE=make
# Docker Development
CONTAINER=growler
IMAGE=growler:latest

DB_IMAGE=postgres:10-alpine
DB_CONTAINER=database

.PHONY: devup devdown

devup:
	docker-compose -f docker-compose.yaml -f docker-compose-dev.yaml up -d

devdown:
	docker-compose -f docker-compose.yaml -f docker-compose-dev.yaml down
