import { FormattedMessage } from 'react-intl';
import './UserList.scss';
import React, { useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

const UserList = () => {
  const [userList, setUserList] = React.useState([]);

  useEffect(() => {
    console.log(API_URL);
    fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((data) => {
        setUserList(data);
      })
      .catch((error) => {
        alert('ERROR API');
        console.log(error + ' - ERROR API');
      });
  }, []);

  return (
    <div className='page'>
      <h1>
        <FormattedMessage id='header.users' />
      </h1>
      <table className='user-table'>
        <thead className='user-table__header'>
          <tr>
            <th>ID</th>
            <th>
              <FormattedMessage id='users:name' />
            </th>
            <th>
              <FormattedMessage id='users:username' />
            </th>
            <th>
              <FormattedMessage id='users:email' />
            </th>
            <th>
              <FormattedMessage id='users:website' />
            </th>
          </tr>
        </thead>
        <tbody className='user-table__body'>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
