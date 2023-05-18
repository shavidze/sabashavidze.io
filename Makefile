.PHONY: build help

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: package.json ## install dependencies
	@if [ "$(CI)" != "true" ]; then \
		echo "Full install..."; \
		npm i; \
	fi
	@if [ "$(CI)" = "true" ]; then \
		echo "Frozen install..."; \
		npm --frozen-lockfile; \
	fi

run: ## run the develpment server
	@npm run dev

prettier: ## prettify the source code using prettier
	@echo "Running prettier..."
	@npm run prettier

lint: ## lint the code and check coding conventions
	@echo "Running linter..."
	@npm run lint