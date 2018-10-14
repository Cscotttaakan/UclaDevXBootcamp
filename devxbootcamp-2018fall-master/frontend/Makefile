# METADATA
VERSION=v0.1.0

# CMD
BIN_DIR=bin

.PHONY: all clean-bin clean dev build start serve

all: build

clean-bin:
	if [ -d $(BIN_DIR) ]; then rm -r $(BIN_DIR); fi

clean: clean-bin

dev:
	npm run dev

build: clean-bin
	BABEL_ENV=web npm run build

start:
	npm run serve

serve: build start

format:
	npx prettier --write "src/**/*.js"
