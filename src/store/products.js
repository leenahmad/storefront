const initialState = {
    categories: [
        {
            normalizedName: 'MOVIES',
            displayname: 'MOVIES',
            description: 'This category will shows the MOVIES section.',
        },
        {
            normalizedName:'LABTOPS' ,
            displayname: 'LABTOPS',
            description: 'This category will shows the LABTOPS section.',
        },
        {
            normalizedName:'SERIES' ,
            displayname: 'SERIES',
            description: 'This category will shows the SERIES section.',
        }
        
    ],

    products:[
        {
            category: 'MOVIES',
            name: 'Blood and Bone',
            description:'Blood and Bone is an American martial arts movie' ,
            price:'60$' ,
            inventoryCount:'4' ,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEFgpNcJv8uZ-PmW0CUnc0WBTmuK83YI5Lw&usqp=CAU'

            

        },
        
        {
            category: 'LABTOPS',
            name: 'LENOVO',
            description:'LAPTOP.' ,
            price:'320$' ,
            inventoryCount:'10' ,
            image: 'https://gts.jo/image/cache/catalog/products/laptops/LENOVO/2021/e15-1-550x400.jpg'
        },
        {
            category: 'SERIES',
            name: 'Breaking Bad',
            description:'American crime drama series' ,
            price:'20$' ,
            inventoryCount:'15' ,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbiF-EkXhEnepjiO-2bNnCQKxjAH3yA6Pkg&usqp=CAU'
        }
    ],

    activeCategory: '',
}


 function productReduser(state = initialState, action){

    const {type, payload } = action;
    switch(type){
        case 'ACTIVE':
            return{...state,activeCategory:payload }
            default:
                return state;
    }
}

export const active = (category) => {
    return{
        type: 'ACTIVE',
        payload:category
    }
}

export default productReduser;