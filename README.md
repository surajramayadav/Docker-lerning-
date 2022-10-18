Docker Image (create image like windows image)
1) for image build command with name
---- docker image build -t hello .

2) show all images
--- docker image ls


Docker Conatiner (Vm to rum image)
1) Run docker container with image name
---- docker container run hello

2) get running conatiners only
---- docker container ls

3) get all containers
--- docker container ls -a

4) run or start container using container id
--- docker container start a05f3ed0d593

5) give name to conatiner and then run (-d means background mode)
conatinerno1---container name 
hello:-image name

--- docker container run -d --name conatinerno1 hello

6) stop container using conatiner name
---- docker container stop containerno1

6) map to conatiner port to local machine port
2000:--localmachine port
3000:--container port

--- docker container run -d -p 2000:3000 --name conatinerno1 hello

Delete Container Image or all

--- docker container prune
--- docker image  prune
---- docker system prune



DockerHub push

--- docker image build -t surajramayadav/hello-node-app:1.0.0
--- docker push surajramayadav/hello-node-app:1.0.0

DockerHub pull

--- docker pull  surajramayadav/hello-node-app:1.0.0\n



Docker Composer (do this all above stuffs automatically using composer file)

create and build and run the conatiner in background mode
--- docker-compose up -d

list of all compose
-- docker-compose ps

stop compose
-- docker-compose downe


Run Prod Compose using filename

--- docker-compose -f docker-compose.prod.yml up




