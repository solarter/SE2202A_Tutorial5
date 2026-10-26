//Task 1

function summarizeGrades(assignments) //summarizeGrades will receive an array of objects
{
  let sum = 0;
  const count = assignments.length;
  const LATE_PENALTY_PER_DAY = 20;
  let assignment;

  for (let i = 0; i < count; i++) {
    assignment = assignments[i];
    let grade = assignment.grade;

    if (assignment.daysLate > 0) {
      const latePenalty = assignment.daysLate * LATE_PENALTY_PER_DAY;
      //The minimum grade allowed is 0.
      grade = grade - latePenalty >= 0 ? grade - latePenalty: 0;
    }
    sum += grade;
  }
  
  const lastGraded = assignment;
  return { average: sum/count, lastGraded: lastGraded.id };
}

// Example test
const assignments = [
  { id: "1234", grade: 80, daysLate: 2 },
  { id: "5678", grade: 50, daysLate: 0},
  { id: "9876", grade: 30, daysLate: 2},
];
console.log(summarizeGrades(assignments)); 




//Task 2

let letterCounter = function (letter, ignoreCapitalization) //letterCounter will receive a string of a letter and a boolean value for ignorCapitalization
{
    
    let count = function(word) //count will receive a string of a word
    {
        let desiredLetter = letter;

        if (ignoreCapitalization)
        {
            desiredLetter = desiredLetter.toLowerCase();
            word = word.toLowerCase();
        }

        return word.split(desiredLetter).length - 1;
    }

    return count;
}


function makeCharacter(characterName) //makeCharacter will receive a string of a name
{
   let farmingSkill = 0;

   let fishingSkill = 0;

    let levelUp = function (skill) //levelUp will receive a string of a skill belonging to a character
    {
        if (skill === "farming" && farmingSkill < 10)
        {
            farmingSkill+=1;
        }
        else if (skill === "fishing" && fishingSkill < 10)
        {
            fishingSkill+=1;
        }
    }

    let showSkill = function (skill) //showSkill will receive a string of a skill belonging to a character
    {
        if (skill === "farming")
        {
            return farmingSkill;
        }
        else if (skill === "fishing")
        {
            return fishingSkill;
        }
    }

    return {
        name: characterName,
        levelUp,
        showSkill
    }
}




