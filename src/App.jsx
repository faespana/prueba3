import React from "react";
import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import numeral from "numeral";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "73e344dd21c3c87667faa2380060ff4d2e956eca572e1d8b807a3e2338fdd0dc/stage";

export default function App() {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newsHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticles) => prevActiveArticles + 1);
        } else if (command === "open") {
          // window.open(articles[number].url, "_blank");
          // alanBtn().playText("Opening...");
          const parsedNumber = number.length > 2 ? numeral(number) : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > 20) {
            alanBtn().playText("Please try that again");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          }
        }
      },
    });
  }, []);

  return (
    <div className="p-10 flex justify-center items-center min-h-screen bg-[url('imgs/header.jpg')] bg-cover bg-center bg-[#2C3E50] opacity-90">
      <div className="w-full max-w-[1024px] p-5">
        <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      </div>
    </div>
  );
}
