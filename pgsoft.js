var x = [0, 67, 658, 896, 891, 104, 633, 489, 376, 101, 733, 439, 840, 673, 135, 906, 247, 332, 760, 173, 268, 394, 419, 803, 168, 532, 198, 797, 946, 551, 869, 645, 445, 258, 330, 845, 785, 523, 182, 752, 519, 619, 660, 265, 171, 950, 427, 207, 468, 325, 72, 211, 498, 473, 539, 18, 357, 311, 644, 181, 893, 822, 341, 937, 698, 27, 605, 833, 586, 11, 993, 218, 261, 825, 255, 373, 847, 219, 609, 979, 841, 403, 380, 371, 651, 680, 965, 832, 718, 555, 769, 766, 726, 217, 41, 669, 256, 140, 193, 317, 653, 905, 313, 374, 48, 514, 442, 781, 591, 864, 826, 685, 100, 782, 557, 178, 493, 281, 301, 384, 329, 724, 690, 848, 204, 81, 254, 778, 599, 478, 613, 938, 844, 654, 805, 289, 400, 649, 479, 446, 755, 459, 914, 50, 326, 353, 917, 244, 577, 811, 584, 298, 618, 6, 603, 180, 475, 677, 951, 548, 286, 366, 441, 40, 474, 559, 264, 80, 276, 534, 68, 652, 589, 225, 228, 285, 299, 456, 753, 46, 97, 630, 981, 454, 711, 447, 997, 122, 273, 234, 913, 472, 828, 70, 414, 779, 437, 611, 593, 86, 128];
for (let i = 1; i <= 181; i++) {
    var lastTime = localStorage.getItem("lastTime_12_"+i);
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
        if (i == 3 || i == 4 || i == 50 || i == 63 || i == 99 || i == 85 || i == 29 || i == 83) {
            xx = xx % 27;
            xx += 65;
        } else {
            xx = xx % 83;
            xx += 8;
        }

        localStorage.setItem("lastTime_"+i, currentTime);
        localStorage.setItem("xx_12_"+i, xx);

        var random_val_1 = [15, 25, 35, 45, 55];
        var random_1 = random_val_1[Math.floor(Math.random() * random_val_1.length)];
        localStorage.setItem("random_1_xx_12_"+xx+"_"+i, random_1);

        var random_val_2 = [10, 20, 30, 40, 50];
        var random_2 = random_val_2[Math.floor(Math.random() * random_val_2.length)];
        localStorage.setItem("random_2_xx_12_"+xx+"_"+i, random_2);

        var random_val_3 = [3, 5, 7, 9];
        var random_3 = random_val_3[Math.floor(Math.random() * random_val_3.length)];
        localStorage.setItem("random_3_xx_12_"+xx+"_"+i, random_3);

        var random_val_4 = [20, 30, 40, 50, 60, 70];
        var random_4 = random_val_4[Math.floor(Math.random() * random_val_4.length)];
        localStorage.setItem("random_4_xx_12_"+xx+"_"+i, random_4);
    }else{
        var xx = localStorage.getItem("xx_12_"+i);

        var random_1 = localStorage.getItem("random_1_xx_12_"+xx+"_"+i);
        var random_2 = localStorage.getItem("random_2_xx_12_"+xx+"_"+i);
        var random_3 = localStorage.getItem("random_3_xx_12_"+xx+"_"+i);
        var random_4 = localStorage.getItem("random_4_xx_12_"+xx+"_"+i);
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

    $("#"+asd).parent().parent().parent().attr("onclick", "show_popup('"+asd+"', '"+random_1+"', '"+random_2+"', '"+random_3+"', '"+random_4+"')");
}

/* Menampilkan Popup Pola Main*/
function show_popup(id_percent, random_1, random_2, random_3, random_4) {
    var number_txt = $("#"+id_percent).html();
    var percent = number_txt.replace("%", "").replace("RTP ", "");

    if (percent < 30) {
      $("#popup-container-bad").fadeIn(500);
      
    }else{
      $("#popup-container-win").fadeIn(500);

      $("#tips_number_1").html(random_1);
      $("#tips_number_2").html(random_2);
      $("#tips_number_3").html(random_3);
      $("#tips_number_4").html(random_4);
    }
}

function close_popup() {
    $(".popup-container").fadeOut(500);
}