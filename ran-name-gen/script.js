const femaleNames = [
    "Alice", "Emma", "Olivia", "Sophia", "Isabella", "Ava", "Mia", "Amelia", "Charlotte", "Harper", 
    "Evelyn", "Abigail", "Ella", "Elizabeth", "Sofia", "Avery", "Scarlett", "Emily", "Aria", "Luna", 
    "Layla", "Mila", "Chloe", "Victoria", "Gianna", "Grace", "Nora", "Riley", "Zoey", "Hannah",
    "Lily", "Addison", "Aubrey", "Ellie", "Stella", "Natalie", "Zoe", "Leah", "Hazel", "Violet",
    "Aurora", "Savannah", "Audrey", "Brooklyn", "Bella", "Claire", "Skylar", "Lucy", "Paisley", "Everly",
    "Anna", "Samantha", "Caroline", "Kennedy", "Genesis", "Aaliyah", "Kinsley", "Allison", "Sarah", "Madelyn",
    "Madeline", "Adeline", "Vivian", "Reagan", "Julia", "Alice", "Delilah", "Sophie", "Josephine", "Ivy",
    "Jade", "Cora", "Quinn", "Nevaeh", "Sadie", "Piper", "Ruby", "Serenity", "Willow", "Everleigh",
    "Alyssa", "Mackenzie", "Ariana", "Gabriella", "Naomi", "Maria", "Ariana", "Taylor", "Hadley", "Isabelle",
    "Elena", "Autumn", "Maya", "Hailey", "Natalia", "Ashley", "Brianna", "Bella", "Claire", "Violet",
    "Lillian", "Samantha", "Makayla", "Vivienne", "Arya", "Kimberly", "Eleanor", "Faith", "Isabel", "Alexis",
    "Rylee", "Isla", "Catherine", "Jessica", "Isla", "Paislee", "Melanie", "Brooke", "Katherine", "Emery"
];

const maleNames = [
    "Liam", "Noah", "James", "Lucas", "Mason", "Ethan", "Alexander", "Henry", "Jacob", "Michael", 
    "Daniel", "Logan", "Jackson", "Sebastian", "Jack", "Aiden", "Owen", "Samuel", "Matthew", "Joseph", 
    "Levi", "Mateo", "David", "John", "Wyatt", "Carter", "Julian", "Luke", "Grayson", "Isaac",
    "Jake", "Nick", "Richard", "Benjamin", "Joshua", "Anthony", "Andrew", "Christopher", "Thomas", "Charles",
    "Elijah", "Gabriel", "Caleb", "Nathan", "Ryan", "Dylan", "Hunter", "Nicholas", "Isaiah", "Eli",
    "Adam", "Robert", "Tyler", "Zachary", "Connor", "Landon", "Justin", "Austin", "Dominic", "Jaxon",
    "Greyson", "Josiah", "Brandon", "Kevin", "Jose", "Asher", "Cole", "Lincoln", "Miles", "Blake",
    "Kingston", "Carlos", "Jason", "Roman", "Easton", "Parker", "Xavier", "Damian", "Leo", "Harrison",
    "Gavin", "Adrian", "Nolan", "Elias", "Aaron", "Carson", "Robert", "Brayden", "Kaden", "Cameron",
    "Nathaniel", "Evan", "Angel", "Cooper", "Jeremiah", "Axel", "Connor", "Jameson", "Leonardo", "Ryder",
    "Theodore", "Kayden", "Vincent", "Bentley", "Miles", "Sawyer", "Chase", "Holden", "Braxton", "Karter",
    "King", "Graham", "Bennett", "Jasper", "Emmett", "Kaiden", "Zayden", "Emiliano", "Barrett", "Beckett"
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
