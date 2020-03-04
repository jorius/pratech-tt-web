// @scripts
import { dimensions } from '../../styles/globals';

export default () => ({
    homePageContainer: {
        marginBottom: dimensions.FOOTER + 10
    },
    itemShop: {
        cursor: 'pointer',
        margin: 10,
        '&:hover': {
            opacity: '0.7'
        }
    }
});
