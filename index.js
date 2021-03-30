    let content = [
        { id: 1, title: 'x1 titel', description: 'bild på x1', src: 'assets/img1.jpg' },
        { id: 2, title: 'x2 titel', description: 'bild på x2', src: 'assets/img2.jpg' },
        { id: 3, title: 'x3 titel', description: 'bild på x3', src: 'assets/img3.jpg' },
        { id: 4, title: 'x4 titel', description: 'bild på x4', src: 'assets/img4.jpg' },
        { id: 5, title: 'x5 titel', description: 'bild på x5', src: 'assets/img5.jpg' },
        { id: 6, title: 'x6 titel', description: 'bild på x6', src: 'assets/img6.jpg' },
        { id: 7, title: 'x7 titel', description: 'bild på x7', src: 'assets/img7.jpg' },
        { id: 8, title: 'x8 titel', description: 'bild på x8', src: 'assets/img8.jpg' },
    ];


const imgPopup = document.getElementById('imgPopup');
const showImg = document.getElementById('showImg');
const imgText = document.getElementById('imgTitle');
const close = document.getElementById('close');
const element = document.getElementById("new");


window.onload = function() {

    content.forEach(objct  => {
        const { id, title, description, src} = objct;
        const img = document.createElement('img');
        const summary =document.createElement('p');
        const item = document.createElement('div');
        
        //Add img description to summary (p element)
        summary.appendChild(document.createTextNode(description));
        //Add id for the items
        item.setAttribute('id', id);
        item.setAttribute('class', 'grid-item')
        //set the imgs attributes
        img.setAttribute('src', src);
        img.setAttribute('alt', title);
        img.setAttribute('class', 'imgIcon');

        //append img and summary to item
        item.append(img,summary);
        //append item to elemeent
        element.appendChild(item);
        img.onclick = ()=>{ 
            console.log('hello');
            showImg.setAttribute('src', src);
            imgText.innerHTML = description;
            imgPopup.style.visibility = 'visible';
        }
        close.onclick = () => {imgPopup.style.visibility = 'hidden'}
    });
    
}