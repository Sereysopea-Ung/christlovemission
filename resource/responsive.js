/** responsive_array is Array of array
 * array[0] is html document id
 * array[1] is minimum width to show this item on toolbar
 * array[2] is another handling function
 * array[3] is reverse handling to function in array[2]
 */
const responsive_array = [
    ['#statement-of-faith',1290],
    ['#document',1129,function(){
        $('#upper-list').css('width','400px');
    },function(){
        $('#upper-list').css('width','600px');
    }],
    ['#subscribe',1032],

    ['#article',934,function(){
        $('#upper-list').css('width','300px');
    },function(){
        $('#upper-list').css('width','400px');
    }],
    ['#event',828],

    ['#about-us',828,function(){
        $('#upper-list').css('width', '220px');
    },function(){
        $('#upper-list').css('width', '300px');
    }],
    ['#offering', 746,function(){
        $('#upper-list').css('width', '100px');
        $('#upper-list').css('left','-10px');
    },function(){
        $('#upper-list').css('width', '220px');
        $('#upper-list').css('left','0px');
    }],
    ['#blue-ribbon,#green-ribbon',638,function(){
        $('#white-ribbon').css('left', '10px');
        $('.bar').css('width','calc(100% - 90px)');
    },function(){
        $('#white-ribbon').css('left', '70px');
        $('.bar').css('width','calc(100% - 210px)');
    }],
    ['#upper-list', 525],
    ['#logo-div,#ask', 482,function(){
        $('.bar').css('width','100%');
        $('.bar').css('justify-content','center');
        $('#lower-list').css('justify-content','left');
    },function(){
        $('.bar').css('width','calc(100% - 90px)');
        $('.bar').css('justify-content','space-between');
        $('#lower-list').css('justify-content','space-between');
    }]
];


function adjustment(responsive_array){
    for (let i=0;i<responsive_array.length;i++){
        if($(window).width()<responsive_array[i][1]){
            $(responsive_array[i][0]).hide();
            if (responsive_array[i][2]){
                responsive_array[i][2]();
            }
        } else {
            $(responsive_array[i][0]).show();
            if (responsive_array[i][3]){
                responsive_array[i][3]();
                return;
            }
        }
    }
}


adjustment(responsive_array);
window.addEventListener('resize', function(e){
    adjustment(responsive_array);
});
