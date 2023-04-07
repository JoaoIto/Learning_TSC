interface IArticle {
    date: number;
    content: string;
}

const article: IArticle = {
    content: 'new content',
    date: Date.now(),
};
