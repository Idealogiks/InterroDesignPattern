## InterroDesignPattern

#1 - Pourquoi la solution actuelle pose problème 
 
Tout d'abord, il y a du code dupliqué. Ce n'est pas optimal car cela rend les modifications longues (il faut modifier quelque chose pour plusieurs fichiers alors que si c'était mieux optimisé, il y aurait juste un seul fichier à modifier.)
De plus, ça fait beaucoup de lignes de code et c'est dommage. Globalement, ça rend la solution moins maintenable. Ca peut aussi générer des risques d'incohérence entre les fichiers. 

Aussi, si le format d'export peut évoluer plus tard, ça sera une nouvelle fonctionnalité à ajouter. cela serait long actuellement (car beaucoup de copie de code et pas tourné vers le futur dans la solution proposée)

En gros : Problème de maintenabilité, d'évolutivité et de lisibilité

#2 - Les patterns que je propose 

Factory 

Template Method 

