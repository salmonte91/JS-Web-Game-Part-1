  function newImage(url,position1, position2){
    let imgSrc = document.createElement('img')
    imgSrc.src = url
    imgSrc.style.position = 'fixed'
    imgSrc.style.left = position1
    imgSrc.style.bottom = position2
    document.body.append(imgSrc)
  }

  function newItems(url,position1, position2){
    let imgSrc = document.createElement('img')
    imgSrc.src = url
    imgSrc.style.position = 'fixed'
    imgSrc.style.left = position1
    imgSrc.style.bottom = position2
    document.body.append(imgSrc)

    imgSrc.addEventListener('click', function(){
        imgSrc.remove()
    })
  }

  newImage('assets/green-character.gif', '100px', '100px')
  newImage('assets/pine-tree.png', '450px', '200px')
  newImage('assets/tree.png', '200px', '300px')
  newImage('assets/pillar.png', '350px', '100px')
  newImage('assets/crate.png', '150px', '200px')
  newImage('assets/well.png', '500px', '425px')


