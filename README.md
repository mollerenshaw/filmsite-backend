# Movie Night microservice

## Using Docker to run the service

### Create a Docker machine to run the containers

Create a Docker machine that can run the container (OSX and Windows won't run Containers directly). Once it's running, tell Docker about it, so we can run commands there transparently.

```
docker-machine create --driver virtualbox filmsite-machine
eval "$(docker-machine env filmsite-machine)"
```

### Build and run the Docker image in a container

Build the image, with a tag of latest:

```
docker build -t mollerenshaw/filmsite-backend .
```

List the built images using ```docker images```.

Run the image in a container on the machine, making the container's port 8080 available on the host at port 80:

```
docker run -d -p 80:8080 --name fs-api mollerenshaw/filmsite-backend
```

List the running containers using ```docker ps```.

### Tail the logs from the container

```
docker logs --follow fs-api
```

### Connect to the service

Work out what port the container's exposed port has been mapped to:

```
docker port fs-api
```

Work out which IP the machine is running on:

```
docker-machine ip filmsite-machine
```

Then, you know, go to ```http://thatip:thatport```.

## Starting the API

Install the dependencies:

    npm install

Start the Express server:

    npm start

## Development Tooling

    grunt watch
    
