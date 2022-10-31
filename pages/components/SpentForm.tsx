import styles from "/styles/Home.module.css"
import prisma from "../../lib/prisma";
import Link from 'next/link'

const SpentForm = ({clients}) => {
let findName1
let user = {
  found: 0,
  id: '',
  full_name: '',
  phone_number: '',
  birthday: '',
  sex: '',
  last_visit: '',
  registration_date: '',
  orders: []
}


const handleSubmit = async (event) => {
try {
 event.preventDefault()
 const findName = await event.target.sendUser.value
 findName1 = await findName
}
catch (e) {
  console.log(404)
}
}



const getUser = () => {
  try {
  let getName = document.getElementsByName('Name')[0]
    alert('Button click ' + getName.value + " <- that")
    for(let i=0;i<clients.length;i++)
    {
     if (clients.full_name == getName.value) 
     {
        user.full_name = clients.full_name
        user.phone_number =clients.phone_number
        user.birthday = clients.birthday
        user.sex = clients.sex
        user.last_visit = clients.last_visit
        user.registration_date = clients.registration_date
        user.orders = clients.orders
     } 
    }
  }
  catch (e)
  {
    alert(404)
  }

}








return (
    <form onSubmit={handleSubmit} className={styles.authgrid}>
            
          
  <p>Поиск по имени: <input type="text" name="Name"/></p>
  <button onClick={getUser} name="sendUser">Найти</button>
  <a className={styles.card}>
            <Link href="/dashboard/addClient"><h2>Добавить отработанного клиента &rarr;</h2></Link>
            </a>
    

          
       
    </form>
  )

}



















export default SpentForm