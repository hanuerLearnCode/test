$("document").ready(function(){
    // reload
    $("[href='#reload").click(function() {
        window.location.href = "main.html";
    })
    // laptop
    $("[href='#laptop']").click(function() {  
        window.location.href = "laptop.html";
    })
    // mobile
    $("[href='#mobile']").click(function() {
        window.location.href = "mobile.html";
    })

    // login
    $("[href='#login']").click(function() {
        window.location.href = "login.html";
    })

    //signup
    $("[href='#signup']").click(function() {
        // console.log("signUP");
        window.location.href = "signup.html";
    })
    // laptop products 
    $("[href='#dell']").click(function() {
        window.location.href = "dell.html";
    })

    $("[href='#acer']").click(function() {
        window.location.href = "acer.html";
    })

    $("[href='#asus']").click(function() {
        window.location.href = "asus.html";
    })

    $("[href='#lenovo']").click(function() {
        window.location.href = "lenovo.html";
    })

    //mobile products
    $("[href='#apple']").click(function() {
        window.location.href = "apple.html";
    })
    $("[href='#samsung']").click(function() {
        window.location.href = "samsung.html";
    })
    $("[href='#xiaomi']").click(function() {
        window.location.href = "xiaomi.html";
    })
    $("[href='#oppo']").click(function() {
        window.location.href = "oppo.html";
    })

    // button settings
    $("#left").click (function () {

        let imgSrc = $("img").attr("src"); // get the src 
        let src_array = imgSrc.split("/"); // split the src of the img to the array
        let indexImg = src_list.indexOf(src_array[3]); // get the index of the src in the lib 
        if (indexImg != 0) {
            src_array[3] = src_list[indexImg -1];
        } else {
            src_array[3] = src_list[src_list.length -1];
        }

        let path = src_array.join("/");
        $("#main-display").attr("src", path);

    })

    $("#right").click (function() {
        let imgSrc = $("img").attr("src"); // get the src 
        let src_array = imgSrc.split("/"); // split the src of the img to the array
        let indexImg = src_list.indexOf(src_array[3]); // get the index of the src in the lib 
        if (indexImg != 3) {
            src_array[3] = src_list[indexImg +1];
        } else {
            src_array[3] = src_list[0];
        }
        let path = src_array.join("/");
        $("#main-display").attr("src", path);
    })


    // swapping imgs
    $("img").click(function() {
        let src = $(this).attr("src");
        $("#main-display").attr("src", src);
    })
})


