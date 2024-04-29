import PropTypes from  "prop-types";


const Header=({input,button}) =>{
    return(
        <div  className="hf-content">
       
        <input type="email" placeholder="Email Address" className="inbox"/>
        {/* <button className="button">Submit</button> */}
        <button type="button" className="btn btn-primary">Submit</button>
        </div>


    )
}

Header.PropType={
    paragrabh:PropTypes.string,

}

export default  Header;
