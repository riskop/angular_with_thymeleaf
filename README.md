# Spring MVC with thymeleaf plus angular app

based on this:

https://hellokoding.com/spring-mvc-4-hello-world-example-with-xml-configuration-maven-and-jsp/

## Prerequisites
- JDK 1.8 or later

- Maven 3 or later

## Stack
- Spring boot
- Spring MVC

mvn clean install
mvn spring-boot:run


## development

# eclipse
it's a maven project, import it, and when you change something, eclipse will
compile / copy to target

# visual studio
for the angular part, open the "/angular" folder in VS.

in the angular folder, you can run:
ng build --watch
in order to instant recompilation of the angular-typescript files.

on another console you can run
mvn spring-boot:run
it will notice changes on the "target" and "src/main/resources" folder


# Usage

if you send to a@b.c then a runtime exception is thrown on the server, and the
angular app shows a (bootstrap) modal with the http status.

otherwise a "success" message is shown in the modal after sending the form
