import React from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter"
import { useState, useEffect } from "react";
import axios from "axios"


interface User {
  id: number,
  name: string
}

function App() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data));
  }, [])

  const [expenses, setExpenses] = useState([
    { id: 1, description: "milk", amount: 3, category: "Groceries" },
    { id: 2, description: "Meat", amount: 5, category: "Groceries" },
    { id: 3, description: "Spoon", amount: 2, category: "Utilitys" },
    { id: 4, description: "TV", amount: 1, category: "Entertainment" },
  ])

  const [selectedCategory, setSelectedCategory] = useState("")

  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses






  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

export default App;
