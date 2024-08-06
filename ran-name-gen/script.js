const femaleNames = [
    "Alice", "Mia", "Emma", "Olivia", "Sophia", "Ava", "Isabella", "Emily", "Charlotte", "Amelia", 
    "Lily", "Grace", "Hannah", "Chloe", "Ella", "Madison", "Abigail", "Elizabeth", "Samantha", "Avery",
    "Sofia", "Camila", "Aria", "Scarlett", "Victoria", "Mila", "Luna", "Layla", "Zoe", "Stella",
    "Aurora", "Natalie", "Emilia", "Savannah", "Penelope", "Brooklyn", "Bella", "Riley", "Nora", "Ellie"
];

const maleNames = [
    "Lucas", "Nick", "Alex", "John", "Michael", "David", "James", "Robert", "Daniel", "Matthew", 
    "Christopher", "Joseph", "William", "Andrew", "Thomas", "Ethan", "Liam", "Mason", "Logan", "Benjamin",
    "Elijah", "Jacob", "Alexander", "Jackson", "Sebastian", "Aiden", "Owen", "Henry", "Gabriel", "Julian",
    "Levi", "Isaac", "Samuel", "Carter", "Jayden", "Luke", "Dylan", "Grayson", "Jack", "Wyatt"
];

const bothNames = femaleNames.concat(maleNames);

function generateName(type) {
    let nameList;
    if (type === 'female') {
        nameList = femaleNames;
    } else if (type === 'male') {
        nameList = maleNames;
    } else {
        nameList = bothNames;
    }
    const randomIndex = Math.floor(Math.random() * nameList.length);
    document.getElementById('nameDisplay').innerText = nameList[randomIndex];
}
