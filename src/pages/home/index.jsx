import Trash from '../../asset/lixo.png'
import './style.css'
import api from '../../service/api'
import { useEffect, useState,useRef } from 'react'
// UseEffect para chamar a função GET como recomdado no REACT. 

// adicionado um novo usuário com useRef pela interface do Front em React. 
function Home() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  //UseState permite que quando houver alterações consigamos visualizá-las. 

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')

    setUsers(usersFromApi.data)
  }

  // O create users é chamado ao clique do botão. Por isso o onClick={createUsers} por lá.
  // o axios permite procurar as infos por essa forma. Descrevendo exatamente e adicionando o caminho de onde estará as infos inseridas.
  async function createUsers() {
    
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
   
    getUsers()
  }

  async function deleteUsers(id) {

    //Para deletar vou deletar o usuário pelo ID. Utilizei a `` para encaixar a variável junto com a string.
    await api.delete(`/usuarios/${id}`)

    getUsers()
  }

  useEffect(() => {

    getUsers()

  }, [])

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='name' type='text' ref={inputName}/>
        <input placeholder='Idade' name='idade' type='number' ref={inputAge}/>
        <input placeholder='Email' name='email' type='email' ref={inputEmail}/>
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map((user) => (

        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash}//acima, é necessário colocar o () => para que o REACT não trave. 
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
