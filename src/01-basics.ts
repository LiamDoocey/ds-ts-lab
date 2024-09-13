import { Friend, Colleague, ColleagueHistory } from "./myTypes";


const friend1: Friend = {
    name: 'Thomas',
    phone: '087-123-4567',
    age: 20,
    dob: new Date('2004-11-20'),
};

const friend2: Friend = {
    name: 'Ben',
    phone: '087-765-4321',
    age: 21,
    interests: ['Music', 'Reading', 'Coding'],
};

const friend3: Friend = {
    name: 'Jane Doe',
    phone: '087-123-4567',
    age: 26,
    interests: ['Music', 'Reading', 'Coding'],
};


export const friends: Friend[]  = [friend1, friend2, friend3];
// console.log(friends[1]);

// --------------------------------------------------


const colleague1: Colleague = {
    name: 'Mary Jane',
    department: 'HR',
    contact: {
        extenstion: 1234,
        email: 'mary@gmail.com'
    }
};

const colleague2: Colleague = {
    name: 'John Doe',
    department: 'IT',
    contact: {
        extenstion: 5678,
        email: 'john@gmail.com'
    }
};

const colleague3: Colleague = {
    name: 'Jane Doe',
    department: 'IT',
    contact: {
        extenstion: 41574,
        email: 'jane@gmail.com'
    }
};

export const colleagues: ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: []
};

// console.log(colleagues.current[2]);