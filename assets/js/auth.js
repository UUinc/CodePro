function FindUser(email) {
    for (let index in users) {
        if (users[index].email === email) return users[index];
    }
    return null;
}

function AddUser({ username, email, password }) {
    users.unshift({ username, email, password });
}
