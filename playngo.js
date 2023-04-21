var x = [0, 106, 69, 12, 1119, 1474, 585, 1062, 714, 292, 273, 834, 919, 467, 973, 487, 827, 282, 700, 68, 24, 92, 333, 399, 475, 621, 109, 944, 811, 870, 697, 1493, 267, 435, 323, 831, 785, 175, 210, 752, 519, 421, 6985, 265, 171, 950, 123, 198, 843, 187, 10, 409, 848, 583, 885, 654, 200, 929, 816, 72, 488, 269, 157, 958, 772, 185, 959, 685, 966, 889, 403, 629, 126, 166, 368, 391, 492, 658, 710, 974, 854, 154, 652, 790, 80, 1200, 1431, 859, 30, 458, 522, 955, 1235, 548, 335, 917, 862, 238, 1304, 7907, 9263, 5001, 7451, 9895, 8599, 5447, 8298, 5382, 7812, 4875, 2654, 8521, 9856, 3521, 6520, 505, 25, 16, 4346, 3472, 3980, 3212, 4434, 4586, 4533, 3950, 4644, 4827, 892, 619, 971, 334, 659, 397, 5, 802, 600, 214, 526, 564, 90, 356, 170, 242, 381, 900, 660, 539, 754, 438, 102, 44, 605, 996, 85, 449, 15, 800, 21, 385, 317, 555, 1010, 518, 523, 74, 626, 902, 1499, 988, 459, 814, 402, 639, 712, 503, 1046, 797, 997, 165, 949, 749, 142, 1117, 377, 412, 1382, 1227, 1332, 229, 1067, 182, 1299, 1163, 7, 149, 49, 1151, 904, 941, 881, 969, 882, 672, 1336, 1262, 1102, 122, 845, 259, 511, 1359, 1453, 1296, 1202, 977, 1496, 562, 120, 1146, 431, 1648, 295, 784, 37, 352, 145, 1391, 33, 222, 1323, 1288, 1043, 296, 1022, 114, 962, 1405, 202, 1063, 1357, 1428, 689, 1379, 1092, 65, 803, 83, 1232, 1437, 850, 98, 407, 1375, 596, 1238, 427, 794, 61, 414, 670, 60, 349, 1647, 6581, 9512, 542, 851, 64, 721, 350, 374, 634, 852, 211, 624, 358, 124, 520, 111, 874, 753, 232, 527, 3, 27, 4214, 1457, ];
for (let i = 1; i <= 300; i++) {
    var types = ["Normal ❎❎", "Cepat ❎✅", "Turbo ✅❎"];
    var checks = ["✅", "❎"];
    var labels = ["Auto!", "Manual!"];
    
    var lastTime = localStorage.getItem("lastTime_13_"+i);
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
        if (i == 15 || i == 40 || i == 82 || i == 40 || i == 18 || i == 51 || i == 7 || i == 371 || i == 181 || i == 355 || i == 219 || i == 155 || i == 182 || i == 165 || i == 1) {
            xx = xx % 27;
            xx += 65;
        } else {
            xx = xx % 83;
            xx += 8;
        }

        localStorage.setItem("lastTime_"+i, currentTime);
        localStorage.setItem("xx_"+i, xx);

        var random_val_1 = [15, 25, 35, 45, 55];
        var random_1 = random_val_1[Math.floor(Math.random() * random_val_1.length)];
        localStorage.setItem("random_1_xx_"+xx+"_"+i, random_1);

        var random_val_2 = [10, 20, 30, 40, 50];
        var random_2 = random_val_2[Math.floor(Math.random() * random_val_2.length)];
        localStorage.setItem("random_2_xx_"+xx+"_"+i, random_2);

        var random_val_3 = [3, 5, 7, 9];
        var random_3 = random_val_3[Math.floor(Math.random() * random_val_3.length)];
        localStorage.setItem("random_3_xx_"+xx+"_"+i, random_3);

        var random_val_4 = [20, 30, 40, 50, 60, 70];
        var random_4 = random_val_4[Math.floor(Math.random() * random_val_4.length)];
        localStorage.setItem("random_4_xx_"+xx+"_"+i, random_4);


        var random_type = Math.floor(Math.random() * types.length);
        if (random_type == 0) {
            localStorage.setItem("tips_type_number_1_xx_"+i, types[0]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_2_xx_"+i, types[1]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_3_xx_"+i, types[2]+""+checks[Math.floor(Math.random() * checks.length)]);
        }else if (random_type == 1) {
            localStorage.setItem("tips_type_number_1_xx_"+i, types[1]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_2_xx_"+i, types[0]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_3_xx_"+i, types[2]+""+checks[Math.floor(Math.random() * checks.length)]);
        }else if (random_type == 2) {
            localStorage.setItem("tips_type_number_1_xx_"+i, types[2]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_2_xx_"+i, types[1]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_3_xx_"+i, types[0]+""+checks[Math.floor(Math.random() * checks.length)]);
        }

        localStorage.setItem("tips_label_number_1_xx_"+i, labels[Math.floor(Math.random() * labels.length)]);
        localStorage.setItem("tips_label_number_2_xx_"+i, labels[Math.floor(Math.random() * labels.length)]);
        localStorage.setItem("tips_label_number_3_xx_"+i, labels[Math.floor(Math.random() * labels.length)]);
    }else{
        var xx = localStorage.getItem("xx_"+i);

        var random_1 = localStorage.getItem("random_1_xx_"+xx+"_"+i);
        var random_2 = localStorage.getItem("random_2_xx_"+xx+"_"+i);
        var random_3 = localStorage.getItem("random_3_xx_"+xx+"_"+i);
        var random_4 = localStorage.getItem("random_4_xx_"+xx+"_"+i);
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

    $("#"+asd).parent().parent().parent().attr("onclick", "show_popup('xx_"+i+"', '"+asd+"', '"+random_1+"', '"+random_2+"', '"+random_3+"', '"+random_4+"')");
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