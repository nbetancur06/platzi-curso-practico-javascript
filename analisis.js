//Mediana
function arithmeticMedian(list1) {
    const list = list1.sort(function(a,b){return a - b;});
    let median;
    const halflist = parseInt(list.length / 2);

    if ((list.length % 2) === 0) {
        median = (list[halflist] + list[halflist - 1]) / 2;
    } else {
        median = list[halflist];
    }
    return median;
}

//Lista General
const salaryCol = colombia.map(
    function (person) {
        return person.salary;
    }
)
const salaryColSorted = salaryCol.sort(function(a,b){return a - b;});
const generalMedianCol = arithmeticMedian(salaryCol);

//Mediana top 10%
const spliceStart = (salaryColSorted.length * 90 /100);
const spliceCount = salaryColSorted.length - spliceStart;
const salaryTop10Col = salaryColSorted.splice(spliceStart, spliceCount);



const top10MedianCol = arithmeticMedian(salaryTop10Col);




console.log({
    generalMedianCol,
    top10MedianCol
});