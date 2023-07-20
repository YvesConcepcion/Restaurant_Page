const createEl = (type, content, parentID) => {
  const element = document.createElement(type);
  element.innerHTML = content;
  document.getElementById(parentID).appendChild(element);

  return {
    type,
    content,
    addClass(newClass) {
      element.classList.add(newClass);
    },
    updateContent(newContent) {
      element.innerHTML = newContent;
    },
    getClassName() {
      return element.className;
    },
  };
};

export default createEl;
