# typescript node hello world

A simple nodejs hello world implementation in typescript

## Running

```
> docker build -t ts-node-hello .
...
> docker run --network="host" ts-node-hello npm start
...
```
Example with custom port:
```
> docker run --network="host" ts-node-hello npm start port=3001
```

## Testing
```
> docker run ts-node-hello test
```
