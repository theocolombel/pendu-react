import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";


function CallApi() {


	
	
const [data, setdata] = useState(undefined);
useEffect( () => {
	(async () => {
		const { newData } = await getData();
		setdata(newData);
	})();
	return () => {};
}, []);

const getData = async() =>{
  const dataJson = await fetch("https://animalfinderapi.herokuapp.com/word");
  return await dataJson.json();
};

if (!data){
	return <p>waiting</p>;
};
return(
<div>
	<p>{data.word}</p>
	</div>
	);



}

export default CallApi;


