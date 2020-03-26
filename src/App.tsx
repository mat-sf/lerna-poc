import React from "react";
import { Button } from "@mat-sf/my-awesome-lib-button";
import { TextButton } from "@mat-sf/my-awesome-lib-text-button";
import { ThemeProvider } from "styled-components";

const theme = {
  main: "blue"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Test</Button>
      <TextButton />
    </ThemeProvider>
  );
}

export default App;
