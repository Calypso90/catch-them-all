"use client";

import React, { useState, useEffect } from "react";

export default function Beer() {
  const [beerArray, setBeerArray] = useState([]);
  const [beer, setBeer] = useState({});

  async function fetchBeers() {
    const url = `https://random-data-api.com/api/v2/beers?size=20`;

    const response = await fetch(url);

    const data = await response.json();

    setBeerArray(data);
  }

  useEffect(() => {
    fetchBeers();
  }, []);

  function handleChange(e) {
    for (let i = 0; i < beerArray.length; i++) {
      if (beerArray[i].id === +e.target.value) {
        setBeer(beerArray[i]);
      }
    }
  }

  return (
    <div id="beer-container">
      <h3>Beer</h3>
      <p>
        Here's an API to fetch 20
        beers:https://random-data-api.com/api/v2/beers?size=20
      </p>
      <p>Choose your favorite one to see its details.</p>
      <div>
        <select
          onChange={(e) => handleChange(e)}
          name="beer-list"
          id="beer-list"
          value={beer}
        >
          <option key="selectBeer" value="selectBeer">
            Select a Beer
          </option>
          {beerArray.map((beer) => {
            return (
              <option key={beer.uid} value={beer.id}>
                {beer.name}
              </option>
            );
          })}
        </select>
        <table>
          <tbody>
            <tr>
              <th>id</th>
              <th>uid</th>
              <th>brand</th>
              <th>name</th>
              <th>style</th>
              <th>hop</th>
              <th>yeast</th>
              <th>malts</th>
              <th>ibu</th>
              <th>alcohol</th>
              <th>blg</th>
            </tr>
            <tr>
              <td>{beer.id}</td>
              <td>{beer.uid}</td>
              <td>{beer.brand}</td>
              <td>{beer.name}</td>
              <td>{beer.style}</td>
              <td>{beer.hop}</td>
              <td>{beer.yeast}</td>
              <td>{beer.malts}</td>
              <td>{beer.ibu}</td>
              <td>{beer.alcohol}</td>
              <td>{beer.blg}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
