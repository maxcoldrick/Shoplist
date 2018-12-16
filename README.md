# shoplist

An API for a shopping list database that runs on the local network.

We take a MySQL database and a Node.js API built with the Express library and containerise them both with Docker.

dockerSetup.sh currently defines the execution flow. 

So, we create a Docker network and associate the two containers.

The API listens on port 8080, but Docker routes 8080 to port 49160 - this means we can cURL that port to get to the express routes.





