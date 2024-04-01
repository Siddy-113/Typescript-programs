function showdetails(person) {
    if (person.last !== undefined)
        return (person.first + person.last);
    else
        return (person.first);
}
console.log(showdetails({ first: "Sidra" }));
console.log(showdetails({ first: "Sidra", last: " Khan" }));
