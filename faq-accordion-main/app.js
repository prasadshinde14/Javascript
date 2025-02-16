const showHideFaqs = document.querySelectorAll(".question-group");

const showHideHandler = (ele) => {
  console.log(ele.children);
  const panel = ele.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    panel.style.marginBottom = "0px";
    ele.children[1].src = "assets/images/icon-plus.svg";
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.style.marginBottom = "1rem";
    ele.children[1].src = "/assets/images/icon-minus.svg";
  }
};

showHideFaqs.forEach((ele) => {
  ele.addEventListener("click", showHideHandler.bind(null, ele));
});
