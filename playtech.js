var x = [0, 6588, 1574, 15, 2571, 30, 2144, 3521, 2555, 721, 20, 374, 917, 218, 819, 657, 855, 1544, 50, 6577, 1222, 266, 974, 2641, 199, 161, 2544, 1542, 10, 244, 4666, 325, 201, 1487, 1543, 621, 45, 189, 1046, 797, 997, 165, 949, 749, 351, 1117, 377, 412, 753, 232, 527, 3, 27, 4214, 1457, 8541, 156, 601, 991, 914, 301, 794, 61, 102, 670, 501, 209, 105, 9011, 142, 302, 503, 204, 758, 658, 190, 132, 264, 455, 421, 812, 359, 5244, 552, 950, 629, 126, 166, 368, 391, 492, 311, 710, 961, 850, 282, 64, 38, 624, 3556, 4501, 3947, 4166, 4360, 3775, 4021, 4820, 4854, 4725, 3304, 3316, 729, 522, 859, 954, 184, 124, 524, 551, 200, 929, 816, 454, 424, 587, 72, 488, 269, 238, 958, 772, 185, 635, 685, 966, 889, 403, 286, 586, 845, 779, 866, 573, 9, 924, 786, 911, 768, 143, 157, 676, 446, 69, 164, 35, 722, 457, 379, 838, 909, 809, 245, 704, 767, 90, 683, 447, 281, 357, 438, 825, 366, 68, 125, 2777, 490, 783, 651, 963, 177, 558, 876, 65, 903, 2, 271, 305, 234, 146, 267, 92, 80, 533, 96, 136, 122, 906, 257, 959, 702, 154, 5, 682, 168, 248, 985, 487, 358, 555, 687, 214, 4015, 8475, 9544, 159, 987, 666, 828, 70, 414, 562, 120, 1146, 431, 1648, 295, 784, 37, 352, 145, 1391, 33, 222, 1323, 1288, 1043, 296, 1022, 114, 962, 1405, 1382, 1227, 1332, 229, 1067, 182, 1299, 1163, 7, 149, 350, 1151, 904, 941, 881, 969, 882, 672, 1336, 1262, 826, 128, 1414, 1010, 518, 523, 74, 626, 902, 1499, 988, 459, 814, 402, 639, 640, 939, 1445, 1152, 664, 680, 81, 187, 752, 1245, 5874, 1597, ];
for (let i = 1; i <= 300; i++) {
    var types = ["Normal ❎❎", "Cepat ❎✅", "Turbo ✅❎"];
    var checks = ["✅", "❎"];
    var labels = ["Auto!", "Manual!"];
    
    var lastTime = localStorage.getItem("lastTime_14_"+i);
    var currentTime = new Date().getTime();

    if (!lastTime || (currentTime - lastTime) >= 14400000) {
        const d = new Date();
        var date = d.getUTCDate();
        var day = d.getUTCDay() + 1;
        var year = d.getUTCFullYear();
        var month = d.getUTCMonth() + 1;
        var hour = d.getUTCHours();
        var min = d.getMinutes();
        if (min < 30) {
            min = 1;
        } else {
            min = 2;
        }
        var xx = day + year * month * date;
        xx = Math.pow(xx, hour * min);
        xx = xx * x[i];
        if (i == 8 || i == 45 || i == 95 || i == 10 || i == 38 || i == 98 || i == 163 || i == 141 || i == 229 || i == 411 || i == 305 || i == 10 || i == 35 || i == 234 || i == 1) {
            xx = xx % 27;
            xx += 65;
        } else {
            xx = xx % 83;
            xx += 8;
        }

        localStorage.setItem("lastTime_"+i, currentTime);
        localStorage.setItem("xx_14_"+i, xx);

        var random_val_1 = [15, 25, 35, 45, 55];
        var random_1 = random_val_1[Math.floor(Math.random() * random_val_1.length)];
        localStorage.setItem("random_1_xx_14_"+xx+"_"+i, random_1);

        var random_val_2 = [10, 20, 30, 40, 50];
        var random_2 = random_val_2[Math.floor(Math.random() * random_val_2.length)];
        localStorage.setItem("random_2_xx_14_"+xx+"_"+i, random_2);

        var random_val_3 = [3, 5, 7, 9];
        var random_3 = random_val_3[Math.floor(Math.random() * random_val_3.length)];
        localStorage.setItem("random_3_xx_14_"+xx+"_"+i, random_3);

        var random_val_4 = [20, 30, 40, 50, 60, 70];
        var random_4 = random_val_4[Math.floor(Math.random() * random_val_4.length)];
        localStorage.setItem("random_4_xx_14_"+xx+"_"+i, random_4);


        var random_type = Math.floor(Math.random() * types.length);
        if (random_type == 0) {
            localStorage.setItem("tips_type_number_1_xx_14_"+i, types[0]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_2_xx_14_"+i, types[1]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_3_xx_14_"+i, types[2]+""+checks[Math.floor(Math.random() * checks.length)]);
        }else if (random_type == 1) {
            localStorage.setItem("tips_type_number_1_xx_14_"+i, types[1]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_2_xx_14_"+i, types[0]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_3_xx_14_"+i, types[2]+""+checks[Math.floor(Math.random() * checks.length)]);
        }else if (random_type == 2) {
            localStorage.setItem("tips_type_number_1_xx_14_"+i, types[2]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_2_xx_14_"+i, types[1]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_3_xx_14_"+i, types[0]+""+checks[Math.floor(Math.random() * checks.length)]);
        }

        localStorage.setItem("tips_label_number_1_xx_14_"+i, labels[Math.floor(Math.random() * labels.length)]);
        localStorage.setItem("tips_label_number_2_xx_14_"+i, labels[Math.floor(Math.random() * labels.length)]);
        localStorage.setItem("tips_label_number_3_xx_14_"+i, labels[Math.floor(Math.random() * labels.length)]);
    }else{
        var xx = localStorage.getItem("xx_14_"+i);

        var random_1 = localStorage.getItem("random_1_xx_14_"+xx+"_"+i);
        var random_2 = localStorage.getItem("random_2_xx_14_"+xx+"_"+i);
        var random_3 = localStorage.getItem("random_3_xx_14_"+xx+"_"+i);
        var random_4 = localStorage.getItem("random_4_xx_14_"+xx+"_"+i);
    }


    const as = "percent-bar-" + i;
    const asd = "percent-txt-" + i;
    var percentTxt = document.getElementById("percent-txt-" + i);
    var bar = document.getElementById("percent-bar-" + i);
    const bartext = document.getElementById("card-title" + i);
    if (percentTxt) percentTxt.innerHTML = xx + "%";
    if (bar) {
        $("#percent-bar-" + i).attr("aria-valuenow", xx).css("width", xx + "%");
        if (xx < 30) {
            bar.classList.add("red");
        } else if (xx > 70) {
            bar.classList.add("green");
        } else {
            bar.classList.add("yellow");
        }
    }

    $("#"+asd).parent().parent().parent().attr("onclick", "show_popup('xx_14_"+i+"', '"+asd+"', '"+random_1+"', '"+random_2+"', '"+random_3+"', '"+random_4+"')");
}

var slideIndexText = 1;
showSlidesText(slideIndexText);

function plusSlidesText(n) {
  showSlidesText(slideIndexText += n);
}

function currentSlideText(n) {
  showSlidesText(slideIndexText = n);
}

function showSlidesText(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesText");
  if (n > slides.length) {slideIndexText = 1}
    if (n < 1) {slideIndexText = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  slides[slideIndexText-1].style.display = "block";
}

/* Menampilkan Popup Pola Main*/
function show_popup(id_data, id_percent, random_1, random_2, random_3, random_4) {
  var number_txt = $("#"+id_percent).html();
  var percent = number_txt.replace("%", "").replace("RTP ", "");

  if (percent < 30) {
    $("#popup-container-bad").fadeIn(500);
  }else{
    var currentTime = new Date().getTime();

    var tips_type_number_1 = localStorage.getItem("tips_type_number_1_"+id_data);
    var tips_type_number_2 = localStorage.getItem("tips_type_number_2_"+id_data);
    var tips_type_number_3 = localStorage.getItem("tips_type_number_3_"+id_data);

    var tips_label_number_1 = localStorage.getItem("tips_label_number_1_"+id_data);
    var tips_label_number_2 = localStorage.getItem("tips_label_number_2_"+id_data);
    var tips_label_number_3 = localStorage.getItem("tips_label_number_3_"+id_data);


    $("#tips_type_number_1").html(tips_type_number_1);
    $("#tips_type_number_2").html(tips_type_number_2);
    $("#tips_type_number_3").html(tips_type_number_3);
    
    $("#tips_label_number_1").html(tips_label_number_1);
    $("#tips_label_number_2").html(tips_label_number_2);
    $("#tips_label_number_3").html(tips_label_number_3);

  
    $("#tips_number_1").html(random_1);
    $("#tips_number_2").html(random_2);
    $("#tips_number_3").html(random_3);
    $("#tips_number_4").html(random_4);
    
    $("#popup-container-win").fadeIn(500);
  }
}


function close_popup() {
    $(".popup-container").fadeOut(500);
}