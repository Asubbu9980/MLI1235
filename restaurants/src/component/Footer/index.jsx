import React from 'react'
import './index.css'

function Index() {
    return (
        <div className='container-fluid' style={{ backgroundColor: 'light' }}>
            <div className='row '>


                <div className='footer' >

                    <div className='d-flex flex-column '>
                        <div className='footerLink mb-2'>Discover</div>
                        <a href="">Trending Restaurants</a>
                        <a href="">Super Savers</a>
                        <a href="">Dineout Pay</a>
                        <a href="">Contactless Dining</a>
                    </div>
                    <div className='d-flex flex-column '>
                        <div className='footerLink mb-2'>About</div>
                        <a href="">About Us</a>
                        <a href="">Blog</a>
                        <a href="">Careers</a>
                        <a href="">Dineout for Business</a>
                        <a href="">Add Restaurant</a>
                        <a href="">Terms & Conditions</a>
                        <a href="">Privacy Policy</a>

                    </div>

                    <div className='d-flex flex-column '>
                        <div className='footerLink mb-2'>Top Cuisines</div>
                        <a href="">Chinese</a>
                        <a href="">Italian</a>
                        <a href="">South Indian</a>
                        <a href="">Bengali</a>
                        <a href="">Maxican</a>
                        <a href="">Barbecue</a>

                    </div>
                    <div className='d-flex flex-column '>
                        <div className='footerLink mb-2'>Top Facilities</div>
                        <a href="">Fine Dining</a>
                        <a href="">5 Start</a>
                        <a href="">Candle Light Dinner</a>
                    </div>

                    <div className='d-flex flex-column '>
                        <div className='footerLink mb-2'>Mail Us:</div>
                        <p>Flipkart Internet Private Limited,<br />
                            Buildings Alyssa, Begonia &<br />
                            Clove Embassy Tech Village,<br />
                            Outer Ring Road, Devarabeesanahalli Village,<br />
                            Bengaluru, 560103,
                            Karnataka, India</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Index
