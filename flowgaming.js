var x = [0, 1232, 1437, 850, 98, 47, 1375, 596, 1238, 427, 1391, 33, 222, 1323, 1288, 1043, 296, 1022, 114, 5735, 1405, 202, 1063, 403, 132, 1302, 1027, 1108, 10, 87, 564, 1058, 248, 671, 207, 645, 445, 258, 330, 5, 84, 37, 2, 9577, 7969, 9445, 55, 100, 807, 777, 811, 870, 697, 1493, 267, 561, 323, 831, 17, 1337, 89, 1128, 690, 723, 856, 15, 586, 11, 993, 218, 261, 81, 255, 373, 847, 219, 609, 284, 175, 3578, 857, 617, 1374, 51, 99, 948, 582, 709, 239, 341, 293, 936, 960, 268, 491, 514, 41, 833, 3216, 3401, 4800, 3556, 4501, 3947, 4166, 4360, 3775, 6174, 242, 321, 435, 741, 662, 846, 277, 1, 776, 67, 658, 896, 891, 104, 633, 489, 376, 101, 733, 439, 840, 673, 135, 906, 247, 374, 264, 987, 678, 794, 61, 414, 670, 60, 349, 874, 753, 232, 527, 3, 27, 721, 379, 838, 909, 809, 626, 704, 767, 90, 683, 447, 281, 357, 438, 825, 366, 991, 914, 962, 385, 317, 555, 399, 475, 621, 109, 602, 217, 893, 581, 274, 407, 611, 886, 368, 3472, 3980, 3212, 4434, 4586, 4533, 3950, 4644, 4827, 892, ];
for (let i = 1; i <= 180; i++) {
    var types = ["Normal ❎❎", "Cepat ❎✅", "Turbo ✅❎"];
    var checks = ["✅", "❎"];
    var labels = ["Auto!", "Manual!"];
    
    var lastTime = localStorage.getItem("lastTime_4_"+i);
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
        if (i == 7 || i == 33 || i == 79 || i == 185 || i == 10 || i == 82) {
            xx = xx % 27;
            xx += 65;
        } else {
            xx = xx % 83;
            xx += 8;
        }

        localStorage.setItem("lastTime_"+i, currentTime);
        localStorage.setItem("xx_4_"+i, xx);

        var random_val_1 = [15, 25, 35, 45, 55];
        var random_1 = random_val_1[Math.floor(Math.random() * random_val_1.length)];
        localStorage.setItem("random_1_xx_4_"+xx+"_"+i, random_1);

        var random_val_2 = [10, 20, 30, 40, 50];
        var random_2 = random_val_2[Math.floor(Math.random() * random_val_2.length)];
        localStorage.setItem("random_2_xx_4_"+xx+"_"+i, random_2);

        var random_val_3 = [3, 5, 7, 9];
        var random_3 = random_val_3[Math.floor(Math.random() * random_val_3.length)];
        localStorage.setItem("random_3_xx_4_"+xx+"_"+i, random_3);

        var random_val_4 = [20, 30, 40, 50, 60, 70];
        var random_4 = random_val_4[Math.floor(Math.random() * random_val_4.length)];
        localStorage.setItem("random_4_xx_4_"+xx+"_"+i, random_4);


        var random_type = Math.floor(Math.random() * types.length);
        if (random_type == 0) {
            localStorage.setItem("tips_type_number_1_xx_4_"+i, types[0]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_2_xx_4_"+i, types[1]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_3_xx_4_"+i, types[2]+""+checks[Math.floor(Math.random() * checks.length)]);
        }else if (random_type == 1) {
            localStorage.setItem("tips_type_number_1_xx_4_"+i, types[1]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_2_xx_4_"+i, types[0]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_3_xx_4_"+i, types[2]+""+checks[Math.floor(Math.random() * checks.length)]);
        }else if (random_type == 2) {
            localStorage.setItem("tips_type_number_1_xx_4_"+i, types[2]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_2_xx_4_"+i, types[1]+""+checks[Math.floor(Math.random() * checks.length)]);
            localStorage.setItem("tips_type_number_3_xx_4_"+i, types[0]+""+checks[Math.floor(Math.random() * checks.length)]);
        }

        localStorage.setItem("tips_label_number_1_xx_4_"+i, labels[Math.floor(Math.random() * labels.length)]);
        localStorage.setItem("tips_label_number_2_xx_4_"+i, labels[Math.floor(Math.random() * labels.length)]);
        localStorage.setItem("tips_label_number_3_xx_4_"+i, labels[Math.floor(Math.random() * labels.length)]);
    }else{
        var xx = localStorage.getItem("xx_4_"+i);

        var random_1 = localStorage.getItem("random_1_xx_4_"+xx+"_"+i);
        var random_2 = localStorage.getItem("random_2_xx_4_"+xx+"_"+i);
        var random_3 = localStorage.getItem("random_3_xx_4_"+xx+"_"+i);
        var random_4 = localStorage.getItem("random_4_xx_4_"+xx+"_"+i);
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

    $("#"+asd).parent().parent().parent().attr("onclick", "show_popup('xx_4_"+i+"', '"+asd+"', '"+random_1+"', '"+random_2+"', '"+random_3+"', '"+random_4+"')");
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