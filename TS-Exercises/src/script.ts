const JOhan: number = 666;

console.log(JOhan);

type User = {
    name: string;
    age: number;
    occupation: string;
};

const users: User[] = [
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

const logPerson = (user: User) => {
    console.log(` - ${user.name}, ${user.age}`);
} 

console.log('Users:');
users.forEach(logPerson);