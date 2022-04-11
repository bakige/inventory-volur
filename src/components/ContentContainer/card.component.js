import React, { useState, useEffect } from "react";

const Card = (text) => {
  let [list, setList] = useState(text.text);
  list = text.text;
  let n = text.text.length - 1;

  const rotate = () => {
    let tags = list;
    let x = tags[0],
      i;
    for (i = 0; i < n - 1; i++) tags[i] = tags[i + 1];
    tags[n - 1] = x;
    setList((list) => [...tags]);
  };

  useEffect(() => {
    setInterval(() => {
      rotate();
    }, 1000);
  }, [list]);

  return (
    <div className="m-8">
      {list.slice(0,5).map((item, index) => (
        <p className="bg-slate-200 p-2 p-px-4 m-0.5 w-96 rounded-lg border-orange-500 text-center font-bold" key={index}>{item?.collectionName}</p>
      ))}
    </div>
  );
};

export default Card;
