/* Added External Java Script to Show Date */
function myDate(){
    var today = new Date();
    var myDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    document.getElementById('formDate').innerHTML= myDate;
}