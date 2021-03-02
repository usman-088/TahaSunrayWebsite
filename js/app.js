

//Get the button:
mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
        mybutton.style.display = "smooth";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



// form function in database


var db = firebase.database().ref('/user/')


// const form =  () =>{
function form() {

    let name = document.getElementById('name')
    let cName = document.getElementById('cName')
    let email = document.getElementById('email')
    let phoneNo = document.getElementById('phoneNo')
    let select = document.getElementById('select')
    let txtarea = document.getElementById('txtarea')
    let submit = document.getElementById('submit')



    let formData = {
        Email: email.value,
        Name: name.value,
        CompanyName: cName.value,
        CellNo: phoneNo.value,
        Select: select.value,
        Txtarea: txtarea.value

    }

    db.push(formData)
    console.log('form submit')


}