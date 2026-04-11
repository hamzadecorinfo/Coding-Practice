// // console.log(window);

// // window.console.log("hello world");

// // console.dir(window.document.firstChild);


// alert("Shuru Allah ka Name sa jo Rahmanir Raheem hai");

// console.log("Bismillah");


// let age = 24;

// console.log(age);

// const student ={
//     name : "ali",
//     age: 25,
//     address: "Shadra",
//     isPass: true,
// }


//  student["age"] = student["age"] + 1;

// // prompt("What is your name?");

// // let name = prompt("What is your name?");
// // console.log(name);

 
// // for (let i = 0 ; i <= 100; i++ ){

// //     if (i % 2 ===0){
// //         console.log (i);

// //     } 
// // }

// let k = 25;

// let userNum = prompt ("waht is the number");

// while (userNum != k){
//     userNum = prompt (" You entered the wrong number. Please enter the correct number:");
// }

// console.log ("Congratulations! You entered the correct number.");



// let h = [1, 2, 3, 4, 5];

// for (let i =0 ; i < h.length; i++){
//     console.log(h[i]);

// }

// // let arr = ["Muhammad ali", "Tayab", "Hassan", "Hussain"];

// // arr.forEach(function myfun(val) {
// //     console.log(val);
// // })


// let arr = [1, 2, 3, 4, 5];

// arr.forEach((val)=> {console.log(val ** 2);})






// // let arr = ["Muhammad ali", "Tayab", "Hassan", "Hussain"];

// // arr.forEach(function myfun(val) {
// //     console.log(val.toUpperCase());
// // })

// // let aee = [566, 2, 3, 4, 5];

// // let auu= aee.map((val)=> {console.log(val ** 2);})


// // console.log(auu);



// let aii = [566, 2, 3, 4, 5];

// let result = aii.filter((val)=> {if (val % 2 === 0) {console.log(val);} else if (val % 2 !== 0 ){console.log("not even number");}});
// console.log(result);


// let aoo = [57, 2, 3, 4, 5];

// let res = aoo.filter((val) => {return val % 2 === 0;});

// console.log(res);



// let ayy = [57, 2, 3, 4, 5];

// // let outPut = ayy.reduce ((first , second) => {return first + second;});

// // console.log(outPut);


// // let g = prompt("Enter a number");

// // let agg = [];

// // for (let i =1; i<= g; i++){
// //     agg[i-1] = i;}

// //     console.log(agg);


// //     let sum = agg.reduce((first , second) => {return first + second;});
// //     console.log(sum);

    
// console.log(Window);



// console.dir(document.getElementsByClassName("ji"));


// console.log(document.getElementsByClassName("ji"));



//     console.dir(document.getElementsByTagName("P"));
//     console.log(document.getElementsByTagName("P"));


//     console.log(document.querySelector("p"));  /// pora HTML ma jo first tag ho ga wahy da ga.
//     console.dir(document.querySelector("p")); /// pora HTML ma jo first tag ho ga wahy da ga.


//      console.log(document.querySelectorAll("p"));

//      console.log(document.querySelectorAll(".ji"));
//      console.log(document.querySelector(".ji"));


//      console.log(document.querySelector("#heading").children);


            // let ooo = document.querySelector("div")

            // console.log(ooo);



            // let newbtn = document.createElement("button");
            // newbtn.innerHTML = "Click me";
            // newbtn.onclick = () => {console.log("Button clicked!");};

            // console.log(newbtn.style.color = "red");


            // let f = document.querySelector("body");
            // f.prepend(newbtn);
            



        //   let vv = document.querySelector("#btn1");

        //   vv.onmouseover =(evt) =>{console.log("Button double clicked!") , (console.log(evt.target));};


        // //   vv.onmouseover =(evt) =>{console.log(evt.target);};


let modes = document.querySelector("#btn1");

let currentMode = "light";

let body = document.querySelector("body");



modes.addEventListener("click", () => {
    if ( currentMode === "light"){
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    currentMode = "dark";}
        else if (currentMode === "dark"){
             document.body.classList.add("light");
             document.body.classList.remove("dark");
             currentMode = "light"; 
        }
        console.log(currentMode);

})






