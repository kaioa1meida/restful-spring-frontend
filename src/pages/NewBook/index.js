import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css';
import logoImage from '../../assets/star.png'

export default function NewBook() {

    const [id, setId] = useState(null);
    const [author, setAuthor] = useState('');
    const [launchDate, setLaunchDate] = useState('');
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');

    const { bookId } = useParams();
   
    const navigate = useNavigate();

    const accessToken = localStorage.getItem('accessToken')

    const authorization = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };

    useEffect(() => {
        if (bookId === '0') {
            return;
        } else {
            loadBooks();
        }
    }, [bookId]);

    async function loadBooks() {
        try {
            const response = await api.get(`/api/v1/book/${bookId}`, authorization)

            let adjustedDate = response.data.launchDate.split("T", 10)[0];

            setId(response.data.id)
            setTitle(response.data.title)
            setAuthor(response.data.author)
            setPrice(response.data.price)
            setLaunchDate(adjustedDate)
        } catch (error) {
            alert('Error recovering Book! Try Again');
            navigate('/books')
        }
    }

    async function saveOrUpdate(e){
        e.preventDefault();

        const data = {
            author, 
            launchDate,
            price,
            title
        };

        try {
            if (bookId === '0') {
                await api.post('/api/v1/book', data, authorization);
            } else {
                data.id = bookId;
                await api.put('/api/v1/book', data, authorization);
            }
        } catch (error) {
            alert('Book Creation Failed! Try Again!');
        }
        navigate('/books')
    };

    return (
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Starcode" />
                    <h1>{bookId === '0' ? 'Add New' : 'Update'} Book</h1>
                    <p>Enter the book information and click on {bookId === '0' ? `'Add'` : `'Update'`}!</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="##00BFFF" />
                        Home
                    </Link>
                </section>
                <form onSubmit={saveOrUpdate}>
                    <input
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input
                        placeholder="Author"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                    <input
                        type="date" 
                        value={launchDate}
                        onChange={e => setLaunchDate(e.target.value)}
                    />
                    <input
                        placeholder="Price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />

                    <button className="button" type="submit">{bookId === '0' ? 'Add' : 'Update'}</button>
                </form>
            </div>
        </div>
    );
}