// fetch(url)
// .then((response)=>{
    //     if(!response.ok){
        //         throw new Error ("Could not fetch resource")
//     }
//     return response.json()
// })
// .then((value)=>{
    //     console.log(value.name)
    // })
    // .catch(error=> console.log(error))
    
let buttonLoad= document.getElementById("buttonLoad")
    
const fetchData=async(pokemonName)=>{
    try{
        let url=`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        const response = await fetch(url)
        if(!response.ok){
            throw new Error ("Could not fetch resource")
        }
        const data = await response.json();
        const pokemonSprite=data.sprites.front_default;
        const imageElement=document.getElementById("pokemonSprite")
        imageElement.src=pokemonSprite
        imageElement.style.display="block"
    }
    catch(error){
        console.error(error)
    }
}
    
    // console.log(pokemonName)
    buttonLoad.addEventListener("click",()=>{
        let pokemonName= (document.getElementById("pokemonName")).value.toLowerCase();
        fetchData(pokemonName)
    })
