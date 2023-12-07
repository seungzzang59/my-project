// rfce / npm i react-icons

import { FaFacebook, FaTwitter, FaInstagramSquare } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className='footer'>
			<h1>SEUGNRI KANG</h1>
			<p>2023 SEUNGRI KANG All rights Reserved</p>
			<ul>
				<li>
					<FaFacebook color={'gold'} size={30} />
				</li>
				<li>
					<FaTwitter color={'hotpink'} size={30} />
				</li>
				<li>
					<FaInstagramSquare color={'coral'} size={30} />
				</li>
			</ul>
		</footer>
	);
}
