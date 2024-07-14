function apparition(event){
    let fullActeur= $(event.currentTarget);
    let parent=fullActeur.find(".visible");
    parent.fadeIn();
    parent.css('display','flex');
}
function disparition(event){
    let fullActeur=$(event.currentTarget);
    let parent=fullActeur.find(".visible");
    parent.fadeOut();
    parent.css('display','none');
}
function visible(event){
    var papa=$(event.currentTarget);
    var fils=papa.find(".elemet");
    fils.fadeIn();
}
function invisible(event){
    var papa=$(event.currentTarget);
    var fils=papa.find(".elemet");
    fils.fadeOut();
}
function ecrire(event){
    console.log(event).value;
}
// =====la function qui sert a faire apparaitre le bouton de transfert=====
$('#textEcrit').on('input',function(){
     if($(this).val()){
        $('#voice').hide();
        $('#voice1').show();
        $("#photo").hide();
     }else{
        $('#voice').show();
        $('#voice1').hide();
        $("#photo").show();
     }
});
// ============================================================
$("#voice1").on('click',function(){
    var message=$("#textEcrit").val();
    if(message!=""){
        $(".messageX").append('<h5>' + message + '</h5>');
        $("#textEcrit").val('');
        $('#voice').show();
        $('#voice1').hide();
        $("#photo").show();
        $('.centerMessagerie').scrollTop($('.messageX').prop('scrollHeight'));

    }
});
function togle(event){
    let cons=$(".containerMessagerie");
    cons.fadeIn();
    cons.css('display','flex');
};
function togleD(event){
    let cons=$(".containerMessagerie");
    cons.fadeOut();
    cons.css('display','none');
}
function Togle(event){
    let cons=$(".containerNotification");
    cons.fadeIn();
    cons.css('display','flex');
};
function TogleD(event){
    let cas=$(".containerNotification");
    cas.fadeOut();
    cas.css('display','none');
};
function tagle(event){
    let cons=$(".containerVoirProfil");
    cons.fadeIn();
    cons.css('display','flex');
};
function tagleD(event){
    let cas=$(".containerVoirProfil");
    cas.fadeOut();
    cas.css('display','none');
};
function font(event){
    let al=$(".containerFont");
    let as=$(".containerParametres");
    as.slideUp();
    al.slideToggle();
    event.stopPropagation();
}
$(window).click(function(){
    let al=$(".containerFont");
    al.slideUp();
});
$(".containerFont").click(function(event){
    event.stopPropagation();
});
function parametre(event){
    let al=$(".containerParametres");
    let as=$(".containerFont");
    as.slideUp();
    al.slideToggle();
    event.stopPropagation();
}
$(window).click(function(){
    let al=$(".containerParametres");
    al.slideUp();
});
$(".containerParametres").click(function(event){
    event.stopPropagation();
});
//______======================popUp outils ocasion marrket===============================________

function affiche(event){
 $('.trier_marketPc').slideToggle();
 $('.popUp_marketPce.boutique_market_place').fadeOut();
 $('.popUp_marketPce.categorie_market').slideUp();
 event.stopPropagation();
}
 $(window).click(function(){
    let al=$(".trier_marketPc");
    al.slideUp();
});
$(".trier_marketPc").click(function(event){
    event.stopPropagation();
});
// $('.popUp_marketPce.boutique_market_place').hide();

function date_trie(event){
 $('.date_section_popUp').fadeToggle();
 $('.Prix_section').hide();
 $('.titre_section').hide();
}
function titre(event){
 $('.titre_section').fadeToggle();
 $('.date_section_popUp').hide();
 $('.Prix_section').hide();
}
function cool(event){
 $('.titre_section').hide();
 $('.date_section_popUp').hide();
 $('.Prix_section').hide();
}
function prix(event){
 $('.titre_section').hide();
 $('.date_section_popUp').hide();
 $('.Prix_section').fadeToggle();
}

function categprie(event){
 $('.popUp_marketPce.categorie_market').slideToggle();
 $('.popUp_marketPce.trier_marketPc').slideUp();
 $('.popUp_marketPce.boutique_market_place').fadeOut();
 event.stopPropagation();
 $("categorie_article.flex.tacheMp svg").css("transform","rotate(40edg)");
}
$(window).click(function(){
    let al=$(".popUp_marketPce.categorie_market");
    al.slideUp();
});
$(".popUp_marketPce.categorie_market").click(function(event){
    event.stopPropagation();
});
function boutique(event){
 $('.trier_marketPc').hide();
 $('.popUp_marketPce.boutique_market_place').fadeToggle();
 $('.popUp_marketPce.categorie_market').hide();
 event.stopPropagation();
}
$(window).click(function(){
    let al=$(".popUp_marketPce.boutique_market_place");
    al.fadeOut();
});
$(".popUp_marketPce.boutique_market_place").click(function(event){
    event.stopPropagation();
});
function mettrePhotoGrand(event){
    $(".containerLocationPopop").fadeIn();
    $(".containerLocationPopop").css("display","flex");
}
function enlever(event){
    $(".containerLocationPopop").fadeOut();
}
// changemet du font  
function changeblanche(event){
    $('.container').css("background","#fbfbfc");
    $("p, h1, h2, h3, h5, h6, span, a").css("color","#0b1a1f");
    $("svg").css("stroke","#0b1a1f");
    $("svg").css("fill","#0b1a1f");
}
//_________________ICI DETERMINETION DES LES FONCTIONS__________________________________
//######################################################################################
function cacherElemen(element){
    element.style.display='none';
}
function afficherEnBlock(element){
    element.style.display='block';
}
function afficherEnFlex(element){
    element.style.display='flex';
}

//____________-__Pour afficher sous former d'animation le stroke cachee__________
function affiche_annime_stroke(element,dashoffset_initiale,temps){
    var dashoffset=dashoffset_initiale;
   let id= setInterval(()=>{
    dashoffset -=1;
    if(dashoffset>=0){
            element.style.strokeDashoffset=dashoffset;
            element.style.strokeArray=dasharra;
    }
    if(dashoffset<=0){
        clearInterval(id);
    }
},temps)
} 

function rotation_balise_Circle(element,temps_rotation,sens_rotation,v){
    var cx=element.getAttribute('cx');
    var cy=element.getAttribute('cy');
    var angle=0;
    if(v===true || v==undefined){
        let id=setInterval(()=>{
        if(sens_rotation !=0 || sens_rotation==undefined){ angle+=1;}
        if(sens_rotation==0){ angle-=1;}
        element.style.transformOrigin=`${cx} ${cy}`;
        element.style.rotate=angle+'deg';
    },temps_rotation);
    console.log(id);
}
    else if(v===false){
        clearInterval(id);
    }
}

//####################################################################################
//_______________________DEBUT DU CODE________________________________________________

var paths=document.querySelectorAll('path');
var cercle_muniscule=document.querySelectorAll('.minuscule_cercle');
var cercle_externe=document.querySelectorAll('.petit-cercle');
var cercle_interne=document.querySelectorAll('.petit-cercle_interne');
var cercle_principale_interne=document.querySelector('.cercle_principale_interne');
var cercle_principale_externe=document.querySelector('.cercle_principale_externe');

let services=document.querySelectorAll('.services_content');

cercle_externe.forEach(element=>{
    rotation_balise_Circle(element,20,3);
})
cercle_interne.forEach(element=>{
    rotation_balise_Circle(element,20,0);
})

// DECLANCHEUR D'animation
let logic=true;
function affiche_service_cercle(event){
    if(logic==true){
        logic=false;
    paths.forEach(element=>{
    affiche_annime_stroke(element,280,10,10);
    })
    cercle_muniscule.forEach(element=>{
        afficherEnFlex(element);
    })
    rotation_balise_Circle(cercle_principale_interne,20,3,true);

    cercle_externe.forEach(element=>{
        afficherEnFlex(element);
    })
    cercle_interne.forEach(element=>{
        afficherEnFlex(element);
    });
    services.forEach((service)=>{
        afficherEnFlex(service);})
   
  } 
  else if (logic==false){
    logic=true;
    paths.forEach(element=>{
        element.style.strokeDashoffset=300;
        element.style.strokeDasharray=300;
    })
    cercle_interne.forEach(element=>{
        cacherElemen(element);
    });
    cercle_externe.forEach(element=>{
        cacherElemen(element);
    })
    cercle_muniscule.forEach(element=>{
        cacherElemen(element);
    })
    services.forEach((service)=>{
        cacherElemen(service);
    })
  }
}
   var div=document.querySelector('.contener_svg');
   var l=div.clientWidth;
   var h=div.clientHeight;
   let g=0;
   let tableau_xi=[];
   let tableau_yi=[];
   let tableau_g=[];

for(let i=0;i<6;i++){
var ccx=cercle_externe[i].getAttribute('cx');
var ccy=cercle_externe[i].getAttribute('cy');
var ddx=cercle_muniscule[g].getAttribute('cx');
var ddy=cercle_muniscule[g].getAttribute('cy');
var x1=ddx.substring(0,ddx.length-1);
var y1=ddy.substring(0,ddy.length-1);
var x2=ccx.substring(0,ccx.length-1);
var y2=ccy.substring(0,ccy.length-1);
let pxi=x2*l/100;
let pyi=y2*h/100;
let pxg=x1*l/100;
let pyg=y1*h/100;

if(i<3 && g<3){
    tableau_xi.push(pxi);
    tableau_g.push(pxg);
    tableau_yi.push(pyi);
}
let ppx1=(tableau_xi[0]+tableau_g[0])/1.8;
let ppx2=(tableau_g[1]+tableau_xi[1])/1.8;
let ppx3=(tableau_g[2]+tableau_xi[2])/1.8;

let ptx=(pxg+pxi)/1.8;
let pty=(pyi*1.06);

switch(i){
    case 0:pty=pty*0.8;break;
    case 1:pty*=1.1;break;
    case 3:pty=tableau_yi[0]*1.06*0.8; ptx=(l-ppx1);break;
    case 4:pty=tableau_yi[1]*1.06*1.1; ptx=(l-ppx2);break;
    case 5:tableau_yi[2]*1.06;ptx=(l-ppx3);break;
}
paths[i].setAttribute('d',`M${pxg},${pyg} ${ptx},${pty} ${pxi},${pyi}`);
g++;
}
// ==================fonction de la page ouverture==================
function voir(event){
    let fullActeur= $(event.currentTarget);
    let parent=fullActeur.find(".nom");
    parent.fadeIn();
    parent.css('display','flex');
}
function npsvoir(event){
    let fullActeur= $(event.currentTarget);
    let parent=fullActeur.find(".nom");
    parent.fadeOut();
    parent.css('display','none');
}