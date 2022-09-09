import Input from './components/Input'
import { useState } from 'react'


function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("")

  return (
    <div className="App">
      <h1 className="text-center bg-dark bg-gradient text-light py-2">Estados de componentes</h1>
      <Input name={[name, setName]} password={[password, setPassword]} />
    </div>
  );
}

export default App;
