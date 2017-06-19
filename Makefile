.PHONY: deploy

deps:
	docker run -d -p 8000:8000 dwmkerr/dynamodb 