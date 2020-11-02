// SECOND BOX DEFAULT FUCTIONS
$("document").ready( function() {

    //Editing Backgrounds 
    var editBox1 = $(".edit-box1");var editBox2 = $(".edit-box2");var editBox3 = $(".edit-box3");var editBox4 = $(".edit-box4");var editBox5 = $(".edit-box5");var editBox6 = $(".edit-box6");var editBox7 = $(".edit-box7");

    //Buttons to open Editing backgrounds
    var quickBtn = $(".quick"); var text1Btn = $(".text1"); var text2Btn = $(".text2"); var backBtn = $(".back"); var ornBtn = $(".orn"); var layBtn = $(".lay"); var brandBtn = $(".brand");
    
    var editBoxArr = [editBox1, editBox2, editBox3, editBox4, editBox5, editBox6, editBox7];
    var editBtnArr = [quickBtn, text1Btn, text2Btn, backBtn, ornBtn, layBtn, brandBtn]

    //This changes(hides/shows) editing boxes
    function hideEditBoxes(activeBox, arr){
        for(var i = 0; i <= arr.length - 1; i++){
            arr[i].hide()
        }
        activeBox.fadeIn()
    }

    //This changes(hides/shows) editing buttons
    function changeBackground(activeBtn, arr){
        for(var i = 0; i <= arr.length - 1; i++){
            arr[i].css("backgroundColor", "#e5f7e1")
        }
        activeBtn.css("backgroundColor", "white")
    }


    //Quick Button
    $(".quick").click( function(){
        hideEditBoxes(editBox1, editBoxArr);
        changeBackground(quickBtn, editBtnArr)
    })

    //Text Button
    $(".text1").click( function(){
        hideEditBoxes(editBox2, editBoxArr);
        changeBackground(text1Btn, editBtnArr)
    })

    //Text2
    $(".text2").click( function (){
        hideEditBoxes(editBox3, editBoxArr)
        changeBackground(text2Btn, editBtnArr)
    })

    $(".back").click( function (){
        hideEditBoxes(editBox4, editBoxArr)
        changeBackground(backBtn, editBtnArr)
    })

    $(".orn").click( function (){
        hideEditBoxes(editBox5, editBoxArr)
        changeBackground(ornBtn, editBtnArr)
    })

    $(".lay").click( function (){
        hideEditBoxes(editBox6, editBoxArr)
        changeBackground(layBtn, editBtnArr)
    })

    $(".brand").click( function(){
        hideEditBoxes(editBox7, editBoxArr)
        changeBackground(brandBtn, editBtnArr)
    })

})