const categories = document.querySelectorAll(".item");

function getAllCategories(element) {
  return element.length;
}

function getEachCategoriesValues(element) {
  const data = [];
  element.forEach((item) => {
    const dataTemp = {};
    const categoryTitle = item.querySelector("h2");

    const categoryElements = item.querySelectorAll("ul li");

    dataTemp.title = categoryTitle.textContent;
    dataTemp.elCount = categoryElements.length;
    data.push(dataTemp);
  });
  return data;
}

console.log(`Number of categories: ${getAllCategories(categories)}`);
getEachCategoriesValues(categories).map((el) => {
  console.log(`Category: ${el.title}`);
  console.log(`Elements: ${el.elCount}`);
});
