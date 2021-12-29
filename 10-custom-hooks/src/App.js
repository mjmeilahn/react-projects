
import React from 'react'
import BackwardCounter from './components/BackwardCounter'
import ForwardCounter from './components/ForwardCounter'


// CUSTOM HOOKS MUST FOLLOW A STRICT NAMING CONVENTION
// ACCORDING TO REACT. ALWAYS START WITH "use"
// AT THE BEGINNING OF THE FUNCTION.

// THE CUSTOM HOOK CAN BE LOCATED ANYWHERE BUT COMMON CONVENTION
// IS A DEDICATED FOLDER NEAR THE ROOT OF THE "src" FOLDER.

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  )
}

export default App
