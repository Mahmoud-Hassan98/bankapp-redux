import { createStore } from 'redux';

const initState = {
  accounts: [
    {
      id: 1,
      customerName: "Israa Othman",
      accountNumber: "123456",
      accountType: "Savings"
    },
    {
      id: 2,
      customerName: "Ahmad Zahran",
      accountNumber: "987654",
      accountType: "Student accounts"
    }
    // Add more accounts as needed
  ]
};

function reducer(state = initState, action) {
  // Add reducer logic here if needed
  return state;
}

const store = createStore(reducer);

export default store;
