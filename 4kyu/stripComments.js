function commentStripper(input, markers) {
    const sentences = input.split('\n');
    const result = sentences.reduce((acc, sentence) => {
        const marker = markers.find((marker) => sentence.includes(marker));
        const markerIndex = sentence.indexOf(marker);
        if (markerIndex === -1) {
            return [...acc, sentence];
        }
        return [...acc, sentence.slice(0, markerIndex).trim()];
    }, []);
    return result.join('\n');
};

console.log(commentStripper('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']));
console.log(commentStripper("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));
