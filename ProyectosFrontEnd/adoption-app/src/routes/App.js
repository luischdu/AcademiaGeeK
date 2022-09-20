import React from "react";
// 1. import `ChakraProvider` component
import { ChakraProvider, Button, ButtonGroup } from "@chakra-ui/react";

// 2. Importar mi tema personalizado
import theme from "../styles/theme";

// 3. Importart mis elementos de enrutamiento
import { BrowserRouter, Route, Switch } from "react-router-dom";

// 4. Importart las páginas (Componentes) de mi aplicación
import AdoptionHome from "../containers/AdoptionHome";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={AdoptionHome} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
