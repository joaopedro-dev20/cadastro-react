import Trash from '../../asset/lixo.png'
import './style.css'

function Home() {

  const users = [
    {

      id: '1356afs',
      name: 'João',
      age: 24,
      email: 'joao@gmail.com',

    },
    {

      id: '2136egasdg',
      name: 'Rafa',
      age: 25,
      email: 'rafa@gmail.com'

    },
    {

      id: '2134fskbf',
      name: 'Pedro',
      age: 45,
      email: 'pedro@gmail.com'

    }
  ]

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='name' type='text' />
        <input placeholder= 'Idade'name='idade' type='number' />
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
