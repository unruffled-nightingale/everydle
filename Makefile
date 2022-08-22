install:
	yarn install

run:
	yarn start

build:
	yarn build

build-docker:
	docker build -t everydle .

run-docker: build-docker
	docker run -p 3002:80 -d everydle

push-docker: build-docker
	docker tag everydle ${DOCKER_REGISTRY}/everydle:latest
	docker push ${DOCKER_REGISTRY}/everydle

kube-apply: push-docker
	kubectl apply -f ./kube/deployment.yaml

kube-redeploy: push-docker
	kubectl rollout restart deploy everydle