import { useState, useEffect, useRef } from 'react';


// SET REF TO A NUMBER OF RENDERS
function UseRefExample2() {
  // When we update state of any component it renders
  const [name, setName] = useState('');

  // pass in default value for reference
  const renders = useRef(1);
  // previous state so everything up until last text
  const prevName = useRef('')

  useEffect(() => {
    // setRender + 1
    renders.current = renders.current + 1

    // stores previous state
    prevName.current = name
  }, [name])

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-3"
      />
    </div>
  )
}

export default UseRefExample2