import Devis from "./Devis.js";
import Avoir from "./Avoir.js";

export default class DocumentFactory {
    create(item) {
        switch (item.type.toLowerCase()) {
            case 'facture':
                return new Facture(item);
            case 'devis':
                return new Devis(item);
            case 'avoir':
                return new Avoir(item);
            default:
                throw new Error(`Le type de document "${item.type}" n'est pas reconnu.`);
        }
    }
}