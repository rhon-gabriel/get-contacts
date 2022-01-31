import React from "react";
import AppContainer from "./containers/AppContainer/AppContainer";

const App = () => {
  return (
    <div className="App">
      <AppContainer />
      {console.log(navigator.userLanguage || (navigator.languages && navigator.languages.length && navigator.languages[0]) || navigator.language || navigator.browserLanguage || navigator.systemLanguage || 'en')}
    </div>
  );
}

export default App;
