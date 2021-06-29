/**
 * Selection sort --- is quite similar to bubble sort 
 *              -- but in Selection sort the smallest element accumulate at the start 
 * 
 * - we start at the beggining at i= 0
 * - We find the minimum value after each iteration and put it at the biggening
 */
function swap(arr, i1, i2) {
    var c = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = c;
}
//My- Approach
function selection_sort_1(arr) {
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        var index_start = i;
        for (var j = i; j < arr.length; j++) {
            var smallest;
            if (i == j) {
                var index_smallest = i;
                smallest = arr[i];
            }
            if (smallest > arr[j]) {
                smallest = arr[j];
                index_smallest = j;
            }
            count++;
        }
        swap(arr, index_start, index_smallest);
    }
    console.log(count);
    return arr;
}

console.log(selection_sort_1([13, 1, 13, 6, -5, 4, 2, -2]));
//O(n) = n²

//Optimum approach
function selection_sort_2(arr) {
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        var lowest_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest_index])
                lowest_index = j;
            count++;
        }
        swap(arr, i, lowest_index);
    }
    console.log(count);
    return arr;
}

console.log(selection_sort_2([13, 1, 13, 6, -5, 4, 2, -2]));
//O(n) = n²


