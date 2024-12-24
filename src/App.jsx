import Chat from "./Components/Chat";
import Details from "./Components/Details";
import List from "./Components/list";
const App = () => {
  return (
    <div
      className="w-[90vw] h-[90vh] rounded-[12px] backdrop-blur-[19px] backdrop-saturate-[100%] border flex"
      style={{ backgroundColor: 'rgba(17, 25, 40, 0.55)', border: '1px solid rgba(255, 255, 255, 0.125)' }}
    >
      <List />
      <Chat />
      <Details/>
    </div>
  );
};

export default App;
