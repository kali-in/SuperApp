import { useState } from 'react'
import './App.css'
import { usePageTitle } from './hooks/usePageTitle'
function App() {

  usePageTitle('Wiki Search Term Generator')
  const [inputs, setInputs] = useState([
    { id: 1, value: '' }
  ])
  const [copyStatus, setCopyStatus] = useState('')

  const handleInputChange = (id, value) => {
    setInputs(prevInputs => 
      prevInputs.map(input => 
        input.id === id ? { ...input, value } : input
      )
    )
  }

  const addInput = () => {
    setInputs(prevInputs => [
      ...prevInputs,
      { id: prevInputs.length + 1, value: '' }
    ])
  }

  const removeInput = (id) => {
    setInputs(prevInputs => 
      prevInputs.filter(input => input.id !== id)
    )
  }

  const formatValue = (value) => {
    const trimmedValue = value.trim()
    return trimmedValue.includes(' ') ? `"${trimmedValue}"` : trimmedValue
  }

  const getFormattedOutput = () => {
    const filledInputs = inputs
      .map(input => input.value.trim())
      .filter(value => value !== '')
      .map(value => formatValue(value))
    
    if (filledInputs.length === 0) return ''
    return `(${filledInputs.join(' and ')})`
  }

  const handleCopy = async () => {
    const output = getFormattedOutput()
    if (output) {
      try {
        await navigator.clipboard.writeText(output)
        setCopyStatus('Copied!')
        setTimeout(() => setCopyStatus(''), 2000)
      } catch (err) {
        setCopyStatus('Failed to copy')
        setTimeout(() => setCopyStatus(''), 2000)
      }
    }
  }

  return (
    <div className="container">
      <h1 className="title">Wiki Search Term Generator</h1>
      <div className="input-container">
        {inputs.map((input) => (
          <div key={input.id} className="input-row">
            <input
              type="text"
              value={input.value}
              onChange={(e) => handleInputChange(input.id, e.target.value)}
              placeholder={`Enter value ${input.id}`}
            />
            {inputs.length > 1 && (
              <button 
                onClick={() => removeInput(input.id)}
                className="remove-btn"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button onClick={addInput} className="add-btn">
          Add Input
        </button>
      </div>

      <div className="output-container">
        <div className="output-header">
          <h3>Output:</h3>
          {getFormattedOutput() && (
            <button 
              onClick={handleCopy}
              className="copy-btn"
              title="Copy to clipboard"
            >
              Copy
            </button>
          )}
        </div>
        <p>{getFormattedOutput()}</p>
        {copyStatus && <span className="copy-status">{copyStatus}</span>}
      </div>
    </div>
  )
}

export default App
