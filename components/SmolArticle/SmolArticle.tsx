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
            <Link href={"/articles/" + articleData.id}>
                <Card sx={{ width: 390, borderRadius: 3, display: "flex", flexDirection: "row", backgroundColor: "#1D1D1D",
                    '& .MuiCardContent-root:last-child': {
                        paddingBottom: 1,
                    },
                }}>
                    <CardMedia
                        sx={{ minWidth: 120, maxHeight: 110 }}
                        image={"/articleImages/" + articleData.photoID + ".jpg"}
                        title="articlePhoto"
                    />
                    <CardContent sx={{paddingTop: 1}} >
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
                </Card>
            </Link>
        </div>
    )
}