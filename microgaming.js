var x = [0, 60, 790, 80, 1200, 1431, 859, 90, 407, 1375, 596, 1235, 427, 335, 917, 862, 238, 1304, 773, 206, 411, 199, 1096, 1231, 126, 215, 805, 944, 811, 870, 697, 1493, 267, 435, 323, 831, 17, 1337, 89, 1128, 690, 723, 856, 868, 399, 1016, 1328, 938, 1040, 1026, 1196, 566, 236, 1071, 1150, 593, 1315, 190, 1256, 885, 1459, 606, 1244, 1118, 1008, 1293, 1494, 970, 442, 620, 917, 1434, 1495, 196, 937, 1113, 184, 1053, 1413, 1261, 143, 1485, 132, 1269, 67, 477, 1300, 1030, 317, 580, 1292, 347, 1416, 269, 1179, 80, 918, 760, 907, 913, 1070, 646, 108, 1217, 366, 97, 139, 704, 1382, 1187, 2, 1356, 756, 424, 420, 717, 373, 565, 1427, 284, 1183, 893, 1127, 421, 68, 942, 1316, 1469, 811, 1387, 770, 1086, 73, 1487, 1025, 1389, 294, 119, 890, 793, 851, 662, 982, 740, 1205, 45, 1005, 341, 640, 939, 1445, 1152, 664, 680, 81, 187, 752, 1245, 666, 1374, 867, 1284, 624, 604, 360, 191, 1419, 170, 508, 395, 964, 1012, 577, 177, 310, 1270, 1169, 27, 123, 372, 549, 1225, 448, 1321, 343, 931, 1170, 1032, 947, 305, 826, 128, 1414, 1010, 518, 523, 74, 626, 902, 1499, 988, 459, 814, 402, 639, 712, 503, 1046, 797, 997, 165, 949, 749, 142, 1117, 377, 412, 1382, 1227, 1332, 229, 1067, 182, 1299, 1163, 7, 149, 350, 1151, 904, 941, 881, 969, 882, 672, 1336, 1262, 1102, 122, 845, 259, 511, 1359, 1453, 1296, 1202, 977, 1496, 562, 120, 1146, 431, 794, 295, 784, 37, 352, 145, 1391, 33, 222, 1323, 1288, 1043, 296, 1022, 114, 962, 1405, 202, 1063, 1357, 1428, 689, 1379, 1092, 65, 803, 83, 1232, 1437, 850, 98, 407, 1375, 596, 1238, 427];
for (let i = 1; i <= 300; i++) {
    var types = ["Normal ❎❎", "Cepat ❎✅", "Turbo ✅❎"];
    var checks = ["✅", "❎"];
    var labels = ["Auto!", "Manual!"];
    
    var lastTime = localStorage.getItem("lastTime_10_"+i);
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
        if (i == 29 || i == 35 || i == 63 || i == 43 || i == 27 || i == 41 || i == 4 || i == 273 || i == 141 || i == 255 || i == 229 || i == 144 || i == 163 || i == 234 || i == 1) {
            xx = xx % 27;
            xx += 65;
        } else {
            xx = xx % 83;
            xx += 8;
        }

        localStorage.setItem("lastTime_"+i, currentTime);
        localStorage.setItem("xx_10_"+i, xx);

        var random_val_1 = [15, 25, 35, 45, 55];
        var random_1 = random_val_1[Math.floor(Math.random() * random_val_1.length)];
        localStorage.setItem("random_1_xx_10_"+xx+"_"+i, random_1);

        var random_val_2 = [10, 20, 30, 40, 50];
        var random_2 = random_val_2[Math.floor(Math.random() * random_val_2.length)];
        localStorage.setItem("random_2_xx_10_"+xx+"_"+i, random_2);

        var random_val_3 = [3, 5, 7, 9];
        var random_3 = random_val_3[Math.floor(Math.random() * random_val_3.length)];
        localStorage.setItem("random_3_xx_10_"+xx+"_"+i, random_3);

        var random_val_4 = [20, 30, 40, 50, 60, 70];
        var random_4 = random_val_4[Math.floor(Math.random() * random_val_4.length)];
        localStorage.setItem("random_4_xx_10_"+xx+"_"+i, random_4);


        var random_type = Math.floor(Math.random() * types.length);
        if (random_type == 0) {
            localStorage.setItem("tips_type_number_1_xx_10_"+i, types[0]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_2_xx_10_"+i, types[1]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_3_xx_10_"+i, types[2]+""+checks[Math.floor(Math.random() * checks.length)]);
        }else if (random_type == 1) {
            localStorage.setItem("tips_type_number_1_xx_10_"+i, types[1]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_2_xx_10_"+i, types[0]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_3_xx_10_"+i, types[2]+""+checks[Math.floor(Math.random() * checks.length)]);
        }else if (random_type == 2) {
            localStorage.setItem("tips_type_number_1_xx_10_"+i, types[2]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_2_xx_10_"+i, types[1]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_3_xx_10_"+i, types[0]+""+checks[Math.floor(Math.random() * checks.length)]);
        }

        localStorage.setItem("tips_label_number_1_xx_10_"+i, labels[Math.floor(Math.random() * labels.length)]);
        localStorage.setItem("tips_label_number_2_xx_10_"+i, labels[Math.floor(Math.random() * labels.length)]);
        localStorage.setItem("tips_label_number_3_xx_10_"+i, labels[Math.floor(Math.random() * labels.length)]);
    }else{
        var xx = localStorage.getItem("xx_10_"+i);

        var random_1 = localStorage.getItem("random_1_xx_10_"+xx+"_"+i);
        var random_2 = localStorage.getItem("random_2_xx_10_"+xx+"_"+i);
        var random_3 = localStorage.getItem("random_3_xx_10_"+xx+"_"+i);
        var random_4 = localStorage.getItem("random_4_xx_10_"+xx+"_"+i);
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

    $("#"+asd).parent().parent().parent().attr("onclick", "show_popup('xx_10_"+i+"', '"+asd+"', '"+random_1+"', '"+random_2+"', '"+random_3+"', '"+random_4+"')");
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