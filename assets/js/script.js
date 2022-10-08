const mobile = function (mobileStr) {
    let outHtml ="";
    if (mobileStr != "") {
         outHtml = `
            <div> 
                <i class="fa-solid fa-phone"></i>                
                <a href="tel:${mobileStr}">${mobileStr}</a>
            </div>`;
        
    }
    return outHtml;
    
}
const email = function (emailStr) {
    let outHtml ="";
    if (emailStr != "") {
         outHtml = `
         <div>
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto:${emailStr}">${emailStr}</a>  
        </div>`;
        
    }
    return outHtml;
};

const linkedIn = function (linkedInStr) {
    let outHtml ="";
    if (linkedInStr != "") {
         outHtml = `
            <div>
                <i class="fa-brands fa-linkedin"></i>
                <a href="${linkedInStr}">LinkedIn</a> 
            </div>`;
        
    }
    return outHtml;
};

const twitter = function (twitterStr) {
    let outHtml ="";
    if (twitterStr != "") {
         outHtml = `
            <div>
                <i class="fa-brands fa-twitter"></i>
                 <a href="${twitterStr}">Twitter</a> 
            </div>`;
        
    }
    return outHtml;
};

contacts.forEach((contact) => {
    const liste = document.querySelector("#contacts");
    liste.innerHTML += `
        <article>
            <img class="profile" src="assets/images/${contact.picture}" alt="${contact.name.first} ${contact.name.last}">
            <div>
                <h2>${contact.name.first} ${contact.name.last}</h2>
                <address>
                    ${contact.location.number} ${contact.location.street} <br>
                    ${contact.location.city} - ${contact.location.zipCode} <br>
                    ${contact.location.country}
                </address>
                ${mobile(contact.contact.mobile)}
                ${email(contact.contact.email)}
                ${linkedIn(contact.social.linkedIn)}
                ${twitter(contact.social.twitter)}
                
            </div>
        </article>
    `
}); 
