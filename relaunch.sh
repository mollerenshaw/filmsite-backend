
#! /bin/sh

docker rm -f fs-api

docker build -t mollerenshaw/filmsite-backend .

docker run -d \
    -p 8080:8080 \
    -e MONGO_HOST='mongodb://fs-db:27017' \
    -e MONGO_USER='some_mongo_user' \
    -e MONGO_PASSWORD='some_mongo_password' \
    --net=filmsite-network \
    --name fs-api \
    mollerenshaw/filmsite-backend
