FROM node:11.14.0-alpine as builder

RUN apk add --no-cache ca-certificates

RUN mkdir -p /opt/ts-node-hello
WORKDIR /opt/ts-node-hello

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

FROM node:11.14.0-alpine

RUN mkdir -p /opt/ts-node-hello
WORKDIR /opt/ts-node-hello

COPY --from=builder /opt/ts-node-hello/node_modules node_modules

COPY tsconfig.json tsconfig.json
COPY package.json package.json
COPY package-lock.json package-lock.json

COPY constants.ts /opt/ts-node-hello/constants.ts
COPY hello.ts /opt/ts-node-hello/hello.ts
COPY server.ts /opt/ts-node-hello/server.ts
COPY test.ts /opt/ts-node-hello/test.ts

ENTRYPOINT [ "npm" ]
