import React from 'react'
import { ProgressBar } from 'react-loader-spinner'

export const Loader = () => {
	return (
		<div className='loader'>
			<ProgressBar
				height="80"
				width="80"
				ariaLabel="progress-bar-loading"
				wrapperStyle={{}}
				wrapperClass="progress-bar-wrapper"
				borderColor='#F4442E'
				barColor='#F4442E'
			/>
		</div>
	)
}
