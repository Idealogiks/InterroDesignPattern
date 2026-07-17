import Facture from "./Facture.js";
import Devis from "./Devis.js";
import Avoir from "./Avoir.js";

export default class DocumentFactory {
    create(type) {
        switch (type.toLowerCase()) {
            case 'facture':
                return new Facture();
            case 'devis':
                return new Devis();
            case 'avoir':
                return new Avoir();
            default:
                throw new Error(`Le type de document "${type}" n'est pas reconnu.`);
        }
    }
}