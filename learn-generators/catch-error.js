function* upper(items) {
  let i = 0;
  while (i < items.length) {
    try {
      yield items[i].toUpperCase();
    } catch (e) {
      yield null;
    }
    i++;
  }
}

var bad_items = ["a", "B", 1, "c"];

for (var item of upper(bad_items)) {
  console.log(item);
}
