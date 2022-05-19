FROM openjdk:8u111-jdk-alpine
ADD demo/target/demo*.jar demo.jar

CMD ["java", "-jar", "demo.jar"]
