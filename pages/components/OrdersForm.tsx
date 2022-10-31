import styles from "/styles/Home.module.css"
import Link from 'next/link'

const OrdersForm = ({ orders, orders_saloons }) => {
    
    return (
        <form className={styles.authgrid}>
            <p>Выберите услугу:</p>
            {orders?.map(order => {
                return (
                    <a>
                        <div>
                            <button>{order.name_service} по цене {order.price}</button>
                        </div>
                    </a>
                )
            })}
        </form>
    )
}

export default OrdersForm;