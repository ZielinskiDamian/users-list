import { useState } from 'react';
import './UsersList.css';
const UsersList = () => {
	const [FormData, setFormData] = useState({
		username: '',
		email: '',
		usertype: 'Admin',
	});
	const handleInputChange = (e) => {
		const target = e.target;
		const name = target.name;
		setFormData((prevDataForm) => {
			return { ...prevDataForm, [name]: target.value };
		});
	};
	console.log(FormData);
	return (
		<div className='usersList'>
			<form>
				<h2>{FormData.username}</h2>
				<h2>{FormData.email}</h2>
				<h2>{FormData.usertype}</h2>
				<label htmlFor='username'> User name </label>
				<input
					type='text'
					id='username'
					name='username'
					placeholder='User name'
					onChange={handleInputChange}
					value = {FormData.username}

				/>
				<label htmlFor='email'> User email </label>
				<input
					type='email'
					id='email'
					name='email'
					placeholder='User email'
					onChange={handleInputChange}
					value = {FormData.email}
				/>
				<label htmlFor='usertype'> User type </label>
				<select id='usertype' name='usertype' onChange={handleInputChange}>
					<option value={'Admin'}>Admin</option>
					<option value={'User'}>User</option>
				</select>
				<button>Save</button>
			</form>
		</div>
	);
};
export default UsersList;
