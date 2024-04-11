const icons = document.querySelectorAll('.icon');
const items = document.querySelectorAll('.item');

// Select item

function selectItem(e) {
    removeShow();
    // Grab content item from the DOM
    const item = document.querySelector(`#${this.id}-content`);
    // Add show 
    
    console.log("item", this.id)
    item.classList.add('show');
}

function removeShow() {
    items.forEach(iconn => iconn.classList.remove('show'));
}

// Listen for tab click
icons.forEach(iconn => iconn.addEventListener('click', selectItem));

const button = document.getElementById("button");

button.addEventListener("click", function() {
    // Function to execute when the button is clicked
    alert("Hi!");
});

document.querySelectorAll('ul li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('ul li').forEach(element => {
            element.style.color = 'white';
        });

        item.style.color = 'blue';

        document.querySelector('.ahome').style.color = 'white';
    });
});

document.querySelector('.ahome').addEventListener('click', () => {

    document.querySelectorAll('ul li').forEach(element => {
        element.style.color = 'white';
    });

    document.querySelector('.ahome').style.color = 'blue';
});

const menu_btn = document.querySelector('.ham');
const mobile_menu = document.querySelector('.mobile-ul')

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});
