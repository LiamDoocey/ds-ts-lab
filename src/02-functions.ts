import { colleagues, friends } from "./01-basics";
import { Friend, Colleague, EmailContact } from "./myTypes";

function older (f: Friend) : string {
    f.age += 1;
    return `${f.name} is now ${f.age} years old.`;
}
console.log(older(friends[0]));


function allOlder (f: Friend[]) : string[] {
    const newAge: string[] = [];
    f.forEach((f) => {
        f.age += 1;
        newAge.push(`${f.name} is now ${f.age} years old.`);
    });
    return newAge;
}
console.log(allOlder(friends));


function highestExtension (cs: Colleague[]) {
    const result = cs.sort(
        (c1, c2) => c1.contact.extenstion - c2.contact.extenstion
    );
    return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));


function addColleague (cs: Colleague[], name: string, department: string, email: string){
    const newColleague: Colleague = {
        name,
        department,
        contact: {
            extenstion: highestExtension(cs).contact.extenstion + 1,
            email
        }
    };
    cs.push(newColleague);
}
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter(c => c.name === "Sheild O Connell"));


function sortColleagues (
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
){
    const sorted = colleagues.sort(sorter);
    const result: EmailContact[] = sorted.map((ce => ({
        name: ce.name,
        email: ce.contact.email
    })));
    return result;
}
console.log(sortColleagues(colleagues.current, (a, b,) => a.contact.extenstion - b.contact.extenstion));
console.log(sortColleagues(colleagues.current, (a, b,) => a.name.length - b.name.length));
    

function findFriends(friends: Friend[], matches:(f: Friend) => boolean){
    const matchesFound: Friend[] = [];
    friends.forEach(f => {
        if (matches(f)){
            matchesFound.push(f);
        }
    });
    return matchesFound;
}
console.log(findFriends(friends, f => f.age == 21));
console.log(findFriends(friends, f => f.name.startsWith("B")));
