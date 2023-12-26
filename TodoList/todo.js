var taskName = document.getElementById("task");

if(localStorage.getItem("task")!=null)//aleardy has tasks before
{
    tasksList = JSON.parse(localStorage.getItem("task"));
    //JSON.parse => to turn string into array to display it in table
    displayTask();

}

var tasksList=[];
function addTask(){
    var task ={
        Name:taskName.value,
        isDone:false,
    
    }
tasksList.push(task);
localStorage.setItem("task",JSON.stringify(tasksList));
displayTask();

//to clear task input after write in it
taskName.value="";
}

function displayTask(){
   
    cartoona=``;
    for(i=0 ;i<tasksList.length ; i++){
        cartoona +=`<li>${tasksList[i].Name}
        <button onclick="doneTask(${i});" class="donebtn">✓</button>
        <button onclick="deleteTask(${i});" class="delbtn">✕</button> </li>`;
    }
      
    document.getElementById("tasklist").innerHTML=cartoona;

    for (var i = 0; i < tasksList.length; i++) {
        if (tasksList[i].isDone) {
            doneTask(i);
        }
    }
}

function doneTask(index){
   tasksList[index].isDone=true,
   document.getElementById("tasklist").children[index].style.backgroundColor = "#c8e6c9";

    
}

function deleteTask(index){
 tasksList.splice(index,1);
 displayTask();
 localStorage.setItem("task",JSON.stringify(tasksList));
}
