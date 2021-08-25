const list2 = [
    100,
    200,
    400,
    500,
    400000000,
    1
];



function arithmeticMedian(list1) {
    const list = list1.sort(function(a,b){return a - b;})
    let median;
    const halflist = parseInt(list.length / 2);

    if ((list.length % 2) === 0) {
        median = (list[halflist] + list[halflist - 1]) / 2;
    } else {
        median = list[halflist]
    }
    return median;
}