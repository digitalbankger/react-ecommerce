PROJECT_NAME = react-test

NPM = npm
REACT_SCRIPTS = npx react-scripts

SRC_DIR = src
BUILD_DIR = build

REACT_SCRIPTS_OPTIONS = --silent

.PHONY: all install start build clean

all: install

install:
	$(NPM) install

start:
	$(REACT_SCRIPTS) start $(REACT_SCRIPTS_OPTIONS)

build:
	$(REACT_SCRIPTS) build $(REACT_SCRIPTS_OPTIONS)

clean:
	rm -rf $(BUILD_DIR)


