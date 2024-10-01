import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.img = "";
    this.title = "My card";
    this.desc = "My description";
    this.link = ""
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }

      .control-wrapper {
        padding: 10px;
      }

      .container {
        margin: 20px;
      }

      .card {
        background-color: var(--my-card-bg, #E0ECD4);
        width: 300px;
        padding: 20px;
        margin: auto;
        text-align: center;
        vertical-align: middle;
        border: 2px solid grey;
        border-radius: 24px;
      }

      .fancy {
        background-color: pink;
        color: dimgray;
        border: 10px solid purple;
      }

      img {
        border: 3px solid #3B6F03;
        width: 150px;
      }

      .text {
        margin: 10px;
        font-family: Arial;
        background-color: White;
        border: 2px solid Black;
      }
      
      details {
        padding: 20px;
      }

      button {
        font-family: Arial;
        color: White;
        background-color: #1BA0E1;
        border: 2px solid #0F6C97;
        border-radius: 4px;
        padding: 6px;
        margin: 5px;
      }

      h2 {
        font-family: Arial;
      }

      #card-list {
        display: flex;
      }

      @media screen and (min-width: 500px) and (max-width: 800px) {
        .card-button {
          display: none;
        }
      }

      @media screen and (max-width: 500px) {
        .card {
          width: 90%; 
          padding: 10px;
        }

        img {
          width: 100px;
          height: 100px;
        }

        h1 {
          font-size: 24px;
        }

        p {
          font-size: 16px;
        }
      }

      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }
      
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class="container">
        <div class="card">
          <img src=${this.img}>
          <h1 class="text">${this.title}</h1>
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div class="text">
              <slot name="desc"></slot>
            </div>
          </details>
          <a href=${this.link}>
            <button class="card-button"><b>Details</b></button>
          </a>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      img: { type : String },
      title: { type: String },
      desc: { type: String },
      link: { type : String },
      fancy: { type : Boolean, reflect : true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
