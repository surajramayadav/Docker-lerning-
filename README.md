Docker Image (create image like windows image)<br/><br/><br/><br/>
1) for image build command with name <br/><br/>
---- docker image build -t hello .

2) show all images<br/><br/>
--- docker image ls


Docker Conatiner (Vm to rum image)<br/><br/><br/><br/>
1) Run docker container with image name<br/><br/>
---- docker container run hello

2) get running conatiners only<br/><br/>
---- docker container ls

3) get all containers<br/><br/>
--- docker container ls -a

4) run or start container using container id<br/><br/>
--- docker container start a05f3ed0d593

5) give name to conatiner and then run (-d means background mode)<br/><br/>
conatinerno1---container name 
hello:-image name
<br/><br/>
--- docker container run -d --name conatinerno1 hello

6) stop container using conatiner name<br/><br/>
---- docker container stop containerno1

6) map to conatiner port to local machine port<br/><br/>
2000:--localmachine port
3000:--container port
<br/><br/>
--- docker container run -d -p 2000:3000 --name conatinerno1 hello

Delete Container Image or all<br/><br/>

--- docker container prune<br/><br/>
--- docker image  prune<br/><br/>
---- docker system prune<br/><br/>



DockerHub push<br/><br/><br/><br/>

--- docker image build -t surajramayadav/hello-node-app:1.0.0<br/><br/>
--- docker push surajramayadav/hello-node-app:1.0.0

DockerHub pull<br/><br/><br/><br/>

--- docker pull  surajramayadav/hello-node-app:1.0.0\n



Docker Composer (do this all above stuffs automatically using composer file)<br/><br/><br/><br/>

create and build and run the conatiner in background mode<br/><br/>
--- docker-compose up -d

list of all compose<br/><br/>
-- docker-compose ps

stop compose<br/><br/>
-- docker-compose downe


Run Prod Compose using filename<br/><br/><br/><br/>

--- docker-compose -f docker-compose.prod.yml up




