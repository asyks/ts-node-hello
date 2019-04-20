FROM node:11.14.0-alpine as builder

RUN apk add --no-cache ca-certificates

RUN mkdir -p /opt/grist
WORKDIR /opt/grist

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

FROM node:11.14.0-alpine

RUN mkdir -p /opt/grist
WORKDIR /opt/grist

COPY --from=builder /opt/grist/node_modules node_modules
COPY grist.ts /opt/grist/grist.ts

CMD npx ts-node grist.ts
