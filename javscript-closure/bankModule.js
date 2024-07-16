function bankAccount(initialBalance, ownerName) {
  const owner = ownerName;

  const accounts = [
    {
      balance: initialBalance,
      owner,
      currency: "RON",
      transactions: [],
    },
  ];

  function getSelectedAccount(currency) {
    return accounts.find((acc) => acc.currency === currency);
  }

  function deposit(amount, currency = "RON") {
    const account = getSelectedAccount(currency);

    account.balance += amount;
    account.transactions.push({
      type: "DEPOSIT",
      amount,
    });
  }

  function withdraw(amount, currency = "RON") {
    const account = getSelectedAccount(currency);

    if (!account) {
      console.log(`Account in ${currency} doesn't exist`);
      return;
    }

    account.balance -= amount;
    account.transactions.push({
      type: "WITHDRAW",
      amount,
    });
  }

  function createSubAccount(currency, initialBalance) {
    accounts.push({
      balance: initialBalance,
      owner,
      currency,
      transactions: [],
    });
  }

  function getAccountDetails(currency = "RON") {
    const account = getSelectedAccount(currency);
    return { ...account };
  }

  function printAccountBalance(currency = "RON") {
    const account = getSelectedAccount(currency);

    console.log(`Your account balance: ${account.balance}`);
  }

  function printAccountTransactions(currency = "RON") {
    const account = getSelectedAccount(currency);

    console.log(`Your transactions for the ${currency} account:`);
    console.log([...account.transactions]);
  }

  function printAllAccountsData() {
    console.dir([...accounts], { depth: 3 });
  }

  return {
    deposit,
    withdraw,
    getAccountDetails,
    printAccountBalance,
    printAccountTransactions,
    createSubAccount,
    printAllAccountsData,
  };
}

const alexAccount = bankAccount(1000, "Alex");
const bogdanAccount = bankAccount(2000, "Bogdan");

// const account = bogdanAccount.getAccountDetails();
// delete account.balance;

alexAccount.deposit(150);
bogdanAccount.withdraw(200);
bogdanAccount.deposit(320);

alexAccount.printAccountBalance();
bogdanAccount.printAccountBalance();

alexAccount.printAccountTransactions();
bogdanAccount.printAccountTransactions();

// ---------------
alexAccount.createSubAccount("EUR", 500);
bogdanAccount.createSubAccount("USD", 1200);

bogdanAccount.withdraw(100, "EUR");
bogdanAccount.printAccountTransactions("USD");

alexAccount.deposit(500, "EUR");
alexAccount.printAccountTransactions("EUR");

bogdanAccount.printAllAccountsData();
alexAccount.printAllAccountsData();
