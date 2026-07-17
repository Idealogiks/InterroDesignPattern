export default class Documents {
    constructor() {
    }

    GenererDocument(){
        return `${this.getTitre()}
                ${this.afficherArticles()}
                ${this.calculerTotal()}`
    }

    getTitre() {
        throw new Error("Manque la méthode dans l'enfant (bizarre comme phrase)");
    }

    afficherArticles() {
        throw new Error("Manque la méthode dans l'enfant");
    }

    calculerTotal() {
        throw new Error("Manque la méthode dans l'enfant");
    }
}
