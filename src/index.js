/*let heading =  React.createElement("h1",{id:"head"},"hello from react");
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)*/

/*

<div id="Parent">
    <div id="child1" >
        <h1>heading1</h1>
        <h1>heading1</h1>
    </div>
    <div id="child2" >
        <h1>heading1</h1>
        <h1>heading1</h1>
    </div>   
</div>  
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "heading1"),
    React.createElement("h1", {}, "heading2"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "heading1"),
    React.createElement("h1", {}, "heading2"),
  ]),
]);



/* jsx -> with help of the babel -> React.cereateElement 

let reactElement = <h1>HI i'km the reacr element </h1>;

let ComonentComposition = () => {
  return (
    <p>
      I'm the componet composition , i'will go inside another componet so people
      call me component composition
    </p>
  );
};
const Parent = () => (
  <h1 className="heading">
    i'm heading from jSX
    <ComonentComposition />
    {reactElement}
  </h1>
);*/

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";

import { RouterProvider,createBrowserRouter , Outlet } from "react-router-dom";


const Applayot = () => {

  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Applayot />,
    children : [ {
      path : "/",
      element : <Body />,
    },
    {
      path : "/about",
      element : <About />,
    },
    {
      path : "/contact",
      element : <Contact />,
    },{
      path : "restaurant/:id",
      element : <ResturantMenu/>
    }
  
  ],
    errorElement : < Error />
  },
 
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
