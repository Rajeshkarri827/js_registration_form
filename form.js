function submitForm(event) {
    event.preventDefault();

    // Retrieve form values
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("mail").value;
    let mobile = document.getElementById("mobile").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    // Display in the output area
    document.getElementById("output").innerText = `First Name: ${fname}, Last Name: ${lname}, Email: ${email}, Mobile: ${mobile}, Gender: ${gender}`;

    // Log data to console
    console.log(`First Name: ${fname}`);
    console.log(`Last Name: ${lname}`);
    console.log(`Email: ${email}`);
    console.log(`Mobile: ${mobile}`);
    console.log(`Gender: ${gender}`);

    // Clear form fields
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("mobile").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
}
