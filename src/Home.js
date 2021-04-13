import React from 'react'
import './home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img src="https://gadgetbackpack.files.wordpress.com/2016/07/amazon-prime-banner.jpg?w=1500&h=300&crop=1"
                    alt=""
                    className="home_image" />
                <div className="home_row">
                    <Product
                        title="Rich Dad Poor Dad"
                        price={12.99}
                        rating={4.42}
                        image="https://www.richdad.com/MediaLibrary/RichDad/Images/3d-books/2020/front-covers/3d-front-RDPD.png"
                    />
                    <Product
                        title="Rich Dad Poor Dad"
                        price={12.99}
                        rating={4.42}
                        image="https://www.richdad.com/MediaLibrary/RichDad/Images/3d-books/2020/front-covers/3d-front-RDPD.png"
                    />
                </div>
                <div className="home_row">
                    <Product
                        title="Rich Dad Poor Dad"
                        price={12.99}
                        rating={4.42}
                        image="https://www.richdad.com/MediaLibrary/RichDad/Images/3d-books/2020/front-covers/3d-front-RDPD.png"
                    />
                    <Product
                        title="Rich Dad Poor Dad"
                        price={12.99}
                        rating={4.42}
                        image="https://www.richdad.com/MediaLibrary/RichDad/Images/3d-books/2020/front-covers/3d-front-RDPD.png"
                    />
                    <Product
                        title="Rich Dad Poor Dad"
                        price={12.99}
                        rating={4.42}
                        image="https://www.richdad.com/MediaLibrary/RichDad/Images/3d-books/2020/front-covers/3d-front-RDPD.png"
                    />
                </div>
                <div className="home_row">
                    <Product
                        title="Rich Dad Poor Dad"
                        price={12.99}
                        rating={4.42}
                        image="https://www.richdad.com/MediaLibrary/RichDad/Images/3d-books/2020/front-covers/3d-front-RDPD.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
