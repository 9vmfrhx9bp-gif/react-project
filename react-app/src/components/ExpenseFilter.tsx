import React from "react";

interface Props {
    onSelectCategory: (category: string) => void;
}



function ExpenseFilter({ onSelectCategory }: Props) {
    return (
        <select className="form-select box" onChange={(event) => onSelectCategory(event.target.value)}>
            <option value="">All categories</option>
            <option value="Groceries"> Groceries</option>
            <option value="Utilitys"> Utilitys</option>
            <option value="Entertainment"> Entertainment</option>

        </select>
    )
}

export default ExpenseFilter