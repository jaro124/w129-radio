import React from "react";

const StatuteAbout = () => {
  return (
    <div>
      <div className="flex justify-center my-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 uppercase underline decoration-orange-400 lg:text-3xl dark:text-white">
            Regulamin
          </h1>
        </div>
      </div>
      <div className="max-w-4xl bg-white dark:bg-black rounded-lg mx-auto my-8 p-16">
        <div class="flex flex-col items-center justify-center">
          <div>
            <p>
              Zapraszamy wszystkich miłośników radia do zapoznania się z naszym
              regulaminem! Dzięki niemu dowiesz się, jak działa nasze
              stowarzyszenie, jakie są Twoje prawa i obowiązki oraz jak możesz w
              pełni korzystać z członkostwa. Przeczytaj regulamin, aby lepiej
              zrozumieć nasze zasady i dołącz do społeczności pasjonatów, którzy
              dzielą się swoją miłością do radia.
            </p>
          </div>
          <div className="mt-4">
            <a
              href="/regulamin-stowarzyszenia-pentoda.pdf"
              className="no-underline font-medium text-black dark:text-gray-400 border-b-2 border-transparent hover:border-orange-400"
              download
            >
              Pobierz regulamin (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatuteAbout;
