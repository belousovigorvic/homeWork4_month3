// 1
const container = document.querySelector('.container')

const get = () => {
    const request = new XMLHttpRequest() // создание запроса
    request.open('GET', 'team.json') // объявление метода запроса и указывание пути
    request.setRequestHeader('Content-type', 'application/json') // указываем заголовок
    request.send() // отправка запроса
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        data.map(person => {
            const wrapper = document.createElement('div')
            const personImg = document.createElement('img')
            const personName = document.createElement('p')
            const personAge = document.createElement('p')
            const personPosition = document.createElement('p')

            personImg.setAttribute('src', 'img/user.png')
            personName.innerText = person.name
            personName.setAttribute('class', 'person__name')
            personAge.innerText = `age: ${person.age}`
            personPosition.innerText = person.position

            wrapper.append(personImg, personName, personAge, personPosition)
            wrapper.setAttribute('class', 'wrapper')
            container.append(wrapper)
        })
    })
}
get()

// 2
const getObject = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'data.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        console.log(data)
    })
}
getObject()