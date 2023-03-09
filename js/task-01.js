const categoriesList = document.querySelector("ul#categories");
console.log(`Number of categories: ${categoriesList.childElementCount}`);

const cagegoriesListItem = document.querySelectorAll(".item");
cagegoriesListItem.forEach(listItem => {
    console.log(`Category: ${listItem.children[0].textContent}`);
    console.log(`Elements: ${listItem.children[1].childElementCount}`);
})