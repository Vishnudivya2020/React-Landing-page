import PropTypes from  "prop-types";

const Icons=({icons, title, description}) => {

    
    return (
        <div className="I-container">
         <i className="icons">{icons}</i> 
         <h4 className="title">{title}</h4>
         <p  className="des">{description}</p>
        </div>
    )
};

const People =({image,name, review})=>{
    return(
        
        <>
        <div className="P-content">
        <img src={image} alt="#" className="image"/>
        <h2 className="name">{name}</h2>
        <p className="rev">{review}</p>
         </div>
        </>
    )
}

Icons.PropType={
    icons:PropTypes.string,
    title:PropTypes.string,
    description:PropTypes.string,
    
};

People.Proptype={
    image:PropTypes.string,
    name:PropTypes.string,
    review:PropTypes.string,
}


export default Icons;

export {People};