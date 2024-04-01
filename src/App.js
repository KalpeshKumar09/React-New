import './App.css';
import AddBooking from './Pages/Booking/AddBooking';
import Booking from './Pages/Booking/Booking';

import MainRoute from './Routes/MainRoute';


function App() {
  return (
    <div className="App">
       {/* <MainRoute/>  */}
       <AddBooking/>
       <Booking/>
    </div>
  );
}

export default App;
