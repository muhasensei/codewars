// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples

// The output expected would be:
// apples, pears
// grapes
// bananas

// The code would be called like so:
// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

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
