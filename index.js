function WordFrequency (str, sortby = "desc") {
  return new Promise((resolve) => {
    const compare = (a, b) => {
      if (sortby === "desc") {
        if (a.count > b.count) {
          return -1;
        }
        if (a.count < b.count) {
          return 1;
        }
        return 0;
      } else if (sortby === "asc") {
        if (a.count < b.count) {
          return -1;
        }
        if (a.count > b.count) {
          return 1;
        }
        return 0;
      }
    };

    let strArr = str.split(" ");
    let formattedList = [];

    for (let i = 0; i < strArr.length; i++) {
      // alert(strArr[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase());
      let word = strArr[i]
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .toLowerCase();
      if (
        word !== "" &&
        formattedList.findIndex((el) => el.word === word) === -1
      ) {
        formattedList.push({ word: word, count: 1 });
      } else if (
        word !== "" &&
        formattedList.findIndex((el) => el.word === word) >= 0
      ) {
        formattedList[
          formattedList.findIndex((el) => el.word === word)
        ].count += 1;
      }
    }

    resolve(formattedList.sort(compare));
  });
};

export { WordFrequency };
