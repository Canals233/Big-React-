import './cart-icon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { SetIsCartOpen } from '../../store/cart/cart.action'

import { useDispatch, useSelector } from 'react-redux/es/exports'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'

const CartIcon=()=>{
    const dispatch=useDispatch()

    const cartCount=useSelector(selectCartCount)
    const isCartOpen=useSelector(selectIsCartOpen)

    const toggleOpen=()=>dispatch(SetIsCartOpen(!isCartOpen))
    return(
        <div className='cart-icon-container' onClick={toggleOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}
export default CartIcon