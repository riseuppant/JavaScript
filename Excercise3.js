let jokes=[`What do you call it when a snowman has a temper tantrum? A meltdown.`,
`Why are elevator jokes so good? Because they work on so many levels.`,
`What do you call advice from a cow? Beef Tips.`,
`Why are pediatricians always so grumpy? They have little patients.`,
`Why did the scarecrow win an award? Because he was outstanding in his field.`,
`Why did the melon jump into the lake? It wanted to be a water-melon.`,
`What did the duck say when it bought lipstick? “Put it on my bill.”`,
`What do you call a pig that does karate? A pork chop.`,
`What has a bed that you can’t sleep in? A river.`,
`Why were the teacher’s eyes crossed? She couldn’t control her pupils.`,
`What starts with E, ends with E, and has only 1 letter in it? An Envelope.`,
`How does the ocean say hello? It waves.`,
`What lights up a soccer stadium? A soccer match.`,
`What creature is smarter than a talking parrot? A spelling bee.`,
`Which U.S. state has the smallest soft drinks? Minnesota (as in, “mini-soda”).`,
`Why couldn’t the leopard play hide and seek? Because he was always spotted.`,
`Apparently, you can’t use “beef stew” as a password. It’s not stroganoff.`,
`Why did the drum take a nap? It was beat.`,
`Where do hamburgers go dancing?  They go to the meat-ball.`,
`Why did the tomato turn red?  It saw the salad dressing.`,
`Why shouldn’t you write with a broken pencil? Because it’s pointless.`,
`What do you call two monkeys that share an Amazon account? Prime mates.`,
`Why are teddy bears never hungry? Because they’re always stuffed!`,
`Why did the tree go to the dentist? It needed a root canal.`,
`If athletes get athlete’s foot, what do elves get? Mistle-toes.`,
`Why couldn’t the pony sing? Because she was a little hoarse.`,
`Where do cows go for entertainment? The mooooo-vies!`,
`What do you call a pig that does karate? A pork chop.`,
`How does NASA organize a party? They planet.`,
`Why did Adele cross the road?  To sing, “Hello from the other side!`,
`What runs around a yard without actually moving? A fence.`,
`What’s an astronaut’s favorite candy? A Mars bar.`,
`Where do sheep go to get their hair cut?  The baa-baa shop.`,
`Why are there gates around cemeteries? Because people are dying to get in.`,
`What do you get when you cross a snake with a pie? A pie-thon!`,
`Why is Peter Pan always flying? He Neverlands.`,
`What’s the most musical part of the chicken? The drumstick.`]
let hear_joke=true;
hear_joke=confirm("Do you want to hear a joke?")
let elem=document.body.getElementsByClassName("joke")
while(hear_joke){
    let random=Math.floor(Math.random()*(38))
    elem[0].innerHTML=jokes[random]
    hear_joke=confirm("Do you want to hear another one?")
}