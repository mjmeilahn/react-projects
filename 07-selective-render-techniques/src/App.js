
import { useState, useCallback } from 'react'
import Button from './components/UI/Button/Button'
import DemoOutput from './components/Demo/Demo'
import './App.css'

function App() {
  const [showParagraph, setShowParagraph] = useState(false)

  // STORING THIS FUNCTION INTERNALLY TO PREVENT COMPONENTS LIKE
  // "Button" FROM RE-RENDERING. "useCallback()" TAKES AN ARRAY
  // OF DEPENDENCIES JUST LIKE "useEffect()" HOOK
  const toggleParagraph = useCallback(() => {
    console.log('toggleParagraph function in useCallback()')
    setShowParagraph(prevState => !prevState)
  }, [])

  // USE "useMemo()" TO MEMOIZE DATA THAT RELIES ON AN EXPENSIVE
  // COMPUTATION LIKE SORTING & FILTERING. FUNCTION STRUCTURE IS
  // THE SAME AS "useEffect()" & "useCallback()" (EX: DEPENDENCIES).
  // "useCallback()" IS EXPECTED TO BE USED MORE THAN "useMemo()"

  console.log('APP: rendered')

  // EVERY TIME A PARENT IS RENDERED ...
  // ALL ITS CHILDREN WILL BE RENDERED
  return (
    <div className="app">
      <h1>Hi there!</h1>

      {/* HARD CODED TO "false" TO ILLUSTRATE THAT A CHILD
      ALWAYS RE-RENDERS WHEN ITS PARENT UPDATES - SOLUTION
      IS WRAPPING COMPONENT IN "React.memo()" CHECK ITS FILE */}
      <DemoOutput show={false}/> 

      {showParagraph && <p>App component output!</p>}

      {/* CHILD COMPONENTS THAT HAVE NON-PRIMITIVE TYPES AS PROPS
      ALWAYS RE-RENDER AS A JAVASCRIPT LIMITATION, NOT REACT.
      JS TREATS ARRAYS, OBJECTS & FUNCTIONS AS UNIQUE VALUES */}

      {/* BUT SINCE "toggleParagraph" HERE WILL NEVER CHANGE
      WE CAN USE "useCallback" HOOK TO STORE THIS FUNCTION INTERNALLY
      THEREFORE THIS CHILD COMPONENT OF <App/> SHOULDN'T RE-RENDER */}
      <Button onClick={toggleParagraph}>Show Paragraph!</Button>
    </div>
  )
}

export default App
