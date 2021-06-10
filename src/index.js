import "./styles.css";

const onClikcAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  addElementToIncomplateList(inputText);
};

const deleteElementFromList = (target, elementId) => {
  const deleteTarget = target.parentNode.parentNode;
  document.getElementById(elementId).removeChild(deleteTarget);
};

const addElementToIncomplateList = (inputText) => {
  // 完了ボタンを生成する。
  const comlateButton = document.createElement("button");
  comlateButton.innerText = "完了";
  comlateButton.addEventListener("click", () => {
    deleteElementFromList(comlateButton, "incomplate_list");

    const comlateTarget = comlateButton.parentNode.parentNode;
    const todoTitle = comlateTarget.firstChild.firstChild.textContent;
    // divタグを生成する。
    const div = document.createElement("div");
    div.className = "list-row";
    div.innerText = todoTitle;

    // 戻るボタンを生成する。
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻る";
    returnButton.addEventListener("click", () => {
      const returnTodo = returnButton.parentNode.parentNode;
      const todoTitle = returnTodo.firstChild.firstChild.textContent;
      addElementToIncomplateList(todoTitle);
      deleteElementFromList(returnButton, "comlate-list");
    });

    div.appendChild(returnButton);

    const li = document.createElement("li");
    li.appendChild(div);
    document.getElementById("comlate-list").appendChild(li);
  });

  // 削除ボタンを生成する。
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteElementFromList(deleteButton, "incomplate_list");
  });

  // divタグを生成する。
  const div = document.createElement("div");
  div.className = "list-row";
  div.innerText = inputText;

  //div.appendChild(pText);
  div.appendChild(comlateButton);
  div.appendChild(deleteButton);

  const li = document.createElement("li");
  li.appendChild(div);

  document.getElementById("incomplate_list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClikcAdd());
