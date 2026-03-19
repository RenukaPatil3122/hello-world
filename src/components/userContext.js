import React, { Component } from "react";

const UserContext = React.createContext("Code");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
