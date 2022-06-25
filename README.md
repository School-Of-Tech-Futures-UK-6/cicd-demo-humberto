# Inspiration Generator

This React application serves as a front end for an MVP app that serves a random inspirational phrase and author from a hard-coded list of content.

## Running with React Scripts

Since this was generated with create-react-app, there are a few commands available through the react-scripts package that can help us run and develop this application further.

### Run in hot-loading mode

Navigate to the root directory for the application (most likely /inspiration-fe) and run the following command:

```
npm start
```

This will boot the application up in hot-loading mode and immediately reflect changes saved in the code in the browser session it opens up.

### Build assets to run locally

```
npm build
```
This command will create the assets required to access the application locally, or to transfer to a server and run as an application there.

## Docker

This application can be containerized and run through Docker if that suits your needs better.

### Hot-loading with Docker

This is currently being debugged and may not work as expected yet.

The dev container contains the react-scripts necessary to hot-load changes, useful if you want to make changes in a consistent environment with other developers.
```
docker-compose up -d --build
```
This will build and run a dev container for you, which is accessible at localhost:3001. If you want to stop it at any point:
```
docker-compose stop
```

### Building a production container with Docker

Given that this application is intended to run in the cloud using Cloud Run, we can create a container with all of the production assets required for this.

```
docker-compose -f docker-compose.prod.yml up -d --build
```

You can navigate to localhost:1337 to test this locally.