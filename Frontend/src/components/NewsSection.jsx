import React from "react";
import Card from "./Card2.jsx";
const NewsSection = () => {
    const articles = [
      {
        image: "https://via.placeholder.com/100",
        title: "ITC – The Mega Demerger!",
        description:
          "ITC is moving to demerge its hotel business. This is a major event for retail investors.",
      },
      {
        image: "https://via.placeholder.com/100",
        title: "The Story Behind TW2",
        description:
          "A professional in personal finance shares their experience with wealth management.",
      },
      {
        image: "https://via.placeholder.com/100",
        title: "Which investments to pick for your Children’s Education?",
        description:
          "Learn how to strategically save for your children's education with PPF investments.",
      },
    ];
  
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Latest News & Articles</h2>
        <div className="space-y-4">
          {articles.map((article, index) => (
            <Card key={index} {...article} />
          ))}
        </div>
      </div>
    );
  };

  export default NewsSection;