import { useRef } from 'react'

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    // returns an obj w/prop current, {current: input#name.form-control.mb-2}
    console.log(inputRef.current.value);
    // changes input value to 'sup'
    inputRef.current.value = 'Sup';
    // change styling
    inputRef.current.style.backgroundColor = 'dodgerblue'
    // Change font color
    inputRef.current.style.color = 'white'

    paraRef.current.innerText = 'Next'
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input ref={inputRef} id="name" className='form-control mb-2' type="text" />
        <button type='submit' className='btn btn-primary'>Submit</button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>Hi</p>
      </form>
    </div>
  )
}

export default UseRefExample1