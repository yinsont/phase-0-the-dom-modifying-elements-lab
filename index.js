// Write your code here!

// const element = document.createElement('div')

// document.body.append(element) //document.body is the location, add/create's div

// const ul = document.createElement('ul')

// for (let i = 0; i < 3; i++){
//     const li = document.createElement('li')
//     li.textContent = (i + 1).toString()
//     li.textContent += " Hi there!"
//     ul.append(li)
// }

// element.append(ul) //add to html and into the div because of element.append element is the location

// const main = document.getElementById("main")
// main.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the PomPom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esp., BA.</em></p>"
//can do same thing but more vulnerable to malicious code

const main = document.getElementById('main')
main.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = 'yinson is the champion'
document.body.append(newHeader)