const coursesGrid = document.getElementById("courses-display-container");

function CreateDiv(className) {
    var div = document.createElement("div");
    const attr = document.createAttribute("class");
    attr.value = className;
    div.setAttributeNode(attr);
    return div;
}

function ShowCourses(categorie) {
    //Empty the table content
    coursesGrid.innerText = "";
    //Count 3 courses per line
    let counter = 0;
    var row = CreateDiv("courses-grid");

    courses.forEach((element) => {
        if (categorie === element.category || categorie === "All") {
            const courseInfo = CreateDiv("courses-grid-info");

            courseInfo.innerHTML =
                '<img src="' +
                element.image +
                '" alt="' +
                element.title +
                '" /><p>' +
                element.title +
                "</p><p><b>$" +
                element.price +
                "</b></p>";

            row.appendChild(courseInfo);
            counter++;

            if (counter === 3) {
                counter = 0;
                coursesGrid.appendChild(row);
                row = CreateDiv("courses-grid");
            }
        }
    });
    coursesGrid.appendChild(row);
}

//Show all courses by default
ShowCourses("All");
