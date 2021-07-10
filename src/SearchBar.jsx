import axios from 'axios';
import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { setImages } from './redux/actions/ImageAction'
import  ReactDOM  from 'react-dom';
import './SearchBar.css'

const SearchBar = () => {
    
    const [imagetag,setImagetag] = useState('');
    const [id,setId] = useState('r7oNapcYEx63vfK0Yw2r5r719cKgW0OxSTTcLiOMejA')
    const [result,setResult] = useState([ ]);
    const [page,setPage] = useState(1);
  

    function handleChange(e){
       setImagetag(e.target.value);
    }
    let response;

   
    
    async function FetchImage(){
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${imagetag}&client_id=${id}`
        response = await axios.get(url);
        //console.log(response)
         setResult([]);    
        setResult(response.data.results); 
    }
    
   
     function  handleClick(e){
        if(!imagetag)return;
        FetchImage();
         if(!result)return;
        let element = document.getElementById('load_more')
        ReactDOM.findDOMNode(element).style.display = "flex";
        element = document.getElementById('found_image')
        ReactDOM.findDOMNode(element).style.display = "block";

    }

   async function LoadMoreImage(e){
        setPage(page+1);
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${imagetag}&client_id=${id}`
        response = await axios.get(url);
        //console.log(response
         setResult(result.concat(response.data.results))
    }

   
    
    

   
    return (
        <>
       
        <div className="search_bar">
             <div className="search_space">
                 <input onChange={handleChange} type="text" placeholder="search for photos" />
             </div>
                <button onClick={handleClick} className="search_icon" type="submit"><i className="material-icons">search</i>
            </button>  
        </div>

        <div id="found_image" className="found_image">
            <p>{result.length} images has been found</p>
        </div>
      
        <div className="gallery">
           {    
                result.map((photo,index)=>{
                    return (
                        <img key={index} src={photo.urls.regular} alt="" />
                    )
                })
            }
         </div>
         <div id="load_more" className="load_more">
             <button onClick={LoadMoreImage} className="load_button">load more</button>
         </div>
        
        </>
    )
}

export default SearchBar
