let AutoIncrementUserId = 1000;
let AutoIncrementCourseId = 100;

class user
{
    UserId:string;
    Name:string;
    Age:number;
    MobileNumber:number;
    

    constructor(name:string, age:number, mobilenumber:number)
    {
        AutoIncrementUserId++;
        this.UserId = "CE" + AutoIncrementUserId.toString();
        this.Name = name;
        this.Age = age;
        this.MobileNumber = mobilenumber;
        

    }
}

class courses
{
    CourseName:string;
    RequiredDays:number;
    UserId:string;
    CourseId: string;

    constructor(coursename:string, requireddays:number, userid:string)
    {
        AutoIncrementCourseId++;
        this.CourseName = coursename;
        this.RequiredDays = requireddays;
        this.UserId = userid;
        this.CourseId = "C" + AutoIncrementCourseId.toString();
                
    }
}

//Creating arrays
let UserDetailsArray:Array<user> = new Array<user>();
let CoursesEnrolledArray:Array<user> = new Array<user>();

function newuser()
{
    
    let homepage = (document.getElementById("maindiv")as HTMLDivElement);
    let register = (document.getElementById("newuserdiv")as HTMLDivElement);
    homepage.style.display="block";
    register.style.display = "none";
    
    let username = (document.getElementById("name") as HTMLInputElement).value;
    let age = parseInt((document.getElementById("age") as HTMLInputElement).value);
    let mobile = parseInt((document.getElementById("mobilenumber") as HTMLInputElement).value);

    let s = new user(username, age, mobile);
    UserDetailsArray.push(s);
    if(username.trim() == "" || age == null || mobile == null)
    {
        alert("Please enter the Fields!");
    }
    else
    {
        
    alert(`your id is ${s.UserId}`);
    }
}

function userlogin()
{
    let homepage = (document.getElementById("maindiv")as HTMLDivElement);
    let login = (document.getElementById("logindiv")as HTMLDivElement);

    login.style.display="block";
    homepage.style.display = "none";

}

function adduser()
{
    let register = (document.getElementById("newuserdiv")as HTMLDivElement);
    let homepage = (document.getElementById("maindiv")as HTMLDivElement);

    register.style.display="block";
    homepage.style.display = "none";   
}

function validateuser()
{
     

    let uid = (document.getElementById("userid") as HTMLInputElement).value;
    let count:number = 0;

    for(let i=0; i<UserDetailsArray.length ; i++)
    {
        if(uid == UserDetailsArray[i].UserId)
        {
            alert("Entered Id is available! You are welcome.");
            let login = (document.getElementById("logindiv")as HTMLDivElement);
            let option = (document.getElementById("optiondiv")as HTMLDivElement);

            option.style.display="block";
            login.style.display = "none";
            break;
        }
        else{
            count++;
        }
    }
    if (count == UserDetailsArray.length)
    {
        alert("Please enter valid User Id!");
    }
}

function courseenrolldiv()
{
    let option = (document.getElementById("optiondiv")as HTMLDivElement);
    let courseenroll = (document.getElementById("courseenrolldiv")as HTMLDivElement);

    courseenroll.style.display="block";
    option.style.display = "none"; 
}

function coursedetailsdiv()
{
    let option = (document.getElementById("optiondiv")as HTMLDivElement);
    let enrolledcourse = (document.getElementById("coursedetailsdiv")as HTMLDivElement);

    enrolledcourse.style.display="block";
    option.style.display = "none";

    let userid = (document.getElementById("userid") as HTMLInputElement).value;
    let coursename = document.getElementById("courseslist")
    
    let countday = 0;
    let total = document.getElementById("dayscount");
    
    for (let i=0 ; i<UserDetailsArray.length ; i++)
    {
        if (userid == UserDetailsArray[i].UserId)
        {
            
            for(let j=0 ; j<CoursesEnrolledArray.length ; j++)
            {
                
                if(UserDetailsArray[i].UserId == CoursesEnrolledArray[j].UserId)
                {
                    
                    coursename.innerHTML += CoursesEnrolledArray[j].CourseName+"<br>";
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

function enrolledcourse()
{
    let enrolledcourse = (document.getElementById("coursedetailsdiv")as HTMLDivElement);
    let option = (document.getElementById("optiondiv")as HTMLDivElement);
    let courseenroll = (document.getElementById("courseenrolldiv")as HTMLDivElement);
    option.style.display = "block";
    enrolledcourse.style.display="none";
    courseenroll.style.display="none";
    alert(`successfully Enrolled your course`);
}

function course()
{
    for(let i=0;i<UserDetailsArray.length;i++)
    {
        let result = document.getElementById("courseslist")as HTMLInputElement;
        console.log (UserDetailsArray[i]);
        
    }
}