import React from "react";
import "../Pages/Home.scss";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export const Home = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articlesRef = query(
      collection(db, "articles"),
      orderBy("created", "desc")
    );
    onSnapshot(articlesRef, (snapshot) => {
      setArticles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
    
     <header className="c-header">
  <h1>BIENVENU SUR APPAstro</h1>
  <p>Suivez notre rubrique pour connaître les découvertes récentes en astronomie. </p>
</header>
<section className="c-posts">
{articles.map((article) => (
  <article className="c-posts__item" key={article.id}>
    <h2> {article.data.titre}</h2>
    <p>{article.data.contenuArt}</p>
    <p><a href="#" className="c-btn">Read More</a></p>
  </article>
  
  ))}
</section>
    </>
  );
};
