import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [value, setValue] = useState('')
  const calcBtns = []
  ;[9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.'].forEach((item) => {
    calcBtns.push(
      <button
        onClick={(e) => {
          setValue(value + e.target.value)
        }}
        value={item}
        key={item}
      >
        {item}
      </button>,
    )
  })

  const calcPercent = () => {
    try {
      const currentNumber = parseFloat(value)
      if (!isNaN(currentNumber)) {
        const result = (currentNumber / 100).toFixed(2)
        setValue(result)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="container">
      <div className="value">{value}</div>
      <div className="numbers">{calcBtns}</div>
      <div className="modificators wrapper">
        <button onClick={(e) => setValue('')} value="">
          AC
        </button>
        <button onClick={(e) => setValue(value.substr(0, value.length - 1))} value="">
          C
        </button>
        <button onClick={(e) => calcPercent()} value="%">
          %
        </button>
      </div>

      <div className="operations wrapper">
        <button onClick={(e) => setValue(value + e.target.value)} value="/">
          /
        </button>
        <button onClick={(e) => setValue(value + e.target.value)} value="*">
          *
        </button>
        <button onClick={(e) => setValue(value + e.target.value)} value="-">
          -
        </button>
        <button onClick={(e) => setValue(value + e.target.value)} value="+">
          +
        </button>
        <button
          onClick={(e) => {
            try {
              setValue(
                String(eval(value)).length > 3 && String(eval(value)).includes('.')
                  ? String(eval(value).toFixed(4))
                  : String(eval(value)),
              )
            } catch (e) {
              console.log(e)
            }
          }}
          value="="
        >
          =
        </button>{' '}
      </div>
    </div>
  )
}

export default App
