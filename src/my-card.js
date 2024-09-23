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
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .control-wrapper {
        padding: 10px;
      }

      .card {
        background-color: #E0ECD4;
        width: 300px;
        padding: 20px;
        margin: auto;
        text-align: center;
        vertical-align: middle;
        border: 2px solid grey;
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
        font-family: Arial;
        background-color: White;
        border: 2px solid Black;
      }

      button {
        font-family: Arial;
        color: White;
        background-color: #1BA0E1;
        border-width: 2px;
        border-radius: 4px;
        border-color: #0F6C97;
        padding: 6px;
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
    `;
  }

  render() {
    return html`<div class="card">
      <img src=${this.img}>
      <h1 class="text">${this.title}</h1>
      <p class="text">${this.desc}</p>
      <a href=${this.link}>
          <button class="card-button"><b>Details</b></button>
      </a>
    </div>`;
  }

  static get properties() {
    return {
      img: { type : String },
      title: { type: String },
      desc: { type: String },
      link: { type : String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
