import CommentList from "./CommentList.jsx"
import AddComment from "./AddComment.jsx"
import { useEffect, useState } from "react"

function CommentArea({ book }) {
    const [comments, setComments] = useState([])

    const fetchComments = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${book.asin}/comments`,
                {
                    headers: {
                       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTc5MWNlY2Y1Y2I1ZDAwMTU0ZjQzNTUiLCJpYXQiOjE3NzMwNzU5ODMsImV4cCI6MTc3NDI4NTU4M30.EN5xtmsfH8gQ7ws3H2Qz1j6bylelqcv3y7YqwdudXnY",
                    }
                }
            )
            const data = await response.json()
            setComments(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { fetchComments() }, [book.asin])

    return (
        <div className="p-3 bg-white rounded shadow-sm border sticky-top vh-100 overflow-auto">
            <h5 className="mb-4 border-bottom pb-2">Recensioni</h5>
            
            <div className="mb-4">
                <AddComment asin={book.asin} fetchComments={fetchComments} />
            </div>

            <div className="comment-list">
                <h6 className="text-muted mb-3 small uppercase">Commenti degli utenti</h6>
                <CommentList comments={comments} />
            </div>
        </div>
    )
}
export default CommentArea