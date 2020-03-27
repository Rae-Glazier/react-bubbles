import React, { useState, useEffect } from "react";
import { axiosWithAuth } from './axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
      .get('/colors')
      .then(response => setColorList(response.data))
      .catch(error => console.log(error.response, 'no bubbles'))
  }, []);


  return (
    <>
      <ColorList {...props} colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
