import './App.scss';
import { useState } from 'react'
import UserCard from './components/UserCard/UserCard';
// importing our data from the JSON file. 
import userData from './data/users.json'

function App() {

  // setting the users state to the userData we imported.
  const [users, setUsers] = useState(userData)  
  // setting the currentUser to the first user in array.
  const [currentUser, setCurrentUser] = useState(users[0])

  //filtering array to not include the currentUser 
  let filtedArray = users.filter((ele => ele.id !== currentUser.id))

  // function being passed down as prop. 
  const changeUser = (first_name, last_name, id) => {
    let obj = {
      id: id ,
      first_name: first_name, 
      last_name: last_name
    }

    //using setCurrentUser to change the currentUser state.
    setCurrentUser(obj)
  }


  return (
    <div className="app">
      <div className='app__box'>
        <h2>Current User</h2>
          <UserCard 
            first_name={currentUser.first_name}
            last_name={currentUser.last_name}
            id={currentUser.id}
          />
      </div>
      {
        //mapping our filtered array.
        filtedArray.map((user) => {
          return (
             <UserCard
                key={user.id} 
                first_name={user.first_name}
                last_name={user.last_name}
                id={user.id}
                handler={changeUser}
             />
          )
        })
      }
    </div>
  );
}

export default App;
