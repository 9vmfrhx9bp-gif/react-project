import React from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  return (
    <div className="content">
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;
