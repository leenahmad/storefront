import { connect } from "react-redux";
import { Typography } from "@mui/material";


const ActiveCategory = props => {
    return (
        <>
            {props.activeCategory &&
               
                    <Typography variant="h6" style={{ color:'gray'}}> Browse our Categories:{props.activeCategory}</Typography>
               
            }
        </>
    )
}

const mapStateToProps = state => ({
    activeCategory: state.store.activeCategory
})

export default connect(mapStateToProps)(ActiveCategory)