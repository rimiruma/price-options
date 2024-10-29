import PropTypes from 'prop-types';
import { BsCheckSquareFill } from "react-icons/bs";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'> <BsCheckSquareFill className='mr-2' />{feature}</p>
        </div>
    );
};

Feature.propTypes ={
    feature: PropTypes.string
}

export default Feature;