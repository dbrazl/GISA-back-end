# GISA services

This is the back-end monorepo application.
Here we have all services os GISA like:

- MIC
- MSA
- MCD
- MGE
- API Gateway

The services has been writed on Node.js and bee deploy on docker.

To run this project you need:

- Open API-Gateway folder and run it;
- Open the microservice what you want, like MIC, and run it;
- Has certain the one of legacys applications has runing.

For docker users:

1. Go to api-gateway folder
2. Create image of microservice with `docker build -t [NAME_OF_IMAGE] .`
3. Run the container with `docker run --name [NAME_OF_CONTAINER] -p [PORT_OF_API_GATEWAY]:[PORT_OF_API_GATEWAY] -d [NAME_OF_IMAGE]`

Change `NAME_OF_IMAGE` to the name of image what you want. Do the same for the next variables.

The PORTs for this project is:

- api_gateway: `PORT 3000`
- MIC: `PORT 3001`
- MCD: `PORT 3002`
- MSA: `PORT 3003`
- MGE: `PORT 3004`

Do the same for the microservices you want.
This will run the all application locally.
