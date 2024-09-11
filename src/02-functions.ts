import { colleagues, friends } from "./01-basics";
import { Friend, Colleague } from "./myTypes";

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

function highestExtension (cs: Colleague[]) : Colleague {
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
    