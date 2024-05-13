function getLeapYears(start, end) {
    const leapYears = [];

    for (let year = start; year <= end; year++) {
        if (year % 4 === 0 && year % 100!== 0 || year % 400 === 0) {
            leapYears.push(year);
            year += 3;
        }
    }

    return leapYears;
}

console.log(getLeapYears(1900, 2023));
