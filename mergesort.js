function mergesort(arr) {
    if (arr.length <= 1)
        return arr;

    let halfIdx = arr.length / 2 | 0;

    let c1 = mergesort(arr.slice(0, halfIdx)),
        c2 = mergesort(arr.slice(halfIdx));

    return merge(c1, c2);
}

function merge(arrL, arrR) {
    let arr = [];

    while(arrL.length || arrR.length) {
        if (! arrL.length)
            [arrL, arrR] = [arrR, arrL];

        if (! arrR.length)
            while (arrL.length)
                arr.push(arrL.shift());

        if (arrL[0] <= arrR[0]) {
            arr.push(arrL.shift());
        } else {
            [arrL, arrR] = [arrR, arrL];
        }
    }

    return arr;
}

try {
    module.exports = {
        merge,
        mergesort,
    };
} catch (e) {}

