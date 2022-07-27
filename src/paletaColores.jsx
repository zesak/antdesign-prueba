import React from 'react'
import { generate, presetPalettes } from '@ant-design/colors';

export const PaletaColores = () => {
	const blue = generate('#3200C1');
	const turquoise = generate('#37FFDB');
	const green = generate('#23AD63');
	const yellow = generate('#F9C235');
	const red = generate('#f5222d');
	const neutro = generate('#B1B1B1');

	console.log(presetPalettes);
	const w = '100px';
	const h = '50px';

	const Gama = ({ base }) => {
		return (
			<div className='gama'>
				{
					base.map((x,index) => <div key={x} >
						<div className='un-color' style={{ backgroundColor: x, width: w, height: h }}></div>
						<span className={` ${index == 5 ? "base" : null}`} >{x}</span>
					</div>
					)
				}
			</div>
		)
	}


	return (
		<>
		<Gama base={blue} />
		<Gama base={turquoise} />
		<Gama base={green} />
		<Gama base={yellow} />
		<Gama base={red} />
		<Gama base={neutro} />
		</>
	)
}
