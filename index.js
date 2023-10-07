"use strict";

class ExtendedArray extends Array {
  getString(separator) {
    return this.join(separator);
  }

  getHtml(tagName) {
    const elements = this.map((item) => `<${tagName}>${item}</${tagName}>`);
    if (tagName === "li") {
      return `<ul>${elements.join("")}</ul>`;
    }
    return elements.join("");
  }
}

const extendedArray = new ExtendedArray("яблоко", "томат", "огірок", "кавун");

console.log("Рядок з роздільником:", extendedArray.getString("-"));

const htmlPrint = extendedArray.getHtml("li");
document.write(htmlPrint);
