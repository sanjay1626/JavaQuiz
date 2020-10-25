//click function
//hide startpg
//diplay qform
var secs = 50;
function beginQuiz() {
    var start = document.getElementById("start");
    var quiz = document.getElementById("quiz");
   
    var incorrectresponse = document.getElementById("choiceresponse");
    start.style.display ="none";
    
    
//Time starts at 75 secs
    const countdown = setInterval(function() {
        secs--;
        document.getElementById("timer").textContent = "Time Left:" + secs + "seconds";
        //if ( secs <= 0)clearInterval(countdown);
        if (secs <= 0 ) {
            clearInterval(countdown);   
            
        }
        if (secs === 0) {
            
            //alert("Times Up");
            showScore();
        }
        if (secs !== 0 ){
            quiz.style.display = "block";
            getQuestion();
            
        }
       
     }, 1000);
 /////////Timer() continues //////////////
       var dectimer = document.getElementById("timer").innerText
      
}

// getQuestion function

function getQuestion() {
    var quizQuestion = document.getElementById("quizQuestion");
    var optionA = document.getElementById("choiceA");
    var optionB = document.getElementById("choiceB");
    var optionC = document.getElementById("choiceC");
    var optionD = document.getElementById("choiceD");
    var choices = document.getElementById("choices");
    var choiceResponse = document.getElementById("choiceResponse");
    
    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex + 1) + ": " + q.question + "</p>";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}

let questions = [{
    question: "Which company was behind the creation of Java?",
    choiceA: "Microsoft",
    choiceB: "Sun Microsystems",
    choiceC: "Apple",
    choiceD: "Borland",
    correctAnswer: "B"
}, {
    question: "What was the original name for Java?",
    choiceA: "C++",
    choiceB: "Ada",
    choiceC: "Lisp",
    choiceD: "Oak",
    correctAnswer: "D"
}, {
    question: "What is the name of the inventor (or father) of Java?",
    choiceA: "Dennis Ritchie",
    choiceB: "TBill Gates",
    choiceC: "James Gosling",
    choiceD: "Bjarne Stroustroup",
    correctAnswer: "C"
}, {
    question: "Java code that is embedded as a small application in a web page is called a(n)...?",
    choiceA: "JSP",
    choiceB: "Servlet",
    choiceC: "Applet",
    choiceD: "Javabean",
    correctAnswer: "C"
}, {
    question: "Java can run on any computer platform that has a ...?",
    choiceA: "Java compiler",
    choiceB: "Linux OS",
    choiceC: "Intel Pentium",
    choiceD: "Java Virtual Machine",
    correctAnswer: "D"
}, {
    question: "The Java API intended for business and server 3-tier applications is called?",
    choiceA: "Java 2, Enterprise Edition",
    choiceB: "Java 2 Servlets",
    choiceC: "Java 2, Standard Edition",
    choiceD: "JavaMail",
    correctAnswer: "A"
}, {
    question: "What does AWT stand for?",
    choiceA: "Apple-Windows Technology",
    choiceB: "Abstract Window Toolkit",
    choiceC: "All Windows Titles",
    choiceD: "Abstract Widget Transfer",
    correctAnswer: "B"
}, {
    question: "Which of the following is a Java keyword?",
    choiceA: "repeat",
    choiceB: "select",
    choiceC: "elsif",
    choiceD: "final",
    correctAnswer: "D"
}, {
    question: "Which of the following keywords are in C++ but not in Java?",
    choiceA: "virtual",
    choiceB: "float",
    choiceC: "goto",
    choiceD: "class",
    correctAnswer: "A"
}, {
    question: "What is the name of the class that all Java classes inherit (directly or indirectly) from?",
    choiceA: "Class",
    choiceB: "none of the above",
    choiceC: "ClassLoader",
    choiceD: "Object",
    correctAnswer: "D"
},
{
    question: "Which of the below is valid way to instantiate an array in java?",
    choiceA: "int myArray [] = {1, 3, 5};",
    choiceB: "int myArray [] [] = {1,2,3,4};",
    choiceC: "int [] myArray = (5, 4, 3);",
    choiceD: "int [] myArray = {“1”, “2”, “3”};",
    correctAnswer: "A"
},
{
    question: "Which of the below are reserved keyword in Java?",
    choiceA: "array",
    choiceB: "goto",
    choiceC: "null",
    choiceD: "int",
    correctAnswer: "B"
},
{
    question: "What are the valid statements for static keyword in Java?",
    choiceA: " We can have static block in a class. ",
    choiceB: "The static block in a class is executed every time an object of class is created.",
    choiceC: "We can have static method implementations in interface.",
    choiceD: "We can define static block inside a method.",
    correctAnswer: "A"
},
{
    question: "Select all the core concepts of OOPS.",
    choiceA: "Abstraction",
    choiceB: "Inheritance ",
    choiceC: "Interface",
    choiceD: "Polymorphism",
    correctAnswer: "A"
},
{
    question: "Which of the following statements are true for inheritance in Java?",
    choiceA: "The “extend” keyword is used to extend a class in java.",
    choiceB: " You can extend multiple classes in java.",
    choiceC: "Private members of the superclass are accessible to the subclass.",
    choiceD: "We can’t extend Final classes in java.",
    correctAnswer: "D"
}, ];


var questionIndex = 0;
//function to check if answer is correct///

var score = 0;
function check(answer) {
    
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
            //Decrease time if gets an incorrect answer
            var incresults = document.getElementById("choiceResponse");
            if (incresults = "Incorrect!" && secs != 0 ){
                secs = secs - 5;
            }
        }
    }
}

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "All Done!" + "<p> You scored " + score + " out of 10!</p>";
    
    if (score < 4) {
        scoreMessage.innerHTML = "<p>Not so good! Time for some revision.</p>";
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Pretty good! But still room for improvement.</p>";
    }
    else {
        scoreMessage.innerHTML = "<p>Great work! You really know your birds!</p>";
    }
    
    scoreMessage.style.display = "block";
    initial1.style.display = "block";
    quizAgain.style.display = "block";
    submit.style.display = "block";
}



function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    initial1.style.display = "none";
    submit.style.display = "none";
    highscoreboard.style.display = "none";
    Back.style.display = "none";
    clrhistory.style.display = "none";
    initialinput.style.display = "none";
    usrscore.style.display = "none";
    score = 0;
    secs = 50;
    questionIndex = 0;
}


function scorehistory(){
    
    scoreMessage.style.display ="none"
    initial1.style.display = "none"
    quizAgain.style.display = "none";
    submit.style.display = "none";
    highscoreboard.style.display = "block";
    highscoreboard.innerHTML = "<p>High Score</p>";
    scoreBlock.style.display = "none";
    Back.style.display = "block";
    clrhistory.style.display = "block";
    usrscore.style.display = "block"
    initialinput.style.display = "block";
    var y = score;
    var x = document.getElementById("initial1").value;
    document.getElementById("initialinput").innerHTML = "<p> Initials:" + x  + "</p>" ;
    document.getElementById("usrscore").innerHTML = "<p>HighScore:" + y + "</p>";
    console.log(x);



}

function clearhighscore() {
  var y = score;
    var x = document.getElementById("initial1").value;
    document.getElementById("initialinput").innerHTML.clear;
    document.getElementById("usrscore").innerHTML.clear;
    initialinput.style.display = "none";
    usrscore.style.display = "none";
}