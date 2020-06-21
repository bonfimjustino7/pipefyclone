import React from "react";

import GlovalStyle from "./styles/global";
import Header from "./components/Header";
import Board from "./components/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
      <GlovalStyle />
    </DndProvider>
  );
}

export default App;
