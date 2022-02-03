class Element {
  constructor(tag, attribute) {
    this.tag = tag;
    this.attribute = attribute;
    this.children = [];
  }
}

/*
    <div id="wrapper"> // wrapper
      <div id="main"> // main
        <img id="img1" src="" alt="" /> // img1
        <p id="p1"></p> // p1
      </div>
      <div id="side-bar"> // side-bar
        <div id="content"> // content
          <img id="img1" src="" alt="" /> // img2
          <p id="p2"></p> // p2
        </div>
      </div>
    </div>
*/

/*
Each HTML element is an instance of the class Element. Create a function which will take in a search string and a list of elements to search. Return a list of all elements with the search string tag.
*/

// input: 'img', [main, side-bar]
const getDescendants = (str, elements) => {
  const visited = new Set();
  const descendants = [];
  for (let element of elements) {
    dfs(str, element, visited, descendants);
  }
  return descendants;
}
// output: [img1, img2]

const dfs = (str, element, visited, descendants) => {
  const id = element.attribute.id;
  if (visited.has(id)) return;
  visited.add(id);
  if (element.tag === str) descendants.push(id);
  for (let child of element.children) {
    dfs(str, child, visited, descendants);
  };
}

const div = 'div';
const img = 'img';
const wrapper = new Element(div, {id: 'wrapper'});
const main = new Element(div, {id: 'main'});
const img1 = new Element(img, {id: 'img1'});
const img2 = new Element(img, {id: 'img2'});
const p1 = new Element(div, {id: 'p1'});
const p2 = new Element(div, {id: 'p2'});
const sideBar = new Element(div, {id: 'side-bar'});
const content = new Element(div, {id: 'content'});
wrapper.children.push(main, sideBar);
main.children.push(img1, p1);
sideBar.children.push(content);
content.children.push(img2, p2);

const elements = [main, sideBar]
console.log(getDescendants(img, elements))