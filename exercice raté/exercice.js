console.log("Bienvenue");

alert("Bienvenue");

function activation_bouton(){
    alert("Bienvenue sur le bouton");
    
    alert(document.getElementById("bouton").innerHTML);
}

function afficher_alert(){
    alert("Je suis dans la place");}
    afficher_alert()

function bouton2(){
    
    val_text=document.getElementById("name").value;
    
    console.log(val_texte); // affiche la valeur présente dans le champs texte
    console.log(typeof(val_texte)); // typeof est une fonction qui affiche le type de ma variable
    val_texte_tva=val_texte*1.2 // 120
    document.getElementById("madiv").innerHTML= "Le prix TTC est  :  " +  val_texte_tva;
   

console.log(val_texte); // affiche la valeur présente dans le champs texte
    console.log(typeof(val_texte)); // typeof est une fonction qui affiche le type de ma variable
    val_texte_tva=val_texte*1.2 // 120
    console.log(val_texte_tva); // Si cest du texte : NaN
    /**
     * isNaN("test")
     *   true
    */
     console.log(isNaN(val_texte)); // 12 => FALSE | "hello" => true


     // si le texte entré est un nombre alors on affiche la TVA

     // isNaN => verifier si le texte est un nombre : renvoie false
     if (   isNaN(val_texte) == false    )   {

        // AFFichage de la TVA dans la DIV
        document.getElementById("madiv").innerHTML= "Le prix TTC est  :  " +   val_texte_tva;

     }

     // si non : si le texte n est pas un nombre
     else {
        document.getElementById("madiv").innerHTML= "Veuillez entré un nombre";

     } 
    }