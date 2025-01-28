const clear_btn = document
  .getElementById("clearButton")
  .addEventListener("click", clearFunction);

const delete_btn = document
  .getElementById("deleteButton")
  .addEventListener("click", deleteFunction);

const history_btn = document
  .getElementById("historyButton")
  .addEventListener("click", historyFunction);

const items = document.getElementsByClassName("item");

equalOp = document
  .getElementById("equalOperator")
  .addEventListener("click", equalOpFunction);

const ops = document.getElementById("ops");
let ops_content = document.getElementById("ops").textContent;

const ans = document.getElementById("ans");
let ans_content = document.getElementById("ans").textContent;
const history_element = document.getElementById("history");
let history_items = [];
let history_list = document.getElementById("historyList");

function clearFunction() {
  ans_content = "";
  ops_content = "";
  ans.innerHTML = ans_content;
  ops.innerHTML = ops_content;
}

function deleteFunction() {
  if (ops_content != "") {
    ops_content = ops_content.slice(0, -1);
    ops.innerHTML = ops_content;
  }
}

function historyFunction() {
  console.log(history_items);
  if (history_element.style.display == "none") {
    setTimeout(() => {
      history_element.style.display = "block";
    }, 500);
  } else {
    setTimeout(() => {
      history_element.style.display = "none";
    }, 500);
  }
}

function historyListUpdateFunction(item) {
  let li = document.createElement("li");
  li.innerText = item;
  history_list.appendChild(li);
}

Array.prototype.forEach.call(items, (item) => {
  item.addEventListener("click", writeItemFunction);
});

function writeItemFunction() {
  content = this.textContent;
  ops_content += content;
  ops.innerHTML = ops_content;
}

function equalOpFunction() {
  history_items.push(ops_content);
  historyListUpdateFunction(ops_content);
  ans_content = eval(ops_content.replace("÷", "/").replace("×", "*"));
  ans.innerHTML = ans_content;
}
