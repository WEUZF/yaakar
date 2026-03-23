let form = document.querySelector('form')
let tbody = document.querySelector('#tabledata') 
let users = JSON.parse(localStorage.getItem('users')) || []


form.addEventListener('submit',(e)=> {
    e.preventDefault()
    let nom = document.querySelector('#nom').value
    let prenom = document.querySelector('#prenom').value
    let numero = document.querySelector('#numero').value
    let adresse = document.querySelector('#adresse').value
    let NewUser = {
        nom : nom,
        prenom: prenom,
        numero: numero,
         adresse: adresse
    }

    users.push(NewUser)
    form.reset()
    // declarer variable users 

    localStorage.setItem("users",JSON.stringify(users))

    tbody.innerHTML =""

    users.forEach((user,index) => {
        tbody.innerHTML += `
        <tr>
         <td>${user.nom}</td>
         <td>${user.prenom}</td>
         <td>${user.numero}</td>
         <td>${user.adresse}</td>
         <td>
   <button class="normal"onclick="modifier(${index})">Modifier</button>
</td>
<td>
   <button class="delete"onclick="supprimer(${index})">Supprimer</button>
</td>
        </tr>
        `
    });
    
})

  users.forEach((user,index) => {
        tbody.innerHTML += `
        <tr>
         <td>${user.nom}</td>
         <td>${user.prenom}</td>
         <td>${user.numero}</td>
         <td>${user.adresse}</td>
        <td>
   <button class="normal" onclick="modifier(${index})">Modifier</button>
</td>
<td>
   <button class="delete" onclick="supprimer(${index})">Supprimer</button>
</td>
</tr>
        `
    });

let indexencours = null
let formUpdate = document.querySelector('#update')
formUpdate.style.display = 'none'

function modifier(index){
formUpdate.style.display = 'block'
let data =  JSON.parse(localStorage.getItem("users"))
var objet = data[index]
indexencours = index
document.querySelector('#up_nom').value = objet.nom
document.querySelector('#up_prenom').value = objet.prenom
document.querySelector('#numero').value = objet.numero
document.querySelector('#up_adresse').value = objet.adresse

}


function update()
{
let data = JSON.parse(localStorage.getItem('users'))
 let nom =  document.querySelector('#up_nom').value
let prenom = document.querySelector('#up_prenom').value 
let numero= document.querySelector('#up_numero').value
let adresse = document.querySelector('#up_adresse').value

data[indexencours] = {
    nom: nom,
    prenom: prenom,
    numero: numero,
    adresse: adresse
}
    localStorage.setItem('users',JSON.stringify(data))
}


function supprimer(index){
    let data = JSON.parse(localStorage.getItem('users'))
    data.splice(index,1)
    localStorage.setItem('users',JSON.stringify(data))
    location.reload()

}