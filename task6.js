const names =  ["Alice", "Bob", "alice", "Eve", "BOB", "Charlie", "eve", "David", "charlie"];

function removeDuplicateNames(names) {
    const uniqueNames = [];

    names = names.map((name) => {
        return name[0].toUpperCase() + name.slice(1).toLowerCase();
    })

    names.forEach((name) => {
        if (!uniqueNames.includes(name)) {
            uniqueNames.push(name);
        }
    })
    return uniqueNames;
}

console.log(removeDuplicateNames(names));
