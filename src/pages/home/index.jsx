import Trash from '../../asset/lixo.png'
import './style.css'
import api from '../../service/api'
import { useEffect, useState } from 'react'
// UseEffect para chamar a função GET como recomdado no REACT. 


function Home() {

  const [users, setUsers] = useState([])

  //UseState permite que quando houver alterações consigamos visualizá-las. 

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')

    setUsers(usersFromApi.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='name' type='text' />
        <input placeholder='Idade' name='idade' type='number' />
        <input placeholder='Email' name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (

        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash}
              alt="lata de lixo"
              width={50}
              height={50}
            />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home;
