//Get Elements
const coursesGrid = document.getElementById("courses-display-container");
const title = document.getElementById("courses-search");
const price = document.getElementById("courses-price");
const priceText = document.getElementById("courses-filter-price-value");

function PriceSlider() {
    priceText.innerText = price.value;
}

function CreateDiv(className) {
    var div = document.createElement("div");
    const attr = document.createAttribute("class");
    attr.value = className;
    div.setAttributeNode(attr);
    return div;
}

function ShowCourses(category) {
    //Empty the table content
    coursesGrid.innerText = "";
    //Count 3 courses per line
    let counter = 0;
    var row = CreateDiv("courses-grid");

    for (let index in courses) {
        //Filter by category
        if (category !== "All" && category !== courses[index].category) {
            continue;
        }
        if (title.value !== "" && !courses[index].title.includes(title.value))
            continue;
        //Filter by price
        if (courses[index].price > price.value) continue;

        const courseInfo = CreateDiv("courses-grid-info");

        courseInfo.innerHTML =
            '<img src="' +
            courses[index].image +
            '" alt="' +
            courses[index].title +
            '" /><p>' +
            courses[index].title +
            "</p><p><b>$" +
            courses[index].price +
            "</b></p>";

        row.appendChild(courseInfo);
        counter++;

        if (counter === 3) {
            counter = 0;
            coursesGrid.appendChild(row);
            row = CreateDiv("courses-grid");
        }
    }
    coursesGrid.appendChild(row);

    //Check if no course found
    if (coursesGrid.innerHTML === '<div class="courses-grid"></div>') {
        coursesGrid.innerHTML = "<p>No course found!</p>";
    }
}

//Show all courses by default
ShowCourses("All");
