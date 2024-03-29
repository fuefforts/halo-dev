var timeWorker = {}
const mySetInterval= function(fn, time) {
// 定义一个key，来标识此定时器
var key = Symbol();
// 定义一个递归函数，持续调用定时器
  var execute = function(fn, time) {
     timeWorker[key] = setTimeout(function(){
        fn();
        execute(fn, time);
     }, time)
   }
  execute(fn, time);
  // 返回key
  return key;
}
var myClearInterval = function(key) {
  if (key in timeWorker) {
   clearTimeout(timeWorker[key]);
    delete timeWorker[key];
  }
}
    

var interval =null;

    function run(){
        var time=4000;
    let content = document.querySelector('.banner-imgBox2');
    let switchBtn = document.querySelector('.banner-imgBox-div');
    let widths = content.clientWidth;
    switchBtn.children[0].classList.add('on2');
    let index=0;
    let x=0;
    function marginLeft(right) {
        if(right){
            switchBtn.children[index].classList.remove('on2');
            if(index==switchBtn.children.length-1){
                index=0;
                // content.innerHTML+=content.innerHTML;
                x = 0;
            }else {
                index++;
                x++;
            }
            switchBtn.children[index].classList.add('on2');
            content.style.marginLeft=x*-widths+"px"
        }else{
            switchBtn.children[index].classList.remove('on2');
            if(index==0){
                index=switchBtn.children.length-1;
                if(x==0){
                    x=0
                }else{
                    x--;
                }
            }else {
                index--;
                x--;
            }
            switchBtn.children[index].classList.add('on2');
            content.style.marginLeft=x*-widths+"px"
        }

    }


    mySetInterval(()=>{
        marginLeft(true)
    },time)


    let container = document.querySelector('.banner-imgBox');
    // 鼠标经过时清除定时器
    container.onmouseover = function () {
        myClearInterval(interval);
    }
    // 鼠标移开时设置定时器
    container.onmouseout = function () {
        // 先清除定时器
        myClearInterval(interval);
        // 往右滑动并开启定时器
        // // ()=>{
        //     marginLeft(true)
        // }
        interval =mySetInterval(()=>{
            marginLeft(true)
        },time)
    }
   
    }

    run()

    window.addEventListener("resize",function(){
        console.log(1);
        myClearInterval(interval);
        run()
    })