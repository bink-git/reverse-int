module.exports = function reverse(n) {
    const res = String(n).split("").reverse().join("");
    return parseInt(res);
};
