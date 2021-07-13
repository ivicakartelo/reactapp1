import './App.css';
import HomePage from './components/HomePage';
import BlogPost from './components/BlogPost';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>  
      <Link to="/">TBEducation</Link>
      <Switch>
        <Route path="/" component={HomePage} exact />           
        <Route path="/:id" component={BlogPost} />
      </Switch>
    </Router>
  );
}
export default App;
