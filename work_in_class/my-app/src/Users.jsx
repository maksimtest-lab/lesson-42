import { useEffect, useState, useRef } from 'react';
import './Users.sass'
import UsersList from './UsersList.jsx';

export default function Users() {
    const [users, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            }).finally(() => {
                setIsLoading(false);
            });

    }, []);
    const handleSearch = (event) => {
        const { value } = event.target;
        setSearch(value);
    };

    const handleCounter = (event) => {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div className='users'>
            <h1 className='users__title'>Users</h1>
            <input
                type="text"
                placeholder="Search users"
                className='users__input'
                value={search}
                onChange={handleSearch}
            />
            <button onClick={handleCounter}>Count: {count}</button>

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <UsersList users={users} search={search} />
            )}
        </div>
    );
}