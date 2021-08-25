const list3 = [
    1,
    2,
    2,
    3,
    4,
    1,
    34,
    3,
    2,
    1,
    4,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5
];


function arithmeticMode(list) {
    const list3Count = {};

    list3.map(
        function(element) {
            if (list3Count[element]) {
                list3Count[element]++;
            } else {
                list3Count[element] = 1;
            }      
        }
    );
    let mode = 0;
    const modeArray = [];
    for (let i in list3Count) {
        if (list3Count[i] > mode) {
            modeArray.splice(0, modeArray.length);
            modeArray.push(i);
            mode = list3Count[i];
        } else if (list3Count[i] === mode) {
            modeArray.push(i);
        }
    }
    return modeArray;
}