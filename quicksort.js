function partition(arr, pivot, l = 0, r = arr.length - 1) {
    if (!arr.slice(l, r).length)
        return {boundary: l, arr};
    console.log('\tpartitioning arr', arr, 'with pivot', pivot, 'from', l, 'to', r);

    while (l < r) {
        for (; l < r && arr[l] <= pivot ; l++){
            console.log(`l: ${l}, arr[l]: ${arr[l]}`)
        };
        console.log(`exitting l loop at l = ${l}`);
        for (; l < r && arr[r] > pivot ; r--){
            console.log(`r: ${r}, arr[r]: ${arr[r]}`)
        };
        console.log(`exitting r loop at r = ${r}`);

        if (l < r) {
            console.log(`swapping ${l} with ${r}`);
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++; r--; // Restoring the limits to their correct values
        }
    }
    console.log('\tafter partitioning', arr, 'l', l, 'r', r);

    let boundary = l;
    if (arr[boundary] < pivot)
        boundary++;

    return {boundary, arr};
};

function quicksort(arr, l = 0, r = arr.length - 1) {
    if (r - l <= 0)
        return;

    let pivot = arr[randBetween(l, r)];
    let b = partition(arr, pivot, l, r).boundary;
    console.log('got partition as', b);
    quicksort(arr, l, b - 1);
    quicksort(arr, b, r);

    return arr;
}

function rand(max) {
    let r = Math.random() * 10 ** Math.ceil(max / 10);
    return Math.round(r % max);
}

function randBetween(low, high) {
    let diff = high - low;
    return rand(diff) + low;
}

module.exports = {
    partition,
    quicksort,
}

