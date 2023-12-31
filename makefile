up-bg:
	docker-compose up -d

up:
	docker-compose up

kill:
	docker-compose kill

build:
	docker-compose build

logs:
	docker compose logs portfolio-website $(args)

ps:
	docker-compose ps

exec:
	docker-compose exec portfolio-website $(args)

lint:
	docker-compose exec portfolio-website npm run lint
	docker-compose exec portfolio-website npm run format
