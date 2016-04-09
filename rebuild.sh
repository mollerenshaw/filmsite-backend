
#! /bin/sh

docker rm -f fs-api

docker build -t mollerenshaw/filmsite-backend .

docker run -d -p 8080:8080 --name fs-api mollerenshaw/filmsite-backend
