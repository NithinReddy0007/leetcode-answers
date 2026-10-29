Important Docker Commands
Command	Description
docker --version	Displays Docker version.
docker images	Lists downloaded Docker images.
docker pull ubuntu	Downloads an Ubuntu image.
docker ps	Displays running containers.
docker ps -a	Displays all containers.
docker run hello-world	Runs a test container.
docker create ubuntu	Creates a container without starting it.
docker start <container>	Starts a stopped container.
docker stop <container>	Stops a running container.
docker restart <container>	Restarts a container.
docker rm <container>	Deletes a container.
docker rmi <image>	Deletes an image.
docker logs <container>	Displays container logs.
docker exec -it <container> bash	Opens an interactive terminal inside a container.

Practical Execution
1. Check Docker installation
docker --version


2. Download an image
docker pull ubuntu


3. Create and run a container
docker run -it --name mycontainer ubuntu


4. List running containers
docker ps


5. List all containers
docker ps -a


6. Stop the container
docker stop mycontainer


7. Start the container
docker start mycontainer


8. Remove the container
docker rm mycontainer


9. Remove the image
docker rmi ubuntu
