import './cards.scss'

function Card(prop) {
	return (
		<div className={`card ${prop.type}`}>
			<div className='description'>
				<div className='text'>
					<span>{prop.name}</span>
				</div>
				<div className='xp'>
					<span>{prop.experience}</span>
				</div>
			</div>
			<div className='pokemon'>
				<img src={prop.img} alt='poke' />
			</div>
			<div className='bg'></div>
		</div>
	)
}

export default Card
