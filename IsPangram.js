function isPangram(string){
    const uniqueLetters = string.split('').reduce((acc, letter) => {
        if(!acc.includes(letter) && letter.match(/[A-Za-z]/) !== null){
            return [letter, ...acc];
        }
        return acc;
    }, [])

    if(uniqueLetters.length >= 26){
        return true;
    }

    return false;
}
console.log(isPangram('aaasdads sdasdsads dsdaa'));