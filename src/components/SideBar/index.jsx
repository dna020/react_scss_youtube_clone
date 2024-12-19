import React, { useContext, useEffect } from 'react'
import useWindowSize from '../../helpers/useWindowSize'
import SmallSideBar from '../SideBar/SmallSideBar';
import BigSideBar from '../SideBar/BigSideBar';
import { SidebarContext } from '../../context/SidebarContext';

const SideBar = () => {

	const {width} = useWindowSize();
	const {isToggled, setIsToggled} = useContext(SidebarContext);

	useEffect(() => {
		width <= 1300
		? setIsToggled(false)
		: location.pathname.startsWith('/video/')
		? setIsToggled(false)
		: setIsToggled(true)
	}, [width, location.pathname, setIsToggled])

	return (
		<>
		{
			location.pathname.startsWith('/video/')
			? (isToggled
				? <BigSideBar />
				: null
			)
			:
			width < 792
				? null
				: (
					isToggled
						? <BigSideBar />
						: <SmallSideBar />
			)
		}
		</>
	)
}

export default SideBar