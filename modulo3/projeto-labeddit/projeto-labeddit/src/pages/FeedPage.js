import { Box } from '@mui/system'
import { useProtectedPage } from '../hooks/useProtectedPage'

const FeedPage = () => {
    useProtectedPage()
    return (
        <Box>Feed</Box>
    )
}

export default FeedPage