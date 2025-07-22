import { usePreline } from "./hooks/usePreline";

function App() {

  usePreline()  
  
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
