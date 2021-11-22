// Builds up a table of contents based section ids
function newElement(element, classList, content) {
  const elem = document.createElement(element);
  elem.classList = classList;
  elem.textContent = content;

  return elem;
}

function newLink(classList, href, content) {
  const elem = document.createElement("a");
  elem.classList = classList;
  elem.href = href;
  elem.textContent = content;

  return elem;
}

const pageTopics = document.querySelectorAll("section");
const contents = document.querySelector("#contents");

for (const topic of pageTopics) {
  if (topic.attributes.id) {
    const id = topic.attributes.id.value;
    const heading = document.querySelector(`#${id} > h2`).textContent;

    const listItem = newElement("li", "", "");
    const link = newLink("", `#${id}`, heading);

    listItem.appendChild(link);
    contents.appendChild(listItem);
  }
}