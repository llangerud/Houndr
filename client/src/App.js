import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignupForm from "./components/SignupForm";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import ViewMyProfile from "./pages/MyProfile";
import Navbar from "./components/Navbar";
import QueryTest from "./components/Test";

//main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

//middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/myprofile" element={<ViewMyProfile />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/test" element={<QueryTest />} />
          <Route render={() => <h1>Wrong page!</h1>} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
