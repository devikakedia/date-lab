import React, {useState} from 'react';
import { DateInputPage } from './pages/DateInputPage';
import { IntroPage } from './pages/IntroPage';
import { ResultsPage } from './pages/ResultsPage';

export default function App() {
  const [currentPage, setParentPage] = useState('intro');
  const [payload, setPayload] = useState({});
  let parentPage = <IntroPage payload={payload} setPayload={setPayload} setParentPage={setParentPage}/>
  switch(currentPage) {
    case 'introPage':
      parentPage = <IntroPage payload={payload} setPayload={setPayload} setParentPage={setParentPage}/>
      break;
    case 'resultsPage':
      parentPage = <ResultsPage payload={payload} setPayload={setPayload} setParentPage={setParentPage}/>
      break;
    case 'dateInputPage':
      parentPage = <DateInputPage payload={payload} setPayload={setPayload} setParentPage={setParentPage}/>
      break;
    default: 
      parentPage = <IntroPage payload={payload} setPayload={setPayload} setParentPage={setParentPage} />
  }
  return parentPage;
};
