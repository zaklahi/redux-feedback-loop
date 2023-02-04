import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import FeelingPage from '../feelingPage/feelingPage.jsx';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import CommentsPage from '../CommentsPage/CommentsPage';
import SupportPage from '../SupportPage/SupportPage';

// import StepThree from '../stepThree/stepThree';
// import StepFour from '../StepFour/StepFour';
// import Review from '../Review/Review';
// import ActivityLog from '../ActivityLog/ActivityLog.jsx';


function App() {
  return (
 
      <div className="App"> 
      <Router>
    <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
          
              {/* <Header /> */}
              <br />
              <div>
                  <Route exact path="/">
                      <FeelingPage />
                  </Route>
                  <Route exact path="/step/one">
                      <UnderstandingPage />
                  </Route>
                  <Route exact path="/step/two">
                      <SupportPage />
                  </Route>
                  <Route exact path="/step/three">
                      <CommentsPage />
                  </Route>
                  </div>
            </Router>
        </div>
    );
}








export default App;