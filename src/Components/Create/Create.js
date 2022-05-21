import React, { Fragment,useState,useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {AuthContext,FirebaseContext} from '../../store/FirebaseContext'
import { useHistory } from 'react-router-dom';


const Create = () => {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const [name,setName] = useState("")
  const [catogory,setCatogory] = useState("")
  const [price,setPrice] = useState("")
  const [image,setImage] = useState(null)
  const date = new Date()
  const History = useHistory()
  const handleSubmit = ()=>{
       firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
         ref.getDownloadURL().then((url)=>{
           firebase.firestore().collection("products").add({
             name,
             catogory,
             price,
             url,
             userId:user.uid,
             createdAt:date.toDateString()
           }).then(()=>{
             History.push("/")
           })
         })
       })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={catogory}
              onChange={(e)=>setCatogory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
            className="input" 
            type="number" 
            value={price}
            onChange= {(e)=>setPrice(e.target.value)}
            id="fname" 
            name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px"height="200px" src={image ? URL.createObjectURL(image) : ""}></img>
          
            <br />
            <input 
            type="file"
            onChange={(e)=>{setImage(e.target.files[0])}} />
            <br />
            <button type='submit' onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
