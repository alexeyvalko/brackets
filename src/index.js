module.exports = function check(str, bracketsConfig) {
    let newStr = str;
    let newArr = [];
    bracketsConfig.forEach((item) => {
        newArr.push(item.join(""));
    });

    for (let i = 0; i < newArr.length; i++) {
        if (newStr.includes(newArr[i])) {
            newStr = newStr.replace(newArr[i], "");
            i = -1;
        }
    }

    return newStr ? false : true;
};
