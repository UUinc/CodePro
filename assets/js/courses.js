const coursesGrid = document.getElementById("courses-display-container");

function ShowCourses(categorie) {
    //Empty the table content
    coursesGrid.innerText = "";
    //Count 3 courses per line
    let counter = 0;
    var row = document.createElement("div");
    const attr = document.createAttribute("class");
    attr.value = "courses-grid";
    row.setAttributeNode(attr);

    courses.forEach((element) => {
        if (categorie === element.categorie || categorie === "All") {
            const courseInfo = document.createElement("div");
            const attr = document.createAttribute("class");
            attr.value = "courses-grid-info";
            courseInfo.setAttributeNode(attr);

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
                row = document.createElement("div");
                const attr = document.createAttribute("class");
                attr.value = "courses-grid";
                row.setAttributeNode(attr);
            }
        }
    });
    coursesGrid.appendChild(row);
}

//Show all courses by default
ShowCourses("All");

{
    /* 
<div class="courses-grid">
    <div class="courses-grid-info">
        <img src="assets/images/courses/html.jpg" alt="" />
        <p>courses 1</p>
        <p><b>$19.9</b></p>
    </div>
    <div class="courses-grid-info">
        <img src="assets/images/courses/html.jpg" alt="" />
        <p>courses 1</p>
        <p><b>$19.9</b></p>
    </div>
    <div class="courses-grid-info">
        <img src="assets/images/courses/html.jpg" alt="" />
        <p>courses 1</p>
        <p><b>$19.9</b></p>
    </div>
</div> 
*/
}
