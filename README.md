# React Projects
One repo that contains a list of my React pet projects.

1. Basics (React 17+) - Exploring basic functional Components. Importing components, passing props, dynamic classNames. No look at state management yet, purely static components.

2. Reactive State Management - Local Component State Communication from Child to Parent. Two-Way Binding. Difference between individual vs. multiple set-state functions, conditional filtering of arrays and components. Basic intro to Hooks with "useState" and how Functional components use Hooks.

3. Styling - In depth look at Global CSS, Styled Components and CSS Modules. Exploring Pros & Cons of each and how reactive JS utilizes these approaches.

4. Fragments, Portals, Refs - Rendering Sibling components with React.Fragment, Fragment or <></> as its shorthand. Passing components to any DOM node via Portals and ReactDOM library - useful for components like Modals that need to be decoupled from a HTML hierarchy. Using Refs to pass input values without listening to every keystroke - there are performance improvements to this method even if the elements become an uncontrolled component - because React is no longer managing that individual element, it is handled natively from the browser.

5. Effects - useEffect() is a lifecycle hook that listens to changes (whether you specify dependencies) and reacts to them however you specify to handle unique edge cases in your application. Best for single changes, not continuous changes like keystrokes into a text input element. For coninuous changes think of how you can utilize a debounce effect that fires after a pause in user interaction - and then run useEffect(). Never call useEffect() outside of a React component or within a nested function or conditional statement.

6. Reducers, Context API - useReducer() is a lifecycle hook that expands on useState() for state management kind of like a mini-Redux that dispatches actions with a payload and updates state. Useful for state that requires a hierarchy but useState() is the standard approach. Context API allows component communication with "global" state to any component regardless of Parent-Child status. Callable through useContext() hook. As before with useEffect, never call useReducer() or useContext() outside of a React component or within a nested function or conditional statement.

7. TBD - TBD.

8. ARCHIVED. FishInventory - REACT + FIREBASE - This app uses authentication to log into your real-time Firebase data using a GitHub account, in order to persist unique data. Application state is updated on a parent component, passes unidirectional data flow into its child components. You can adjust inventory in your shop - Firebase passes real-time data to the store and prevents customers from having SOLD OUT items in their cart. There is no Checkout or Payment steps included in this demonstration.

9. ARCHIVED. React 16 Basics - Exploring basic Class vs. Functional Components. Importing components, passing JS, dynamic classNames, Props & State, Styled Components, Error Boundaries, Two-Way-Binding in JSX. Basic intro to Hooks with "useState" and how Class components can become Functional with Hooks. First look at updating Immutable State.

10. ARCHIVED. Reduxstagram - REACT + REDUX - This app requires local storage and cookies to be enabled to persist unique data. State is managed through Redux, and follows Immutable data best practices. The instagram feed is some of my colorful graphic designs from 2011.