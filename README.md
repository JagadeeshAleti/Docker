# To build Docker image
  docker run -it -p 8000:3456 -e DATABASE_URI=mongodb://host.docker.internal:27018 -e PORT=3456 aws-user-app
