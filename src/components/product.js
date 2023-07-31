import { SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import Button from './Button';


function Product(props) {
    const {id, name , price} = props; 

    const onProductClick = () => {
        setAddProduct
    }

    return (
        <div style={{ border: "1px solid", margin: "5px", padding: "5px 10px" }}>
            <div>
                {name}
            </div>
            <div>
                {price}
            </div>
            <div>
                <Button name="Add to Card" click={onProductClick} />
            </div>
        </div>
    )
}
Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
}
export default Product