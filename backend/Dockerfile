# # Base image with OpenJDK 17
# FROM openjdk:17
# WORKDIR /app

# # Copy the JAR file into the container
# COPY target/app.jar ./

# # Expose the port your app runs on
# EXPOSE 8080

# # Command to run the JAR file
# ENTRYPOINT ["java", "-jar", "app.jar"]


FROM openjdk:17 AS builder
WORKDIR /app

COPY . ./

RUN chmod +x ./mvnw

RUN ./mvnw clean package -DskipTests

FROM openjdk:17
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
