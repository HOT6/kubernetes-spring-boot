import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes>
            <Route exact path="/" element={ <EmployeeList/> } />
            <Route path="/add" element={ <AddEmployee/> } />
            <Route path="/employees/edit/:id" element={ <AddEmployee/> } />
            <Route path="*" element={ <NotFound/> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;