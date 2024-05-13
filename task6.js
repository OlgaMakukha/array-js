const names =  ["Alice", "Bob", "alice", "Eve", "BOB", "Charlie", "eve", "David", "charlie"];

function removeDuplicateNames(names) {
    const uniqueNames = [];
    const lowerNames = names.map(function(name) {
        return name.toLowerCase();
    })

    lowerNames.forEach(function(name) {
        let upperCaseName = name[0].toUpperCase() + name.slice(1);
        if (uniqueNames.indexOf(upperCaseName) === -1) {
            uniqueNames.push(upperCaseName);
        }
    })
    return uniqueNames;
}

console.log(removeDuplicateNames(names));
