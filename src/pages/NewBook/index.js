import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';
import logoImage from '../../assets/star.svg'

export default function newBook() {
    return (
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Starcode" />
                    <h1>Add New Book</h1>
                    <p>Enter the book information and click on 'Add'!</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="#251FC5" />
                        Home
                    </Link>
                </section>
                <form>
                    <input placeholder="title" />
                    <input placeholder="Author" />
                    <input type="date" />
                    <input placeholder="Price" />

                    <button className="button" type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}