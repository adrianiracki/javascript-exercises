const findTheOldest = function(people) {
    const sortedPeople = people.sort((person1, person2) => {
      if(!person1.yearOfDeath) person1.yearOfDeath = (new Date()).getFullYear();
      if(!person2.yearOfDeath) person2.yearOfDeath = (new Date()).getFullYear();
      return person1.yearOfDeath - person1.yearOfBirth > person2.yearOfDeath
      - person2.yearOfBirth ? -1 : 1;
    })
    return sortedPeople[0];
  };

// Do not edit below this line
module.exports = findTheOldest;
