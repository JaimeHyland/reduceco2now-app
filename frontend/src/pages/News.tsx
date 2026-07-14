import { useQueries } from "@tanstack/react-query"
import { fetchComponent } from "../services/services"
import { Loader } from "../components/Loader"
import { Header } from "../components/Header"
import { NewsCard } from "../components/NewsCard"
import { SERVER } from "../services/services"
import { Link } from "react-router-dom"

type NewsPost = {
  id: number;
  documentId: string;
  title: string;
  poster: {
    formats: {
      thumbnail: { url: string };
      name: string;
    };
  };
};

type Props = {
    locale:string
}

export const NewsPage = ({locale}:Props) => {
    const results = useQueries({
        queries: [
            {
                queryKey: ['newsHeader'],
                queryFn: async () => fetchComponent("static-headers/i9m7iopumkq4zg5odxo99xbi", locale)
            },
            {
                queryKey: ['newsPosts'],
                queryFn: async () => fetchComponent("news-posts", locale)
            }
        ]
    })

    const [newsHeaderQuery, newsPostsQuery] = results
    return (
        <>
        {newsHeaderQuery.isLoading? <Loader>Loading header...</Loader> : <Header title={newsHeaderQuery.data.title} subtitle={newsHeaderQuery.data.subtitle} />}
        <section className="container">
            <div className="grid-4">
                {
                    newsPostsQuery.isLoading? <Loader>Loading news...</Loader> :
                    newsPostsQuery.data.map((item:NewsPost) => {
                        return (
                            <Link className="feature-card" to={`/news/${item.documentId}`} key={item.id}>
                                <NewsCard title={item.title} poster={`${SERVER}${item.poster.formats.thumbnail.url}`} alt={item.poster.formats.name} />
                            </Link>
                        )
                    })
                }
            </div>
        </section>
        </>
    )
}