React key concetps

- React will manipluate the dom for us. We do not have to be worried about he dom.
- Builds websites like lego blocks
- React is desgined aroudn the concept of the reusable components.
- The whole app is made up of small components.
- Resuable contents.
- Components
 - Components are simple javascript functions that receives some sort of inputs or attributes returns the as html wrapped inside javascript. So based on the states, the components can be updated easly.
- Once a state of the component has changed, the funtion will update the component and look at the virtual DOM about which area of the DOM should be updated and that area gets updated.
- Unidirectional data flow.
- Apart from Angular, react only cares about he UI. React is like oven and angular is like a kitchen.

- Steps
 - Decide on Components
 - Decide the State and where it lives
 - What changes when state changes


 React Basics
 
 - What happens if we enter react eject :Eject. Ejecting will give us complete control over the config files as well as dependencies like Webpack/Babel/ESLint. Ejecting actually forks the Create React app config and moves that into our app. After running the eject command, we can see a 'config' folder created in our project which has files like webpack.

 - Instead of writing function return an html, write it at as a class with render function. Which enbles to change the state of the components.
 - Once the state changes, the render fucntion rerender based on the new state.

 - Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)

- componentDidMount is a lifecylce method. After all the elements of the page is rendered correctly, this method is called. After the markup is set on the page, this technique called by React itself to either fetch the data from An External API or perform some unique operations which need the JSX elements.
  - componentDidMount() method is the perfect place, where we can call the setState() method to change the state of our application and render() the updated data loaded JSX. For example, we are going to fetch any data from an API then API call should be placed in this lifecycle method, and then we get the response, we can call the setState() method and render the element with updated data.

- Just a quick note to remember to use the back tick  ` and NOT regular single or double quotes (' and ") for string interpolation on our image src. This is an easy mistake to make as you cannot interpolate the strings when using regular quotes, you must use back ticks!