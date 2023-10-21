import type { NextPage } from 'next'
import Menu from '../Components/menu.component'


const Home: NextPage = () => { 
  return (
    <main> 
     <Menu page='Home' />
     <h1>This Omunga page</h1>
    </main>
  )
}


export default Home
