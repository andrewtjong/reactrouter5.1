import { useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

export default function Article() {
    // returns an object with params that has all the route parameters from this page, so it will look at this page and see we have an id parameter
    // So it will give us back a params.id property that we can then use / that name is dictated by whatever we call that route parameter in App.js :id
    
    // const params = useParams()

    // use object destructuring to turn it into
    const { id } = useParams()
    const url = 'http://localhost:3000/articles/' + id
    // call that data article instead
    const {data: article, isPending, error} = useFetch(url)
    const history = useHistory()

    useEffect(() => {
        if (error) {
            // redirect
            setTimeout(() => {
                history.push('/')
            }, 2000)
        }
    }, [error, history])

    return(
        <div>
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {article && (
                <div> 
                    <h2>{article.title}</h2>
                    <p>{article.author}</p>
                    <p>{article.body}</p>

                </div>
            )}
        </div>
    )
}