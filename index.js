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
*/


const parent  =  React.createElement("div", {id : "parent"}, [React.createElement("div", {id : "child1"}, [React.createElement("h1", {}, "heading1"),React.createElement("h1", {}, "heading2")]), React.createElement("div", {id : "child1"}, [React.createElement("h1", {}, "heading1"),React.createElement("h1", {}, "heading2")])]);

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)