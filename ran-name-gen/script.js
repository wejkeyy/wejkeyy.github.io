const femaleNames = [
    "Alice", "Mia", "Emma", "Olivia", "Sophia", "Ava", "Isabella", "Emily", "Charlotte", "Amelia", 
    "Lily", "Grace", "Hannah", "Chloe", "Ella"
];

const maleNames = [
    "Lucas", "Nick", "Alex", "John", "Michael", "David", "James", "Robert", "Daniel", "Matthew", 
    "Christopher", "Joseph", "William", "Andrew", "Thomas"
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
