// const search = new Filter('search', 'data-caption');


//plug in
baguetteBox.run('.gallery');


//search
document.querySelector('#search').addEventListener('keyup',function(){

    const input = document.querySelector('#search').value.toLowerCase();
    const images = document.querySelectorAll('a');

    for (let i = 0;  i < images.length; i++){
        //match description
        const captions = document.querySelectorAll('a')[i].getAttribute('data-caption').toLowerCase();
        //show picture
        if (captions.includes(input)){
            $(document.querySelectorAll('a')[i]).show();
        //hide picture
        }else
            $(document.querySelectorAll('a')[i]).hide();
    }
});