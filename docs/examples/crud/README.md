---
title: Example CRUD
description: Example project how-to create basic CRUD endpoints and document them with Swagger-UI and OpenApi 3.0.0.
sidebarDepth: 0
---

# Example-CRUD <seo/>

[Github Repository](https://github.com/oatpp/example-crud)

Example project how-to create basic CRUD endpoints and document them with Swagger-UI and OpenApi 3.0.0

## Overview

This project is using [oatpp](https://github.com/oatpp/oatpp) and [oatpp-swagger](https://github.com/oatpp/oatpp-swagger) modules.

### Project layout

```
|- CMakeLists.txt                        // projects CMakeLists.txt
|- src/
|   |
|   |- controller/                       // Folder containing UserController where all endpoints are declared
|   |- db/                               // Folder with database mock
|   |- dto/                              // DTOs are declared here
|   |- SwaggerComponent.hpp              // Swagger-UI config
|   |- AppComponent.hpp                  // Service config
|   |- App.cpp                           // main() is here
|
|- test/                                 // test folder
|- utility/install-oatpp-modules.sh      // utility script to install required oatpp-modules.
```

---

### Build and Run

#### Using CMake

**Requires**

- `oatpp` and `oatpp-swagger` modules installed. You may run `utility/install-oatpp-modules.sh` 
script to install required oatpp modules.

```
$ mkdir build && cd build
$ cmake ..
$ make 
$ ./crud-exe        # - run application.
```

#### In Docker

```
$ docker build -t example-crud .
$ docker run -p 8000:8000 -t example-crud
```

---

### Endpoints declaration

#### Create User

```cpp
ENDPOINT_INFO(createUser) {
  info->summary = "Create new User";
  info->addConsumes<UserDto::ObjectWrapper>("application/json");
  info->addResponse<UserDto::ObjectWrapper>(Status::CODE_200, "application/json");
}
ENDPOINT("POST", "demo/api/users", createUser,
         BODY_DTO(UserDto::ObjectWrapper, userDto)) {
  return createDtoResponse(Status::CODE_200, m_database->createUser(userDto));
}
```

#### Update User

```cpp
ENDPOINT_INFO(putUser) {
  info->summary = "Update User by userId";
  info->addConsumes<UserDto::ObjectWrapper>("application/json");
  info->addResponse<UserDto::ObjectWrapper>(Status::CODE_200, "application/json");
  info->addResponse<String>(Status::CODE_404, "text/plain");
}
ENDPOINT("PUT", "demo/api/users/{userId}", putUser,
         PATH(Int32, userId),
         BODY_DTO(UserDto::ObjectWrapper, userDto)) {
  userDto->id = userId;
  return createDtoResponse(Status::CODE_200, m_database->updateUser(userDto));
}
```

#### Get one User

```cpp
ENDPOINT_INFO(getUserById) {
  info->summary = "Get one User by userId";
  info->addResponse<UserDto::ObjectWrapper>(Status::CODE_200, "application/json");
  info->addResponse<String>(Status::CODE_404, "text/plain");
}
ENDPOINT("GET", "demo/api/users/{userId}", getUserById,
         PATH(Int32, userId)) {
  auto user = m_database->getUserById(userId);
  OATPP_ASSERT_HTTP(user, Status::CODE_404, "User not found");
  return createDtoResponse(Status::CODE_200, user);
}
```

#### Get list of users

```cpp
ENDPOINT_INFO(getUsers) {
  info->summary = "get all stored users";
  info->addResponse<List<UserDto::ObjectWrapper>::ObjectWrapper>(Status::CODE_200, "application/json");
}
ENDPOINT("GET", "demo/api/users", getUsers) {
  return createDtoResponse(Status::CODE_200, m_database->getUsers());
}
```

#### Delete User

```cpp
ENDPOINT_INFO(deleteUser) {
  info->summary = "Delete User by userId";
  info->addResponse<String>(Status::CODE_200, "text/plain");
  info->addResponse<String>(Status::CODE_404, "text/plain");
}
ENDPOINT("DELETE", "demo/api/users/{userId}", deleteUser,
         PATH(Int32, userId)) {
  bool success = m_database->deleteUser(userId);
  OATPP_ASSERT_HTTP(success, Status::CODE_417, "User not deleted. Perhaps no such User in the Database");
  return createResponse(Status::CODE_200, "User successfully deleted");
}  
```