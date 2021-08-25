const list1 = [
    100,
    200,
    300,
    500
];

function arithmeticAverage(list) {
    /* let sumList = 0;
    for (let i = 0; i < list.length; i++) sumList += list[i]; */
    const sumList = list.reduce(
        function(accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );

    return sumList / list.length;
}