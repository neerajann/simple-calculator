import { useEffect } from 'react'
import { useGlobalContext } from './GlobalContext'

function DisplayBar() {
  const { setInputBar, inputBar, prevOutput, calculateResult } =
    useGlobalContext()
  function handleChange(e) {
    if (e.key === 'Backspace') {
      return setInputBar((prev) => {
        const newArr = [...prev]
        newArr.pop()
        return newArr
      })
    }

    if (e.key === 'Enter') {
      e.preventDefault()
      calculateResult()
      return
    }

    const pattern = /^[0-9+\-*/=]$/
    if (pattern.test(e.key)) {
      setInputBar((prev) => [...prev, e.key])
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleChange)
    return () => window.removeEventListener('keydown', handleChange)
  }, [inputBar])

  return (
    <div className='display'>
      <div className='prev-output'>{prevOutput}</div>
      <input
        className='display-bar'
        type='text'
        value={inputBar.join('')}
        readOnly={true}
      ></input>
    </div>
  )
}
export default DisplayBar
