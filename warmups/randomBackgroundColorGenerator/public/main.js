const changeBackgroundColor = () => {
  for (let i = 0; i < 50; i++) {
    const randomColor1 = Math.floor(Math.random() * 255)
    console.log(randomColor1)
    const randomColor2 = Math.floor(Math.random() * 255)
    console.log(randomColor2)
    const randomColor3 = Math.floor(Math.random() * 255)
    console.log(randomColor3)
    const randomAlpha = Math.random()
    console.log(randomAlpha)
    document.body.style.backgroundColor = "rgba(" + randomColor1 + ", " + randomColor2 + ", " + randomColor3 + ", " + randomAlpha + ")"
  }
}

document.querySelector('.random-background-color-generator-button').addEventListener('click', changeBackgroundColor)
