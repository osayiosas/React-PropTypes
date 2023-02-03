
import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person
        name="Osayi"
        email="idiaigheosaigbovoosas@gmail.com"
        age={23}
        isMarried={false}
        friends={["Jona", "Osahon", "Jerry", "Bright"]}
      />
    </div>
  );
}

export default App;
