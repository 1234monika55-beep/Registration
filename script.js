document.getElementById("regForm").addEventListener("submit", function(e)

{

let confirmBox = document.getElementById("confirm")

if(!confirmBox.checked)

{

alert("Please confirm the details before submitting")

e.preventDefault()

}

else

{

alert("Registration Submitted Successfully!")

}

})