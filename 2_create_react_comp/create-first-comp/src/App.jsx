import KgButton from "./KgButton";
import Hello from "./Hello";
import Random from "./Random";

function App(){
  return(
  <div>
    
    <h1>
      This is the best React Course. This is heading tag and writing part is JSX its not html
    </h1>

    <button>This is normal button</button>

    {/* For this we will have to import the button. */}
    <KgButton></KgButton>

    <Hello></Hello>

    <Random/>
    <br/>
    <Random/>
    <br/>
    <Random/>
    <br/>
    <Random></Random>
    <br/>
    <Random></Random>

  </div>
  )
}
export default App;
