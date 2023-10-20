const shortLinkBtn = document.getElementById('shortBtn')
const shortTextField = document.getElementById('shortText')
const errorMessage = document.getElementById('error-message')
const template = document.getElementById('links-list-template')
const linksList = document.querySelector('.link-list');


shortLinkBtn.addEventListener('click', () => {
  let linkData = shortTextField.value
  let api = 'https://api.shrtco.de/v2/shorten?url='
  
  if(hasValue(linkData)){

    fetch('https://api.shrtco.de/v2/shorten?url='+linkData).then(response => {
      return response.json();
    }).then(shortenData => {
      if(shortenData.ok){
        console.log(shortenData.result.short_link)
        addLink(shortenData.result.short_link, linkData)
        shortTextField.classList.remove('error');
        errorMessage.style.display = 'none'
      } else {
        alert(shortenData.error)
        shortTextField.classList.add('error');
        shortTextField.value=""
      }
    }).catch(error => {
      console.log(error);
    })
  }

})


function addLink(shortLink, origLink){
  const linkELement = document.importNode(template.content, true)

  const linkELementP = linkELement.getElementById('original-link')
  var newText = document.createTextNode(origLink);
  linkELementP.appendChild(newText);

  const linkELementA = linkELement.getElementById('shorten-link')
  var newLink = document.createTextNode(shortLink);
  linkELementA.appendChild(newLink);

  const linkELementButton = linkELement.getElementById('copy-btn');
  copyLinkFunction(linkELementButton, newLink)

  linksList.prepend(linkELement);
}

function copyLinkFunction(btn, value){

  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(value.textContent);
    btn.textContent = "Copied"
    btn.classList.add('copied');
  })
}

function hasValue(linkData){
  if(linkData === ''){
    alert("No Input Data")
    errorMessage.style.display = 'block'
    shortTextField.classList.add('error');
    return false
  } else {
    return true
  }
}