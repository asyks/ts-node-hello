ARG BASE_IMAGE=node:13.6.0-alpine

FROM ${BASE_IMAGE} as builder

RUN apk add --no-cache ca-certificates

RUN mkdir -p /opt/ts-node-hello
WORKDIR /opt/ts-node-hello

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install --loglevel=error --no-optional --save

FROM ${BASE_IMAGE}

RUN mkdir -p /opt/ts-node-hello
WORKDIR /opt/ts-node-hello

COPY --from=builder /opt/ts-node-hello/node_modules /opt/ts-node-hello/node_modules

COPY tsconfig.json /opt/ts-node-hello/tsconfig.json
COPY package.json /opt/ts-node-hello/package.json
COPY package-lock.json /opt/ts-node-hello/package-lock.json

COPY src/ /opt/ts-node-hello/src/
COPY test/ /opt/ts-node-hello/test/
