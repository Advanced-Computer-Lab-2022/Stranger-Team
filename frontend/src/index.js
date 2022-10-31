import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CourseContextProvider} from './context/CourseContext'

import { AdminsContextProvider } from './context/AdminContext';
import { PendingInstructorsContextProvider } from './context/pendingInstructorContext';
import { CorporateTraineesContextProvider } from './context/corporateTraineeContext';
import { InstructorsContextProvider } from './context/InstructorContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);
