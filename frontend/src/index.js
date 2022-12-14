import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CourseContextProvider} from './context/CourseContext'

import { AdminsContextProvider } from './context/AdminContext';
import { PendingInstructorsContextProvider } from './context/pendingInstructorContext';
import { CorporateTraineesContextProvider } from './context/corporateTraineeContext';
import { InstructorsContextProvider } from './context/InstructorContext';
import { CourseRequestsContextProvider } from './context/courseRequestsContext';


//redux store
import store from './redux/store';
import { Provider } from 'react-redux';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <CourseRequestsContextProvider>
    <CourseContextProvider>
      <InstructorsContextProvider>
    <CorporateTraineesContextProvider>
    <PendingInstructorsContextProvider>
    <AdminsContextProvider>
    <App />
    </AdminsContextProvider>
    </PendingInstructorsContextProvider>
    </CorporateTraineesContextProvider>
    </InstructorsContextProvider>
    </CourseContextProvider>
    </CourseRequestsContextProvider>
    </Provider>
  // </React.StrictMode>
);
