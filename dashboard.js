// public/js/dashboard.js
async function fetchExpenses() {
    try {
      const response = await fetch('/expenses');
      const expenses = await response.json();
      displayExpenses(expenses);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  }
  
  function displayExpenses(expenses) {
    const expensesTable = document.getElementById('expensesTable');
    expensesTable.innerHTML = '';
  
    expenses.forEach(expense => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${expense.id}</td>
        <td>${expense.User.username}</td>
        <td>${expense.Category.name}</td>
        <td>${expense.amount}</td>
        <td>${expense.date}</td>
        <td>${expense.description}</td>
      `;
      expensesTable.appendChild(row);
    });
  }
  
  // Call fetchExpenses on page load
  document.addEventListener('DOMContentLoaded', fetchExpenses);
  