import React from "react";

function ExpenseForm() {
  return (
    <div className="box">
      <h1>Expense Form</h1>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Description"
          />
          <label htmlFor="floatingInput">Description</label>
        </div>
        <div className="form-floating">
          <input
            type="number"
            className="form-control"
            id="amount"
            placeholder="amount"
          />
          <label htmlFor="amount">Amount</label>
        </div>

        <div className="form-floating">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected color="#a6a6a6">
              Kategorie wählen...
            </option>
            <option value="1">Groceries</option>
            <option value="2">Entertainment</option>
            <option value="3">Utilities</option>
          </select>
          <label htmlFor="floatingSelect">Kategorie</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
