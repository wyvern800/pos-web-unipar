function dragStart(ev) {
  ev.dataTransfer.effectAllowed = "move";
  ev.dataTransfer.setData("id", ev.target.getAttribute("id"));
  ev.dataTransfer.setDragImage(ev.target, 0, 0);
  updateValues();
  return true;
}
function dragEnter(ev) {
  ev.preventDefault();
  return true;
}
function dragOver(ev) {
  return false;
}
function dragDrop(ev) {
  ev.preventDefault();
  var src = ev.dataTransfer.getData("id");
  ev.target.appendChild(document.getElementById(src));
  updateValues();
  return false;
}
