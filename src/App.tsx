import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import ChooseBibles from './pages/ChooseBibles';
import ChooseBooks from './pages/ChooseBooks';
import ChooseChapters from './pages/ChooseChapters';
import ChooseVerses from './pages/ChooseVerses';
import Home from './pages/Home';
import 'semantic-ui-css/semantic.min.css';
import {
  fetchBibles,
  fetchBooks,
  fetchChapters,
  fetchVerses,
} from './util/api';
const App: React.FC = () => {
  // const fn = async () => {
  // console.log(await fetchBooks('6bab4d6c61b31b80-01'));
  // console.log(await fetchChapters('6bab4d6c61b31b80-01', 'GEN'));
  // console.log(await fetchVerses('6bab4d6c61b31b80-01', 'GEN.1'));
  // console.log(await fetchBibles());
  // };
  // fn();
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/bibles' component={ChooseBibles} />
          <Route exact path='/bibles/:bibleId/books' component={ChooseBooks} />
          <Route
            exact
            path='/bibles/:bibleId/books/:bookId/chapters'
            component={ChooseChapters}
          />
          <Route
            exact
            path='/bibles/:bibleId/chapters/:chapterId'
            component={ChooseVerses}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
