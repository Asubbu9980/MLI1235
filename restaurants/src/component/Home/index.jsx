import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.css'
import axios from 'axios'
import Footer from '../Footer'
import { useNavigate } from 'react-router';
import Rating from '@mui/material/Rating';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
function Index() {
    const [cart, setCart] = useState([]);
    const [value, setValue] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {
        getCartData()
    }, [])

    function getCartData() {
        axios.get("http://localhost:3001/restaurants")
            .then((res) => {
                console.log(res.data)
                setCart(res.data)
                setValue(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }



    function onSearch(event) {
        let text = event.target.value;
        if (!text) {
            setCart(value)
        } else {
            let filterd = cart.filter((user) => {
                return user.name.toLowerCase().includes(text.toLowerCase());
            });
            setCart(filterd)
        }
        console.log(text)
    }


    return (
        <>
            <div className='imageCard'>
                <div className='d-flex justify-content-center mb-5 '>
                    <InputGroup bg="transparent" className="mb-3 search ">
                        <Form.Control
                            type="text"
                            name='serach'
                            onChange={onSearch}
                            placeholder='Search By Name'
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </div>

                <div className='container'>
                    <div className='row'>
                        {cart.map((items) =>
                            <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-5 '>
                                <Card className='shadow' style={{ width: '18rem', height: '100%' }}>
                                    <Card.Img className='image' variant="top" src={items.image} />
                                    <Card.Body>
                                        <div className=' justify-content-between'>
                                            <div>
                                                <Card.Title className='titleName'>{items.name}</Card.Title>
                                                <div className='star'>
                                                    <Card.Title>
                                                        <Rating name="read-only" value={items.rating} readOnly />
                                                    </Card.Title>
                                                </div>
                                            </div>
                                            <Card.Title className='address'>{items.address}</Card.Title>
                                        </div>
                                    </Card.Body>
                                    <div className='btn'>
                                        <Button onClick={() => navigate(`/detailsPage/${items._id}`)} className='detailsBtn' variant="light">Details</Button>
                                    </div>
                                </Card>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <footer className='mt-5'>
                    <Footer />
                </footer></div>
        </>
    )
}

export default Index
