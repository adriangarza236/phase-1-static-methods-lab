class Formatter {
  static capitalize(string) {
    const firstLetter = string.charAt(0).toUpperCase()
    const theRest = string.slice(1)
    return firstLetter + theRest
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string) {
    const words = string.split(" ");
    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"].includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });
    return titleizedWords.join(" ");
  }

}