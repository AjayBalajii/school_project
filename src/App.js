import React from "react";
import firebase from 'firebase';
import AppStateWithContext from "./context/state";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthGaurd from "./AuthGaurd";
import { BrowserRouter as Router } from "react-router-dom";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_KEY,
  authDomain: process.env.REACT_APP_FB_DOMAIN,
  projectId: process.env.REACT_APP_FB_PID,
  storageBucket: process.env.REACT_APP_FB_STORAGE,
  messagingSenderId: process.env.REACT_APP_FB_MSGID,
  appId: process.env.REACT_APP_FB_ID
};

if(firebase.apps.length===0) {
  firebase.initializeApp(firebaseConfig);
}

const queryClient = new QueryClient();

function App() {
  return (
    <AppStateWithContext>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AuthGaurd />
        </Router>
      </QueryClientProvider>
    </AppStateWithContext>
  );
}

export default App;
