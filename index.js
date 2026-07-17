import DocumentFactory from "./documents/DocumentFactory.js";
import data from "./content.json" with { type: "json" };

let factory = new DocumentFactory();

let doc = factory.create(data[1]);

console.log(doc.GenererDocument());