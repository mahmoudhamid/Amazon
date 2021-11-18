import React from 'react';
import Product from '../product/Product';
import Category from './category/Category';
import './Home.css';
import { items } from '../../data'
import { NavItem } from 'react-bootstrap';
import { categories } from '../../data'


function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-6bababd9-ff42-407e-8e71-b6b0012e8def._CB417386616_QL85_V1_.jpg" />
                <div className="categories">
                    {
                        categories.map(category => (
                            <Category
                                title={category.title} image={category.image}
                            />
                        ))
                    }
                </div>

                <div className="around">
                    <div className="home_row">
                        {
                            items.map(item => (
                                <Product item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

