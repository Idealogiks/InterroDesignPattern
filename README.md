## InterroDesignPattern

#1 - Pourquoi la solution actuelle pose problème 
 
Tout d'abord, il y a du code dupliqué. Ce n'est pas optimal car cela rend les modifications longues (il faut modifier quelque chose pour plusieurs fichiers alors que si c'était mieux optimisé, il y aurait juste un seul fichier à modifier.)
De plus, ça fait beaucoup de lignes de code et c'est dommage. Globalement, ça rend la solution moins maintenable. Ca peut aussi générer des risques d'incohérence entre les fichiers. 

Aussi, si le format d'export peut évoluer plus tard, ça sera une nouvelle fonctionnalité à ajouter. cela serait long actuellement (car beaucoup de copie de code et pas tourné vers le futur dans la solution proposée)

En gros : Problème de maintenabilité, d'évolutivité et de lisibilité

#2 - Les patterns que je propose 

Template Method : Pour éviter de duppliquer les mêmes codes pour différents documents alors que la logique est la même (à quelques détails près). Il y aurait un squelette commun et chaque coument ne définierait que ses trucs à lui qui varieraient.  (maintenabilité/lisibilité)

Factory : Car il créera le bon type de document, selon ce qu'on demande, à un seul endroit. Ajouter un document, ça sera juste rajouter une nouvelle ligne sans devoir toucher à tout le code. Cela évitera les dupplications. (évolutivité)

#3 - Architecture 

/documents
    Document.js      
        => Classe parente, squelette commun (pour le template Method), GenererDocument()  
    Facture.js             
        => enfant, redéfinit son propre GetTitre(), afficherArticle() et calculerTotal()
    Devis.js 
        => enfant, redéfinit son propre GetTitre(), afficherArticle() et calculerTotal()              
    Avoir.js 
        => enfant, redéfinit son propre GetTitre(), afficherArticle() et calculerTotal()              
    DocumentFactory.js  
        => crée le bon document selon le type (pour le Factory)   
index.js                   
