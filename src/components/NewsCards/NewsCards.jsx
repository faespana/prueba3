import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import "./styles/newscards.css";

const infoCards = [
  {
    color: "rgba(0, 106, 117, .25)",
    title: "Latest News",
    text: "Give me the latest news",
  },
  {
    color: "rgba(21, 101, 192, .25)",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "rgba(69, 39, 160, .25)",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "rgba(40, 53, 147, .25)",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  if (!articles.length) {
    return (
      <div className="flex justify-center flex-wrap gap-5 max-w-full mx-auto">
        <Draggable bounds="body" defaultPosition={{ x: 0, y: 0 }}>
          <Resizable
            defaultSize={{
              width: 250,
              height: 250,
            }}
            style={{
              position: "absolute",
              borderRadius: "50%",
              zIndex: 1,
              background:
                "linear-gradient(to right, rgb(161, 132, 240), #d60087, #2fdabd)",
              backgroundRepeat: "repeat",
              padding: "0.3rem",
              margin: "2rem",
              animation: "gradient 5s linear infinite",
            }}
            lockAspectRatio={true}
          >
            <div
              style={{
                background: `url(/ai.gif)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "50%",
                width: "100%",
                height: "100%",
              }}
            />
          </Resizable>
        </Draggable>

        {infoCards.map((infoCard) => (
          <div
            className="w-full max-w-[300px] h-[360px] rounded-xl overflow-hidden transition-transform ease-out duration-200 hover:ease-in hover:scale-105 shadow shadow-black-500/40 flex flex-col justify-between text-center text-white p-7 text-lg backdrop-blur-lg"
            style={{ backgroundColor: infoCard.color }}
          >
            <h1>{infoCard.title}</h1>
            {infoCard.info ? (
              <div>
                <strong>{infoCard.title.split(" ")[2]}</strong> : <br />
                <div>{infoCard.info}</div>
              </div>
            ) : null}
            <h4>
              Trying saying: <br /> <i>{infoCard.text}</i>
            </h4>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-wrap gap-5 w-max max-w-full mx-auto ">
      {articles?.map((article, i) => (
        <NewsCard
          article={article}
          activeArticle={activeArticle}
          i={i}
          key={i}
        />
      ))}
    </div>
  );
};

export default NewsCards;
