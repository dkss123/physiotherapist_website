var firebaseConfig = {
  apiKey: "AIzaSyBCXySOHxGRnxWV8RkobkG3toqTLw6fBHs",
  authDomain: "review-859c4.firebaseapp.com",
  databaseURL: "https://review-859c4-default-rtdb.firebaseio.com/",
  projectId: "review-859c4",
  storageBucket: "review-859c4.appspot.com",
  messagingSenderId: "577939678847",
  appId: "1:577939678847:web:3298dad6374ad4d466c14a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.database();
var reviews = document.getElementById("reviews");
var reviewsRef = db.ref("/reviews");

reviewForm.addEventListener("submit", e => {

  var fullName = document.getElementById("fullName");
  var message = document.getElementById("message");
  var hiddenId = document.getElementById("hiddenId");

  var id = hiddenId.value || Date.now();

  db.ref("reviews/" + id).set({
    fullName: fullName.value,
    message: message.value,
    createdAt: firebase.database.ServerValue.TIMESTAMP
  })

})

reviewsRef.on("child_added", data=> {
  var li = document.createElement("li");
  li.id = data.key;
  li.innerHTML = reviewTemplate(data.val());
  reviews.appendChild(li);
})

function reviewTemplate({ fullName, message, createdAt }) {
  var createdAtFormatted = new Date(createdAt);

  return `
    <div class="review">
      <div>
        <label>Name:</label>
        <label class="fullName"><strong>${ fullName }</strong></label>
      </div>
      <div>
        <label>Message:</label>
        <label class="message">${ message }</label>
      </div>
    </div>
  `;
}