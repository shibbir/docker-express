FROM        node:latest
LABEL       maintainer="Shibbir Ahmed"
COPY        . /www
WORKDIR     /www
RUN         npm install
EXPOSE      3000
ENTRYPOINT  [ "npm", "start" ]
