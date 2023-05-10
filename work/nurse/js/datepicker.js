var opts = [
    //[0] page07.html  (기본값)
    {
    dateFormat: 'yy-mm-dd',
    dayNamesMin : ['일','월','화','수','목','금','토'],
    dayNamesShort : ['일','월','화','수','목','금','토'],
    dayNames :  ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
},
    //[1] manage_page01.html (1번 버전)
{
    dateFormat: 'yy년 mm월 dd일 DD',
    showOn:"button",
    buttonImage: "images/calendar.png",
    dayNamesMin : ['일','월','화','수','목','금','토'],
    dayNamesShort : ['일','월','화','수','목','금','토'],
    dayNames :  ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
},
    
 //[2]
 {
    dateFormat: 'yy년 mm월 dd일 DD',
    showOn:"button",
    buttonImage: "images/calendar_green.png",
    dayNamesMin : ['일','월','화','수','목','금','토'],
    dayNamesShort : ['일','월','화','수','목','금','토'],
    dayNames :  ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
}
//[3] 예비용
// {
//     dateFormat: 'yymmdd',
//     dayNamesMin : ['일','월','화','수','목','금','토'],
//     dayNamesShort : ['일','월','화','수','목','금','토'],
//     dayNames :  ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
//     monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
// }
];


//데이트피커 생성
function setDatePicker(target, no){
    no = no || 0;
    $(target).datepicker(opts[no]);  // -> $("#datepicker").datepicker(opts);
    // $(target).datepicker('setDate',new Date());
}