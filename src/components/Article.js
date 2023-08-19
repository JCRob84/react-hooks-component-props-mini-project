import React from "react";

function Article({ title, date, preview }) {
  const defaultDate = "January 1, 1970";

  const renderReadingTime = (minutes) => {
    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      const coffeeEmojis = "☕️".repeat(coffeeCups);
      return `${coffeeEmojis} ${minutes} min read`;
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      const bentoEmojis = "🍱".repeat(bentoBoxes);
      return `${bentoEmojis} ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
