const birthType = {
    species:['Human','Animal','Bird','Fish','Insect','Reptile','Dragon','Dinasaur'],
    specificType:['Male','Female'],
    superPower:['Can Fly Faster!','Can Speak!','Can Swim underwater!','Can be invisible!','Throw Flames!','Can see in night!','Can run Faster!','Can play Piano!','Can do magic!','Can Jump higher!'],
    planet:['Earth','Mars','jupiter','Uranus','Saturn','Neptune','Mercury','Venus','Unknown Planet'],
    eatingHabit:['Carnivore','Herbivore'],
    year:['1990','1700','1200','1300','1500','1980','1800','You Time Travel'],
    friend:['Human','Animal','Bird','Fish','Insect','Reptile','Dragon','Dinasaur'],
};

let randomNumber = (num) => {
    return Math.floor(Math.random()*num);
}

let finalDecision = [];
console.log('    _______________');
console.log('====|=============|=');
console.log('====|=============|===');
console.log('====|=============|=======');
console.log('====|=============|===========');
console.log('  WELCOME TO THE MATRIX');
console.log('====|=============|===========');
console.log('====|=============|=======');
console.log('====|=============|===');
console.log('    |_____________|');

console.log('YOU ARE GONNA EXPERIENCE THE PREVIOUS BIRTH VERSION OF YOU');
console.log('\n');
console.log('GETTING FILES...');
console.log('\n');
console.log('INITIATING MATRIX SERVER...');
console.log('.');
console.log('.');
console.log('.');
console.log('.');
console.log('.');
console.log('\n');

console.log('DURING THE VERSION 1.0 YOU ARE.....');
console.log('\n');

for(let i in birthType)
{
    let specificNumber = randomNumber(birthType[i].length);
    switch(i)
    {
        case 'species':
            finalDecision.push('YOU ARE A '+birthType[i][specificNumber].toUpperCase()+"."+"\n");
            break;
        case "specificType":
            finalDecision.push('AND YOU ARE A '+birthType[i][specificNumber].toUpperCase() + " ONE."+"\n");
            break;
        case "superPower":
            finalDecision.push('YOU '+birthType[i][specificNumber].toUpperCase()+"."+"\n");
            break;
        case "planet":
            finalDecision.push('YOUR PLANET IS '+birthType[i][specificNumber].toUpperCase()+"."+"\n");
            break;
        case "eatingHabit":
                finalDecision.push('YOU ARE A '+birthType[i][specificNumber].toUpperCase()+"."+"\n");
                break;
        case "year":
            finalDecision.push('YOU LIVED AT THE TIME OF'+birthType[i][specificNumber].toUpperCase()+"."+"\n");
            break;
        case "friend":
                finalDecision.push('YOU ARE A FRIEND OF'+birthType[i][specificNumber].toUpperCase()+".");
                break;
        default:
            finalDecision.push('===========');
            finalDecision.push('YOU ARE A GOD!');
            finalDecision.push('===========');
            break;
    }
}

let asciiFormat = (final)=> {
    console.log('==========================');
    console.log('LOADING INTERFACE...');
    console.log('MATRIX RECORDS SHOW THAT...');
    
    console.log('\n');
    
    console.log(' /\\/\\/\\/\\/\\/\\/\\/\\');
    console.log(' |              |');
    console.log('|   ===     ===  |');
    console.log('|   0        0   |');
    console.log('|        |       |');
    console.log('|        <       |');
    console.log(' |              |');
    console.log('  |   ------   |');
    console.log('   \\          /');
    console.log('     \\\/\\/\\/\\/   ');
    console.log('\n');

    let finalChoice = final.join(' ');
    console.log(finalChoice);
    console.log('========================');
    console.log('\n');
    console.log('========================');
    console.log('THANK YOU FOR CONTACT MATRIX.');
    console.log('EXITING MATRIX');
    console.log('========================');
}

asciiFormat(finalDecision);