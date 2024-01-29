import React, {useState} from 'react';
import { DateInputPage } from './pages/DateInputPage';
import { IntroPage } from './pages/IntroPage';
import { LoadingPage } from './pages/LoadingPage';
import { ResultsPage } from './pages/ResultsPage';

export default function App() {
  const [currentPage, setParentPage] = useState('intro');
  let parentPage = <IntroPage setParentPage={setParentPage}/>
  switch(currentPage) {
    case 'introPage':
      parentPage = <IntroPage setParentPage={setParentPage}/>
      break;
    case 'loadingPage':
      parentPage = <LoadingPage setParentPage={setParentPage}/>
      break;
    case 'resultsPage':
      parentPage = <ResultsPage setParentPage={setParentPage}/>
      break;
    case 'dateInputPage':
      parentPage = <DateInputPage setParentPage={setParentPage}/>
      break;
    default: 
      parentPage = <IntroPage setParentPage={setParentPage} />
  }
  return parentPage;
};
