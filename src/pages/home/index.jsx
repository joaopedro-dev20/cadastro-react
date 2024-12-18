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
      ]

return (

  <div className='container'>
    <form>
      <h1>Cadastro de Usuários</h1>
      <input name='name' type='text' />
      <input name='idade' type='number' />
      <input name='email' type='email' />
      <button type='button'>Cadastrar</button>
    </form>

    <div>
      <div>
        <p>Nome:</p>
        <p>Idade:</p>
        <p>Email:</p>
      </div>
      <button>
        <img src={Trash} alt="" />
      </button>
    </div>

  </div>

)
}

export default Home
