function loadingBar(num){
    let percentRepeats = num/10
    let percent = '%'.repeat(percentRepeats);
    let dotRepeats = 10 - num/10;
    let dots = '.'.repeat(dotRepeats);
    let result = `${num}% [${percent}${dots}]`;
    
    if (num < 100) {
        console.log(result);
        console.log('Still loading...');
    } else{
        result = `[${percent}${dots}]`;
        console.log(`${num}% Complete!`);
        console.log(result);
    }
}
loadingBar(100)