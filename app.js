var plus = document.getElementsByClassName("btnplus")
var moin = document.getElementsByClassName("btnmoin")
var delet = document.getElementsByClassName("delet")
var cardd = document.getElementsByClassName("card")

for (const i of moin) {i.addEventListener("click",function () {
  if(i.previousElementSibling.innerHTML>0){
    i.previousElementSibling.innerHTML--
  }
  else(
    alert("this is the min")
  )
})
}
for (const i of plus) {i.addEventListener("click",function () {
  if (i.nextElementSibling.innerHTML<10) {
    i.nextElementSibling.innerHTML++
  }
  else(
    alert("this is the max")
  )
})
}

function deleteCard(button) {
  // Get the card element
  const card = button.parentNode.parentNode;
  // Remove the card from the DOM
  card.remove();
}

// Add event listeners to delete buttons
document.addEventListener('DOMContentLoaded', function() {
  const deleteButtons = document.querySelectorAll('.delet');
  deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
      deleteCard(button);
    });
  });
});

const favoriteIcon = document.getElementById('favorite-icon');

favoriteIcon.addEventListener('click', () => {
  favoriteIcon.classList.toggle('active');
});