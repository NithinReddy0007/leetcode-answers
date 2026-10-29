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





You can integrate Docker with Kubernetes by using Docker to create an image and Kubernetes to manage containers created from that image.

Let's do a simple practical using your existing Java Docker image (myjava).
1. Understand the workflow
Java Program

Main.java

Docker

Builds image: myjava

Kubernetes

Manages containers using Pods


2. Check Kubernetes
Open CMD:
kubectl get nodes


If your node shows Ready, Kubernetes is working.
3. Make your Docker image available to Kubernetes
If you are using Docker Desktop Kubernetes, it can generally access images built using Docker Desktop.

If you are using Minikube, run:
minikube image load myjava


4. Create a Kubernetes Job
Since our Java program prints output and exits, we'll use a Kubernetes Job rather than a Deployment.

Create a file named java-job.yaml:

apiVersion: batch/v1
kind: Job
metadata:
  name: java-job
spec:
  template:
    spec:
      containers:
      - name: java-container
        image: myjava
        imagePullPolicy: Never
      restartPolicy: Never
  backoffLimit: 0



5. Deploy it to Kubernetes
Run:
kubectl apply -f java-job.yaml


This creates a Kubernetes Job using your Docker image.
6. Check the execution
kubectl get jobs


Check the Pods:
kubectl get pods


View Java program output:
kubectl logs job/java-job


Expected output:
Hello from Java!
My Java program is running inside Docker.


7. Delete the Job
kubectl delete job java-job



Important differences
Docker	Kubernetes
Creates images	Uses images to run workloads
Runs individual containers	Manages Pods
docker run	kubectl apply
docker ps	kubectl get pods
docker stop	Manages workload lifecycle

For your lab, remember these three commands:
docker build -t myjava .
kubectl apply -f java-job.yaml
kubectl get pods


One important point: Kubernetes does not require Docker Engine specifically to run containers. It can use other container runtimes, such as containerd.

This is a simple demonstration of deploying a Dockerized Java application using Kubernetes.
















can you make the yaml simple













Yes! Let's keep the Kubernetes YAML as short as possible while retaining the required fields.

java-job.yaml

apiVersion: batch/v1
kind: Job
metadata:
  name: java-job
spec:
  template:
    spec:
      containers:
      - name: java
        image: myjava
        imagePullPolicy: Never
      restartPolicy: Never



Execute these commands
kubectl apply -f java-job.yaml
kubectl get pods
kubectl logs job/java-job


Remember
- kind: Job – Creates a Kubernetes Job.
- name: java-job – Names the Job.
- image: myjava – Uses your Docker image.
- restartPolicy: Never – Does not restart the container after it exits.
