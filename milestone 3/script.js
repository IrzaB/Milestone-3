var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2> <b>Resume </b> </h2>\n    <h3> Personal  Information </h3>\n    <p> <b> Name:</b>".concat(name, " </P>\n    <p> <b> Email:</b>").concat(email, " </P>\n    <p> <b> Phone:</b>").concat(phone, " </P>\n    <p> <b> Education:</b>").concat(education, " </P>\n    <p> <b> Experience:</b>").concat(experience, " </P>\n    <p> <b> Skills:</b>").concat(skills, " </P>\n\n    <h3>Education</h3>\n    <p> ").concat(education, " </P>\n\n    <h3>Experience</h3>\n    <p> ").concat(experience, " </P>\n\n    <h3>Skills</h3>\n    <p> ").concat(skills, " </P>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display  Element Is Missing...');
    }
});
