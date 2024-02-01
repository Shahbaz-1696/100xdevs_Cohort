/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let answer = [];

  for (let i = 0; i < transactions.length; i++) {
    if (answer.length === 0) {
      answer.push({
        category: transactions[i].category,
        totalSpent: transactions[i].price,
      });
      continue;
    }

    let isFound = false;
    for (let j = 0; j < answer.length; j++) {
      if (answer[j].category === transactions[i].category) {
        isFound = true;
        answer[j].totalSpent = answer[j].totalSpent + transactions[i].price;
        break;
      }
    }

    if (!isFound) {
      answer.push({
        category: transactions[i].category,
        totalSpent: transactions[i].price,
      });
    }
  }
  return answer;
}

module.exports = calculateTotalSpentByCategory;