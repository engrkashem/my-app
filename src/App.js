import logo from './logo.svg';
import './App.css';


const nayoks = ['Rubel', 'Illias Kanchon', 'Manna', 'Bappa Raj', 'Razzak', 'Shohel Rana', 'Kuber Majhi', 'Abdali'];
const nayikas = [
  { phone: '123', email: 'asd' },
  { phone: '456', email: 'zxc' },
  { phone: '7889', email: 'jkl' },
  { phone: '8976', email: 'tyu' }
];
function App() {
  return (
    <div className="App">
      {
        nayoks.map(nayok => <Presion name={nayok}></Presion>)
      }

      <h6>New Components</h6>
      {
        nayikas.map(nayika => <Friend phone={nayika.phone} email={nayika.email}></Friend>)
      }
    </div>
  );
}

function Presion(props) {
  return (
    <div className='container'>
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  )
}

const Friend = (props) => {
  return (
    <div style={{ backgroundColor: 'khaki', broder: '2px solid blue', borderRadius: '20px', margin: '20px', padding: '20px' }}>
      <h2>Phone: {props.phone}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default App;
