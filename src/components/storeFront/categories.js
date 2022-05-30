import { active } from '../../store/products';
import { connect } from 'react-redux';
import{Breadcrumbs,Link} from '@mui/material'
const Categories = props => {
    console.log(props,'prooops');
    return (
        
             <Breadcrumbs elevation ={3}>
                {props.categories.map((category,i) => {
                    return(
                        <>
                        <Link underline="hover" color="red"  key={i} onClick={() => props.active(category.normalizedName)} style={{marginBottom:'100px'}}>
                         {category.displayname}
                         </Link>
                         
                         </>
                    )
                })}
              
            </Breadcrumbs> 
        
    )
}

const mapStateToProps = state => ({categories:state.store.categories});

const mapProps = {active};
export default connect(mapStateToProps,mapProps)(Categories)