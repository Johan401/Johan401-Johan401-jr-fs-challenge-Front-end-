import React, { useState } from 'react';
import Button from '../components/button';
import Input from '../components/input';
import "../css/home.css"


const Home = () => {
  // State variables to manage error, success message, and loading state
  const [error, setError] = useState('');
  const [createSuccesfuly, setCreateSuccesfuly] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to handle the button click event
  const handleClick = () => {
    window.open("/top100", "_self");
  };

//   const checkUrlValidity = async (url) => {
//     try {
//       const response = await fetch(url, { method: 'HEAD' });
//       return response.ok;
//     } catch (error) {
//       console.error('Error:', error);
//       return false;
//     }
//   };

  // Function to check if the URL is valid using regex
  const isValidUrl = (url) => {
    const regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    //const isValidHttp = await checkUrlValidity(url);
    //console.log(isValidHttp)
    return regex.test(url);;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    setLoading(true)
    setCreateSuccesfuly("")
    setError("")

    e.preventDefault();
    const url = e.target.full_url ? e.target.full_url.value : '';

    if (!isValidUrl(url)) {
        console.error('URL is not valid');
        setLoading(false)
        setError('Invalid URL');
        return;
    }

    try {
      const response = await fetch('http://localhost:3000/short_urls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ full_url: url })
      });
      
      if (!response.ok) {
        if(response.status === 422){
            throw new Error('URL is already created');
        } else {
            throw new Error('Failed to shorten URL (500)');
        }
      }

      const data = await response.json();

      setCreateSuccesfuly("http://localhost:3000/"+data.short_code);
      setLoading(false)
    } catch (error) {
      setError('Failed to shorten URL');
      setLoading(false)
    }
  };

  return (
    <div className='homeContainer'>
      <h1>Shorten URL (LTV)</h1>
      <form onSubmit={handleSubmit}>
        <Input placeholder="Enter URL" name="full_url" />
        <Button disabled={loading} buttonType="submit" text={loading ? "Loading" : "Create"} type="submit">Create</Button>
        {createSuccesfuly && <h5>ShortCode created: <a href={createSuccesfuly}>{createSuccesfuly}</a></h5>}
      </form>
      <Button disabled={loading} buttonType="normal" text="Show Top 100" onClick={handleClick}></Button>
      {error && <p className='errorText'>{error}</p>}
    </div>
  );
};

export default Home;
