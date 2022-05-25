import { List } from '../components/List.js';

function app() {
    new List('section.series');
}

(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
