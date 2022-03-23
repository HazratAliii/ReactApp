import Index from './Event_Handler/index'
import Inex from './Event_Binding/inex'
import HookIndex from './Hook_state/index'
import HookIndex1 from './Hook_state/inex1'
import Form from './Form/form'
import ChildComp from './state_lifting/child'
function App() {
  const data = "I'm from parent"
  const handleChildData = (childData) => {
    console.log(childData);
  }
  return (
    <div className="App">
      {/* <Index /> 
      <Inex /> 
      <HookIndex />
     <HookIndex1 /> 
     <Form />  */}
     <ChildComp data={data} onData = {handleChildData}/>
    </div>
  );
}

export default App;
