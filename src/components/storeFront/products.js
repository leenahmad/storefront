import { connect } from "react-redux";
import { Grid, Card } from '@mui/material';
import { CardContent, CardMedia, Typography ,CardActions,Button} from "@mui/material";
import { addTo } from '../../store/cart';


const Product = props => {

    return (
        <>
            <Grid container spacing={1} direction='row' justifyContent='space-evenly' alignItems='center' >
            
                {props.products.map((prod, i) => {
                    
                 
                    if (props.activeCategory === prod.category)
                        return (
                            <Card key={i} elevation={3} style={{marginTop:'100px'}}>
                               
                                <CardMedia image={prod.image} height="250" width="400" component='img' />
                                <CardContent>
                                    <p>{prod.name}</p>
                                    <Typography >{prod.name}</Typography>
                                    <Typography > {prod.description}</Typography>
                                    <Typography>{prod.price}</Typography>
                                    <Typography >{prod.inventoryCount}</Typography>
                                </CardContent>

                                <CardActions>
                                <Button size="small" onClick={() =>props.addTo(prod) }>ADD TO CART</Button>
                                    <Button size="small">VIEW DETAILS</Button>
                                </CardActions>
                            </Card>
                        )
                })

                }
            </Grid>
        </>
    )


}

const mapStateToProps = state => ({
    products: state.store.products,
    activeCategory: state.store.activeCategory
});

const mapDispatchToProps = {addTo};

export default connect(mapStateToProps,mapDispatchToProps)(Product);

