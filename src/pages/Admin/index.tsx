import { Header } from '../../components/Header'
import { MultiLevel } from '../../components/MultiLevel'
import { SideMenu } from '../../components/SideMenu'
import  '../../styles/global.css'

export function Admin() {
  
  return (
    <>
      <Header />
      <section className='main-container content-flex container gap-1'>
        <SideMenu />
        <MultiLevel />
      </section>
    </>
  )
}

export default Admin
