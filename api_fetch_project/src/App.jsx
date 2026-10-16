// ERROR HANDLING UI TO DISPLAY ON 404 AND 500 

// import React, { useState, useEffect } from "react";
// import "./App.css";
// import ErrorPage from "./ErrorPage";

// function App() {
//   const [data, setData] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [errorCode, setErrorCode] = useState(0);
//   const [status, setStatus] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
// "https://jsonplaceholder.typicode.com/photos?_limit=10"      );
        


//       if (response.status === 404) {
//         setErrorCode(404);
//         setLoading(false);
//         return;
//       }

//       if (response.status >= 500) {
//         setErrorCode(500);
//         setLoading(false);
//         return;
//       }
//       setStatus(response.status);
//       const data = await response.json();
//       setData(data);
//       setLoading(false);
//       console.log("Status Code:", response.status);
//       console.log("Data Elements:", data.length);
//     };

//     fetchData();
//   }, []);

//   const filteredData = data.filter((item) =>
//     item.title.toLowerCase().includes(search.toLowerCase())
//   );

//   console.log(data, "data");

//   if (loading) {
//     return <h2 className="message">Loading...</h2>;
//   }

//   if (errorCode === 404) {
//     return (
//       <ErrorPage
//         code="404"
//         message="Page Not Found"
//       />
//     );
//   }

//   if (errorCode === 500) {
//     return (
//       <ErrorPage
//         code="500"
//         message="Internal Server Error"
//       />
//     );
//   }

//   return (
//     <div className="container">
//       <h1>Photo Gallery</h1>

//       <input
//         type="text"
//         placeholder="Search photo title..."
//         value={search}
//         onChange={(e) => {
//           setSearch(e.target.value);
//           setIndex(0);
//         }}
//         className="search"
//       />

//       {filteredData.length > 0 ? (
//         <div className="card">
//           <img
//             src={filteredData[index].thumbnailUrl}
//             alt={filteredData[index].title}
//           />

//           <h2>{filteredData[index].title}</h2>

//           <p>Photo ID: {filteredData[index].id}</p>
//           <p>Album ID: {filteredData[index].albumId}</p>

//           <a
//             href={filteredData[index].url}
//             target="_blank"
//             rel="noreferrer"
//           >
//             View Full Image
//           </a>

//           <br /><br />

//           <button
//             onClick={() =>
//               setIndex((index + 1) % filteredData.length)
//             }
//           >
//             Next Photo
//           </button>

//           <p>
//             Photo {index + 1} of {filteredData.length}
//           </p>
//         </div>
//       ) : (
//         <h2>No data found</h2>
//       )}
//     </div>
//   );
// }

// export default App;




//API FETCH AND ITEREATING THROUGH BUTTON 

// import React, { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [data, setData] = useState([]);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/photos?_limit=10"
//       );
//       const data = await response.json();
//       setData(data);
//     };

//     fetchData();
//   }, []);

//   console.log(data, "data");

//   return (
//     <div className="container">
//       <h1>Photo Gallery</h1>

//       {data.length > 0 && (
//         <div className="card">
//           <img
//             src={data[index].thumbnailUrl}
//             alt={data[index].title}
//           />

//           <h2>{data[index].title}</h2>

//           <p>Photo ID: {data[index].id}</p>
//           <p>Album ID: {data[index].albumId}</p>

//           <button
//             onClick={() => setIndex((index + 1) % data.length)}
//           >
//             Next Photo
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

///////////////////////////////////////////////////////////////////

// API FETCH ALONG WITH MAP AND ANCHOR TAG 


// import React, { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/photos?_limit=10"
//       );
//       const data = await response.json();
//       setData(data);
//     };

//     fetchData();
//   }, []);

//   console.log(data, "data");

//   return (
//     <div className="container">
//       <h1>Photo Gallery</h1>

//       <div className="grid">
//         {data.map((item) => {
//           return (
//             <div className="card" key={item.id}>
//               <a href={item.url} target="_blank" rel="noreferrer">
//                 <img
//                   src={item.thumbnailUrl}
//                   alt={item.title}
//                 />
//               </a>

//               <h2>{item.title}</h2>

//               <p>Photo ID: {item.id}</p>
//               <p>Album ID: {item.albumId}</p>

//               <a href={item.url} target="_blank" rel="noreferrer">
//                 View Full Image
//               </a>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;



////////////////////////////////////////////////////////
// DESTRCUCTURING


// import {useState} from "react";

// import Title from "./Title.jsx";

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//     <Title count={count} />
//     <button onClick={() => setCount (count + 1) } >
//     Click me </button>

// </>

// );}

// export default App;


///////////////////////////////////////////////////////////////////////////////////////
// printing the elemnts that typed on the input field  console 

// import {useState} from "react";


// function App() {
//   const [name, setName] = useState(null);

//   return (
//     <>
//     <h1>Enter inside the field</h1>
//     <input
//       placeholder="type something..."
//       value={name}
//       onChange={(e) => {
//         setName(e.target.value);
//         console.log(e.target.value);
//       }}
//     />
// </>

// );}

// export default App;

import { useState } from "react";

function App() {
  const [form, setForm] = useState({ firstName: "", email: "", age: "" });
  const [result, setResult] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const printValues = () => {
    setResult(form);
  };
  return (
    <>
      <input placeholder=" name"name="firstName" value={form.firstName} onChange={onChange}/>
      <input name="email" type="email" value={form.email} onChange={onChange}/>
      <input name="age" type="number" value={form.age} onChange={onChange}/>
      <button type="button" onClick={printValues}>
        Print Values
      </button>
      {result && (
        <div>
          <h3>Name: {result.firstName}</h3>
          <h3>Email: {result.email}</h3>
          <h3>Age: {result.age}</h3>
        </div>
      )}
    </>
  );
}

export default App;


