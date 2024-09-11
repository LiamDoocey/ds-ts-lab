interface Friend {
    name: string;
    phone: string;
    age: number;
}

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

const friends: Friend[]  = [friend1, friend2];
console.log(friends[1]);

// --------------------------------------------------

const colleague1 = {
    name: 'Mary Jane',
    department: 'HR',
    contact: {
        extenstion: 1234,
        email: 'mary@gmail.com'
    }
};

const colleague2 = {
    name: 'John Doe',
    department: 'IT',
    contact: {
        extenstion: 5678,
        email: 'john@gmail.com'
    }
};

const colleague3 = {
    name: 'Jane Doe',
    department: 'IT',
    contact: {
        extenstion: 5678,
        email: 'jane@gmail.com'
    }
};

const colleagues = {
    current: [colleague1, colleague2, colleague3],
    former: []
};

console.log(colleagues.current[0]);