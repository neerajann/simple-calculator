import { useGlobalContext } from './GlobalContext'
import { CiSquareRemove } from 'react-icons/ci'

function CustomButton({ num, customclass }) {
  const { setInputBar, calculateResult, setPrevOutput } = useGlobalContext()

  function handleButton(num) {
    if (num === '=') {
      return calculateResult()
    }
    if (num === 'AC') {
      setPrevOutput([])
      return setInputBar([])
    }
    if (num === 'x') {
      return setInputBar((prev) => {
        const newArr = [...prev]
        newArr.pop()
        return newArr
      })
    }
    setInputBar((prev) => {
      return [...prev, num]
    })
  }
  return num === 'x' ? (
    <button className='custom-btn' onClick={() => handleButton(num)}>
      <CiSquareRemove className='remove-icon' />
    </button>
  ) : (
    <button
      className={customclass ? customclass + ' custom-btn' : 'custom-btn'}
      onClick={() => handleButton(num)}
    >
      {num}
    </button>
  )
}
export default CustomButton
