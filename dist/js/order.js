define(["jquery", "jquery-cookie"], function ($) {
    function main() {
        $(function () {

            $.ajax({
                type: "GET",
                url: "../json/product.json",
                success: function (res) {

                    var proHtml = "";

                    var arrPro = eval($.cookie("products"));
                    for (var i = 0; i < arrPro.length; i++) {
                        var isHasShop = false;
                        if ($(".toPayPro dl").size() == 0) {
                            if (arrPro[i].division == "undefined" || !arrPro[i].division) {
                                arrPro[i].division = "";
                            }
                            var proImg_m = arrPro[i].proImg;
                            proImg_m = proImg_m.replace("_t", "");
                            proHtml = `
                                    <dl>
                                        <dt>
                                            <input type="checkbox">
                                            <strong>店铺：</strong>
                                            <b><a href="">${arrPro[i].shopName}</a></b>
                                        </dt>
                                        <dd>
                                            <div class="proList">
                                                <input type="checkbox">
                                                <img src="${proImg_m}" alt="">
                                                <div class="proName">
                                                    <a href="">${res[arrPro[i].name].title}</a>
                                                </div>
                                                <span>
                                                    <p>${arrPro[i].division}</p>
                                                    <p>${arrPro[i].soleType}</p>
                                                </span>
                                                <div class="price">
                                                    ￥<i>${res[arrPro[i].name].price}</i>
                                                </div>
                                                <div class="qty">
                                                    <div class="reduceQty">-</div>
                                                    <em>${arrPro[i].num}</em>
                                                    <div class="addQty">+</div>
                                                </div>
                                                <div class="totalOfPro">
                                                    ￥<b>0.00</b>
                                                </div>
                                                <div class="op">
                                                    <a href="">移入收藏夹</a>
                                                    <a class="deletePro" href="">删除</a>
                                                </div>
                                            </div>
                                            
                                        </dd>
                                    </dl>
                                    `;
                            $(proHtml).appendTo($(".toPayPro"));
                        } else {
                            for (var j = 0; j < $(".toPayPro dl").size(); j++) {
                                if (arrPro[i].shopName == $(".toPayPro dl").eq(j).find("dt b a").html()) {
                                    var cookieProImg = arrPro[i].proImg;
                                    cookieProImg = cookieProImg.replace("_t", "");
                                    if (arrPro[i].division == "undefined" || !arrPro[i].division) {
                                        arrPro[i].division = "";

                                        if (arrPro[i].soleType == $(".proList span p").eq(1).html() && cookieProImg == $(".proList img").attr("src")) {
                                            var qty1 = parseInt($(".proList .qty em").html()) + parseInt(arrPro[i].num);
                                            $(".proList .qty em").html(qty1);
                                        } else {
                                            var proImg_m = arrPro[i].proImg;
                                            proImg_m = proImg_m.replace("_t", "");
                                            proHtml = `
                                            <div class="proList">
                                                <input type="checkbox">
                                                <img src="${proImg_m}" alt="">
                                                <div class="proName">
                                                    <a href="">${res[arrPro[i].name].title}</a>
                                                </div>
                                                <span>
                                                    <p>${arrPro[i].division}</p>
                                                    <p>${arrPro[i].soleType}</p>
                                                </span>
                                                <div class="price">
                                                    ￥<i>${res[arrPro[i].name].price}</i>
                                                </div>
                                                <div class="qty">
                                                    <div class="reduceQty">-</div>
                                                    <em>${arrPro[i].num}</em>
                                                    <div class="addQty">+</div>
                                                </div>
                                                <div class="totalOfPro">
                                                    ￥<b>0.00</b>
                                                </div>
                                                <div class="op">
                                                    <a href="">移入收藏夹</a>
                                                    <a class="deletePro" href="">删除</a>
                                                </div>
                                            </div>
                                                            `;
                                            $(proHtml).appendTo($(".toPayPro dl").eq(j).find("dd"));
                                        }
                                    } else {
                                        var cookieProImg = arrPro[i].proImg;
                                        cookieProImg = cookieProImg.replace("_t", "");
                                        if (arrPro[i].soleType == $(".proList span p").eq(1).html() && cookieProImg == $(".proList img").attr("src") && arrPro[i].division == $(".proList span p").eq(0).html()) {
                                            var qty1 = parseInt($(".proList .qty em").html()) + parseInt(arrPro[i].num);
                                            $(".proList .qty em").html(qty1);
                                        } else {
                                            var proImg_m = arrPro[i].proImg;
                                            proImg_m = proImg_m.replace("_t", "");
                                            proHtml = `
                                            <div class="proList">
                                                <input type="checkbox">
                                                <img src="${proImg_m}" alt="">
                                                <div class="proName">
                                                    <a href="">${res[arrPro[i].name].title}</a>
                                                </div>
                                                <span>
                                                    <p>${arrPro[i].division}</p>
                                                    <p>${arrPro[i].soleType}</p>
                                                </span>
                                                <div class="price">
                                                    ￥<i>${res[arrPro[i].name].price}</i>
                                                </div>
                                                <div class="qty">
                                                    <div class="reduceQty">-</div>
                                                    <em>${arrPro[i].num}</em>
                                                    <div class="addQty">+</div>
                                                </div>
                                                <div class="totalOfPro">
                                                    ￥<b>0.00</b>
                                                </div>
                                                <div class="op">
                                                    <a href="">移入收藏夹</a>
                                                    <a class="deletePro" href="">删除</a>
                                                </div>
                                            </div>
                                                            `;
                                            $(proHtml).appendTo($(".toPayPro dl").eq(j).find("dd"));
                                        }
                                    }

                                    isHasShop = true;
                                }
                                
                            }

                            if (!isHasShop) {
                                if (arrPro[i].division == "undefined" || !arrPro[i].division) {
                                    arrPro[i].division = "";
                                }
                                var proImg_m = arrPro[i].proImg;
                                proImg_m = proImg_m.replace("_t", "");
                                proHtml = `
                                <dl>
                                    <dt>
                                        <input type="checkbox">
                                        <strong>店铺：</strong>
                                        <b><a href="">${arrPro[i].shopName}</a></b>
                                    </dt>
                                    <dd>
                                        <div class="proList">
                                            <input type="checkbox">
                                            <img src="${proImg_m}" alt="">
                                            <div class="proName">
                                                <a href="">${res[arrPro[i].name].title}</a>
                                            </div>
                                            <span>
                                                <p>${arrPro[i].division}</p>
                                                <p>${arrPro[i].soleType}</p>
                                            </span>
                                            <div class="price">
                                                ￥<i>${res[arrPro[i].name].price}</i>
                                            </div>
                                            <div class="qty">
                                                <div class="reduceQty">-</div>
                                                <em>${arrPro[i].num}</em>
                                                <div class="addQty">+</div>
                                            </div>
                                            <div class="totalOfPro">
                                                ￥<b>0.00</b>
                                            </div>
                                            <div class="op">
                                                <a href="">移入收藏夹</a>
                                                <a class="deletePro" href="">删除</a>
                                            </div>
                                        </div>
                                        
                                    </dd>
                                </dl>
                                        `;
                                $(proHtml).appendTo($(".toPayPro"));
                            }
                        }

                    }





                    $(".reduceQty").click(function () {
                        var qty = $(this).closest(".qty").find("em").html();
                        if (qty > 1) {
                            $(this).closest(".qty").find("em").html(--qty);


                            var strPro = $.cookie("products");
                            var arrPro = eval(strPro);
                            var proImg1 = $(this).closest(".proList").find("img").attr("src");
                            var division1 = $(this).closest(".proList").find("span p").eq(0).html();
                            var soleType1 = $(this).closest(".proList").find("span p").eq(1).html();
                            for (var i = 0; i < arrPro.length; i++) {
                                var proImg_t = arrPro[i].proImg;
                                proImg_t = proImg_t.replace("_t", "");
                                if (division1) {
                                    if (proImg_t == proImg1 && arrPro[i].division == division1 && arrPro[i].soleType == soleType1) {
                                        arrPro[i].num = $(this).closest(".qty").find("em").html();
                                    }
                                } else {
                                    if (proImg_t == proImg1 && arrPro[i].soleType == soleType1) {
                                        arrPro[i].num = $(this).closest(".qty").find("em").html();
                                    }
                                }
                            }
                            var strPro = JSON.stringify(arrPro);
                            $.cookie("products", strPro, {
                                expires: 7
                            });
                        }


                    })

                    $(".addQty").click(function () {
                        var qty = $(this).closest(".qty").find("em").html();
                        $(this).closest(".qty").find("em").html(++qty);

                        var strPro = $.cookie("products");
                            var arrPro = eval(strPro);
                            var proImg1 = $(this).closest(".proList").find("img").attr("src");
                            var division1 = $(this).closest(".proList").find("span p").eq(0).html();
                            var soleType1 = $(this).closest(".proList").find("span p").eq(1).html();
                            for (var i = 0; i < arrPro.length; i++) {
                                var proImg_t = arrPro[i].proImg;
                                proImg_t = proImg_t.replace("_t", "");
                                if (division1) {
                                    if (proImg_t == proImg1 && arrPro[i].division == division1 && arrPro[i].soleType == soleType1) {
                                        arrPro[i].num = $(this).closest(".qty").find("em").html();
                                    }
                                } else {
                                    if (proImg_t == proImg1 && arrPro[i].soleType == soleType1) {
                                        arrPro[i].num = $(this).closest(".qty").find("em").html();
                                    }
                                }
                            }
                            var strPro = JSON.stringify(arrPro);
                            $.cookie("products", strPro, {
                                expires: 7
                            });
                    })

                    $(".deletePro").click(function (e) {

                        e.preventDefault();
                        var strPro = $.cookie("products");
                            var arrPro = eval(strPro);
                            var proImg1 = $(this).closest(".proList").find("img").attr("src");
                            var division1 = $(this).closest(".proList").find("span p").eq(0).html();
                            var soleType1 = $(this).closest(".proList").find("span p").eq(1).html();
                            for (var i = 0; i < arrPro.length; i++) {
                                var proImg_t = arrPro[i].proImg;
                                proImg_t = proImg_t.replace("_t", "");
                                if (division1) {
                                    if (proImg_t == proImg1 && arrPro[i].division == division1 && arrPro[i].soleType == soleType1) {
                                        arrPro.splice(i, 1);
                                    }
                                } else {
                                    if (proImg_t == proImg1 && arrPro[i].soleType == soleType1) {
                                        arrPro.splice(i, 1);
                                    }
                                }
                            }
                            var strPro = JSON.stringify(arrPro);
                            $.cookie("products", strPro, {
                                expires: 7
                            });



                        if ($(this).closest("dl").find(".proList").size() == 1) {
                            $(this).closest("dl").remove();
                        }
                        $(this).closest(".proList").remove();

                    })

                    // 页面加载价格
                    allProToal();

                    function allProToal() {
                        for (var i = 0; i < $(".toPayPro dl").size(); i++) {
                            var proTotal = 0.00;
                            for (var j = 0; j < $(".toPayPro dl").eq(i).find(".proList").size(); j++) {
                                proTotal = parseFloat($(".toPayPro dl").eq(i).find(".proList").eq(j).find(".price i").html()) * $(".toPayPro dl").eq(i).find(".proList").eq(j).find(".qty em").html();
                                $(".toPayPro dl").eq(i).find(".proList").eq(j).find(".totalOfPro b").html(proTotal);
                            }
                        }
                    }


                    $("#selectAll1").click(function () {
                        if ($("#selectAll1").prop("checked")) {
                            $(".toPayPro input, .totalBox input").prop("checked", "true");
                        } else {
                            $(".toPayPro input, .totalBox input").removeAttr("checked");
                        }
                    })

                    $("#selectAll2").click(function () {
                        if ($("#selectAll2").prop("checked")) {
                            $(".toPayPro input, table input").prop("checked", "true");
                        } else {
                            $(".toPayPro input, table input").removeAttr("checked");
                        }
                    })

                    $(".toPayPro dt input").click(function () {
                        if ($(this).prop("checked")) {
                            $(this).closest("dl").find("dd input").prop("checked", "true");
                        } else {
                            $(this).closest("dl").find("dd input").removeAttr("checked");
                        }
                    })

                    $(".toPayPro input,.totalBox input, table input, .toPayPro .qty div, .deletePro").click(function () {
                        allProToal();
                        var allTotal = 0.00;
                        var proCount = 0;
                        for (var i = 0; i < $(".toPayPro dl").size(); i++) {
                            for (var j = 0; j < $(".toPayPro dl").eq(i).find(".proList").size(); j++) {
                                if ($(".toPayPro dl").eq(i).find(".proList").eq(j).find("input").prop("checked")) {
                                    allTotal += parseFloat($(".toPayPro dl").eq(i).find(".proList").eq(j).find(".totalOfPro b").html());
                                    proCount += parseInt($(".toPayPro dl").eq(i).find(".proList").eq(j).find(".qty em").html());
                                }
                            }
                            // $(".totalBox .right span strong").html(allTotal);
                        }
                        $(".totalBox span b strong").html(allTotal);
                        $(".total1 b").html(allTotal);
                        $(".totalBox span i em").html(proCount);
                        if (proCount != 0) {
                            $(".totalBox .total").css("backgroundColor", "#f40").removeAttr("disabled");
                            $(".total1 input").css({"backgroundColor" : "#f40", "cursor" : "default"})
                        } else {
                            $(".totalBox .total").css("backgroundColor", "#B0B0B0").attr("disabled", "true");
                            $(".total1 input").css({"backgroundColor" : "#aaa", "cursor" : "not-allowed"})
                        }
                    })

                },
                error: function (msg) {
                    alert(msg);
                }
            })




        })
    }
    return {
        order: main
    }
})