import React from 'react';
import getData from '../data';

const UserDetails = async (props) => {
  const id = props.params.detail;
  const users = await getData();
  const user = users[id - 1];

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <>
      <h2>User Detail</h2>
      <p><b>Name :</b> {user.name}</p>
      <p><b>Username :</b> {user.username}</p>
      <p><b>Email :</b> {user.email}</p>
      <p><b>Phone :</b> {user.phone}</p>
      <p><b>Website :</b> {user.website}</p>
      <h3>Address :</h3>
      <p><b>Street :</b> {user.address.street}</p>
      <p><b>Suite :</b> {user.address.suite}</p>
      <p><b>City :</b> {user.address.city}</p>
      <p><b>Zipcode :</b> {user.address.zipcode}</p>
      <h3>Company :</h3>
      <p><b>Name :</b> {user.company.name}</p>
      <p><b>Catch Phrase :</b> {user.company.catchPhrase}</p>
      <p><b>BS :</b> {user.company.bs}</p>
    </>
  );
};

export default UserDetails;

export const generateStaticParams = async() => {
  const users = await getData();
  const paths = users.map((user) => ({
    params: { id: user.id.toString() }
  }))
  return paths
}
