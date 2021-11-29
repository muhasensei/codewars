/*
Take the following IPv4 address: 128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

Examples
2149583361 ==> "128.32.10.1"
32         ==> "0.0.0.32"
0          ==> "0.0.0.0"
*/


//first version


function first(int32){
    let [binary, len] = [int32.toString(2), int32.toString(2).length];
    for (let i = 0; i < 32 - len; i++) {
        binary = '0' + binary;
    }
    return binary.match(/.{1,8}/g).map((i) => parseInt(i, 2)).join('.');
}


//second solution
function second(int32){
    return (
          new Array(32 - int32.toString(2).length)
          .fill(0)
          .join('') + int32.toString(2)
        )
        .match(/.{1,8}/g)
        .map(i => parseInt(i, 2))
        .join('.');
}

console.log(second(32));
console.log(second(2149583361));
console.log(second(0));

//which one is better???
