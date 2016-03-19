//comment

/* comment
comment
comment */

var bigNum = 215e3;		//215000
var smallNum = 136e-3;		// 0.136
var thisString = "String";
var thisBoolean = true;

var phraseWithQuotes='It\'s alright, we\'ve no problem including quotes';

var cars=new Array();
cars[0]="Saab";
cars[1]="Volvo";
cars[2]="BMW";

var carsSameAsAbove = new Array("Saab","Volvo","BMW");
var carsAgainSame=["Saab","Volvo","BMW"];

var name = new String; //declaring variable as object with 'new'
var x =    new Number;
var y =    new Boolean;

var personObject={
firstname : "John",
lastname  : "Doe",
id        :  5566
};
delete personObject.id;


var pwd = prompt('Please enter your password:', '');


function validateText()
{
var val = document.getElementById("numb").value;

var elem = document.getElementById("demo");

if (val == "" || isNaN(val))
    {
    elem.innerHTML = "Duh, not a Number";
    }
    else
    {
    elem.innerHTML = "Valid number!";
    }

}




function changeImage()
{
element = document.getElementById('myimage');
if (element.src.match("bulbon"))
  {
  element.src = "pic_bulboff.gif";
  }
else
  {
  element.src = "pic_bulbon.gif";
  }
}




function changeText()
{
document.getElementById("textToChange").innerHTML="Alakazam!!";
}



function writeTest()
{
document.write("USE DIRECT WRITE FOR TESTING ONLY!! \
 OVERWRITES EVERYTHING!!");
}



function writeToLog()
{
a = "1234567890 loggy loggy log log log";
console.log(a);
}



function writeNamesFromObject()
{
document.getElementById("personInfo").innerHTML=personObject["firstname"];
}

function writeNamesFromObject2()
{
document.getElementById("personInfo").innerHTML=personObject.lastname;
}



function getTypeOf() {
  document.getElementById("typeOfText").innerHTML =
  typeof("john") + "<br>" +
  typeof(3.14) + "<br>" +
  typeof(false) + "<br>" +
  typeof({name:'john', age:34});
}



function message()
{
try
  {
  allllllert("Welcome guest!");
  }
catch(err)
  {
  txt="There was an error on this page.\n\n";
  txt+="Error description: " + err.message + "\n\n";
  txt+="Click OK to continue.\n\n";
  alert(txt);
  }
}



function throwException()
{
var y=document.getElementById("mess");
y.innerHTML="";
try
{
var x=document.getElementById("demo2234").value;
if(x=="")    throw "empty";
if(isNaN(x)) throw "not a number";
if(x>10)     throw "too high";
if(x<5)      throw "too low";
}
catch(err)
{
y.innerHTML="Error: " + err;
}
}



function findIsUsingRegExp()
{
var str = "Is this all there is?";
var patt1 = /is/gi;
var result = str.match(patt1);
document.getElementById("searchString").innerHTML=result;
}
