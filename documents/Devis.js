import Documents from "./Documents.js";

export default class Devis extends Documents {
    getTitre() {
        return `<header>Devis n- ${this.data.numero} \n Client : ${this.data.client}</header>`
    }

    afficherArticles() {
        return "<ul>" + this.data.lignes.map(ligne =>`<li>${ligne.description} : ${ligne.prix} €</li>`) + "</ul>";
    }

    calculerTotal() {
        let total = 0;
        for (let ligne of this.data.lignes) {
            total = total + ligne.prix;
        }
                
        return `<p>Total estimé : ${total} €</p>`;
    }
}