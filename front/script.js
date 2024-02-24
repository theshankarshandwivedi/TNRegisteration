let submitBtn = document.querySelector('[submit]');
const checkbox = document.querySelectorAll('input[type=checkbox]');
const inputs = document.querySelectorAll('input[type=text]');
const scholar = document.querySelector('[scholar]');
const mail = document.querySelector('[mail]');
const contact = document.querySelector('[contact]');
const branch = document.querySelector('[branch]');
const year = document.querySelector('[year]');

var formdata = {
    name: "",
    year: null,
    scholarId: null,
    branch: "",
    email: "",
    contact: null,
    verticals: []
}

branch.addEventListener('change', (event) => {
    formdata.branch = event.target.value;
})

scholar.addEventListener('change', (event) => {
    formdata.scholarId = event.target.value;
});

mail.addEventListener('change', (event) => {
    formdata.email = event.target.value;
});

contact.addEventListener('change', (event) => {
    formdata.contact = event.target.value;
});

inputs[0].addEventListener("change", (event) => {
    formdata.name = event.target.value;

})
year.addEventListener("change", (event) => {
    formdata.year = event.target.value;
});

submitBtn.addEventListener('click', async (event) => {
    // event.preventDefault();

    const chceckedBoxes = document.querySelectorAll("input[type=checkbox]:checked");
    for (let i = 0; i < chceckedBoxes.length; i++) {
        formdata.verticals[i] = chceckedBoxes[i].value;
    }
    console.log(formdata);

    let response = await fetch("http://localhost:3000/api/v1/register", {
        method: "POST",
        body: JSON.stringify(formdata),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((data) => {
            console.log(data);
            alert("Form Submitted Successfully");
        })
        .catch((err) => {
            console.log(err);
        })
});
