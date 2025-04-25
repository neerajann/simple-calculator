import CustomButton from './CustomButton'
import DisplayBar from './DisplayBar'

function App() {
  return (
    <main>
      <h1 className='title'>Simple Calculator</h1>
      <div className='circle'>
        <div className='container'>
          <DisplayBar />
          <div className='buttons'>
            <CustomButton num={'AC'} />
            <CustomButton num={'x'} />
            <CustomButton num={'/'} customclass='operator' />
            <CustomButton num={'*'} customclass='operator' />
            <CustomButton num={7} />
            <CustomButton num={8} />
            <CustomButton num={9} />
            <CustomButton num={'-'} customclass='operator' />
            <CustomButton num={4} />
            <CustomButton num={5} />
            <CustomButton num={6} />
            <CustomButton num={'+'} customclass='row-span-2 operator' />
            <CustomButton num={1} />
            <CustomButton num={2} />
            <CustomButton num={3} />
            <CustomButton num={0} customclass='col-span-2' />
            <CustomButton num={'.'} />
            <CustomButton num={'='} customclass='row-span-2 operator' />
          </div>
        </div>
      </div>
      <footer className='footer'>Devleoped By Neerajan</footer>
    </main>
  )
}
export default App
