
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';

function Index() {
    const [value, setValue] = useState(0);
    const [input, setInput] = useState({
        name: "",
        image: "",
        address: "",
        description: "",
        rating: 0,
        comment: ""
    });
    const navigate = useNavigate();

    const [show1,setShow1]=useState(false)
    // const [show2,setShow2]=useState(false)
    // const [show3,setShow3]=useState(false)
    // const [show4,setShow4]=useState(false)
    // const [show5,setShow5]=useState(false)
    // const [show6,setShow6]=useState(false)
  


    function handleSubmit(e) {
        e.preventDefault();
        console.log(input);

        // const details={name,image,address,description,rating,comment}
  
   if(input.name.length ==0 && input.image.length ==0 && input.address.length==0 && input.description.length==0 && input.rating.length ==0 && input.comment.length ==0){
    setShow1(true)
   } else if(input.name.length==0){
    setShow1(true)
   } else if(input.image.length ==0){
    setShow1(true)
   } else if(input.address.length==0){
    setShow1(true)
   } else if(input.description.length==0){
    setShow1(true)
   } else if(input.rating.length ==0){
    setShow1(true)
   } else if(input.comment.length==0){
    setShow1(true)
   }else{
        fetch("http://localhost:3001/restaurants", {
            method: "POST",
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (res) {
                    navigate("/");
                }
                console.log(res);
            });
            setInput("")
           }
    }

    function changeInput(e) {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <>
            <div className='inputDetails'>
                <div className='container'>
                    <div className='row justify-content-center '>
                        <div className='col-sm-4 card p-5'>
                            <h1 className='mb-4 text-center 'style={{color:'#ef8064'}}>Register Restaurants</h1>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name='name'
                                        placeholder="Enter Name"
                                        onChange={changeInput}
                                    />
                                      {show1?<p style={{color:"red"}}>*Name Required</p>:null}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Image Url"
                                        name='image'
                                        onChange={changeInput}
                                    />
                                      {show1?<p style={{color:"red"}}>*Iamge Required</p>:null}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Address"
                                        name='address'
                                        onChange={changeInput}
                                    />
                                      {show1?<p style={{color:"red"}}>*Address Required</p>:null}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Description"
                                        name='description'
                                        onChange={changeInput}
                                    />
                                      {show1?<p style={{color:"red"}}>*Description Required</p>:null}
                                </Form.Group>

                                <Form.Group className="mb-3 " controlId="formBasicPassword">

                                <Form.Label>Rating</Form.Label>
                                  <div>
                                  <Rating
                                        name="rating"
                                        value={input.rating}
                                        onChange={(event, newValue) => changeInput({ target: { name: 'rating', value: newValue } })}
                                    />
                                      {show1?<p style={{color:"red"}}>*Rating Required</p>:null}
                                  </div>
                                   
                                </Form.Group>
            
                                <Form.Control
                                    as="textarea"
                                    name='comment'
                                    type="text"
                                    value={input.comment}
                                    onChange={changeInput}
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                                      {show1?<p style={{color:"red"}}>*Comment Required</p>:null}
                              
                                <Button className='container-fluid mt-3 btnRe' variant="light" type="submit">
                                    Register
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;
