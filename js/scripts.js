function UserDataBase() {
    this.users = {};
    this.currentId = 0;
}

UserDataBase.prototype.addUser = function (user) {
    user.id = this.assignId();
    this.users[user.id] = user;
};

UserDataBase.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};

//Useraccount Business logic

function UserAccount(name, balance) {
    this.name = name;
    this.balance = balance;
}

UserAccount.prototype.transaction = function (amount) {
    this.balance = this.balance + amount;
    return this.balance;
};

//UI logic

const userDataBase = new UserDataBase();
const user1 = new UserAccount("Ermek", 1000);
const user2 = new UserAccount("Adam", 500);

userDataBase.addUser(user1);
userDataBase.addUser(user2);


function transaction(userId, type, amount) {
    if (userDataBase.users[userId]) {
        if (type === "withdrawal") {
            amount = amount * -1;
        }

        userDataBase.users[userId].transaction(amount);
    } else {
        console.error("User not found with ID:", userId);
    }
}

// console.log("Type:", type);
// console.log("Amount:", amount);
// console.log("User data:", userDataBase.users[userId]);
// transaction(1, "deposit", 1000);
// transaction(2, "withdrawal", 300)

function accountFormHandler(e) {
    e.preventDefault();

}



window.addEventListener("load", function () {
    document.querySelector("form").addEventListener("submit");
});
// console.log(userDataBase);

