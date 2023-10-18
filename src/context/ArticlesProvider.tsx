import React, {createContext, useEffect, useState} from "react";
import { articlesData } from "../data/article.data";
import { articlePost } from "../data/article.data";

export const ArticleContext = createContext({} as ArticleContextData)

export function useArticle() {
	return React.useContext(ArticleContext);
}

interface IbodyArticle {
	id: number
	author: string
	avatarURL: string
	articleImg: string
	availableAt: string
	title: string
}




export function ArticleProvider({children}: any) {
	const [articles, setArticles] = useState<Array<Object>>([])
    const [singleArticle, setSingleArticle] = useState<Array<Object>>([])

	useEffect(()=> {
		setArticles(articlesData)
        setSingleArticle(articlePost)
	})

	const provided = {
		articles,
        singleArticle
	};


	return <ArticleContext.Provider value={provided}>{children}</ArticleContext.Provider>
}

type ArticleContextData = {
    articles: any
    singleArticle: any
}