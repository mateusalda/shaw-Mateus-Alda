import axios from 'axios'
import { baseURL } from './baseURL'

type News = {
    title: string,
    content: string,
    date: number
}

const news = {
	title: "Hamilton saiu do Frontend",
	content: "Para a alegria de muitos, e a tristeza de alguns, a turma Hamilton está, agora, no backend!",
	date: Date.now()
}

const createNews = async (news: News): Promise<void> => {
    await axios.put(`${baseURL}/news`, news)
}