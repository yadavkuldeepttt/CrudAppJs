let mytodo_list = JSON.parse(localStorage.getItem("tasklist")) || [];


let addtask = document.querySelector("#addtask");
let addbtn = document.querySelector("#addbtn");
let counter = document.querySelector("#counter");
let contentset = document.querySelector("#contentset");
let updateform = document.querySelector("#updateform");
let updatetask = document.querySelector("#updatetask");

let createTask = () => {
  addtaskValue = addtask.value;
  if (addtaskValue === "") {
    alert("Please enter task..");
  } else {
    mytodo_list.push(addtaskValue);
    addtask.value = "";
    localStorage.setItem("tasklist", JSON.stringify(mytodo_list));
    ReadAllTask();
  }
  //   console.log(mytodo_list);
};

let ReadAllTask = () => {
  let list = JSON.parse(localStorage.getItem("tasklist"));
  let data = "";
  let date = new Date().toLocaleDateString();
  // console.log(list);
  for (let i = 0; i < list.length; i++) {
    data += "<tr>";
    data += "<td>" + list[i] + "</td>";
    data += "<td class='date'>" + date + "</td>";
    data +=
      "<td> <button type='button' class='btn btn-primary' onclick='updateTask(" +
      i +
      ")'>Update</button> </td>";

    data +=
      "<td> <button type='button' class='btn btn-danger' onclick='deleteTask(" +
      i +
      ")'>Delete</button> </td>";

    data += "</tr>";
  }
  counter.innerHTML = list.length + " Task";
  contentset.innerHTML = data;
};
ReadAllTask();

let updateTask = (item) => {
  let list = JSON.parse(localStorage.getItem("tasklist"));

  updateform.style.display = "block";
  updatetask.value = list[item];
  updateform.onsubmit = () => {
    let task = document.querySelector("#updatetask").value;

    list.splice(item, 1, task.trim());
    localStorage.setItem("tasklist", JSON.stringify(list));

    ReadAllTask();
    closeUpdate();
  };
};
let closeUpdate = () => {
  updateform.style.display = "none";
};

let deleteTask = (item) => {
  let list = JSON.parse(localStorage.getItem("tasklist"));
  console.log(list);
  list.splice(item, 1);
  localStorage.setItem("tasklist", JSON.stringify(list));

  ReadAllTask();
};
