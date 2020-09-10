"use strict";

// const header = document.createElement('h1');
document.body.prepend(document.createElement("h1"));
class Elem {
  constructor(selector) {
    if (!document.querySelector(selector)) {
      throw new TypeError("Selector must be an HTML element selector");
    }

    this.element = document.querySelector(selector);
  }

  html(newTextContent) {
    this.element.textContent = newTextContent;

    return this;
  }

  append(...args) {
    let { element } = this;

    args += element.textContent;
    element.textContent = args;

    return this;
  }

  prepend(includText) {
    this.element.textContent += includText;

    return this;
  }

  attr(...args) {
    this.element.setAttribute(args[0], args[1]);

    return this;
  }
}

const elem = new Elem("h1");
elem.html("JS DOM 2.0");

elem.append("aslka");

// elem
//   .html("JS DOM 2.0")
//   .append("I complete ")
//   .prepend(": 4 Task!")
//   .attr("class", "www");
