(() => {
    // 리스트 버튼 좌우 스크롤
    const vectorR = document.querySelector('.vector-r');
    const vectorL = document.querySelector('.vector-l');
    const goodHeart = document.querySelectorAll('.good');
    let count = 0;

    for (let a of goodHeart){
        a.addEventListener('click', function(e) {
            e.stopPropagation();
        })
    }
    

    vectorL.onclick = function() {
        if (count < 0){
            count += 207;
            document.querySelector('.list-scroll').style.transform = `translateX(${count}px)`;
        }
    }
    vectorR.onclick = function() {
        if (count >= -400) {
            count -= 207;
            document.querySelector('.list-scroll').style.transform = `translateX(${count}px)`;
        }
    }
    

    //하트창
    const good = document.querySelectorAll('.good');
    let goodBtnA = 0;
    good[0].onclick = function() {
        if (goodBtnA == 0) {
            good[0].src = `image/hearta.png`;
            goodBtnA = 1;
        } else {
            good[0].src = `image/heartb.png`;
            goodBtnA = 0;
        }
    }
    let goodBtnB = 0;
    good[1].onclick = function() {
        if (goodBtnB == 0) {
            good[1].src = `image/hearta.png`;
            goodBtnB = 1;
        } else {
            good[1].src = `image/heartb.png`;
            goodBtnB = 0;
        }
    }
    let goodBtnC = 0;
    good[2].onclick = function() {
        if (goodBtnC == 0) {
            good[2].src = `image/hearta.png`;
            goodBtnC = 1;
        } else {
            good[2].src = `image/heartb.png`;
            goodBtnC = 0;
        }
    }
    let goodBtnD = 0;
    good[3].onclick = function() {
        if (goodBtnD == 0) {
            good[3].src = `image/hearta.png`;
            goodBtnD = 1;
        } else {
            good[3].src = `image/heartb.png`;
            goodBtnD = 0;
        }
    }
    let goodBtnE = 0;
    good[4].onclick = function() {
        if (goodBtnE == 0) {
            good[4].src = `image/hearta.png`;
            goodBtnE = 1;
        } else {
            good[4].src = `image/heartb.png`;
            goodBtnE = 0;
        }
    }
    let goodBtnF = 0;
    good[5].onclick = function() {
        if (goodBtnF == 0) {
            good[5].src = `image/hearta.png`;
            goodBtnF = 1;
        } else {
            good[5].src = `image/heartb.png`;
            goodBtnF = 0;
        }
    }
    //포트폴리오 새창
    const folioOnclick = document.querySelectorAll('.folio-container');
    const onclickNew = document.querySelector('.onclick-new');
    const circleNew = document.querySelectorAll('.circle');
    const bodyPush = document.querySelector('.new-tab-container');
  
    for (let a of folioOnclick) {
        a.onclick = ()=> {
            const qr = document.querySelector('.new-main-img');
            folioClose.style.display = 'block';
            onclickNew.style.display = 'block';
            onclickNew.classList.toggle('.click-hg');
            for(let b of circleNew) {
                b.style.display = 'block';
            }
            console.log(shareBtn);
            if (a == folioOnclick[1]) {
                qr.innerHTML = `<img src="image/qr.png" alt="" class="qr">`;
            }
    
        }
    }

    

    // 포트폴리오 새창 닫기
    const folioClose = document.querySelector('.new-bg');
    folioClose.onclick = () => {
        folioClose.style.display = 'none';
        onclickNew.style.display = 'none';
        onclickNew.classList.toggle('.click-hg');
        for(let b of circleNew) {
            b.style.display = 'none';
        }
    }
    
    //공유하기 새창
    const shareBtn = document.querySelector('.eee');
    const shareCon = document.querySelector('.share-container');
    const shareBg = document.querySelector('.share-bg');
    shareBtn.onclick = () => {
        shareCon.style.display = 'block';
        shareBg.style.display = 'block';
        shareBg.style.zindex = '4999';
    }

    //공유하기 새창 닫기
    const shareExit = document.querySelector('.share-exit');
    shareExit.onclick = () => {
        shareCon.style.display = 'none';
        shareBg.style.display = 'none';
    }
    shareBg.onclick = () => {
        shareCon.style.display = 'none';
        shareBg.style.display = 'none';
    }
})();
