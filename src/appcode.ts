import './App.css';
import Emaillist from './Emaillist';
import Header from './Header.js';
import Mail from './Mail.js';
import Sidebar from './Sidebar.js';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';

const mockSelector = state => state.value;

function App() {
  const state = { value: 'Test Value' }; // Replace 'value' with the key you're expecting

  // Simulated useSelector with a mocked selector and state
  const selectedValue = useSelector(mockSelector, state);
  return (
      <Router>
        <div className="app">
          <Header />
          <div className="app_body">
            <Sidebar />
            <Routes>
              <Route path='/mail' element={<Mail />} />
              <Route path='/' element={<Emaillist />} />
            </Routes>
          </div>
        <SendMail />
        </div>
        <div>
      <h1>Selected Value: {selectedValue}</h1>
    </div>
      </Router>
  );
}

export default App;
