import { GetPoke } from '../../service/pokeService'
import { useState } from 'react'
import Card from '../../components/cards/cards'
import Snorlax from '../../assets/snorlax.png'
import './body.scss'
import { useEffect } from 'react'

function Body() {
	const [pokedex, setPokedex] = useState([])
	let _id = 0

	async function fillPokedex() {
		stateBtn(true)
		let pokeNumber = Math.round(1 + Math.random() * 100)
		let pokedata = await GetPoke(pokeNumber)
		setPokedex((prevState) => [...prevState, pokedata])
		stateBtn(false)
	}

	useEffect(() => {
		setScroll()
	}, [pokedex])

	function setScroll() {
		const screen = document.querySelector('.screen')
		let val = screen.scrollHeight
		screen.scrollTop = val
	}

	function setValueScroll(value) {
		const screen = document.querySelector('.screen')
		screen.scrollTop += value
	}

	function stateBtn(myBool) {
		const btn = document.querySelector('#add-poke')
		myBool ? btn.setAttribute('disabled', true) : btn.removeAttribute('disabled')
	}

	return (
		<section className='body'>
			<button id='add-poke' onClick={fillPokedex}>
				adicionar
			</button>
			<div className='sleep'></div>
			<div className='cards'>
				<div className='light'></div>
				<div className='light-l'></div>
				<div className='light-l'></div>
				<div className='light-l'></div>
				<div className='screen'>
					<div
						className='content'
						style={{
							justifyContent: pokedex.length ? 'space-between' : 'center',
						}}
					>
						{pokedex.length ? (
							pokedex.map((poke) => (
								<Card
									key={`${poke.name}-${Date.now()}-${_id++}`}
									name={poke.name}
									type={poke.type}
									experience={poke.experience}
									img={poke.imgSrc}
								/>
							))
						) : (
							<img src={Snorlax} alt='sleep_poke' />
						)}
					</div>
				</div>
				<div className='btns'>
					<div className='up' onClick={() => setValueScroll(-400)}>
						<ion-icon name='caret-up-outline'></ion-icon>
					</div>
					<div className='down' onClick={() => setValueScroll(400)}>
						<ion-icon name='caret-down-outline'></ion-icon>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Body
