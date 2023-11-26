function formatWord(word) {
    word = word.trim().toLowerCase();
    word = word.split("").map((el, index) => !!index ? el : el.toUpperCase()).join("");
    return word;
}

module.exports = formatWord;