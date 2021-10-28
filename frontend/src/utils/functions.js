const scrollFunction = (idName) => {
  const textContentId = document.getElementById(idName)?.style;

  //case change page
  if (!textContentId) return;

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    textContentId.visibility = "hidden";
    textContentId.opacity = "0";
    textContentId.maxHeight = "0";
    textContentId.paddingTop = "0px";
  } else {
    textContentId.visibility = "visible";
    textContentId.opacity = "1";
    textContentId.maxHeight = "200px";
    textContentId.paddingTop = "20px";
  }
};

export { scrollFunction };
