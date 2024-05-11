const names =  ["Alice", "Bob", "alice", "Eve", "BOB", "Charlie", "eve", "David", "charlie"];

function removeDuplicateNames(names) {
    const uniqueNames = [];

    names.forEach(names => {
        const lowerCaseName = names.toLowerCase();
        if (uniqueNames.map(item => item.toLowerCase()).indexOf(lowerCaseName) === -1) {
            uniqueNames.push(names);
        }
    });

    return uniqueNames;
}

console.log(removeDuplicateNames(names));
