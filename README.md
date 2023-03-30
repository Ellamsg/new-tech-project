# new-tech-project

HOW TO RUN THIS APP

1- Install Docker: If you haven't already, you will need to install Docker on your computer. You can download it from the Docker website.

2- Clone the project: Clone the project from the fellow developer's Git repository using the Git command or download the code as a zip file.

3- Navigate to the project's directory in your terminal.

4- Build the Docker image: Run the docker build command to build the Docker image. This command will use the Dockerfile that is included in the project to create the image.

docker build -t my-app .


5- Run the Docker container: Once the image has been built, run the Docker container using the docker run command. Be sure to include the -p flag to map the container's port to a port on your computer.

docker run -p 3000:3000 my-app


6 -Open the app: Open your web browser and navigate to http://localhost:8080. You should see the React app running in your browser.

7 -When you run the docker build command, it will install all the necessary dependencies for the project inside the Docker container, so you do not need to install any dependencies on your local machine. The docker run command will start the Docker container and expose the app on port 8080. The -p flag maps port 8080 inside the container to port 8080 on your local machine. This allows you to access the app by navigating to http://localhost:8080 in your web browser.
