import {
    ColleagueV2,
    Friend,
    Buddy,
    BuddyList,
    Administrator,
  } from "./myTypes";
  import { friends } from "./01-basics";

  const colleague1: ColleagueV2 = {
    name: 'Mary Jane',
    department: 'HR',
    contact: {
        extension: 1234,
        email: 'mary@gmail.com'
    }
};

const colleague2: ColleagueV2 = {
    name: 'John Doe',
    department: 'IT',
    contact: {
        extension: 5678,
        email: 'john@gmail.com'
    }
};


function makeBuddyList(
    name: string,
    buddies: Buddy[],
    admin?: Administrator
  ): BuddyList {
    return {
      name,
      members: buddies,
      administrator: admin,
    } as BuddyList;
    // The as operator above casts an object to a specific type.
  }
  // Tests for makeBuddyList
  const myFootballBuddies = makeBuddyList(
    "Football team",
    [colleague1, friends[0], colleague2],
    colleague1
  )
  
  const myBandBuddies = makeBuddyList(
      "Band name",
      [colleague1, friends[1]]
      // No administrator
    )
  
  console.log(myFootballBuddies)
  console.log(myBandBuddies)
  //--------------------------------------
  function findBuddyContact(list: BuddyList, name: string): string | undefined {
    for (const buddy of list.members) {
      if (buddy.name === name) {
        console.log("Buddy found")
        if ("phone" in buddy) {
          console.log("Buddy has phone")
          return buddy.phone;
        }
        else {
          console.log("Buddy has email")
          return buddy.contact.email;
        }
      }
      console.log("Buddy not found")
      return undefined;
    }
  }
  // Test for findBuddyContact.
  console.log("Contact buddy at: ", findBuddyContact(myFootballBuddies, "Mary Jane"));

  function getBuddyListFriends(list: BuddyList): Friend[] {
    return list.members.reduce((f: Friend[], buddy) => {
      if ("phone" in buddy) {
        f.push(buddy as Friend);
      }
      return f;
    }, []);
  }
  // Test for getBuddyListFriends
  console.log("Friends in the list: ", getBuddyListFriends(myFootballBuddies));