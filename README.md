## To run Spring app
- `mvn -f .\backend\ spring-boot:run`


## To load node modules
- `npm install`
- `npm i`
- `npm install react-router-dom`

## To run React app
- `npm --prefix .\frontend\ start`

---

## Steps to run the React app:
- Build the Docker image for React: `docker build -t react-app .`
- Run the React container: `docker run -p 8080:80 react-app`
- Now, your React app will be accessible on `http://localhost:8080`.

## Steps to run the Spring Boot app:
- Build the Docker image for Spring Boot: `docker build -t spring-boot-api .`
- Run the Spring Boot container: `docker run -p 8081:8081 spring-boot-api`
- Now, your Spring Boot API will be accessible on `http://localhost:8081`.

## Steps to use Docker Compose:
- Place the Dockerfiles for both React and Spring Boot in your project folder.
- Create a docker-compose.yml file with the configuration above.
- Build and start both containers with Docker Compose: `docker-compose up --build`
- After running docker-compose up, your apps will be available at:
    - React frontend: `http://localhost:8080`
    - Spring Boot backend: `http://localhost:8081`


## Build the Images: 
- You can build the images using Docker Compose: `docker-compose build`
- Push the Images to Docker Hub: Once the images are built, you can push them to Docker Hub:
- Push the frontend image: `docker push sakit333/frontend:latest`
- Push the backend image: `docker push sakit333/backend:latest`

## Steps to Run Using Docker Compose:
- After the images are pushed to Docker Hub, you can pull them directly or build them locally as follows:
- Pull the images (optional): If you want to pull the images from Docker Hub instead of building locally, use the following commands:
- For frontend: `docker pull sakit333/frontend:latest`
- For backend: `docker pull sakit333/backend:latest`
- Start the services: Now you can use Docker Compose to start both containers: `docker-compose up`

---
## To deploy in jenkins

- plugins: `NodeJS Plugin`
- Tools: `NodeJS` - Version: `v20.17.0`

## Other Options
- Option 2: Manually Install Node.js
- If you don’t want to use the plugin, you can manually install Node.js on your Jenkins agent.
- Install Node.js on Jenkins Agent:

- For Ubuntu:
```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```
- For CentOS/RHEL:
```bash
curl -fsSL https://rpm.nodesource.com/setup_16.x | bash -
sudo yum install -y nodejs
```
- Verify the installation:
```bash
node -v
npm -v
```# coorg_react_spring_mysql
