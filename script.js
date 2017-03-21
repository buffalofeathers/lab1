//    * Your name
//     * Your career/field
//     * A short description of yourself
//     * A list of your interests
//     * A list of your past positions that includes company/place name, title, short description of what you did
//     * A list of your skills

var name = "Jesse Payne";
var res = name.toUpperCase();
console.log("Name: " + res);

var career = "Songwriter/Web Developer";
console.log("Career: " + career);

var descript = "I believe that music is the emotional state of mathematics"
console.log("Description: " + descript);

console.log("\n");

console.log("My Interests:");
console.log("* Music Theory");
console.log("* Creative Writing");
console.log("* Science");
console.log("* Architecture");
console.log("\n");

console.log("Previous Experience:");

function displayPosition(company, job, title) {
    console.log("* I worked at " + company + " specializing in " + job + " under the title " + title + '.');
}
displayPosition('CMI Records', 'Songwriting', 'Recording Artist');
displayPosition('Payne Music', 'performance', 'musician');
displayPosition('Leitman, Siegal, and Payne', 'Courthouse filings', 'Office Assistant');
console.log("\n");

console.log("Skills:")

function displaySkill(skill, isCool) {
    if (isCool === true){
    console.log("* Check It: " + skill);
    } else {
        console.log("* " + skill);
    }
}


displaySkill('Classical Guitar', false);
displaySkill("Musical Theory", true);
displaySkill("Piano", false);
displaySkill("Drums", false);
displaySkill("Recording Engineer", true);
displaySkill("Tour Manangement", false);
displaySkill("Booking Agent", false);
displaySkill("Music Publisher", false);
displaySkill("Musical Composition", true);
