import { Box } from '@mui/system'
import { useProtectedPage } from '../hooks/useProtectedPage'

const PostPage = () => {
    useProtectedPage()
    return (
        <Box>Post</Box>
    )
}

export default PostPage