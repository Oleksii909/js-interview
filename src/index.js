// Task 1 - filter items, where a > 5 and extend with
// new field *sum* with value a + b
const itemsArray = [
  { a: 1, b: 3 },
  { a: 3, b: 3 },
  { a: 6, b: 3 },
  { a: 10, b: 10 },
  { a: 41, b: 1 },
  { a: 0, b: 4 }
];

function filterAndExtendArrayItems(items) {
  console.log(items.filter((item) => item.a > 5).map( (item) => item.a + item.b))
}

function filterArray(items){
    return items.filter((i) => i.a > 5).map((i) => i.a+i.b)
}

filterAndExtendArrayItems(itemsArray)

// Task 2 - merge arrays and remove duplicates
const arNum = [1, 2, 3, 4, 5, 6];
const arNum2 = [15, 6, 3, 20, 11];

function mergeArraysWithoutDuplicates(array1, array2) {
console.log([...array1, ...array2.filter((o) => array1.indexOf(o) < 0)])
}
mergeArraysWithoutDuplicates(arNum, arNum2)


let mergeArrWithoutDuplicates = (arr1, arr2) => {
    console.log([...arr1, ...arr2.filter((o) => !~arr1.indexOf(o))])
} 
mergeArrWithoutDuplicates(arNum, arNum2)

arNum2.forEach(e => {
    console.log(arNum.indexOf(e))
});

function mergeArraysWithoutDuplicatesSet(array1, array2) {
    console.log([...new Set([...array1, ...array2])])
    }
mergeArraysWithoutDuplicatesSet(arNum, arNum2)

// Task 3 - write a function for n! (factorial) calculation
function factorial(n) {
    let factor = 1;
    for (let i=1; i<=n; i++) {
        factor *= i
    }
    console.log(factor);
}

factorial(5)

factorial2 = function (n) {
    if ( n<1 ) {
        return 1
    }
    else {
        return n*factorial2(n-1);
    }
}
console.log(factorial2(5));

// Task 4 - rewrite this function
const sum = (a, b) => {
    return a + b;
};

const sum2 = (a,b) => a+b;