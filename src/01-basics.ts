import { Friend, Colleague, ColleagueHistory } from "./myTypes";


const friend1: Friend = {
    name: 'Thomas',
    phone: '087-123-4567',
    age: 25
};

const friend2: Friend = {
    name: 'Ben',
    phone: '087-765-4321',
    age: 28
};

export const friends: Friend[]  = [friend1, friend2];
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
        extenstion: 5678,
        email: 'jane@gmail.com'
    }
};

export const colleagues: ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: []
};

// console.log(colleagues.current[2]);