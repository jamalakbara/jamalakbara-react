import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const initialState = {
    socials: [
        {
          'name': "linkedin",
          'icon': <LinkedInIcon />,
          'url': 'https://www.linkedin.com/in/jamalakbara/'
        },
        {
          'name': "instagram",
          'icon': <InstagramIcon />,
          'url': 'https://www.instagram.com/jakbara__/'
        },
        {
          'name': "github",
          'icon': <GitHubIcon />,
          'url': 'https://github.com/jamalakbara'
        }
    ]
}

export const rootReducer = (state = initialState, action) => {
    return state
}