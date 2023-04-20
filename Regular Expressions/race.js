function race(data){
   let participants = data.shift().split(", ");
   let participantsInfo = {};
   for (let name of participants) {
    participantsInfo[name] = 0;
   }
   let regexName = /[A-Za-z]/g;
   let regexDigits = /[0-9]/g;

   for (let line of data) {
    if (line === 'end of race') {
        break;
    }
    let name = line.match(regexName).join("");
    let digits = line.match(regexDigits);
    let distance = 0;
    for (let num of digits) {
        num = Number(num);
        distance += num;
    }
    if (participantsInfo.hasOwnProperty(name)) {
        participantsInfo[name] += distance
    }
   }
   let sortedParticipants = Object.entries(participantsInfo).sort((a, b) => b[1] - a[1]);
   console.log(`1st place: ${sortedParticipants[0][0]}`);
   console.log(`2nd place: ${sortedParticipants[1][0]}`);
   console.log(`3rd place: ${sortedParticipants[2][0]}`);
}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
)
console.log("__________________________________");
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
)