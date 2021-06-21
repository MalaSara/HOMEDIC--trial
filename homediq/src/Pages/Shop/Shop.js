
import { Grid, CardMedia, CardContent,Typography } from "@material-ui/core";
import {CardStyled } from "./component/CardStyled";
import { ContainerStyled } from "./component/ContainerStyled";
import {ButtonStyled } from "./component/ButtonStyled";
import { CardMediaStyled} from "./component/CardMediaStyled"
import React from "react";
/*import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";
import img6 from "../../images/img6.png";
import img7 from "../../images/img7.png";
import img8 from "../../images/img8.png";*/
import { items } from "./component/Items";

class Shop extends React.Component {
 
    
    
    render() {
        return(
            <ContainerStyled>
            <Grid container spacing={3}>
                {items.map(item=> (
                    
                    <CardStyled>
                    {item.newprice ? 
                    <span style={{backgroundColor:"#f9025c", width:"30px", color:"white", height:"20px"}}>SALE</span>
                    : 
                    <div style={{backgroundColor:"white",height:"20px" }}></div>
                    }
                        <CardMediaStyled
                        component="img"
                        image ={item.image}
                        />          
                        <CardContent style={{ display:"flex", flexDirection:"column", flexWrap:"wrap"}}>
                            <Typography color="inherit">
                                {item.health}
                            </Typography>
                            
                            <Typography color="primary" style={{fontSize:"2vw" }}>
                                {item.name}
                            </Typography>
                            
                            {item.newprice ? 
                            (
                            <div style={{display:"flex", textAlign:"left" ,width:"100%"}}>
                            <Typography style={{ fontSize:"2vw", textDecoration:"line-through" }} color="secondary" >
                                {item.price}
                            </Typography>
                           
                            <Typography style={{fontSize:"2vw" }} color="secondary">
                                {item.newprice}
                            </Typography>
                            </div>
                            ):
                                <Typography style={{ fontSize:"2vw" }} color="secondary">
                                {item.price}
                                </Typography>   
                            }
                            

                            <div>
                            <ButtonStyled > Show Details </ButtonStyled>
                            <ButtonStyled variant="contained" color="primary"> Add To Cart </ButtonStyled>
                            </div>
                        </CardContent>
                    </CardStyled>
                    
                
                ))}
            </Grid>
            </ContainerStyled>
           
        );
    }

}

export default Shop;