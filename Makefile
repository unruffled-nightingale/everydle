install:
	yarn install

run:
	yarn start

build:
	yarn build

build-docker:
	docker build -t emoji-art .

run-docker: build-docker
	docker run -p 3002:80 -d emoji-art

push-docker: build-docker
	docker tag emoji-art ${DOCKER_REGISTRY}/emoji-art:latest
	docker push ${DOCKER_REGISTRY}/emoji-art

kube-apply: push-docker
	kubectl apply -f ./kube/deployment.yaml

kube-redeploy: push-docker
	kubectl rollout restart deploy emojiart