# Dockerfile
FROM node:18.14.0-alpine

# update and install dependencies
RUN apk update && apk upgrade
RUN apk add git

# move to temp directory
WORKDIR /tmp

# copy the project files
COPY . /tmp/
RUN yarn install
RUN yarn build

# move the .output folder contents to the /app folder
RUN mkdir -p /app
RUN mv .output/* /app/

# remove the temp directory
RUN rm -rf /tmp/*

# move to the /app folder
WORKDIR /app

ENV PATH ./node_modules/.bin/:$PATH
CMD ["node", "server/index.mjs"]
