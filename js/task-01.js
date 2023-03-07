const ulWithId = document.querySelector("ul#categories");
console.log(`Number of categories: ${ulWithId.childElementCount}`);

const listWithClass = document.querySelectorAll(".item");
listWithClass.forEach(listItem => {
    console.log(`Category: ${listItem.children[0].textContent}`);
    console.log(`Elements: ${listItem.children[1].childElementCount}`);
})