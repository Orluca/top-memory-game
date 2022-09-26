import React, { useEffect, useState } from "react";

function Test() {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");

  useEffect(() => {
    async function fetchData(id) {
      const result = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const resultJSON = await result.json();
      return resultJSON;
    }

    async function getName(id) {
      await fetchData(id).then((data) => setName(data.name));
    }

    async function getPicture(id) {
      await fetchData(id).then((data) => setPicture(data.image));
    }

    getName(1);
    getPicture(1);
  });

  return (
    <div>
      <img src={picture} alt={"A picture of " + { name }} />
      <div>My name is {name ? name : "..."}</div>
    </div>
  );
}

export default Test;
