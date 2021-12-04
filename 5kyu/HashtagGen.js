/*

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/

function generateHashtag(str) {
    if (str.match(/[a-zA-Z]/g)) { //check if it has at least some characters
        const res = (
            '#' + str.split(' ')
            .map(word => word.replace(/^\w/, first => first.toUpperCase()))
            .join('')
        );
        return res.length <= 140 ? res : false;
    }

    return false;
}

console.log(generateHashtag('a'.repeat(139)));