import { iSerie } from './interface';
import { series } from '../scripts/series.js';
import { Component } from './component.js';
import { Serie } from './serie.js';

export class List extends Component {
    series: Array<iSerie>;
    constructor(selector: string) {
        super();
        this.series = series;
        this.template = this.createTemplate();
        this.outRender(selector);
        this.manageComponent();
        this.series.forEach((item) => {
            if (item.watched === false) {
                new Serie(item, 'slot.pending');
            } else {
                new Serie(item, 'slot.watched');
            }
        });
    }
    createTemplate() {
        return `
      <section class="series">
          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 2 series pending to watch</p>
            <ul class="series-list">
             <slot class="pending"></slot> 
            </ul>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched 3 series</p>
            <ul class="series-list series-list--watched">
              <slot class="watched"></slot>
            </ul>
          </section> 
        </section>
    `;
    }
    private manageComponent() {
        document
            .querySelectorAll('.fas fa-times-circle icon--delete')
            .forEach((item) =>
                item.addEventListener('click', this.handlerButton.bind(this))
            );
    }
    private handlerButton(ev: Event) {
        const deletedId = (<HTMLElement>ev.target).dataset.id;
        console.log('click', deletedId);
    }
}
