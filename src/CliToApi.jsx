import { useState } from 'react'
import './CliToApi.css'
import { usePageTitle } from './hooks/usePageTitle'

function CliToApi() {
  usePageTitle('CLI to API Converter')
  const [input, setInput] = useState('')
  const [copyStatus, setCopyStatus] = useState('')

  const convertToApiName = (cliCommand) => {
    if (!cliCommand) return ''
    
    // Split by hyphens and convert each part
    return cliCommand
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('')
  }

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleCopy = async () => {
    const output = convertToApiName(input)
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
      <h1 className="title">CLI to API Name Converter</h1>
      
      <div className="converter-container">
        <div className="input-section">
          <label htmlFor="cli-input">Enter CLI Command:</label>
          <input
            id="cli-input"
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="e.g., put-log-events"
          />
        </div>

        <div className="output-section">
          <div className="output-header">
            <h3>API Name:</h3>
            {convertToApiName(input) && (
              <button 
                onClick={handleCopy}
                className="copy-btn"
                title="Copy to clipboard"
              >
                Copy
              </button>
            )}
          </div>
          <div className="output-display">
            {convertToApiName(input)}
          </div>
          {copyStatus && <span className="copy-status">{copyStatus}</span>}
        </div>
      </div>
    </div>
  )
}

export default CliToApi