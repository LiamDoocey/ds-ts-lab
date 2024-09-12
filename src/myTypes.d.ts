export interface Friend {
    name: string;
    phone: string;
    dob?: Date;
    age: number;
    interests?: string[];
}

export interface Colleague {
    name: string;
    department: string;
    contact: {
        extenstion: number;
        email: string;
    } 
  }

export interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}

export interface EmailContact {
  name: string;
  email: string;
}