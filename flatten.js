var array = [[1, 2, [3]], 4];
console.log(flatten(array));
function flatten(array, mutable) {
    var toString = Object.prototype.toString;
    var arrayTypeStr = '[object Array]';
    // Initialize an empty array
    var result = [];
    var nodes = (mutable && array) || array.slice();
    var node;
    // If the array is empty then return the result
    if (!array.length) {
        return result;
    }
    node = nodes.pop();
    // For each sub array in the larger array, remove the sub array and flatten it.
    do {
        if (toString.call(node) === arrayTypeStr) {
            nodes.push.apply(nodes, node);
        } else {
            result.push(node);
        }
    } while (nodes.length && (node = nodes.pop()) !== undefined);
    // The result would be reversed so restore original order
    result.reverse();
    return result;
}
