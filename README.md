# React Projects
One repo that contains a list of my React pet projects.

1. Basics (React 17+) - Exploring basic functional Components. Importing components, passing props, dynamic classNames. No look at state management yet, purely static components.

2. Reactive State Management - Local Component State Communication from Child to Parent. Two-Way Binding. Difference between individual vs. multiple set-state functions, conditional filtering of arrays and components. Basic intro to Hooks with "useState()" that returns an array of the value of its state and set state function.

3. Styling - In depth look at Global CSS, Styled Components and CSS Modules. Exploring Pros & Cons of each and how reactive JS utilizes these approaches.

4. Fragments, Portals, Refs - Rendering Sibling components with React.Fragment, Fragment or <></> as its shorthand. Passing components to any DOM node via Portals and ReactDOM library - useful for components like Modals that need to be decoupled from a HTML hierarchy. Using Refs to pass input values without listening to every keystroke - there are performance improvements to this method even if the elements become an uncontrolled component - because React is no longer managing that individual element, it is handled natively from the browser.

5. Effects - useEffect() is a lifecycle hook that listens to changes (whether you specify dependencies - state by iteself inside useEffect does not need to be its own dependency) and reacts to them however you specify to handle unique edge cases in your application. Best for single changes, not continuous changes like keystrokes into a text input element. For coninuous changes think of how you can utilize a debounce effect that fires after a pause in user interaction - and then run useEffect(). Never call useEffect() outside of a React component or within a nested function or conditional statement.

6. Reducers, Context API - useReducer() is a lifecycle hook that expands on useState() for state management kind of like a mini-Redux that dispatches actions with a payload and updates state. Useful for state that requires a hierarchy but useState() is the standard approach. Context API allows component communication with "global" state to any component regardless of Parent-Child status. In some cases it can be a simple alternative to state management than Redux callable through useContext() hook. However, Context can quickly become unsustainable for high performance state updates, overly nested in JSX or have a massive architecture that is difficult to reason about or debug. These are the clear cases to avoid Context API and choose Redux for state management. As before with useEffect(), never call useReducer() or useContext() outside of a React component or within a nested function or conditional statement.

7. Parent-Child Seletive Re-render Techniques - Learning how to optimize large apps with hooks React.memo(), useCallback() & useMemo(). Usually this technique is sought in response to large applications that need to increase their performance - which is a good problem to have. Essentially when a Parent component's state updates it will re-render its child components. Exploring these lifecycle hooks to selectively render child components, store functions or data internally.

8. Class Components - Exploring class lifecycle methods, translating Functional compoents to Classes and how to manage state in class components. Since React 16.8 functional hooks like useState(), useEffect(), useContext() and useReducer() have been the suggested way to build React applications - however, class components are still highly used in the React ecosystem and knowledge of how to use these are highly suggested.

9. HTTP & Asynchronous Requests - Basic example of showing content or handling edge cases in asynchronous behavior with functional hook useCallback() in React applications. Using free Star Wars API & fetch() browser method as an example.

10. Custom Hooks - Abstracting React hooks like "useState" and "useEffect" into a composable, reusable function. A custom hook is the only place to put these hooks as they cannot be stored in regular functions or conditional statements. Every custom hook must begin with the keyword "use" to be recognized by React.

11. Form Validation - Exploring various approaches to validating forms via Refs and State. Looking mainly at Blur events in the DOM to provide real-time feedback to users on a particular input element with a custom message.

12. Plain Redux, Class-component Redux, Toolkit Redux (NPM) and React-Redux (NPM) - Adds Redux to a simple state management application in various flavors of Redux. This library should be utilized in an immutable fashion where predictable input generates predictable output with no side effects (aka Pure Functions). To update state, Redux follows this pattern: Any Function -> Dispatch -> Action Type -> Reducer Function -> Return New State -> Subscribe To Changes -> Update UI. Preferred approach in my personal opinion is a combination between Redux Toolkit and React-Redux (no Class Redux!). Best example which incorporates this combination is /components/Counter.js and /store/index.js. Toolkit has libraries built-in which handle immutability so state can be updated on simple one-liners depending on the payload.

13. Async Redux - Common patterns how to handle state updates that rely on asynchronous requests. In short there are two main options in React "useEffect()" hook where you make an AJAX request inside "useEffect()" OR host the function as an Action Creator "thunk" in the respective slice file (React Toolkit).

14. React Router - Common routing patterns in React. Nested routes, logic in routes and main differences in React Router 5 vs. React Router 6.

15. Basic NextJS - Simple routing in NextJS applications. In all Next apps the first page fetched by a user is the server-side rendered DOM. Subsequent fetches are returned as a client-side React application. Next is better for SEO as the server rendered DOM is readable by search engines - the alternative being almost no semantic HTML elements or SEO keywords for an application using 100% React as its view, routing, etc. This example also has a file+folder approach to Routing instead of the custom approach via React Router.

16. Advanced NextJS - TBD.

17. ARCHIVED. FishInventory - REACT + FIREBASE - This app uses authentication to log into your real-time Firebase data using a GitHub account, in order to persist unique data. Application state is updated on a parent component, passes unidirectional data flow into its child components. You can adjust inventory in your shop - Firebase passes real-time data to the store and prevents customers from having SOLD OUT items in their cart. There is no Checkout or Payment steps included in this demonstration.

18. ARCHIVED. React 16 Basics - Exploring basic Class vs. Functional Components. Importing components, passing JS, dynamic classNames, Props & State, Styled Components, Error Boundaries, Two-Way-Binding in JSX. Basic intro to Hooks with "useState" and how Class components can become Functional with Hooks. First look at updating Immutable State.

19. ARCHIVED. Reduxstagram - REACT + REDUX - This app requires local storage and cookies to be enabled to persist unique data. State is managed through Redux, and follows Immutable data best practices. The instagram feed is some of my colorful graphic designs from 2011.