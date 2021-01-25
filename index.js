function noScroll(event) {
   event.preventDefault();
 }
window.onload = () => {
    // スクロールを禁止する関数
    
   // スクロール禁止(SP)
   document.addEventListener('touchmove', noScroll, { passive: false });
   // スクロール禁止(PC){ passive: false }
 
   document.addEventListener('mousewheel', noScroll, { passive: false });
   // スクロール禁止を解除(SP)
//    document.removeEventListener('touchmove', noScroll, { passive: false });
   // スクロール禁止を解除(PC)
//    document.removeEventListener('mousewheel', noScroll, { passive: false });
 };

function buttonClick(){
   
   document.removeEventListener('touchmove', noScroll, { passive: false });
   document.removeEventListener('mousewheel', noScroll, { passive: false });
}
const div = document.querySelector('#title')
div.animate({
  opacity: [0, 1]
}, 1500)