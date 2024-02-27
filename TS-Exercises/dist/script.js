const JOhan = 666;
console.log(JOhan);
const users = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
const logPerson = (user) => {
    console.log(` - ${user.name}, ${user.age}`);
};
console.log('Users:');
users.forEach(logPerson);
