# MERN App with Docker and Kubernetes

This project is a full-stack MERN application that demonstrates containerization and orchestration. It was created as a lab assignment for a DevOps subject.

The application can be run in two ways:
1.  **Locally for development** using Docker Compose.
2.  **On a Kubernetes cluster** (like Minikube) for a production-like deployment.

## Prerequisites
* [Docker](https://www.docker.com/products/docker-desktop/)
* [Docker Compose](https://docs.docker.com/compose/install/)
* [Minikube](https://minikube.sigs.k8s.io/docs/start/)
* [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

---
## How to Run

### Option 1: Using Docker Compose (for Local Development)
This is the simplest way to run the application on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/anish00700/mern-app-dockerlab.git](https://github.com/anish00700/mern-app-dockerlab.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd mern-app-dockerlab
    ```
3.  **Build and run the services:**
    ```bash
    docker-compose up --build
    ```
4.  Access the frontend at `http://localhost:3000`.

---
### Option 2: Using Kubernetes (with Minikube)
This method deploys the application to a local Kubernetes cluster.

1.  **Start Minikube:**
    ```bash
    minikube start
    ```
2.  **Build and Push Docker Images:**
    Before applying the Kubernetes files, you must build your `frontend` and `backend` images and push them to a container registry like Docker Hub.

    *Make sure to update the `image:` fields in `frontend-deployment.yml` and `backend-deployment.yml` with your Docker Hub username.*

3.  **Apply the Kubernetes Manifests:**
    In the root of the project directory, apply the configuration files to create the deployments and services.
    ```bash
    kubectl apply -f mongo-deployment.yml
    kubectl apply -f backend-deployment.yml
    kubectl apply -f frontend-deployment.yml
    ```
4.  **Access the Application:**
    Get the URL for the frontend service and open it in your browser.
    ```bash
    minikube service frontend-service
    ```
