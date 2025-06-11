// 1. Alter the text color of the paragraph to a shade of aqua.
const body = document.querySelector("body");

body.style.color = "aqua";

// 2. Adjust the font size of the heading to 42 pixels.
const heading = document.querySelector("h1");
heading.style.fontSize = "42px";

// 3. Replace the text in the paragraph with the new Lorem Ipsum content.
const paragraph = document.querySelector("p");
paragraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna a libero interdum posuere. Donec vitae aliquet sapien. Vivamus sagittis erat a lacus tincidunt, vel feugiat odio ultrices"

// 4. Reduce the opacity of the 13th item to 30% transparency.
const itemThirteen = document.querySelector("#item-13");
itemThirteen.style.opacity = "30%"

// 5. Modify the text of the 3rd item to read "Greetings!"
const thirdItem = document.querySelector("#item-3");
thirdItem.innerText = "Greetings!"

// 6. Update the image below the list to display the new image.
const myImg = document.querySelector("img");
myImg.src = "https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=";
myImg.style.borderRadius = "50%";
myImg.style.width = "20rem";

// 7. Resize the new image to a height of 250 pixels.
myImg.style.height = "250px";

// 8. Integrate an additional image using innerHTML below the existing image.
const imgDiv = document.querySelector(".imgDiv")
imgDiv.innerHTML += '<img src="https://cdn.pixabay.com/photo/2017/09/17/09/12/sun-2757890_960_720.jpg" alt="sun">';

// 9. Adjust the height of the new image to 280 pixels programmatically.
imgDiv.style.height = "280px"
imgDiv.style.marginLeft = "10px"

// 10. Append a 16th <li> element to the list using innerHTML.
const list = document.querySelector('ul');
list.innerHTML += '<li class="item-17 id="item-17">17</li>'

// 11. Assign the same class as the other list items to the new <li> element using JavaScript.
// 12. Populate the new <li> with the text "Never gonna give you up."
const newList =document.querySelector('.item-17');
newList.innerText = "Never gonna give you up."