"use client";

import React, {useEffect, useState} from "react";
import styles from "./page.module.scss";
import {SmolArticle} from "@/components/SmolArticle/SmolArticle";
import articles from "../../public/articleData/articleData.json";
import ISmolArticle from "@/interfaces/ISmolArticle";
import {Loading} from "@/components/Loading/Loading";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

type IPropertyList = string[];

const Article: React.FC = () => {
    const [article, setArticle] = useState<ISmolArticle>();
    const [propertyList, setPropertyList] = useState<IPropertyList>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const onlyUnique = (value: string, index: number, array: string[]) => {
        return array.indexOf(value) === index;
    }

    const selectCategory = (event: any) => {
        if (selectedCategory == event.target.innerText.toLowerCase()) {
            setSelectedCategory("");
        } else {
            setSelectedCategory(event.target.innerText.toLowerCase());
        }
    }

    useEffect(() => {
        setTimeout(() => {
            const found = articles.find((el) => el.category == selectedCategory);
            if (found == null) {
                setArticle(articles.find((el) => el.id == 2))
            } else {
                setArticle(found);
            }
        }, 100);
    }, [article, selectedCategory])

    useEffect(() => {
        let buttons = articles.map((el) => {
            return el.category
        }).filter(onlyUnique);
        setPropertyList(buttons);
    }, [])

    return (
        <div id={styles.articles}>
            <div className={styles.titleBlock}>
                <div className={styles.title}>ARTICLES</div>
                <div className={styles.menu}>
                    <div className={styles.menuInside}>
                        {propertyList.map((el, i) => {
                            return <span key={i} className={styles.menuButton}>
              <Button variant="outlined" onClick={selectCategory} key={i} style={{
                  borderColor: "#E65900",
                  backgroundColor: el == selectedCategory ? "#E65900" : "",
                  color: "white",
                  borderRadius: 8,
                  textTransform: "capitalize"
              }}>
                {el}
              </Button>
            </span>;
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.mostWanted}>
                {
                    article === undefined ? <div className={styles.loading}><Loading/></div> :
                        <Link href={"/articles/" + article.id} className={styles.articleLink}>
                        <Card>
                            <CardMedia
                                sx={{
                                    height: 220, marginTop: 3, borderRadius: 3,
                                }}
                                className={styles.card}
                                image={"/articleImages/" + article.photoID + ".jpg"}
                                title="articlePhoto"
                            />
                            <div className={styles.gradient}></div>
                            <div className={styles.mostWantedText}>Most popular</div>
                            <div className={styles.mostWantedTitle}>{article.title}</div>
                            {/*<CardActions className={styles.button}>*/}
                            {/*    <Button size="small"></Button>*/}
                            {/*</CardActions>*/}
                        </Card>
                        </Link>
                }
            </div>
            <div className={styles.selectedForYou}>Selected for You</div>
            <div className={styles.articleList}>
                {articles.filter((el) => {
                    if (selectedCategory !== "") {
                        return el.category == selectedCategory;
                    } else {
                        return el;
                    }
                }).map((el, i) => {
                    return <SmolArticle key={i} id={el.id} title={el.title} photoID={el.photoID} author={el.author}
                                        time={el.time} timeToRead={el.timeToRead}/>
                })}
            </div>
        </div>
    );
}

export default Article;