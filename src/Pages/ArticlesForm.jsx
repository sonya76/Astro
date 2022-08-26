import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import "./ArticlesForm.css";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function ArticlesForm() {
   const [titre, setTitre] = useState();
   const [contenuArt, setContenuArt] = useState();
   const [submitted, setSubmitted] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await addDoc(collection(db, "articles"), {
            titre: titre,
            contenuArt: contenuArt,
            created: Timestamp.now(),
         });
         setSubmitted(true);
      } catch (err) {
         console.log(err);
      }
   };

   if (submitted) {
      return (
         <>
         <p> Votre nouveau article est créé.</p>
         </>
      );
   }

   return (
      <div className="articles">
     
      <Link to="/articles">Liste des articles</Link>
      <form method="POST" onSubmit={handleSubmit}>
      <div>
      <input
      type="text"
      name="titre"
      placeholder="Titre de l'article"
      required
      onChange={(event) => setTitre(event.target.value)}
      />
      </div>
      <div>
      <textarea
      placeholder="Contenu de votre article"
      name="contenuArt"
      required
      onChange={(e) => setContenuArt(e.target.value)}
      />
      </div>
      <div>
      <button type="submit">Enregistrer l'article</button>
      </div>
      </form>
      </div>
   );
}