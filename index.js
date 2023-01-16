const newImage = (name, asset, left, bottom) => {
    name = document.createElement('img')
    name.src = 'assets/' + asset
    name.style.position = 'fixed'
    name.style.left = left + 'px'
    name.style.bottom = bottom + 'px'
    document.body.append(name);
    return name
}

const newItem = (name, asset, left, bottom) => {
    let item = newImage(name, asset, left, bottom)
    item.addEventListener('dblclick', function(){
        item.remove()
    })
}

let left = 0;
let bottom = 0;

for(let i=0; i < 5; i++){
    for(let j=0; j < Math.ceil(window.innerWidth/100); j++){
        newImage('grass', 'grass.png', left, bottom)
        left += 100
    }
    left = 0
    bottom +=100
}

for(let i=0; i < Math.ceil(window.innerHeight/100) - 5; i++){
    for(let j=0; j < Math.ceil(window.innerWidth/100); j++){
        newImage('sky', 'sky.png', left, bottom)
        left += 100
    }
    left = 0
    bottom +=100
}

newImage('greenCharacter', 'green-character.gif', 100, 100)
newImage('pineTree', 'pine-tree.png', 450, 200)
newImage('tree', 'tree.png', 200, 300)
newImage('pillar', 'pillar.png', 350, 100)
newImage('crate', 'crate.png', 150, 200)
newImage('well', 'well.png', 500, 425)

newItem('sword', 'sword.png', 500, 405)
newItem('shield', 'shield.png', 165, 185)
newItem('staff', 'staff.png', 600, 100)