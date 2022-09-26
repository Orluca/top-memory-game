import React, { useEffect, useState } from "react";

function Test() {
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchData(id) {
      const result = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const resultJSON = await result.json();
      return resultJSON;
    }

    async function getName(id) {
      await fetchData(id).then((data) => setName(data.name));
    }

    getName(5);
  });

  return <div>My name is {name ? name : "..."}</div>;
}

export default Test;
