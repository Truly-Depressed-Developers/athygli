import styles from "./SmolArticle.module.scss";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ISmolArticle from "@/interfaces/ISmolArticle";
import Link from '@mui/material/Link';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';

export const SmolArticle: React.FC<ISmolArticle> = (articleData: ISmolArticle) => {
    return (
        <div className={styles.article}>
            <Card sx={{ width: 390, borderRadius: 3, display: "flex", flexDirection: "row", backgroundColor: "#1D1D1D" }}>
                <CardMedia
                    sx={{ height: 150, minWidth: 120 }}
                    image={"/articleImages/" + articleData.photoID + ".jpg"}
                    title="articlePhoto"
                />
                <CardContent>
                    <Typography gutterBottom component="div" style={{color:"grey", fontSize:"10px"}}>
                        {articleData.author}
                    </Typography>
                    <Typography gutterBottom component="div">
                        {articleData.title}
                    </Typography>
                    <Typography style={{display:"flex", alignItems:"center"}}>
                        <AccessTimeIcon style={{color:"grey", width:"15px"}}/>
                        <span style={{fontSize: "10px", marginRight:"10px", marginLeft:"5px"}}> {articleData.time} </span>
                        <EventIcon style={{color: "grey", width: "15px"}}/>
                        <span style={{fontSize: "10px", marginRight:"10px", marginLeft:"5px"}}> {articleData.timeToRead} </span>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><Link href={"/articles/" + articleData.id}>Learn More</Link></Button>
                </CardActions>
            </Card>
        </div>
    )
}