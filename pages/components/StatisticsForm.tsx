import styles from "/styles/Home.module.css"
import prisma from "../../lib/prisma";
import Link from 'next/link'

const StatisticsForm =  ({orders, saloons, employee}) =>{

  let f_date, l_date, current_saloon

  const handleSubmit = async (event) => { //по факту сеттер всех наших фильтров, можешь переделать такую логику
    event.preventDefault();
    const dates = {
        first_date: event.target.first_date.value,
        last_date: event.target.last_date.value,
        saloon: event.target.saloons_select.value
    }
    f_date = dates.first_date
    l_date = dates.last_date
    current_saloon = dates.saloon
  }
  
  const getOrders = () => {
    let filtered_orders = orders?.find(function(order){ //Заказы, которые попадают во временной отрезок

      let date_order = new Date(order.orders_date)
      let date_first = new Date(f_date)
      let date_second = new Date(l_date)

      let saloon_equality = saloons[order.id_saloon - 1].adress_saloon == current_saloon

      return (date_first <= date_order && date_second >= date_order && saloon_equality);
    })
    return filtered_orders //бредовый return, просто чтоб понимали какое значение хранит в себе отфильтрованный список предоставленных услуг
  }

  const getEmployee = () =>{
    let emp_arr = []
    let orders_in_time = getOrders()
    for (let index = 0; index < employee.length; index++) {
      if(employee[index].id_saloon == current_saloon){
          let orders_of_employer = orders_in_time?.find(function(order){
            order.id_employer == index + 1 //в SQL отсчет идет не с нуля, а с единицы
          })
          let sum = 0
          for (let j = 0; j < orders_of_employer.length; j++) {
            sum += orders_of_employer[j].price
          }
          emp_arr.push({
            employer: employee[index].full_name,
            employer_id: index+1,
            profit: sum,
            count_orders: orders_of_employer.length
          })
      }
    }
    return emp_arr //тоже бредовый return, вохвращающий массивы с элементами, хранящими номер работника, его имя,
  }                                                             // заработанную салону сумму и количество заказов

  return (
    <form onSubmit={handleSubmit} className={styles.authgrid}>
          <p> Дата начала: <input type={"date"} name = {"first_date"}/> Дата конца: <input type={"date"}  name = {"last_date"}/></p>
          <p>Выберите отделение: <select name={"saloons_select"}>
          <option disabled>Салоны</option>
            {saloons?.map(saloon=>{
              return(
                  <option>{saloon.adress_saloon}</option>
              )
            })}
          </select></p>
          <p><input type="submit" value="Подтвердить"/></p>
          <p>
            <button onClick={getEmployee} name="sOrders">Заказы</button>
          </p>
          {orders?.map(user=>{
            return(
                 <Link href={`/away`} key = {user.id}>
                    <a>
                        <div> 
                            <h3>{} {}</h3>
                        </div>
                    </a>
                </Link>
            )
          })}
    </form>
  )
}

export default StatisticsForm;