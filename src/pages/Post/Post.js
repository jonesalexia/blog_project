import styles from './Post.module.css';

// hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {
    const {id} = useParams();
    const {document: post, loading} = useFetchDocument("posts", id)

  return (
    <div>
        {loading && <p>Carregando post...</p>}
        {post && (
            <>
                <h2>{post.title}</h2>
            </>
        )}
    </div>
  )
}

export default Post