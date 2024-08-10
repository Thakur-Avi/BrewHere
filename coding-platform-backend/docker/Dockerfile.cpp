# Dockerfile.cpp located in ./docker/Dockerfile.cpp

# Use the official GCC image as the base image
FROM gcc:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the source code into the container
COPY ./code .

# Compile the C++ code (This will be done by the command in docker-compose.yml)
# RUN g++ /app/code.cpp -o /app/code

# The command to run the compiled C++ code is defined in docker-compose.yml
