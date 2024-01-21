up-bg:
	docker-compose -f docker-compose.dev.yml up -d

up:
	docker-compose -f docker-compose.dev.yml up

kill:
	docker-compose -f docker-compose.dev.yml kill

build:
	docker-compose -f docker-compose.dev.yml build

logs:
	docker compose logs portfolio-website $(args)

ps:
	docker-compose ps

exec:
	docker-compose exec portfolio-website $(args)

lint:
	docker-compose exec portfolio-website npm run lint

format:
	docker-compose exec portfolio-website npm run format

code-check: lint format
