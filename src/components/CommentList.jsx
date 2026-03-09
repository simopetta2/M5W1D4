import { ListGroup } from "react-bootstrap"



function CommentList({ comments }) {
    return (
        <ListGroup>
            {comments.map(comment => ( 
            <ListGroup.Item 
            key={comment.id}
             className="small text-muted py1"> 
                {comment.comment}  
                  (⭐{comment.rate})
                </ListGroup.Item>
                ))}
        </ListGroup>

    )
}

export default CommentList

