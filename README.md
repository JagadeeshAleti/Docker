# Demo
## Run mongodb in docker container
  1. First get the mongodb image from the docker registry.
    ### docker pull mongo

  2. Create a container to start the mongodb
    ### docker run -d -p 27018:27017 --name Mongodb mongo
    Note : 27017 is the port of docker container which Mongodb is running and it is exposed to host on port 27018.
    If the exposed port on host is already in use, then it is not work.

  3. After step 2, to check it is mongodb is running correctly or not. Open mongodb compass and connecto to the 
     respective database uri. In my case it is `mongodb://localhost:27017`

## To build Docker image
  docker run -it -p 3456:3456 -e DATABASE_URI=mongodb://host.docker.internal:27018 -e PORT=3456 aws-user-app
