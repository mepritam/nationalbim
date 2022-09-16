
import Button from '@mui/material/Button';
import { Box, Container } from '@mui/system';
import { AppBar } from '@mui/material';
import logo from '../../../assets/logo/logo.png';
import './styles.scss';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import PhoneIcon from '@mui/icons-material/Phone';
import EngineeringIcon from '@mui/icons-material/Engineering';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const Homepage = () => {
  return (
		<Container maxWidth={false}>
			<AppBar position='fixed' color='transparent' maxWidth={false}>
				<div className='header-wrapper'>
					<div className='logo-wrapper'> <img className='logo' src={logo} /> </div>
					<div className='menu-link-wrapper'>
						<ul>
							<li>  <a className='active' href='#'> <HomeIcon className='fa' fontSize='8'/> Home </a> </li>
							<li>  <a href='#'> <BuildIcon className='fa' fontSize='8' /> Services </a> </li>
							<li>  <a href='#'> <EngineeringIcon className='fa' fontSize='8'/> Projects </a> </li>
							<li>  <a href='#'> <EmojiPeopleIcon className='fa' fontSize='8'/> About Us </a> </li>
							<li>  <a href='#'> <PhoneIcon className='fa' fontSize='8'/> Contact Us </a> </li>
						</ul>
					</div>
				</div>
			</AppBar>
		</Container>
	)
};

export default Homepage;
