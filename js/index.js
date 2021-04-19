window.addEventListener('load', function() {
    var navline = document.querySelector('#navline')
    var topnavlis = document.querySelectorAll('.top-nav-li')
    var headnav = document.querySelector('#nav')
    var headul = headnav.querySelectorAll('.top-nav-li>.publish-sort') //获取需要展示的元素
        //鼠标移动到不同标题显示出不同的内容
    for (i = 0; i < topnavlis.length; i++) {
        topnavlis[i].setAttribute('index', i) //给每一个小li加上index属性
        topnavlis[i].addEventListener('mouseover', function() {
            var index = this.getAttribute('index'); //获取index的属性值
            var liwidth = this.offsetWidth; //获取小li的宽度
            var liLeft = this.offsetLeft; //获取小li的left值
            if (index > 0 && index < 5) {
                headul[index - 1].style.display = 'block'; //相对应的模块展示
            };
            animate(navline, liLeft); //移动navline的位置
            navline.style.width = '' + liwidth + 'px'; //将li的宽度给navline


        })
        topnavlis[i].addEventListener('mouseleave', function() {
            var index = this.getAttribute('index');
            if (index > 0 && index < 5) {
                headul[index - 1].style.display = 'none'; //相对应的模块消失
            }
        })
    }
    //轮播图的实现
    var bdot = document.querySelector('.b_dot')
    var dots = bdot.querySelectorAll('a') //获取所有的小点
    var bannerul = document.querySelector('#publish-copy')
    var bannerlis = bannerul.querySelectorAll('li') //获取所有的图片小li
    for (i = 0; i < dots.length; i++) {
        dots[i].setAttribute('index', i) //给图片小li添加index属性
            // dots[i].addEventListener('click', function() { //点击小圆点切换图片
            //     for (var i = 0; i < bdot.children.length; i++) {
            //         bdot.children[i].className = ''; //干掉所有人
            //     }
            //     this.className = 'on'; //留下我自己
            //     var index = this.getAttribute('index');
            //     for (i = 0; i < bannerlis.length; i++) {
            //         bannerlis[i].className = ''
            //         bannerlis[i].style.display = 'none'
            //         bannerlis[i].style.zIndex = 0
            //     }
            //     bannerlis[index].className = 'on'
            //     bannerlis[index].style.display = 'block'
            //     bannerlis[index].style.zIndex = '1'
            // })
    }
    var num = 0;
    var index = 0;
    //开启定时器
    var timer = setInterval(function() {
        num++;
        if (num > 2) {
            num = 0

        }
        index = num
        for (i = 0; i < bannerlis.length; i++) {
            bannerlis[i].className = ''
            bannerlis[i].style.display = 'none'
            bannerlis[i].style.zIndex = 0
        }
        bannerlis[num].className = 'on'
        bannerlis[num].style.display = 'block'
        bannerlis[num].style.zIndex = '1'
        for (var i = 0; i < bdot.children.length; i++) {
            bdot.children[i].className = ''; //干掉所有人
        }
        dots[index].className = 'on';
    }, 1500)

    //鼠标移动到banner上轮播效果停止
    var banner = document.querySelector('#banner')
    banner.addEventListener('mouseover', function() {
        clearInterval(timer)
    })
    banner.addEventListener('mouseleave', function() {
        clearInterval(timer);
        timer = setInterval(function() {
            num++;
            if (num > 2) {
                num = 0
            }
            index = num
            for (i = 0; i < bannerlis.length; i++) {
                bannerlis[i].className = ''
                bannerlis[i].style.display = 'none'
                bannerlis[i].style.zIndex = 0
            }
            bannerlis[num].className = 'on'
            bannerlis[num].style.display = 'block'
            bannerlis[num].style.zIndex = '1'
            for (var i = 0; i < bdot.children.length; i++) {
                bdot.children[i].className = ''; //干掉所有人
            }
            dots[index].className = 'on';
        }, 1500)
    })
})