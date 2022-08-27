export async function GetPoke(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()

        const imgResponse = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`)
        const imgData = await imgResponse

        return {
            name: data.name,
            type: data.types[0].type.name,
            experience: data.base_experience,
            imgSrc: imgData.url
        }


    } catch (error) {
        console.error(`Error occurred when getting pokemon. ${error}`)
    }
}

