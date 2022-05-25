/* eslint-disable no-unused-vars */
import { iSerie } from './interface';
import { Component } from './component.js';

export class Serie extends Component {
    constructor(public item: iSerie, selector: string) {
        super();
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        let html = `<li class="serie">
                <img
                  class="serie__poster"
                  src="${this.item.poster}"
                  alt="${this.item.name} poster"
                />
                <h4 class="serie__title">${this.item.name}</h4>
                <p class="serie__info">${this.item.creator} (${this.item.year})</p>`;

        html += `<ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>`;

        html += `<i class="fas fa-times-circle icon--delete"></i>
              </li>
    `;
        return html;
    }
}
