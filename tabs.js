(function() {
    var afficherOnglet = function (a, animations) {
        if (animations === undefined) {
            animations=true
        }
        var li= a.parentNode
        var div = a.parentNode.parentNode.parentNode
        var activeTab = div.querySelector('.tab-content.active') //contenu actif
        var aAfficher = div.querySelector(a.getAttribute('href')) //contenu à afficher
        
        
        if(li.classList.contains('active')){
            return false
        }
        

        //on retire la classe active de l'onglet actif
        div.querySelectorAll('.tabs.active').classList.remove('active')

        // j'ajoue la classe active à l'onglet actuel
        li.classList.add('active')


        //on retire la class active sur le contenu actif
        //div.querySelector('.tab-content.active').classList.remove('active')

        //j'ajoute la class active sur le contenu correspondant à mon clic
        //div.querySelector(a.getAttribute('href')).classList.add('active')

        if (animations) {
        activeTab.classList.add('fade')
        activeTab.classList.remove('in')
        var transitionend = function() {
            this.classList.remove('fade')
            this.classList.remove('active')
            aAfficher.classList.add('active')
            aAfficher.classList.add('fade')
            aAfficher.offsetWidth
            aAfficher.classList.add('in')
            activeTab.removeEventListener('transitionend', transitionend)
        }
        activeTab.addEventListener('transitionend', transitionend)
        activeTab.addEventListener('transitionend', transitionend)
        activeTab.addEventListener('oTransitionend', transitionend)
    } else {
        aAfficher.classList.add('active')
        activeTab.classList.remove('active')
    }

        // on ajoute la classe fade sur l'élément actif
        // a la fin de l'animation
        // on retire la classe fade et active
        // on ajoute la classe active et fade à l'élément à afficher
        // on ajoute la classe in

    }


        var tabs = document.querySelectorAll('.tabs a')
        for(var i=0; i < tabs.length; i++){
        tabs[i].addEventListener('click', function (e) {
            afficherOnglet(this)
    })

}



var hashchange = function() {
    var hash= window.location.hash
    var a = document.querySelector('a[href="' + hash + '"])')
if (a!== null && !a.classList.contains('active')) {
    afficherOnglet(a, e !==undefined)
}
}

window.addEventListener('hashchange', hashchange)
hashchange()
}
        
        
        
)