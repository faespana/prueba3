import React, { createRef, useEffect, useState } from "react";

const NewsCard = ({ article, i, activeArticle }) => {
  console.log(article);

  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <div
      ref={elRefs[i]}
      className={
        activeArticle === i
          ? "w-full max-w-[290px] h-auto rounded-xl  overflow-hidden transition-transform ease-out duration-200 hover:ease-in hover:scale-105 shadow shadow-black-500/40 flex flex-col justify-between bg-slate-50 border-solid border-blue-600 border-b-8"
          : "w-full max-w-[290px] h-auto rounded-xl  overflow-hidden transition-transform ease-out duration-200 hover:ease-in hover:scale-105 shadow shadow-black-500/40 flex flex-col justify-between bg-slate-50"
      }
    >
      <div>
        <section className="w-full mb-2">
          <img
            className="w-full h-[250px] object-cover"
            src={
              article.urlToImage ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WzOWyvEOAeNfTn87AmVNSv-n59RwcZI3xXmvGKl_DRv6moIYXoVCeUfjWsJfVeGfB96sbuhXUDU&usqp=CAU&ec=48665701p"
            }
            alt=""
          />
        </section>
        <section className="flex justify-between mb-2 px-2">
          <h3 className="text-xs text-zinc-400">
            {new Date(article.publishedAt).toDateString()}
          </h3>
          <h3 className="text-xs text-zinc-400">{article.source.name}</h3>
        </section>
        <section className="px-2">
          <h1 className="text-sm font-semibold mb-2">{article.title}</h1>
          <p className="text-xs">{article.description}</p>
        </section>
      </div>
      <section className="flex justify-between mb-1 px-2">
        <button className="text-sky-600 font-medium">
          <a href={article.url} target="_blank">
            Learn More
          </a>
        </button>
        <h3>{i + 1}</h3>
      </section>
    </div>
  );
};

export default NewsCard;
