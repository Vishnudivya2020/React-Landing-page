import PropTypes from "prop-types";

const Card=({title, description, image, type})=>{
    
    if(type === 'image'){
        return <img src={image} alt={title} />
    }
    return(
        <div className="content" >
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
    
};

Card.propTypes={
    title:PropTypes.string,
    description:PropTypes.string,
    type:PropTypes.string,
    image:PropTypes.string,
};
export default Card;