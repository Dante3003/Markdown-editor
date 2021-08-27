import React, { useCallback, useState } from "react";
import Editor from './components/Editor'
import Preview from './components/Preview'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Hello, World!');
  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="app">
        <Editor onChange={handleDocChange} initialDoc={doc} />
        <Preview doc={doc} />
        </div>
    </>
  )
}

export default App;