import { db } from "./config.js";
import {getAuth, collection, addDoc, TimeStamp, collectionRef } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


let addtodo = document.querySelector("#todo_text");
let todoBtn = document.querySelector("#addTodo");

if(todoBtn){
    todoBtn.addEventListener("click", addTodo);
    }

const auth = getAuth(app);

async function addTodo(){
    let todoCollection = collection(db, "todos");
    await addDoc(collectionRef, {
     todo: todo.value,
     uid: auth.currentUser.uid,
     todoCreateDate: TimeStamp.fromDate(new Date())
    });
}