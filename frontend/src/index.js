import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CourseContextProvider} from './context/CourseContext'

import { AdminsContextProvider } from './context/AdminContext';
import { CorporateTraineesContextProvider } from './context/corporateTraineeContext';
import { InstructorsContextProvider } from './context/InstructorContext';

//redux store
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
    <CourseContextProvider>
      <InstructorsContextProvider>
    <CorporateTraineesContextProvider>
    <AdminsContextProvider>
    <App />
    </AdminsContextProvider>
    </CorporateTraineesContextProvider>
    </InstructorsContextProvider>
    </CourseContextProvider>
    </Provider>
  // </React.StrictMode>
);
