import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HistoryPerson = () => {
  return (
    <div>
      <div className="max-w-4xl bg-white dark:bg-black rounded-lg mx-auto my-8 p-16">
        <div class="flex flex-col items-center justify-center md:items-start md:flex-row">
          <div class="relative block w-full md:w-1/3">
            <StaticImage
              alt="Pentoda - radiotechnika z dawnych lat"
              src="../images/henryk.jpg"
            />
          </div>
          <div class="w-full md:w-2/3 md:ml-8">
            <h1 className="text-2xl font-medium text-black dark:text-gray-400 mt-8 md:mt-0 mb-2">
              Henryk Banach
            </h1>
            <h2 className="font-medium text-sm text-orange-500 mb-4 uppercase tracking-wide">
              Początki XX wieku
            </h2>
            <p className="text-primary">
              Nasza organizacja czerpie swoje korzenie z pasji i miłości do
              radia, które sięgają aż do początków XX wieku. Historia naszej
              działalności zaczyna się od Henryka Banacha, urodzonego w 1906
              roku. Był on miłośnikiem radia od samego początku jego istnienia.
              Nie wiemy, czy posiadał odbiornik radiowy w momencie uruchomienia
              pierwszej stacji na terenie Polski (18.04.1926r. w Warszawie), ale
              na pewno już z chwilą rozpoczęcia działalności rozgłośni Polskiego
              Radia w Łodzi (02.02.1930r.) dysponował takowym. Do 1939r. i
              zajęcia Łodzi przez Niemców posiadał kilka odbiorników w tym
              Elektrita model (?) i Philipsa (?). Z chwilą zajęcia Łodzi przez
              Niemców wyszedł zakaz posiadania radioodbiorników, a wszyscy
              Polacy zostali zobowiązani do ich oddania. Mimo tego zarządzenia
              Henryka nie zrezygnował ze słuchania radia. Posiadał odbiornik
              amatorskiej konstrukcji, ukryty w nodze stołu, antenę natomiast
              maskował karnisz od firanki. Niestety, został zadenuncjowany przez
              życzliwego sąsiada (Polaka). Przed więzieniem, a może i obozem,
              uratował go Niemiec (znajomy sprzed wojny), który powiadomił go o
              planowanej rewizji. Po wojnie Henryka wrócił do swojej pasji. W
              wczesnych latach powojennych sam budował radia, niestety nie
              zachował się żaden jego produkt. Jedyną pamiątką z tych lat jest
              skrzynka z założoną kratką pod głośnik. Jest to pozostałość po
              niedokończonym projekcie zbudowania radia przenośnego.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPerson;
