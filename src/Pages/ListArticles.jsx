import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import "./ListArticles.css";

export default function ListeArticles() {
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
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            {article.data.titre}
            {article.data.contenuArt}
          </li>
        ))}
      </ul>
    </>
  );
}