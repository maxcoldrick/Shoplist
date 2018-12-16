#/bin/bash

# docker set up steps

# Create a docker network
net=$(docker network create --subnet 172.32.0.0/16 sqlbridge)

# Build the API
docker build -t sqlapi api/

# Build the SQL server
docker build -t sql-serv sql/

# Run the SQL server
docker run --name mysql1 --net sqlbridge -p 3306 -d sql-serv

# Give the SQL server time to warm up
echo "sleeping for 10"
sleep 5

# Start the API--ip 172.18.0.22 172.32.0.3
docker run -p 49160:8080 --ip 172.32.0.15 --net sqlbridge -d sqlapi

curl http://172.32.0.15:49160/twentyeighteen
