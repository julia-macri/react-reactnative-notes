
// REACTDOM/JSX
    // react allows us to use JSX
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';

    //use ReactDOM to render something on screen
    // takes two arguments: 1) what I want to render, 2) where do I want to render it
    // where do I want to render: needs to point div with id of root
    ReactDOM.render(
    // can put HTML element because React created psuedolanguage JSX (like Javascript version of HTML- most of JSX looks like HTML)
    // can't have 2 adjacent JSX elements like: <h1>Hello world!</h1><p>This is a paragraph</p>
    // instead, have to be wrapped in something so it counts as one element with 2 elements inside
    <div><h1>Hello world!</h1><p>This is a paragraph</p></div>,
    document.getElementById('root') //this way render looks at first parameter (what I want to render) and sticks in div with id of root
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();

// REACTDOM/JSX PRACTICE

    import React from "react"; 
    import ReactDOM from "react-dom";
    ReactDOM.render(
    <ul>
        <li>listitem1</li>
        <li>listitem2</li>
        <li>listitem3</li>
    </ul>
    ,document.getElementById("root")
    )

// REACT FUNCTIONAL COMPONENTS
  //don't want to put everything inside render
  // create them by writing a function
  //camelcase + start first letter as capital letter
  // return JSX of what want this component to represent
  // good idea to wrap in parantheses
  // another convention: put everything on own line
  // still can't have adjacent JSX elements because supposed to return 1 JSX element
    // can get around by wrapping in <div></div>
    function MyApp(){
        return (
        <ul>
          <li>listitem1</li>
          <li>listitem2</li>
          <li>listitem3</li>
        </ul>
        )
      }
      
      // inside render, create instance of functional component
      // by placing name of component and wrapping in JSX tag
    
      ReactDOM.render(
        // self-closing tag here
        // but sometimes want to create components that accept children components
        // but for now make self-closing
        <MyApp />, 
        document.getElementById("root")
      )


// REACT FUNCTIONAL COMPONENTS PRACTICE
function MyInfo(){
    return (
    <div>
      <h1>Julia</h1>
      <p>I am a CS student trying to learn React.</p>
      <ol>
        <li>Japan</li>
        <li>England</li>
        <li>Italy</li>
      </ol>
    </div>
    )
  }
  
  
  ReactDOM.render(
    <MyInfo />, 
    document.getElementById("root")
  )

// MOVE COMPONENTS INTO SEPARATE FILES
  // when imports don't have relative path, they will automatically look for a module with same name providing
  // works okay with React/ReactDOM
  // with own file, need to provide path
  // looking for js file so can delete .js
  import MyInfo from "./components/MyInfo"
  
  
  
  ReactDOM.render(
    // name file exactly same as component 
    <MyInfo />, 
    document.getElementById("root")
  )


// REACT PARENT/CHILD COMPONENTS
  // will have complex hierarchy of components that leads to JSX elements
  // in App function, can refer to new component as <NewComponentName />
  import App from "./App";
  
  ReactDOM.render(
    // App will be entryway into entire application
    <App />, 
    document.getElementById("root")
  )
    
  import React from "react";
    import ReactDOM from "react-dom";
    import App from "./App";

    ReactDOM.render(
        <App />, 
        document.getElementById("root")
    );

// STYLING REACT WITH CSS CLASSES (doesn't work with my code here)
    // not dealing with HTML 
    // using class with JSX doesn't fly
    //need to use className to use classes/style
    // where put class in HTML then put className
    // can only apply className to React elements like p, h1, header, etc
    // if apply className to your own component will do something diff than think
    // example in Header.js: <header className = "navbar">This is the header</header>

    // add class to "something" (?)
    document.getElemetnBYID("something").className += "new-class-name";
    // className is an underlying Javascript DOM API property

     // if wanted this div to be a flex container and specifically style one of items they're in
      // have to go to Header or MainContent and look at elements they're in to give classNames that are necessary

// SOME CAVEATS
    // at the end of statements, semicolons not necessary but personal preference
    // one of benefits of arrow function is get rid of return keyword
        // example
        const App = () => <h1>Hello world!</h1>

// JSX TO JAVASCRIPT AND BACK
  // surround any Javascript in curly braces
  function App(){
    const firstName="Bob";
    const lastName = "Ziroll";
    return( //in Javascript up to here
      // obviously just shows exactly this: Hello firstName + " " + lastName!
          // <h1>Hello firstName + " " + lastName!</h1>
      // JSX land starts with < (everything after will be treated like HTML: literally interpreted)
      // then put {} to enter and then leave Javascript (can do anything in Javascript)
        //  <h1>Hello {firstName + " " + lastName}!</h1>
            // equivalent to
            <h1>Hello {`${firstName} ${lastName}`}!</h1>
        )
  }


  function App(){
    // created new Date instance
    const date = new Date();
    return (
      // so can be in between 1-12
      <h1>It is currently about {date.getHours() %12} o'clock!</h1>
    )
  }

    //Good morning/afternoon/night  
  function App(){
    // created new Date instance
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    if (hours<12){
      timeOfDay = "morning";
    }
    else if(hours >=12 && hours <17){
      timeOfDay = "afternoon";
    }
    else{
      timeOfDay = "night";
    }
    return (
      // so can be in between 1-12
      <h1>Good {timeOfDay}!</h1>
    )
  }

// REACT INLINE STYLES WITH THE STYLE PROPERTY
    

    // one way but object/style just gets longer
    function App(){
        // created new Date instance
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;
        if (hours<12){
        timeOfDay = "morning";
        }
        else if(hours >=12 && hours <17){
        timeOfDay = "afternoon";
        }
        else{
        timeOfDay = "night";
        }
        return (
        // style: don't expect string because not inside of HTML
        // JSX expects to be Javascript object, not string
        // 2 sets of curly braces: 1st for Javascript, 2nd for object
        // to add  additional styles, because it's an object, just add a key value pair
            // problem with background-color is we're in Javascript and a property can't have a dash in the middle of its name
            // to fix this, have camelCase - identifies it (?) 
        <h1 style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}>Good {timeOfDay}!</h1>
        )
    }

    // making it easier to read/add more styles
    function App(){
        // created new Date instance
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;
        if (hours<12){
          timeOfDay = "morning";
        }
        else if(hours >=12 && hours <17){
          timeOfDay = "afternoon";
        }
        else{
          timeOfDay = "night";
        }
        // make separate variable and put entire object into that variable
        const styles = {
          color: "#FF8C00", 
          backgroundColor: "#FF2D00",
    
    
          // default is px when put number (?)
          // 200px not valid Javascript but can turn it into string (e.x. "200px") and it works
          // if want to use another unit, can put as string
    
          // also removed -
          fontSize: 24
        }
        return (
          // style: don't expect string because not inside of HTML
          // JSX expects to be Javascript object, not string
          // 2 sets of curly braces: 1st for Javascript, 2nd for object
          // to add  additional styles, because it's an object, just add a key value pair
            // problem with background-color is we're in Javascript and a property can't have a dash in the middle of its name
              // to fix this, have camelCase - identifies it (?) 
          <h1 style={styles}>Good {timeOfDay}!</h1>
        )
      }

    // one benefit to inline style is making it more dynamic   
    // can have dynamic data that changes how our hardcoded data is displayed
    // changed color based on timeofday
    function App() {
        // could make const date = new Date(2018, 6, 31, 15)
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        const styles = {
          fontSize: 30
        }
        
        if (hours < 12) {
          timeOfDay = "morning"
          styles.color = "#04756F"
        } else if (hours >= 12 && hours < 17) {
          timeOfDay = "afternoon"
          styles.color = "#2E0927"
        } else {
          timeOfDay = "night"
          styles.color = "#D90000"
        }
        
        return (
          <h1 style={styles}>Good {timeOfDay}!</h1>
        )
      }
// LOOK AT TODO APP PRACTICE CODE- if want- didn't copy in here

// REACT PROPS
    //nice to have separate components that can different attributes/props
    // contact list 

    // don't want hard-coded elements because want to apply to multiple contacts
    // wants to take as properties different info into these places 

    // props is an object that has properties of that object:each one the name of property that you passed in

    // in normal function- add arguments to abstract (have different inputs)
        function addNumbers(a, b){
            return a+b;
        }

    // in componentname.js
      function componentname(props){
        // refer with props.property1, etc.
        //   return ...;
      }
    // in App.js
    //   <componentname property1 ="" property2 = "" etc... />


    // from first time (look at corresponding App.js)
    import React from "react";

// don't want hard-coded elements because want to apply to multiple contacts
// wants to take as properties different info into these places 

// props is an object that has properties of that object:each one the name of property that you passed in
    function ContactCard(props){
        return (
            <div className="contact-card">
                <img src={props.imgUrl}/>
                <h3>{props.name}</h3>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
        )
    }

    export default ContactCard



// second attempt
    // in App.js
    function App(){
        return (
        <div className ="contacts">
            {/* just like how did with attribute in regular HTML but now pass through property and establish their names */}
            {/* could pass in object that is entire contact instead of a bunch of properties */}
            <ContactCard 
                // going between JSX and Javascript -> need 2 curly braces : 1st getting into Javascript, 2nd getting into JSX
    
                // passing prop called contact that is object
            //  usually get from JSON file not hard-coded
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />
            
            <ContactCard 
                contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
            />
            
            <ContactCard
                contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
            />
            
            <ContactCard 
                contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
            />
            
            </div>
        );
    }
    
    export default App;

    // in ContactCard.js
    // because now props is the object contact - so double . necessary
    function ContactCard(props){
        return (
            <div className="contact-card">
                <img src={props.contact.imgUrl}/>
                <h3>{props.contact.name}</h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
            </div>
        )
    }

// can look at code from REACT PROPS AND STYLING PRACTICE
    // note: if don't want to display anything if props.question doesn't exist
    <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
   

// MAPPING COMPONENTS IN REACT
    // in reality, most data display on page comes from http call to an API, where there is a server that hosts database 
    // database and server returning JSON data to you
    
    // don't know yet how to call APIs so will get data from jokesData.js

// higher order array methods: methods that you can run on array that take a function as a parameter and allow you to decide what should happen to those elements of the arry
    const nums = [1, 2,3,4,5,6,7,8,9,10];
    // map is a method of nums array that takes function as parameter
    // function will receive each element (number) in array
    // function runs on each element in array
    // doubled = new array that returns from function
    const doubled = nums.map(function(num){
        return num*2;
    })
    console.log(doubled);


    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex


    // App.js
        import React from "react"

        import Joke from "./components/Joke"
        import jokesData from "./jokesData"
        function App() {
        // using arrow function
        // receive each joke object
            // with one parameter in jokes function, can get rid of ()
            // map returns new array
            // inside key prop, put something unique
                // usually in API, have unique ID
                // without key, produces error
            const jokeComponents = jokesData.map(joke => <Joke key ={joke.id} question={joke.question} punchLine={joke.punchLine} />);
            // return Joke component that passes in data from individual joke object that looking at
            
            // equivalent to
            //   return (
            //       <Joke question={joke.question} punchLine={joke.punchLine}/>
            
            // })
        
        
        
            return (
                <div>
                {/* can put array of components in JSX */}
                {jokeComponents} 
                    
                    
                </div>
            )
        }
        
        export default App

// MAPPING PRACTICE- look at their code
    // if you export default a variable, in the file you're importing you don't have to call it by the same name
        // example
        // in productData.js
        export default products;
        // in App.js
        import productsData from "./vschoolProducts";


// TODO APP PHASE 3 - look at App.js
        // TodoItem.js
            import React from "react"

            function TodoItem(props) {
                return (
                    <div className="todo-item">
                        <input type="checkbox" checked={props.item.completed}/>
                        <p>{props.item.text}</p>
                    </div>
                )
            }
            
            export default TodoItem

// CLASS-BASED COMPONENTS
    // what we have done so far is FUNCTIONAL components but doesn't work for everything
    import React from "react"

    import Joke from "./components/Joke"
    import jokesData from "./jokesData"
    // function App() {
    //     return (
    //         <div>
    //          <h1>Code goes here</h1>
    //         </div>
    //     )
    // }

    // making a class instead of a function App
    // using prototype sys in Javascript
    // setting a prototype with React.component
    // getting a bunch of goodies from React.component already written for us

    // whenever use props: have to reference as this.props...
    class App extends React.Component{
    // your own method
    yourMethodHere(){
        // can put any display logic want
    }
    // every class based component needs at least one method: render method
    // render returns what have in functional component
    // anytime have any kind of display logic - prefer do in render method BEFORE return
        // anything that determines what will show up on page/what style of that element will be (inside render before return)
        // can also put this in another method (a class method) (e.x. yourMethodHere)
    

        render(){
        // calling yourMethodHere
        // this.yourMethodHere;
        // if yourMethodHere returns something
        // const style = this.yourMethodHere();

        const date = new Date();
        return (
        <div>
            <h1>Code goes here</h1>
        </div>
        )
    }
    }

    export default App


// CLASS-BASED COMPONENTS PRACTICE
    import React from "react"
    import ReactDOM from "react-dom"

    // #1

    class App extends React.Component{
        render(){
            return (
                <div>
                    <Header />
                    <Greeting />
                </div>
            )
        }
    }
    // function App() {
    //     return (
    //         <div>
    //             <Header />
    //             <Greeting />
    //         </div>
    //     )
    // }

    // #2
    class Header extends React.Component{
        render(){
            return (
            <header>
                <p>Welcome, username!</p>
            </header>
        )
        }
    }

    // function Header(props) {
    //     return (
    //         <header>
    //             <p>Welcome, {props.username}!</p>
    //         </header>
    //     )
    // }

    // #3
    class Greeting extends React.Component{
        render(){
            const date = new Date()
            const hours = date.getHours()
            let timeOfDay
            
            if (hours < 12) {
                timeOfDay = "morning"
            } else if (hours >= 12 && hours < 17) {
                timeOfDay = "afternoon"
            } else {
                timeOfDay = "night"
            }
            return (
                <h1>Good {timeOfDay} to you, sir or madam!</h1>
            )
        }
    }
    // function Greeting() {
    //     const date = new Date()
    //     const hours = date.getHours()
    //     let timeOfDay
        
    //     if (hours < 12) {
    //         timeOfDay = "morning"
    //     } else if (hours >= 12 && hours < 17) {
    //         timeOfDay = "afternoon"
    //     } else {
    //         timeOfDay = "night"
    //     }
    //     return (
    //         <h1>Good {timeOfDay} to you, sir or madam!</h1>
    //     )
    // }

    ReactDOM.render(<App />, document.getElementById("root"))

//REACT STATE
    // the data that a component maintains
        // it can change its value- distinct feature
        // way to maintain/change data
    // props can't be changed by component receiving its prop
        // props is immutable/unchangable
        // can't say this.props.something = "some new value" inside component

    // have to introduce STATE in a CLASS-BASED component
    import React from "react"

    class App extends React.Component {
      // add constructor method
      // constructor is a specific method that's built into Javascript that initializes parts of this class 
      constructor() {
          // always first in constructor method- call super
            // super goes to parent/super class and grabs goodies down so our App class can use them
            super()
          // state will always be an object
            // can access state anywhere else in component by referencing this.state
            // data my component will have when it's first initialized
            // special thing about state is you can change it later one
            // we can pass state from this component to child component (through props)
            this.state = {
              answer: "Yes"
            }
        }
        
        render() {
            return (
                <div>
                    <h1>Is state important to know? {this.state.answer}</h1>
                    <ChildComponent answer = {this.state.answer} />
                </div>
            )
        }
    }
    
    export default App

// REACT STATE PRACTICE
    import React from "react"

    // Challenge:
    // Given an incomplete class-based component without a constructor, 
    // add a constructor and initialize state to fix the broken component.

    class App extends React.Component {
        constructor(){
            super();
            this.state = {
                name: "Julia",
                age: 20
            };
        }
        render(){
            return (
                <div>
                    <h1>{this.state.name}</h1>
                    <h3>{this.state.age} years old</h3>
                </div>
            ) 
        }
        
    }

    export default App

// REACT STATE PRACTICE 2
import React from "react"

    // Given a stateless functional component, add state to it
    // state should have a property called `isLoggedIn` which is a boolean
    // (true if logged in, false if not)
    // Then, give your best shot at rendering the word "in" if the user is logged in
    // or "out" if the user is logged out.

    class App extends React.Component{
        constructor(){
            super();
            this.state = {
                isLoggedIn: false
            }
        }
        render(){
            let inorout;
            if(this.state.isLoggedIn === true){
                inorout = "in";
            }
            else{
                inorout = "out";
            }
            return (
                <div>
                    <h1>You are currently logged {inorout}</h1>
                </div>
            )
        } 
        
    }

    export default App

// REACT TODO APP: PHASE 4
    /*
    In the previous iteration of this todo list app, we pulled in todos data from a JSON file and mapped over it to display the todo items.

    Eventually we'll want to be able to modify the data, which will only happen if we've "loaded" the data in to the component's state

    Challenge: Change the <App /> component into a stateful class component and load the imported `todosData` into state.
    */

    import React from "react"
    import TodoItem from "./TodoItem"
    import todosData from "./todosData"

    class App extends React.Component {
        constructor() {
            super()
            this.state = {
                todos: todosData
            }
        }
        
        render() {
            const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
            
            return (
                <div className="todo-list">
                    {todoItems}
                </div>
            )    
        }
    }

    export default App
// HANDLING EVENTS IN REACT
// allows user to interact with your webpage and do something specific when e.x. click/hover happens
// HTML: onclick: execute function when clicked

// React
    // all event handlers will be Javascript version (which has camelCase)
        // onClick and onMouseOver instead of onclick etc
    // instead of passing executed function as string, pass it in directly with {}
        // onClick ={...function...}
        
        // could write function inside {}
            // example
            import React from "react"


            function App() {
                return (
                    <div>
                        <img src="https://www.fillmurray.com/200/100"/>
                        <br />
                        <br />
                        <button onClick={() => console.log("I was clicked!")}>Click me</button>
                    </div>
                )
            }

            export default App

        // could write own funciton outside of it (like normal)
            import React from "react"

            function handleClick() {
                console.log("I was clicked")
            }
            
            function App() {
                return (
                    <div>
                        <img src="https://www.fillmurray.com/200/100"/>
                        <br />
                        <br />
                        <button onClick={handleClick}>Click me</button>
                    </div>
                )
            }
            
            export default App
//  https://reactjs.org/docs/events.html#supported-events

// REACT TODO APP: PHASE 5
    /**
     * Challenge: Get rid of our warning about not having an onChange on our input. For now, the function that runs onChange can simply console.log something.
     */

    import React from "react"

    function TodoItem(props) {
        return (
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={props.item.completed} 
                    onChange={() => console.log("Changed!")}
                />
                <p>{props.item.text}</p>
            </div>
        )
    }

    export default TodoItem


// REACT SETSTATE: CHANGING THE STATE
    // without changing it, not better than hardcoding it
    // never want to modify original state directly (e.x. this.state.count=1 or this.state.count++)
    // state is like your clothing
        // when change clothing, don't modify clothing
        // instead completely replace clothing
            // what will do with state
    
    // setState(): use whenever want to change state
        // anytime create class method that you want to use setState on
            // need to bind this method to your own class (App)
            // bind inside constructor
            // makes sure that methodname is bound to context of this as it exists within this class
            this.methodname = this.methodname.bind(this);
        // can pass is new version of state (just an object (?))
            // if don't care about previous version of state was, passing in object = nice, simple way
            // example
                import React from "react"

                class App extends React.Component {
                    constructor() {
                        super()
                        this.state = {
                            count: 0
                        }
                        this.handleClick = this.handleClick.bind(this)
                    }
                    
                    handleClick() {
                        this.setState({ count: 1 })
                    }
                    
                    render() {
                        return (
                            <div>
                                <h1>{this.state.count}</h1>
                                <button onClick={this.handleClick}>Change!</button>
                            </div>
                        )
                    }
                }
                
                export default App
        
        
        //can pass in function to setState 
            // function recieves previous version of state 
            // can't just use this.state to access previous state
            // function should return NEW version of state 
            // benefit: have access to previous state
            // prevState refers to old version of state

            // example
                import React from "react"

                class App extends React.Component {
                    constructor() {
                        super()
                        this.state = {
                            count: 0
                        }
                        this.handleClick = this.handleClick.bind(this)
                    }
                    
                    handleClick() {
                        this.setState(prevState => {
                            return {
                                count: prevState.count + 1
                            }
                        })
                    }
                    
                    render() {
                        return (
                            <div>
                                <h1>{this.state.count}</h1>
                                <button onClick={this.handleClick}>Change!</button>
                            </div>
                        )
                    }
                }
                
                export default App

    // can apply this.state.... to component and will take new version automatically (?)

// TODO APP: PHASE 6 (couldn't figure out on my own)

    // in TodoItem.js 
        import React from "react"

        function TodoItem(props) {
            return (
                <div className="todo-item">
                    <input 
                        type="checkbox" 
                        checked={props.item.completed} 
                        onChange={() => props.handleChange(props.item.id)}
                    />
                    <p>{props.item.text}</p>
                </div>
            )
        }
        
        export default TodoItem

    // in App.js
        /**
         * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
         * This challenge is a little more involved than some of the past ones. Check the comments 
         * in the code for some help on accomplishing this one
         * 
         * Challenge: 
         * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
         *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
         * 2. Pass the method down to the TodoItem component
         * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
         */

        import React from "react"
        import TodoItem from "./TodoItem"
        import todosData from "./todosData"

        class App extends React.Component {
            constructor() {
                super()
                this.state = {
                    todos: todosData
                }
                this.handleChange = this.handleChange.bind(this)
            }
            
            handleChange(id) {
                this.setState(prevState => {
                    const updatedTodos = prevState.todos.map(todo => {
                        if (todo.id === id) {
                            // can't do todo.completed = !todo.completed because would directly modify state
                                
                            return {
                                // instead, use spread notation
                                    // give me all of the elements from todo 
                                    ...todo,
                                // manually override completed property
                                // now opposite
                                completed: !todo.completed
                            }
                            

                            
                            
                                /
                                
                        }
                        return todo
                    })
                    return {
                        todos: updatedTodos
                    }
                })
            }
            
            render() {
                const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
                
                return (
                    <div className="todo-list">
                        {todoItems}
                    </div>
                )    
            }
        }

        export default App

// REACT LIFECYCLE METHODS PART 1
    // every single component we create is actually going to go through series of phases/milestones (like human being)
    // every component goes through events when rendered/update

    // website that describes lifestyle methods well before version ...
        // https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
    // after version ...
        // https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
    
    
    import React, {Component} from "react"

    // https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
    // https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

    class TodoList extends Component {
        constructor() {
            super()
            this.state = {}
        }

        // componentDidMount()
        // lifecycle method that is like saying you were just born
            // component did just mount to the screen
        // first time component shows up , React will run componentDidMount() method
            // this method only runs once while component is showing up on screen 
        // rerender (that changes component is displayed) doesn't rerun componentDidMount()
            // because component doesn't actaully unmount and remoutn
        // most common: API call (when need to get data from some kind of external source)

        // get list of todos from server/database before accurately display todolist
        componentDidMount() {
            // GET the data I need to correctly display
        }
        

        // componentWillReceiveProps()
        // like when someone gives you a gift
        // this component can be receiving props from parent component
        // will run every time every time this compoment receives prop
        // will not run only first time component is mounted 
        // but runs every time parent component decides to hand props to child component
            // if parent decides to change the props that it's passing down to this component
                // , e.x. what can do inside componentReceivesProp() is to check to see if new incoming props are even diff from existing props
                    //  often if not diff, do nothing
                        // if are diff, change some way (?)
        
        // receives parameter nextProps (even tho could be any name): componentWillReceiveProps(nextProps)
            // if props doesn't equal existing props, do something

        // one of lifecycle methods that is depricated in 16.3
            // now UNSAFE_componentWillRecieveProps
        // won't be part of React anymore
        componentWillReceiveProps(nextProps) {
            if (nextProps.whatever !== this.props.whatever) {
                // do something important here
            }
        }
        
        // shouldComponentUpdate()
        // analogy: making decision if should change clothes or not
        // behind the scenes, if React has any question about if should rerender, always will rerender without logic to your application's needs
            // will rerender even if nothing about that component has changed
        
        // gives us opp to optimize app
        // implement some logic here to determine if should even update
        // receive nextProps, nextState 
        shouldComponentUpdate(nextProps, nextState) {
            // return true if want it to update
            // return false if not
        }
        

        // componentWillUnmount()
        // component will eventually unmount from screen
        // main use: do cleanup/teardown of anything that you've set up that can lead to clutter in DOM or application
        // most common use cases: if, in componentDidMount, set up eventlistener (e.x. run code everytime someone scrolls on screen), can remove event listener
        componentWillUnmount() {
            // teardown or cleanup your code before your component disappears
            // (E.g. remove event listeners)
        }


        // render method 
        // like getting dressed for the day
        // its job is to determine what gets rendered to screen
        // can be called many times
        // anytime React determines that something changes that would affect how component would display, render runs again
            // for example, changing state or props
        render() {
            return (
                <div>
                    Code goes here
                </div>
            )
        }
    }

    export default App


// REACT LIFECYCLE METHODS PART 2
    // methods that are going to be deprecated
        // componentWillMount
        // componentWillReceiveProps
        // componentWillUpdate

    // new lifestyle methods
        // getDerivedStateFromProps(props,state)
           
        //getSnapshotBeforeUpdate()
            
    // prob will stick with componentDidMount and render

    import React, {Component} from "react"

    // https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
    // https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

    class TodoList extends Component {
        constructor() {
            super()
            this.state = {}
        }


        // getDerivedStateFromProps(props,state)
                // static method
                // gets props and state
                // prob don't need
                // rare case when component needs to take incoming props and set its own state based on those props
        static getDerivedStateFromProps(props, state) {
            // return the new, updated state based upon the props
            // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
            // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
        }
        
        //getSnapshotBeforeUpdate()
                // when say backup, save some data of some sort- prob object with multiple points of data
                // not common one you will use
        getSnapshotBeforeUpdate() {
            // create a backup of the current way things are
            // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
        }
        
        // componentWillMount() {
            
        // }
        
        componentDidMount() {
            // GET the data I need to correctly display
        }
        
        // componentWillReceiveProps(nextProps) {
        //     if (nextProps.whatever !== this.props.whatever) {
        //         // do something important here
        //     }
        // }
        
        shouldComponentUpdate(nextProps, nextState) {
            // return true if want it to update
            // return false if not
        }
        
        // componentWillUpdate() {
            
        // }
        
        componentWillUnmount() {
            // teardown or cleanup your code before your component disappears
            // (E.g. remove event listeners)
        }
        
        render() {
            return (
                <div>
                    Code goes here
                </div>
            )
        }
    }

    export default App


// LIFECYCLE METHODS PART 3- componentDidUpdate


    // first time renders, calls componentDidMount
    // afterwards, when renders, calls componentDidUpdate
    // every time click button, number changes color
    // https://scrimba.com/g/greacthooks

        import React from "react"
        import randomcolor from "randomcolor";

        class App extends React.Component {
            constructor() {
                super()
                this.state = {
                    count: 0,
                    color: ""
                }
                this.increment = this.increment.bind(this)
            }
            
            increment() {
                this.setState(prevState => {
                    return {
                        count: prevState.count + 1
                    }
                })
            }
            
           
            // tech don't need- can just change color in increment
            // but in a more complicated situation, could be replicating logic- e.x. if included a decrement method
            componentDidUpdate(prevProps, prevState) {
                if(prevState.count !== this.state.count){
                    const newColor = randomcolor()
               
                    // only want to set state if number changes (not when color changes)
                    this.setState({color: newColor})
                }
                

            }
            
            // rerender happens anytime change state
            // with this.setState({color: newColor}) in componentDidUpdate EVERY TIME
            // increment -> render -> componentDidUpdate (because changed state) -> rerender -> etc.
            
            render() {
                return (
                    <div>
                        <h1 style ={{color:this.state.color}}>{this.state.count}</h1>
                        <button onClick={this.increment}>
                            Increment!
                        </button>
                    </div>
                )
            }
        }

        export default App

// REACT CONDITIONAL RENDER
    // not ONLY way can be done
    // other ways to use it than shown here

    // conditional rendering: going to load something on screen IF a condition is true
    
    // in App.js
        import React, {Component} from "react"
        import Conditional from "./Conditional"
        
        class App extends Component {
            constructor() {
                super()
                this.state = {
                    isLoading: true
                }
            }

            // componentDidMount is a chance for us to run some code right after component mounts on screen for very first time
            // faking an API call
            // set timeout that waits 1.5 seconds before running code that's in function I provided in which loading is false
            // fake way to pretend calling API that takes 1.5 sec to get data and then no longer loading because got data
            componentDidMount() {
                setTimeout(() => {
                    this.setState({
                        isLoading: false
                    })
                }, 1500)
            }
            
            render() {
                return (
                    <div>
                        {/* once setState changes to false- Conditional receives same prop with new value -> rerender -> Conditional component rerenders  */}
                        <Conditional isLoading={this.state.isLoading}/>
                    </div>
                )
            }
        }
        
        export default App
    
    // in Conditional.js
        // to test if setState working
        import React from "react"

        function Conditional(props) {
            // immediately true and then 1.5 sec later false because after 1.5 sec state changes to false -> rerender
            console.log(props.isLoading)
            return (
                <h1>Temp</h1>
            )
        }

        export default Conditional

        // actual conditional rendering
            // at first says: Loading... -> then some cool stuff...
            import React from "react"

            function Conditional(props) {
                if(props.isLoading === true) {
                    return (
                        <h1>Loading...</h1>
                    )
                } else {  //goes into here when rerenders
                    return (
                        <h1>Some cool stuff about conditional rendering</h1>
                    )
                }
                
            }

            export default Conditional

            // turnary operator (common in conditional rendering)
                // condition ? statement if true : statement if false
                // is it true? if so, _ : if not, _
                import React from "react"

                function Conditional(props) {
                    return (
                        props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>
                    )
                    
                }

                export default Conditional

                // OR MAKE IT MORE LIKE JSX- with div
                    import React from "react"

                    function Conditional(props) {
                        return (
                            <div>
                                {props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
                            </div>
                        )
                        
                    }
                    
                    export default Conditional

    // should prob just put conditional rendering in App.js because decides change in state (?)
        // example in render method where if it isn't loading go to Conditional and do what's trying to be executed
        render() {
            return (
                <div>
                    {this.state.isLoading ?
                    <h1>Loading...</h1> :
                    <Conditional />}
                </div>
            )
        }

// REACT CONDITIONAL RENDER PART 2
    // &&
        // determines if left is true -> just returns things on right
        // if left is false, just returns left (false)
        
        // can be a way to conditionally 
            // render something if a condition is true
            // or render nothing if false

    // can simplify 
        this.state.unreadMessages.length > 0 ? 
        <h2>You have {this.state.unreadMessages.length} unread messages!</h2> :
        null

        // to be
        this.state.unreadMessages.length > 0 && 
         <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
            // if first part is true, then renders second part
            // if not, renders nothing (doesn't go to right side)

    // && not absolutely necessary- can just use ternary operator



// REACT CONDITIONAL RENDER PRACTICE
        // in App.js
    import React from "react"

    /*
    Challenge:

    Given a stateless functional component:
    1. Follow the steps necessary to add state to it,
        // class-based component
        // constructor method
    2. Have state keep track of whether the user is logged in or not
        // isLoggedIn: Boolean (true or false)
    3. Add a button that logs the user in/out
        // event listener (onClick)
        a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
            // Conditional Rendering
    4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
        // Conditional Rendering
    */

    class App extends React.Component {
        constructor() {
            super()
            this.state = {
                isLoggedIn: false
            }
            this.handleClick = this.handleClick.bind(this)
        }
        
        handleClick() {
            this.setState(prevState => {
                return {
                    isLoggedIn: !prevState.isLoggedIn
                }
            })
        }
        
        render() {   
            let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
            let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
            return (
                <div>
                    <button onClick={this.handleClick}>{buttonText}</button>
                    <h1>{displayText}</h1>
                </div>
            )
        }
    }

    export default App


// FETCHING DATA FROM AN API WITH REACT
    // componentDidMount is like a Hook in our React component that allows us to run some kind of code immediately after the component first mounts to the DOM
        // one of most common uses is get data from somewhere so that your component can do what it's supposed to do

    // fetch: nice easy way to perform http requests so can get any kind of data need
        // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

    // API called the starwars API
        // cores-enabled
            // no issues with front-end application from getting it from their database
                // https://swapi.dev/
    
    
    //promises: https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

    // fetch = global function
    // fetch(urlgoingtobegettingdatafrom)

    // fetch -> then resolve promise with .then
    // .then will receive response
    // method .json which will turn it into a Javascript object for us
    // chain another .then that will receive the data that we want\
    // gets object with lots of property

    // need to save data by using its state (setState)

    // sometimes it takes a while to fetch the data -> so want some kind of loading message to let user know that data is on its way


    import React, {Component} from "react"

    // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
    // https://swapi.co/
    // https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

    class App extends Component {
        constructor() {
            super()
            this.state = {
                // one step to making loading message 
                loading: false, 
                // make object because data going to receive is object
                character: {}
            }
        }
        
        // fetch -> then resolve promise with .then
        // .then will receive response
        // method .json which will turn it into a Javascript object for us
        // chain another .then that will receive the data that we want\
        // gets object with lots of property
        componentDidMount() {
            this.setState({loading: true});
            fetch("https://swapi.co/api/people/1")
                .then(response => response.json())
                .then(data => {
                    // prints out data object
                        // console.log(data) 
                    // save data 
                        this.setState({
                            loading: false,
                            character: data
                        })
                } )
        }
        
        render() {
            const text = this.state.loading ? "loading..." : this.state.character.name
            return (
                <div>
                    <p>{text}</p>
                </div>
            )
        }
    }

    export default App

// REACT FORMS PART 1   
    // React Docs about Forms:
        // https://reactjs.org/docs/forms.html

    // vanilla Javascript (before)
        // create form in HTML
        // once user submits form, go through all of form inputs and gather data
        // (when submit, gather info to all inputs)

    // React
        // instead of waiting until end right before submitting to gather all information
            // constantly keep track of information/state

            // means on every keystroke update state
                // so have most updated version of what user is typing into form

        // render form with single input
        // want to watch for every single change to this input box
            // use onChange
            // every time input changes in input box, run a function (handleChange)
            // goal: every time someone types in input -> update state
                // want to grab current value of input box every time it changes
                // want to update state to reflect current value

                // to update: this.set
                // need to be current value of input box

        import React, {Component} from "react"

        class App extends Component {
            constructor() {
                super()
                this.state = {
                    firstName: "",
                    lastName: ""
                }
                this.handleChange = this.handleChange.bind(this);
                // anytime have class method that calls setState -> need to bind in constructor 
            }
            // when events fire, pass a predetermined parameter into function
                // will always pass information about event that fired
                // event has important information
                    // can get access to input box
            
            // event has a bunch of info about input that is firing this event
                // initially grabbed value of input box with event.target.value
                // but could grab any part of the input's object that I want (not only value but can also grab name)
            
            // can be used with anything with text type 
            // need to make sure give input name that perfectly matches property
            handleChange(event) {
                // to update: this.set
                // need to be current value of input box
                this.setState({
                    // need to be current value of input box
                    
                    // can get access to input box
                    // event.target: target = element in which the event was fired (input)
                    // .value = value of input box
                    // changes state so firstName is updated to reflect current value of input 
                        // firstName: event.target.value

                    // can't say event.target.name: ... because it's a syntax error
                    // need to wrap in square brackets instead
                        // this works because name property is a string
                        // and if describing string property name inside object can wrap in []
                        [event.target.name]: event.target.name
                })
            }
            
            render() {
                return (
                    <form>
                         {/* render form with single input */}
                         {/*  want to watch for every single change to this input box
            // use onChange
            // every time input changes in input box, run a function (handleChange) */}
                        
                        {/* won't work with just handleChange because will overwrite the other every time */}
                            {/* always updating firstName */}
                        {/* could write separate functions for handling firstName and lastName separately but can become a lot when dealing with lots of inputs */}
                            {/* <input type="text" placeholder="First Name" onChange={this.handleChange} />
                            <input type="text" placeholder="Last Name" onChange={this.handleChange} /> */}
                        
                        {/* give name property to our inputs that perfectly matches what our state is*/}
                        <h1>{this.state.firstName} {this.state.lastName}</h1>
                    </form>
                )
            }
        }
        
        export default App
        

    // controlled forms
        // want what's displayed inside of our form to perfectly match with what is in our state
        // in previous example, state is reactive
            // every time input in box changes -> state updates according to what's in input box
        // with controlled form, state actually directs what is inside/showing up inside input box
            // jives with idea that state should be single source of truth

        // just need to add value property to input which holds what state property input box is holding

        // essentially same as before but now what is showing up in input box is because of what current version of state is
            // forcing value (or what shows up in input box) to exactly match what state is 
        import React, {Component} from "react"

        class App extends Component {
            constructor() {
                super()
                this.state = {
                    firstName: "",
                    lastName: ""
                }
                this.handleChange = this.handleChange.bind(this)
            }
            
            handleChange(event) {
                this.setState({
                    [event.target.name]: event.target.value
                })
            }
            
            render() {
                return (
                    <form>
                        {/* // just need to add value property to input which holds what state property input box is holding */}
                        <input 
                            type="text" 
                            value={this.state.firstName} 
                            name="firstName" 
                            placeholder="First Name" 
                            onChange={this.handleChange} 
                        />
                        <br />
                        <input 
                            type="text" 
                            value={this.state.lastName} 
                            name="lastName" 
                            placeholder="Last Name" 
                            onChange={this.handleChange} 
                        />
                        <h1>{this.state.firstName} {this.state.lastName}</h1>
                    </form>
                )
            }
        }

        export default App

    // really good idea: instead of directly accessing names/properties by going into event.target object
        // pull those values out of target before set state
        // related to synthetic events
        
        // make copy of name/value before run setState
        import React, {Component} from "react"

        class App extends Component {
            constructor() {
                super()
                this.state = {
                    firstName: "",
                    lastName: ""
                }
                this.handleChange = this.handleChange.bind(this)
            }
            
            handleChange(event) {
                const {name, value} = event.target
                this.setState({
                    [name]: value
                })
            }
            
            render() {
                return (
                    <form>
                        <input 
                            type="text" 
                            value={this.state.firstName} 
                            name="firstName" 
                            placeholder="First Name" 
                            onChange={this.handleChange} 
                        />
                        <br />
                        <input 
                            type="text" 
                            value={this.state.lastName} 
                            name="lastName" 
                            placeholder="Last Name" 
                            onChange={this.handleChange} 
                        />
                        <h1>{this.state.firstName} {this.state.lastName}</h1>
                    </form>
                )
            }
        }

        export default App

// REACT FORM PART 2
    // anything text-based: use things from last lesson
    // more complicated with other types of inputs
    

    // <textarea /> element
        // in plain HTML
            // NOT self-closing tag like input element
            <textarea></textarea>
            // essentially like input box but bit taller and user has ability to make bigger/smaller
            // can change default weight/height with properties rows/columns
            // if want to prepopulate text in it, can put it in between tags

        // in React 
            // wanted to make much more similar to input 
            // self-closing element
                // can now use value property (like did with input)
                // nice for consistency
                // makes it easy to update value inside textera by updatign state
                <textarea value={"Some default value"} onChange ={this.handleChange}/>

    // <input type="checkbox" />
        // checkbox
        // one of major differences is don't use value
        // either checked or not checked -> include checked property
            // checked property determined by boolean
            // {/* with checkbox, has checked property not keeping track of value that is being written in input box */}
                // checked property either outputs true/false
                // therefore, can't use old handleChange funciton
                // need to check if the element that is being interacted with in the form is checkbox or not

    // radio buttons = combination of input text and checkbox
        // use both value and checked property
        // gave same names to radio button -> tells DOM to make sure that you can only choose one of these radio buttons
            // can't change with just this

    // excellent library: Formik 
        // takes pain out of dealing with forms

    // select box
        // can use value property to see which of the select elements is chosen and to easily update state
        <select value={}> 
            <option></option>
        </select>

    // can reuse handleChange for everything (just have to make sure have turnary with checkbox type)

    /* good idea to have button in form*/
    /* in HTML5, button found in form acts as old input type submit
        <input type="submit" value=/> */
    /* will onfire submit*/
        // when want to do something when finished with form
            // 1. could add onClick on button
            // 2. could act on form itself: <form onSubmit={this.handleSubmit}>
                // can easily write another method that can like submit form to an API

    import React, {Component} from "react"

    class App extends Component {
        constructor() {
            super()
            this.state = {
                firstName: "",
                lastName: "",
                isFriendly: true, 
                gender: "",
                favColor: "blue"
            }
            this.handleChange = this.handleChange.bind(this)
        }
        
        // checked property either outputs true/false
        // therefore, can't use old handleChange funciton
        // need to check if the element that is being interacted with in the form is checkbox or not
        // type=checkbox: type property can be pulled from event.target 
        handleChange(event) {
            // checkbox doesn't have value but checked
            const {name, value, type, checked} = event.target
            // turnary 
            type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
        }
        
        render() {
            return (
                <form>
                    <input 
                        type="text" 
                        value={this.state.firstName} 
                        name="firstName" 
                        placeholder="First Name" 
                        onChange={this.handleChange} 
                    />
                    <br />
                    <input 
                        type="text" 
                        value={this.state.lastName} 
                        name="lastName" 
                        placeholder="Last Name" 
                        onChange={this.handleChange} 
                    />
                    
                    {
                        /**
                         * Other useful form elements:
                         * 
                         *  <textarea /> element
                         *  <input type="checkbox" />
                         *  <input type="radio" />
                         *  <select> and <option> elements
                         */
                    }
                    
                    <textarea 
                        value={"Some default value"}
                        onChange={this.handleChange}
                    />
                        {/* if just set here, can't uncheck or check because this.state.isFriendly is always true */}
                    {/* read-only because haven't taught how to make changes/how to change state */}
                        {/* <input 
                            type="checkbox" 
                            checked={this.state.isFriendly}
                        /> */}

                    {/* /* fixed version */}
                    <br />
                    <label>
                        {/* with checkbox, has checked property not keeping track of value that is being written in input box */}
                        {/* checked property either outputs true/false */}
                        <input 
                            type="checkbox" 
                            // like other inputs, give name property that is the same as the thing in state
                            name="isFriendly"
                            checked={this.state.isFriendly}
                            /* nice if can use same function handleChange on checkbox instead of creating new function*/
                            onChange={this.handleChange}
                        /> Is friendly?
                    </label>
                    
                    <br />
                    
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="male"
                             /* can't change them with just this
                            if make checkbox unchecked, can't select anything
                            if checkbox checked, chooses one of these 2 to be checked 
                                because says it's checked if isFriendly is true
                            */
                            // can't say it's checked if some value in state is true because radio button doesn't have to maintain true/false values (what checkbox is for)
                                // checked={this.state.isFriendly} (wrong)
                            checked = {this.state.gender ==="male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            //wrong: checked={this.state.isFriendly}
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>
                    {/* value of this whole element will be whichever option we choose*/}
                    <br />
                    <label> Favorite Color:</label>
                    <select 
                        value={this.state.favColor}
                        // watch for change on select box
                        onChange={this.handleChange}
                        // give name like did for input boxes: make sure matches name of state property
                        name="favColor"
                    >
                        {/* value under the hood */}
                        {/* text is what displayed in select box */}
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                    </select>
                    
                    
                    
                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                    <h2> You are a {this.state.gender}</h2>
                    <h2>Your favorite color is {this.state.favColor}</h2>
                    {/* good idea to have button in form*/}
                    {/* in HTML5, button found in form acts as old input type submit
                         <input type="submit" value=/> */}
                     {/* will onfire submit*/} 
                    <button> Submit</button>
                </form>
            )
        }
    }
    
    export default App


// REACT FORM PRACTICE (my version)

        /**
     * Challenge: Wire up the partially-finished travel form so that it works!
     * Remember to use the concept of controlled forms
     * https://reactjs.org/docs/forms.html
     * 
     * All information should be populating the text below the form in real-time
     * as you're filling it out
     * 
     * This exercise is adapted from the V School curriculum on vanilla JS forms:
     * https://coursework.vschool.io/travel-form/
     * 
     * All of our challenges and learning resources are open for the public
     * to play around with and learn from at https://coursework.vschool.io
     */

    // First name (text input)
    // Last name (text input)
    // Age (number input)
    // Gender (radio buttons with 2 or more options)
    // Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
    // Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)

    class App extends Component {
        constructor() {
            super()
            this.state = {
                firstName: "",
                lastName: "",
                age: "",
                gender: "",
                destination: "",
                isVegetarian: false,
                isKosher: false,
                isLactoseFree: false
            }
            this.handleChange = this.handleChange.bind(this);
        }
        
        handleChange(event){
            const {name, value, type, checked} = event.target;
            type ==="checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
        }
        
        render() {
            return (
                <main>
                    <form>
                        <input 
                            type="text" 
                            value={this.state.firstName}
                            name="firstName" 
                            placeholder="First Name"
                            onChange ={this.handleChange}
                            />
                            <br />
                        <input 
                            type="text" 
                            value={this.state.lastName}
                            name="lastName" 
                            placeholder="Last Name"
                            onChange ={this.handleChange}
                            />
                        <br />
                        <input 
                            type="number" 
                            value={this.state.age}
                            name="age" 
                            placeholder="Age"
                            onChange ={this.handleChange}
                            />
                        <br />                    
                            <input
                                type ="radio"
                                name="gender"
                                value="male"
                                checked={this.state.gender === "male"}
                                onChange={this.handleChange}
                                />
                                Male
                            <input
                                type ="radio"
                                name="gender"
                                value="female"
                                checked={this.state.gender === "female"}
                                onChange={this.handleChange}
                                />
                                Female
                        <br />
                        <label>Destination:</label>
                        <select
                            value={this.state.destination}
                            onChange = {this.handleChange}
                            name="destination"
                            >
                            <option value="New York City">New York City</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="Detroit">Detroit</option>
                        </select>
                        <br />
                        <label>Dietary Restrictions</label>
                        <br />
                        <input 
                            type="checkbox" 
                            name="isVegetarian"
                            checked={this.state.isVegetarian}
                            onChange = {this.handleChange}
                        /> vegetarian
                        <br />
                        <input 
                            type="checkbox" 
                            name="isKosher"
                            checked={this.state.isKosher}
                            onChange={this.handleChange}
                        /> kosher
                        <br />
                        <input 
                            type="checkbox" 
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.isLactoseFree}
                        /> lactose-free
                        <br />
                        
                        <button>Submit</button>
                    </form>
                    <hr />
                    <h2>Entered information:</h2>
                    <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                    <p>Your age: {this.state.age}</p>
                    <p>Your gender: {this.state.gender}</p>
                    <p>Your destination: {this.state.destination}</p>
                    <p>
                        Your dietary restrictions: 
                        {(this.state.isVegetarian ? " vegetarian" : null)}
                        {(this.state.isVegetarian && (this.state.isKosher || this.state.isLactoseFree)) ?"," : null}
                        {this.state.isKosher ? " kosher": null}
                        {(this.state.isKosher && this.state.isLactoseFree) ? "," : null}
                        {this.state.isLactoseFree ? " lactose-free" : null}
                    </p>
                </main>
            )
        }
    }

    export default App

// REACT CONTAINER AND COMPONENT ARCHITECTURE
    // was scrolling back and forth- a lot is display logic inside render()
    // nice if separated concerns between UI (rendering) logic and business logic (how rendering logic changes)

    // have a presentational and smart component etc in charge of business logic   
        // one component that maintains state (constructor) and have methods that update state (e.x. handleChange)
        // delegate all of the UI logic to diff component (presentational component)
            // presentational component: only in charge of receiving props and displaying things correctly

    // https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

    // before had everything in App component (did for simplicity)
    // but in reality want App to render my form and let form do all of the formy things(?)

    // new App.js (functional component)
        import React, {Component} from "react"
        import Form from "./FormContainer"
        
        function App() {
            return (
                <Form />
            )
        }
        
        export default App


    // create FormContainer.js (in FormContainer.js)
        // take all of rendering logic out
        // cares about business logic

        import React, {Component} from "react"
        import FormComponent from "./FormComponent"

        class Form extends Component {
            constructor() {
                super()
                this.state = {
                    firstName: "",
                    lastName: "",
                    age: "",
                    gender: "",
                    destination: "",
                    isVegan: false,
                    isKosher: false,
                    isLactoseFree: false
                }
                this.handleChange = this.handleChange.bind(this)
            }
            
            handleChange(event) {
                const {name, value, type, checked} = event.target
                type === "checkbox" ? 
                    this.setState({
                        [name]: checked
                    })
                :
                this.setState({
                    [name]: value
                }) 
            }
            
            render() {
                return(
                    // need to pass handleChange function into FormComponent
                    // pass in data object as this.state to avoid multiple lines of inputs
                    <FormComponent
                        handleChange={this.handleChange}
                        data={this.state}
                    />
                )
            }
        }

        export default Form

        

    // create FormComponent.js (in FormComponent.js)
        // functional component
        // will receive everything in props
        // cares about rendering logic

        import React from "react"

        function FormComponent(props) {
            return (
                <main>
                    <form>
                        <input 
                            name="firstName" 
                            value={props.data.firstName} 
                            onChange={props.handleChange} 
                            placeholder="First Name" 
                        />
                        <br />
                        
                        <input 
                            name="lastName" 
                            value={props.data.lastName}
                            onChange={props.handleChange} 
                            placeholder="Last Name" 
                        />
                        <br />
                        
                        <input 
                            name="age" 
                            value={props.data.age}
                            onChange={props.handleChange} 
                            placeholder="Age" 
                        />
                        <br />
                        
                        <label>
                            <input 
                                type="radio" 
                                name="gender"
                                value="male"
                                checked={props.data.gender === "male"}
                                onChange={props.handleChange}
                            /> Male
                        </label>
                        
                        <br />
                        
                        <label>
                            <input 
                                type="radio" 
                                name="gender"
                                value="female"
                                checked={props.data.gender === "female"}
                                onChange={props.handleChange}
                            /> Female
                        </label>
                        
                        <br />
                        
                        <select 
                            value={props.data.destination} 
                            name="destination" 
                            onChange={props.handleChange}
                        >
                            <option value="">-- Please Choose a destination --</option>
                            <option value="germany">Germany</option>
                            <option value="norway">Norway</option>
                            <option value="north pole">North Pole</option>
                            <option value="south pole">South Pole</option>
                        </select>
                        
                        <br />
                        
                        <label>
                            <input 
                                type="checkbox"
                                name="isVegan"
                                onChange={props.handleChange}
                                checked={props.data.isVegan}
                            /> Vegan?
                        </label>
                        <br />
                        
                        <label>
                            <input 
                                type="checkbox"
                                name="isKosher"
                                onChange={props.handleChange}
                                checked={props.data.isKosher}
                            /> Kosher?
                        </label>
                        <br />
                        
                        <label>
                            <input 
                                type="checkbox"
                                name="isLactoseFree"
                                onChange={props.handleChange}
                                checked={props.data.isLactoseFree}
                            /> Lactose Free?
                        </label>
                        <br />
                        
                        <button>Submit</button>
                    </form>
                    <hr />
                    <h2>Entered information:</h2>
                    <p>Your name: {props.data.firstName} {props.data.lastName}</p>
                    <p>Your age: {props.data.age}</p>
                    <p>Your gender: {props.data.gender}</p>
                    <p>Your destination: {props.data.destination}</p>
                    <p>Your dietary restrictions:</p>
                    
                    <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
                    <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
                    <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
                    
                </main>
            )
        }

        export default FormComponent

// REACT MEME GENERATOR CAPSTONE PROJECT
    
    // in MemeGenerator.js
        import React, {Component} from "react"

        class MemeGenerator extends Component {
            constructor() {
                super()
                this.state = {
                    topText: "",
                    bottomText: "",
                    randomImg: "http://i.imgflip.com/1bij.jpg",
                    allMemeImgs: []
                }
                this.handleChange = this.handleChange.bind(this)
                this.handleSubmit = this.handleSubmit.bind(this)
            }
            
            componentDidMount() {
                fetch("https://api.imgflip.com/get_memes")
                    .then(response => response.json())
                    .then(response => {
                        const {memes} = response.data
                        this.setState({ allMemeImgs: memes })
                    })
            }
            
            handleChange(event) {
                const {name, value} = event.target
                this.setState({ [name]: value })
            }
            
            handleSubmit(event) {
                event.preventDefault()
                const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
                const randMemeImg = this.state.allMemeImgs[randNum].url
                this.setState({ randomImg: randMemeImg })
            }
            
            render() {
                return (
                    <div>
                        <form className="meme-form" onSubmit={this.handleSubmit}>
                            <input 
                                type="text"
                                name="topText"
                                placeholder="Top Text"
                                value={this.state.topText}
                                onChange={this.handleChange}
                            /> 
                            <input 
                                type="text"
                                name="bottomText"
                                placeholder="Bottom Text"
                                value={this.state.bottomText}
                                onChange={this.handleChange}
                            /> 
                        
                            <button>Gen</button>
                        </form>
                        <div className="meme">
                            <img src={this.state.randomImg} alt="" />
                            <h2 className="top">{this.state.topText}</h2>
                            <h2 className="bottom">{this.state.bottomText}</h2>
                        </div>
                    </div>
                )
            }
        }
        
        export default MemeGenerator

// WRITING MODERN REACT APPS
    // methods can be written as arrow functions
        // no longer have to bind in constructor anymore
            // gives it a lexical this inside
            // uses this of its surrounding environment
        // example (with handleChange)
            handleChange = (event) => {
                const {name, value} = event.target
                this.setState({
                    [name]: value
                })
            }

    // can create class variables OUTSIDE OF CONSTRUCTOR
        // don't have to use constructor class
        // example
            class App extends Component{
                state = {
                    firstName: ""
                }
                ...etc...
            }

    // more advanced/brand new React features
        /**
         * Other modern/advanced React features/topics to learn:
         * 
         * Official React Context API - https://reactjs.org/docs/context.html
        //  *      easier to learn
         * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
         * render props - https://reactjs.org/docs/render-props.html
         * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
         * React Router - https://reacttraining.com/react-router/core/guides/philosophy
            can make single page applications
         * React Hooks - https://reactjs.org/docs/hooks-intro.html
            brand new additions to react
            including/modifying state in functional component
         * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
             brand new additions to react
         */

         //seems that they're encouraging functional components more than class-based components


// HOOKS INTRO
    // hooks rendering class components unneccesary
    // "hook into" state and lifestyle methods without using classes
            // can use functional components

    // no longer need class for state/lifestyle methods

    // only use functional components across board
    // improve readability and organizaiton of components

    
// USESTATE() PART 1

    // comes from "react" library
    // returns array 
        const value =useState(); //returns [null, f()]
        console.log(value)
    // whatever put inside useState will be initial value of my state
    // kind of like this.state
            // to mimic
                this.state = {
                            answer: "Yes"
                        }
            const value = useState("Yes")
            console.log(value); //outputs ["Yes", f()]
            
    // returns array because expected to use array destructuring when get object
        // object destructuring
            const person = {
                name: "Joe",
                age: 42
            }
            // already have name and age
            const { name, age } = person

        // array destructuring
            const [answer] = useState("Yes")
            console.log(answer); // outputs "Yes"
            // can refer to it later
            return (
                <div>
                    <h1>Is state important to know? {answer}</h1>
                </div>
            )
        
            // different from object destructuring because can call variable whatever you want (value, answer, etc.)

    // significantly less code with useState() hook
    
            
    // change class component using state -> functional component with useState() hook

    // class component
        import React from "react"

        class App extends React.Component {
            constructor() {
                super()
                this.state = {
                    answer: "Yes"
                }
            }
            
            render() {
                return (
                    <div>
                        <h1>Is state important to know? {this.state.answer}</h1>
                    </div>
                )
            }
        }
        
        export default App

    // functional component
        import React, {useState} from "react"

        function App() {
            // save useState() to a value
            const [answer] = useState("Yes")
            return (
                <div>
                    <h1>Is state important to know? {answer}</h1>
                </div>
            )
        }

// USESTATE() PART 2
    // how to change state (using hooks)

    // before needed class component to use this.setState

    // with hooks (useState()), recieve function- can call whenever and will change state
        // outline 
        const[property, setProperty] = useState(originalvalue);
    // can just provide new state when call setProperty
        // example
        <button onClick={() => setProperty(propertysnewvalue)}>Change!</button>
    // anonymous function calls setCount()
        <button onClick={() => setCount(1)}>Change!</button>

    // funciton can either receive replacement version of state or function that recieves previous version of state
        // with function passing in previous state, returns new state

        // example
            //confusing:  have arrow function that calls setCount which provides an arrow function that returns a value 
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Change!</button>

        // prefer to have function inside function 
            function increment(){
                setCount(prevCount => prevCount+1)
            }
            return (
                <div>
                    <h1>{count}</h1>
                    <button onClick={increment}>Change!</button>
                </div>
            )
    

    // WHOLE example
        function App() {
            const [count, setCount] = useState(0)
            
            function increment() {
                setCount(prevCount => prevCount + 1)
            }
            
            function decrement() {
                setCount(prevCount => prevCount - 1)
            }
            
            return (
                <div>
                    <h1>{count}</h1>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                    
                </div>
            )
        }

    // caveat with useState when putting object/array inside of useState
        // with class component, does smart combo of state
            //can hold values 
            //with setStatewhen want to change just 1 property, just provide object with just properties want to modify
                // and it will auto combine small object with full object 
                // and keep old values instead of completely replacing it

        // doesn't hold up with hook
            // can't simply provide simple object with just count and modifying that
            // instead, have to make sure that this function actually did combination of previous state and small change trying to make to state
            
            // with spread notation, not that difficult
            
    // instead of mashing in unrelated properties into object, better to use multiple variables
        // then don't have to use spread operator, etc.
    


// USEEFFECT() PART 1
    // main reason to use state/lifecycle
    // useState() covers state

    // useEffect() helps hooking in with lifecycle

    // significantly simpler way to think about lifecycle methods

    // considered replacement for 3 lifecycle methods
        // componentDidMount
        // componentDidUpdate
        // componentWillUnmount

    // helpful to think of it separate of these lifecycle methods

    // think of as a hook that allows us to produce side effects in our component
    
    // side effects
        //think of anything that reaches outside of component to do something
        // examples
            //  network request
            // manual DOM manipulation (to manipulate other parts of DOM)
            // event listeners or timeouts and intervals
        //  main job not specifically to managing state/displaying content to screen

    // earlier in the course, used componentDidUpdate to change color of number
    // now will do with useEffect()

    // useEffect also comes from React package
        import React, {useState, useEffect} from "react"
    
    // way can include a new effect to our component is to call useEffect()
    
    //since useEffect doesn't know what will add to our component, provides us with a callback function
    
    // set color to be a new randomcolor generated by randomcolor()
        // infinite loop with just setColor(randomcolor()) because constantly rerenders/reruns useEffect
            // before in componentDidUpdate, grabbed previous props/previous state and compared to see if it should run

        // useEffect has easier solution
            // first parameter is callback function
            // can pass in second parameter which is an array
                // in array, can specify what variable want to watch changes in
                    // if this variable changes, will run effect again
                // in this case, have to watch out for count variable
                    // because want color to change when color changes
                // can include multiple variables inside array 
                
                
    // (replacing componentDidUpdate)
        import React, {useState, useEffect} from "react"
        import randomcolor from "randomcolor"
        
        function App() {
            const [count, setCount] = useState(0)
            const [color, setColor] = useState("")
            
            function increment() {
                setCount(prevCount => prevCount + 1)
            }
            
            function decrement() {
                setCount(prevCount => prevCount - 1)
            }
            
            // in this case, have to watch out for count variable
            // because want color to change when color changes
            // when count changes, runs effect
            // look above for more detail
            useEffect(() => {
                setColor(randomcolor())
            }, [count])
            
            return (
                <div>
                    <h1 style={{color: color}}>{count}</h1>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                </div>
            )
        }
        
        export default App

    // very common to run code when component mounts for the first time
        // simple to do with useEffect()

        // if wanted to set color the very first time the code mounted, can leave empty array
        // empty array says to never run it again

        useEffect(() =>{
            // ...code....
        }, [])

        import React, {useState, useEffect} from "react"
        import randomcolor from "randomcolor"

        function App() {
            const [count, setCount] = useState(0)
            const [color, setColor] = useState("")
            
            function increment() {
                setCount(prevCount => prevCount + 1)
            }
            
            function decrement() {
                setCount(prevCount => prevCount - 1)
            }
            
            
            useEffect(() => {
                setColor(randomcolor())
            }, [])
            
            return (
                <div>
                    <h1 style={{color: color}}>{count}</h1>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                </div>
            )
        }

        export default App

    //can get same effect if just set property from beginning
        // so maybe this is a contrived example
        import React, {useState, useEffect} from "react"
        import randomcolor from "randomcolor"
        
        function App() {
            const [count, setCount] = useState(0)
            const [color, setColor] = useState(randomcolor())
            
            function increment() {
                setCount(prevCount => prevCount + 1)
            }
            
            function decrement() {
                setCount(prevCount => prevCount - 1)
            }
            
            // useEffect(() => {
            //     setColor(randomcolor())
            // }, [])
            
            return (
                <div>
                    <h1 style={{color: color}}>{count}</h1>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                </div>
            )
        }
        
        export default App


// USEEFFECT() PART 2
    // before, had in common that didn't have any cleanup (cleanup when unmount)

    // some side effects introduce don't automatically cleanup
        // examples
            // when create manual event listener
                document.addEventListener(...)
            // or when set up socket subscription that watches for changes in real time

        // can cause memory leaks or recurring jobs or some kind of residual problem
        
    
    // example with setInterval
        // way to run some code on a scheduled interval (ex. every second)
        // creates recurring job for Javascript to run
        // if create job in component and unmount that component, that job will continue to run in background
        // with class-based component, this is where we would use componentWillUnmount as a way to clean up our messes that won't be automatically cleaned up for this

        // can call SetInterval (because native Javascript function)
            // SetInterval(function, number of milliseconds between every time it calls that function)
        
            // every second runs console.log
                useEffect(() => {
                    setColor(randomcolor())
                    setInterval(() => {
                        console.log("Interval!")
                    }, 1000)
                }, [count])

            // make it just change number automatically- as if counting up
                // increment up every second

                // attempt 1: causes numbers to not go up by 1
                    // calling setCount but our effect will run every time count changes
                    // every time call useEffect, set up brand new interval 
                    // because looking for changes in count variable and this useEffect changes count variable 
                        // -> set up new interval each time

                    // went from 1->2 ==> 1-> 3 (because called setCount twice because there were two intervals running) => 3->7 => went up by 8, then 16, etc.

                    useEffect(() => {
                        setInterval(() => {
                            setCount(prevCount => prevCount + 1)
                        }, 1000)
                        
                        setColor(randomcolor())
                    }, [count])

                // can call useEffect MORE THAN ONCE
                    // if want something to specifically run only one time 
                        // put [] (empty array) to act like componentDidMount
                        // put setInterval there -> so interval can be set up once
                        // and setCount runs every second
                
                //attempt 2 based on logic right above (works)
                    useEffect(() => {
                        setInterval(() => {
                            // setCount(prevCount => prevCount + 1)
                        }, 1000)
                    }, [])
                    
                    useEffect(() => {
                        setColor(randomcolor())
                    }, [count])

    // this is how to set it up (not how to clean it up)

    // with setInterval, can end it
        // 1. grab id that is returned to us by setInterval
            // setInterval will return some kind of identifier that we can use to then use another function called clearInterval
            const intervalId = setInterval(() => {
                // setCount(prevCount => prevCount + 1)
            }, 1000)

        // 2. clearInterval- pass in intervalid to clear/end that interval
            // hard to show its working

    // can make useEffect act like componentDidUnmount by returning something from its body
            // return a function (the cleanup function)
        // when React calls useEffect and returns a function, it stores that function and right when component is about to unmount will run that function so can do cleanup
        
    

    // final product
        import React, {useState, useEffect} from "react"
        import randomcolor from "randomcolor"
        
        function App() {
            const [count, setCount] = useState(0)
            const [color, setColor] = useState("")
            
            useEffect(() => {
                const intervalId = setInterval(() => {
                    setCount(prevCount => prevCount + 1)
                }, 1000)
                return () => clearInterval(intervalId)
            }, [])
            
            useEffect(() => {
                setColor(randomcolor())
            }, [count])
            
            return (
                <div>
                    <h1 style={{color: color}}>{count}</h1>
                </div>
            )
        }
        
        export default App

                        
// REACT PROJECT IDEAS FOR PRACTICING
    // https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d

    // https://medium.freecodecamp.org/want-to-build-something-fun-heres-a-list-of-sample-web-app-ideas-b991bce0ed9a

    // https://medium.freecodecamp.org/summer-is-over-you-should-be-coding-heres-yet-another-list-of-exciting-ideas-to-build-a95d7704d36d