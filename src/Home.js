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
                        id="243"
                        title="Rich Dad Poor Dad"
                        price={12.99}
                        rating={4.42}
                        image="https://www.richdad.com/MediaLibrary/RichDad/Images/3d-books/2020/front-covers/3d-front-RDPD.png"
                    />
                    <Product
                        id="143"
                        title="Rich Dad Poor Dad"
                        price={12.99}
                        rating={4.42}
                        image="https://www.richdad.com/MediaLibrary/RichDad/Images/3d-books/2020/front-covers/3d-front-RDPD.png"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="189"
                        title="Honor Fit bit"
                        price={59.99}
                        rating={3.42}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="124"
                        title="Aamzon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={12.99}
                        rating={4.42}
                        image="https://img.dtcn.com/image/digitaltrends/echo-3rd-gen-416x277.jpg"
                    />
                    <Product
                        id="987"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4.42}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="178"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming monitor
                         - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1098.99}
                        rating={4.42}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
