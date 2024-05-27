
const text = document.querySelector(".add-section input");
const listcont = document.querySelector("#list-container");

/*---------------WRONG ATTEMPT--------------*/
// const action = document.querySelector(".add-button");
// const taskBox = document.querySelector(".content-area");
// const taskBx = document.querySelector(".content-text");
// const newImg1 = document.querySelector('#img1');
// const newImg2 = document.querySelector('#img2');
// const taskTxt = document.querySelector('#taskText');
// const remove = document.querySelector('#remove');
/*---------------WRONG ATTEMPT--------------*/

function addText() {
 
    if(text.value === ""){
        alert("You must write something!")
    }
    else{
        let li = document.createElement('li');
        li.innerText= text.value;
        listcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

 text.value = '';
 saveData();
}

 listcont.addEventListener("click", function mark(e){

    /*---------------WRONG ATTEMPT--------------*/

    //     newImg1.classList.toggle("hidden")
    //     newImg2.classList.toggle("hidden")
    //     taskTxt.classList.toggle("tasks")
    
    // }
    
    // function rmv(){
    //     taskBx.remove();

    /*---------------WRONG ATTEMPT--------------*/
    
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }}, false)

        function saveData(){
            localStorage.setItem("data", listcont.innerHTML);
        }

        function showTask(){
            listcont.innerHTML = localStorage.getItem("data")
        }

        showTask()
