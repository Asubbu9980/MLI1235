import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './index.css';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

function DetailsPage({ cart }) {
    const { id } = useParams();

    const [details, setDetails] = useState({});

    const [comment, setComment] = useState([]);


    const [input, setInput] = useState({
        rating: 0,
        comment: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input);
        fetch(`http://localhost:3001/comments/add/${id}`, {
            method: "POST",
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            });
        setInput("")
    }

    function changeInput(e) {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    useEffect(() => {
        getData()
        getComments()
    }, [])

    function getData() {
        fetch(`http://localhost:3001/restaurants/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setDetails(data)
            })
    }

    function getComments(){
        fetch(`http://localhost:3001/comments/${id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setComment(data)
        })
    }

    return (
        <div className='detailscard'>
            <div className='container d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-12'>
                        <Card className='shadow ' >
                            <Card.Body>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <Card.Title className='titleName'>{details.name}</Card.Title>
                                        <Card.Title className='address'>{details.address}</Card.Title>
                                    </div>
                                    <div > Rating
                                        <Card.Title>
                                            <span className='rating'>{details.rating ? details.rating.toFixed(1) : 'N/A'}</span>
                                        </Card.Title>
                                    </div>
                                </div>

                                <div >
                                    <Card.Title className='description'>{details.description}</Card.Title>
                                </div>



                                <div className='mt-3 mb-2'>
                                    <Card.Title>Reviews</Card.Title>
                                    <div className='d-flex'>
                                        <div>
                                            <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                                        </div>
                                        <div className='commentName'>
                                            Alex
                                            <div >
                                                {details.comment}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex mt-4'>
                                        <div>
                                            <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1645378999488-63138abdecd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
                                        </div>
                                        <div className='commentName'>
                                            Neha Sharma
                                            <div >
                                                This restaurant is really good, Food is amazing!! The Waiter were very good, Waiter Sahabur is given very good service
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex mt-4'>
                                        <div>
                                            <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                                        </div>
                                        <div className='commentName'>
                                            Akshay
                                            <div >
                                                Food and service was great. Must visit the place for your special occasions. Mr. Saha bur took care of us nicely. Assured privacy was given. Very impressive
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex mt-4'>
                                        <div>
                                            <Avatar alt="Travis Howard" src="https://b.zmtcdn.com/data/user_profile_pictures/7d1/b7c0e898e7d788f61b31f98ea06547d1.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" />
                                        </div>
                                        <div className='commentName'>
                                            Ram
                                            <div >
                                                Food and service was great. Must visit the place for your special occasions. Mr. Saha bur took care of us nicely. Assured privacy was given. Very impressive
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex mt-4'>
                                        <div>
                                            <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                                        </div>
                                        <div className='commentName'>
                                         Iliyas
                                            <div >
                                                {comment.map((text)=>{
                                                     <p>{text.comment}</p>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mb-5'>
                                <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3 " controlId="formBasicPassword">

                                            <Form.Label>Rating</Form.Label>
                                            <div>
                                                <Rating
                                                    name="rating"
                                                    value={input.rating}
                                                    onChange={(e, newValue) => changeInput({ target: { name: 'rating', value: newValue } })}
                                                />
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
                                        <Button className='btnR mt-3 ' variant="light" type="submit">
                                            Comment
                                        </Button>
                                    </Form>
                                </div>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default DetailsPage;