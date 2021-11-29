var AutoIncrementUserId = 1000;
var AutoIncrementCourseId = 100;
var user = /** @class */ (function () {
    function user(name, age, mobilenumber) {
        AutoIncrementUserId++;
        this.UserId = "CE" + AutoIncrementUserId.toString();
        this.Name = name;
        this.Age = age;
        this.MobileNumber = mobilenumber;
    }
    return user;
}());
var courses = /** @class */ (function () {
    function courses(coursename, requireddays, userid) {
        AutoIncrementCourseId++;
        this.CourseName = coursename;
        this.RequiredDays = requireddays;
        this.UserId = userid;
        this.CourseId = "C" + AutoIncrementCourseId.toString();
    }
    return courses;
}());
//Creating arrays
var UserDetailsArray = new Array();
var CoursesEnrolledArray = new Array();
function newuser() {
    var homepage = document.getElementById("maindiv");
    var register = document.getElementById("newuserdiv");
    homepage.style.display = "block";
    register.style.display = "none";
    var username = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    var mobile = parseInt(document.getElementById("mobilenumber").value);
    var s = new user(username, age, mobile);
    UserDetailsArray.push(s);
    if (username.trim() == "" || age == null || mobile == null) {
        alert("Please enter the Fields!");
    }
    else {
        alert("your id is ".concat(s.UserId));
    }
}
function userlogin() {
    var homepage = document.getElementById("maindiv");
    var login = document.getElementById("logindiv");
    login.style.display = "block";
    homepage.style.display = "none";
}
function adduser() {
    var register = document.getElementById("newuserdiv");
    var homepage = document.getElementById("maindiv");
    register.style.display = "block";
    homepage.style.display = "none";
}
function validateuser() {
    var uid = document.getElementById("userid").value;
    var count = 0;
    for (var i = 0; i < UserDetailsArray.length; i++) {
        if (uid == UserDetailsArray[i].UserId) {
            alert("Entered Id is available! You are welcome.");
            var login = document.getElementById("logindiv");
            var option = document.getElementById("optiondiv");
            option.style.display = "block";
            login.style.display = "none";
            break;
        }
        else {
            count++;
        }
    }
    if (count == UserDetailsArray.length) {
        alert("Please enter valid User Id!");
    }
}
function courseenrolldiv() {
    var option = document.getElementById("optiondiv");
    var courseenroll = document.getElementById("courseenrolldiv");
    courseenroll.style.display = "block";
    option.style.display = "none";
}
function coursedetailsdiv() {
    var option = document.getElementById("optiondiv");
    var enrolledcourse = document.getElementById("coursedetailsdiv");
    enrolledcourse.style.display = "block";
    option.style.display = "none";
    var userid = document.getElementById("userid").value;
    var coursename = document.getElementById("courseslist");
    var countday = 0;
    var total = document.getElementById("dayscount");
    for (var i = 0; i < UserDetailsArray.length; i++) {
        if (userid == UserDetailsArray[i].UserId) {
            for (var j = 0; j < CoursesEnrolledArray.length; j++) {
                if (UserDetailsArray[i].UserId == CoursesEnrolledArray[j].UserId) {
                    coursename.innerHTML += CoursesEnrolledArray[j].CourseName + "<br>";
                    coursename.style.visibility = "visible";
                    coursename.style.color = "brown";
                    countday += CoursesEnrolledArray[j].Requireddays;
                }
                total.innerHTML = countday.toString();
                total.style.visibility = "visible";
                total.style.color = "brown";
            }
        }
    }
}
function enrolledcourse() {
    var enrolledcourse = document.getElementById("coursedetailsdiv");
    var option = document.getElementById("optiondiv");
    var courseenroll = document.getElementById("courseenrolldiv");
    option.style.display = "block";
    enrolledcourse.style.display = "none";
    courseenroll.style.display = "none";
    alert("successfully Enrolled your course");
}
function course() {
    for (var i = 0; i < UserDetailsArray.length; i++) {
        var result = document.getElementById("courseslist");
        console.log(UserDetailsArray[i]);
    }
}
