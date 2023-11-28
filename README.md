# Configuration to start the application
## Run MongoDB in the docker container
  1. First get the MongoDB image from the docker registry.
  ### docker pull mongo

  2. Create a container to start the MongoDB
      ### docker run -d -p 27018:27017 --name Mongodb mongo
    Note: 27017 is the port of the docker container that MongoDB is running and it is exposed to host on port 27018.
    If the exposed port on the host is already in use, then it does not work.

  3. After step 2, check it is MongoDB is running correctly or not. Open Mongodb compass and connect to the 
     respective database uri. In my case, it is `mongodb://localhost:27017`

      ## To build Docker image
  docker run -it -p 3456:3456 -e DATABASE_URI=mongodb://host.docker.internal:27018 -e PORT=3456 aws-user-app
