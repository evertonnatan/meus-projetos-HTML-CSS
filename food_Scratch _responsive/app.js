window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle')
    const navigation = document.querySelector('navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

const inputs = document.querySelectorAll(".input")

function focusFunc() {
    let parent = this.parentNode
    parent.classList.add("focus")
}

function blurFunc() {
    let parent = this.parentNode
    if(this.value == "") {

        parent.classList.remove("focus")
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc)
    input.addEventListener("blur", blurFunc)
})