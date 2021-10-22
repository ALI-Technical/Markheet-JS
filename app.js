///variables///



// var name = "M.ALI";

// var age = 20;


// alert(name)

// var Name = "ALI"

// var firstName = "Mohammad"
// var lastNamE = "Ali"

// alert(firstName +  lastNamE)


////MATH EXPRESSTION///
// +
// -
// *
// /
// %

// var num1 = 200;
// var num2 = 500;

// var add = num1 + num2

// alert(add)


// var result = (5-10) * 15 - 10 +5;
//             //-5 * 15 = -75
//             //-75 -10 + 5 = -80

// alert(result)

// alert(3)
// alert(1)
// alert(2)


// var a = "50" ///string
// var b = 20 ////number


// document.write(a + b) ////Concadenation          


// var name = "Mohammad"
// var name2 = "Ali"

// document.write(name + name2)

// var num1 = 30
// var num2 = 50

// document.write(num1 + num2)

/////////   INCREMENT   ////////

// var num = 10;

// var update_num = num++ //POST
// var update_num = ++num //PRE

// var num2 = num


// alert(update_num);

// alert(num2)

/////////   DECREMENT   ////////
// var num = 20;

// var update_num = --num //POST

// var num2 = num


// alert(update_num);

// alert(num2)

///////////  MATH EQUATIONS  //////////

// var a = 20;

// var result = a-- + ++a + --a + ++a - a++ + a-- - a-- + a
//         //   20  +  20 +  19 +  20 -  20 +  21 - 20  + 19
//         //   79  = Answer

// alert(result)



// var a = 15;

// var result = --a + a-- + a + ++a + a++ - a-- + --a
//         //    14 +  14 + 13 + 14 + 14  - 15  +  13
//         //    67


// alert(result)



// var a = 23;
// var result = a++ + ++a - --a + a-- - --a + a++ + ++a
//           // 23  + 25  - 24  + 24  -  22 + 22  + 24
//           // 72  

// alert(result)



        ///Input From User///

        //built in method hai user sy value ky liye///

// var userName  = prompt("User Name")

// document.write(userName)


// var firstName = prompt("First Name") 
// var lastName =  prompt("Last Name")

// document.write(firstName + " " + lastName)


// var name = prompt("enter your name");
// var age = prompt("enter age")
// var number = prompt("phone number")
// var address = prompt("address")

// document.write("USER NAME: "  + name )
// document.write("<br> age: " + age )
// document.write("<br> number: " + number )
// document.write("<br> address: " + address )


var name = prompt("Enter Your Name");
var schoolName = prompt("Enter Your School Name");
var standard = prompt("Enter Your Class");
var rollNumber = prompt("Enter Your Roll Number");
var isl = prompt("Enter Your Islamiat Marks");
var urdu = prompt("Enter Your Urdu Marks");
var eng = prompt("Enter Your English Marks");
var maths = prompt("Enter Your Maths Marks");
var science = prompt("Enter Your Science Marks");
var obtainedMarks = parseInt(isl) + parseInt(urdu) + parseInt(eng) + parseInt(maths) + parseInt(science);
var total = 500
var percentage = (obtainedMarks / total) * 100


document.write("Your Name :" + name)
document.write("<br> Your School Name :" + schoolName)
document.write("<br> Your Class :" + standard)
document.write("<br> Your Roll Number :" + rollNumber)
document.write("<br> Obtained Marks : " + obtainedMarks)
document.write("<br> Total Marks : " + total)
document.write("<br> Percentage : " + percentage + "%")
if(percentage >= 80){
        document.write("<br><br> Your Grade is: A-1")
}
else if(percentage >= 70){
        document.write("<br><br> Your Grade is: A")
}
else if(percentage >= 60){
        document.write("<br><br> Your Grade is: B")
}
else if(percentage >= 50){
        document.write("<br><br> Your Grade is: C")
}
else if(percentage >= 40){
        document.write("<br><br> Your Grade is: D")
}
else if(percentage >= 33){
        document.write("<br><br> Your Grade is: E")
}
else{
        document.write("<br><br> You Are Failed !!")
}