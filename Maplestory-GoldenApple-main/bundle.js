/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("//element\r\nconst buyBtn = document.getElementById(\"buyBtn\"),\r\n    goldboxBtn = document.getElementById(\"goldboxBtn\"),\r\n    openBtn = document.getElementById(\"openBtn\"),\r\n    openboxBtn = document.getElementById(\"openboxBtn\"),\r\n    blackchipBtn = document.getElementById(\"blackchipBtn\"),\r\n    resetBtn = document.getElementById(\"resetBtn\"),\r\n    drawallBtn = document.getElementById(\"drawallBtn\"),\r\n    /* --Props Label-- */\r\n    applesText = document.getElementById(\"apples\"),\r\n    applechipsText = document.getElementById(\"appleChips\"),\r\n    blackchipsText = document.getElementById(\"blackChips\"),\r\n    goldboxText = document.getElementById(\"goldBox\"),\r\n    frenzytotemText = document.getElementById(\"FrenzyTotem\"),\r\n    gourdText = document.getElementById(\"gourd\"),\r\n    countText = document.getElementById(\"count\"),\r\n    boxcountText = document.getElementById(\"boxCount\"),\r\n    blackchips1Text = document.getElementById(\"blackchips1\"),\r\n    blackchips2Text = document.getElementById(\"blackchips2\"),\r\n    blackchips3Text = document.getElementById(\"blackchips3\"),\r\n    blackchips4Text = document.getElementById(\"blackchips4\"),\r\n    blackchips5Text = document.getElementById(\"blackchips5\"),\r\n    blackchips6Text = document.getElementById(\"blackchips6\"),\r\n    blackchips7Text = document.getElementById(\"blackchips7\"),\r\n    blackchips8Text = document.getElementById(\"blackchips8\"),\r\n    blackchips9Text = document.getElementById(\"blackchips9\"),\r\n    blackchips10Text = document.getElementById(\"blackchips10\"),\r\n    spendText = document.getElementById(\"spend\"),\r\n    /* --廣頻-- */\r\n    prizeText = document.getElementById(\"prize\");\r\n\r\n//variable\r\nlet apples = 0,\r\n    appleChips = 0,\r\n    blackChips = 0,\r\n    goldBox = 0,\r\n    frenzyTotem = 0,\r\n    gourd = 0,\r\n    count = 0,\r\n    boxCount = 0,\r\n    textId = 0,//移除捲軸溢出標籤的id\r\n    spend = 0,//蘋果購買花費\r\n    /* --漆黑飾品數-- */\r\n    blackchips1 = 0,\r\n    blackchips2 = 0,\r\n    blackchips3 = 0,\r\n    blackchips4 = 0,\r\n    blackchips5 = 0,\r\n    blackchips6 = 0,\r\n    blackchips7 = 0,\r\n    blackchips8 = 0,\r\n    blackchips9 = 0,\r\n    blackchips10 = 0,\r\n    tableData = {};\r\n\r\n\r\n//載入後優先取得json\r\nwindow.onload = () => {\r\n    getJSON();\r\n    alert(\"小技巧提醒：當點擊『開抽蘋果』按鈕後，可以長按Enter高速水溝。\\n ＃另外補充了『重置』及『一鍵水溝』，請小心服用。\");\r\n}\r\n//fetch取得本地json\r\nlet getJSON = () => {\r\n    fetch(\"./public/data/prizeData.json\").then((res) => {\r\n        return res.json();\r\n    }).then((data) => {\r\n        tableData = data;\r\n    }).catch((err) => {\r\n        console.log(\"getJSON error\");\r\n    })\r\n}\r\n\r\n//使滾動條焦點在底部\r\nfunction scrollBar(){\r\n    prizeText.scrollTop = prizeText.scrollHeight;\r\n    // console.log(\"prizeText.scrollHeight : \"+prizeText.scrollHeight)\r\n    // console.log(\"prizeText.scrollTop : \"+prizeText.scrollTop)\r\n}\r\n\r\nbuyBtn.addEventListener(\"click\", () => {\r\n    apples += 35;\r\n    spend += 1890;\r\n    // console.log(\"買了 \"+apples+\" 個蘋果\");\r\n    applesText.innerHTML = apples;\r\n    spendText.innerHTML = spend;\r\n});\r\n//重置\r\nresetBtn.addEventListener(\"click\", () => {\r\n    prizeText.innerHTML = \"\";\r\n    apples = 0;\r\n    appleChips = 0;\r\n    blackChips = 0;\r\n    goldBox = 0;\r\n    frenzyTotem = 0;\r\n    gourd = 0;\r\n    count = 0;\r\n    boxCount = 0;\r\n    spend = 0;\r\n    blackchips1 = 0;\r\n    blackchips2 = 0;\r\n    blackchips3 = 0;\r\n    blackchips4 = 0;\r\n    blackchips5 = 0;\r\n    blackchips6 = 0;\r\n    blackchips7 = 0;\r\n    blackchips8 = 0;\r\n    blackchips9 = 0;\r\n    blackchips10 = 0;\r\n    applesText.innerHTML = apples;\r\n    applechipsText.innerHTML = appleChips;\r\n    blackchipsText.innerHTML = blackChips;\r\n    goldboxText.innerHTML = goldBox;\r\n    gourdText.innerHTML = gourd;\r\n    frenzytotemText.innerHTML = frenzyTotem;\r\n    countText.innerHTML = count;\r\n    boxcountText.innerHTML = boxCount;\r\n    spendText.innerHTML = spend;\r\n    blackchips1Text.innerHTML = blackchips1;\r\n    blackchips2Text.innerHTML = blackchips2;\r\n    blackchips3Text.innerHTML = blackchips3;\r\n    blackchips4Text.innerHTML = blackchips4;\r\n    blackchips5Text.innerHTML = blackchips5;\r\n    blackchips6Text.innerHTML = blackchips6;\r\n    blackchips7Text.innerHTML = blackchips7;\r\n    blackchips8Text.innerHTML = blackchips8;\r\n    blackchips9Text.innerHTML = blackchips9;\r\n    blackchips10Text.innerHTML = blackchips10;\r\n});\r\n\r\nopenBtn.addEventListener(\"click\", () => {\r\n    if(apples === 0){\r\n        alert(\"黃金蘋果數量不足，請確認數量是否足夠。\");\r\n    }else{\r\n        prizeText.focus;\r\n        prizeDraw(0);\r\n        console.log(\"抽獎進行\"+count+\"次，剩\"+apples);\r\n        applesText.innerHTML = apples;\r\n        applechipsText.innerHTML = appleChips;\r\n        blackchipsText.innerHTML = blackChips;\r\n        gourdText.innerHTML = gourd;\r\n        frenzytotemText.innerHTML = frenzyTotem;\r\n        countText.innerHTML = count;\r\n        removeText();\r\n        scrollBar();\r\n    }\r\n});\r\n\r\n//抽蘋果開獎\r\nfunction prizeDraw(dontshow){\r\n    apples -= 1;\r\n    appleChips += 1;\r\n    count += 1;\r\n    //100.00%\r\n    let probability = Math.random();\r\n    let total = 0;\r\n    for (let i = 0; i < tableData.apple.length; i++) {\r\n        let prize = tableData.apple[i];\r\n        if (probability >= total && probability <= total + prize.p) {\r\n            // yes, it's in range!\r\n            let showWithColor = 1;\r\n            switch (prize.name) {\r\n                case \"輪迴碑石\":\r\n                    alert(\"恭喜從黃金蘋果機獲得【輪迴碑石】！ 第\"+count+\"抽\");\r\n                    frenzyTotem += 1;\r\n                    break;\r\n                case \"漆黑的BOSS飾品碎片\":\r\n                    blackChips += 1;\r\n                    break;\r\n                case \"神秘冥界武器變換箱\":\r\n                    break;\r\n                case \"神秘冥界防具變換箱\":\r\n                    break;\r\n                case \"星力16星強化卷軸\":\r\n                    break;\r\n                case \"星力15星強化卷軸\":\r\n                    break;\r\n                case \"星力14星強化卷軸\":\r\n                    break;\r\n                case \"鈦之心\":\r\n                    break;\r\n                case \"精靈之心\":\r\n                    break;\r\n                case \"睿智葫蘆\":\r\n                    showWithColor = 0;\r\n                    gourd += 1;\r\n                    break;\r\n                default:\r\n                    showWithColor = 0;\r\n                    break;\r\n            }\r\n            if(dontshow == 0) {\r\n                if(showWithColor) {\r\n                    prizeText.innerHTML += `<h6 class=\"appleBigprizeText\" id=\"Id${textId+=1}\">恭喜\"你\"從黃金蘋果機獲得<span class=\"textPrize\">${prize.name}</span>。</h6>`;\r\n                } else {\r\n                    prizeText.innerHTML += `<h6 class=\"appleText\" id=\"Id${textId+=1}\">已獲得<span class=\"textPrize\">${prize.name}</span>道具 1 個。</h6>`;\r\n                }\r\n            }\r\n            break;\r\n        } else {\r\n            // not in range, going to next loop\r\n            total = total + prize.p;\r\n        }\r\n    }\r\n}\r\n\r\n//一鍵抽\r\ndrawallBtn.addEventListener(\"click\", () => {\r\n    let maxShowLines = 30;\r\n    if(apples === 0){\r\n        alert(\"黃金蘋果數量不足，請確認數量是否足夠。\");\r\n    }else{\r\n        alert(\"抽取較大的量需要時間計算，請稍等一下『廣頻』及『道具欄』更新。\");\r\n        let k = apples;\r\n        for (let j=0; j<k; j++){\r\n            if(k - j <= maxShowLines) {\r\n                prizeDraw(0);\r\n            } else {\r\n                prizeDraw(1);\t\t\t\t\r\n            }\r\n            removeText();\r\n        }\r\n        applesText.innerHTML = apples;\r\n        applechipsText.innerHTML = appleChips;\r\n        blackchipsText.innerHTML = blackChips;\r\n        gourdText.innerHTML = gourd;\r\n        frenzytotemText.innerHTML = frenzyTotem;\r\n        countText.innerHTML = count;\r\n        scrollBar();\r\n    }\r\n});\r\n\r\ngoldboxBtn.addEventListener(\"click\", () => {\r\n    if(appleChips === 0 || appleChips < 100){\r\n        alert(\"黃金蘋果碎片數量不足，請確認數量是否足夠。\")\r\n    }else if(appleChips >= 100){\r\n        appleChips -= 100;\r\n        goldBox += 1;\r\n        goldboxText.innerHTML = goldBox;\r\n        applechipsText.innerHTML = appleChips;\r\n    }\r\n});\r\n//幸運的金色箱子開獎\r\nopenboxBtn.addEventListener(\"click\", () => {\r\n    if(goldBox === 0){\r\n        alert(\"幸運的金色寶箱數量不足，請確認數量是否足夠。\");\r\n    }else{\r\n        let probability =Math.random();\r\n\r\n        let total = 0;\r\n        for (let i = 0; i < tableData.box.length; i++) {\r\n            let prize = tableData.box[i];\r\n            if (probability >= total && probability <= total + prize.p) {\r\n                // yes, it's in range!\r\n                prizeText.innerHTML += `<h6 class=\"goldboxText\" id=\"Id${textId+=1}\">恭喜\"你\"從幸運的金色箱子機獲得<span class=\"textPrize\">【${prize.name}】</span>。</h6>`;\r\n                switch (prize.name) {\r\n                    case \"輪迴碑石\":\r\n                        alert(\"恭喜從黃金蘋果機獲得【輪迴碑石】！\");\r\n                        frenzyTotem += 1;\r\n                        break;\r\n                    case \"漆黑的BOSS碎片*20\":\r\n                        blackChips += 20;\r\n                        break;\r\n                    case \"漆黑的BOSS碎片*15\":\r\n                        blackChips += 15;\r\n                        break;\r\n                    case \"漆黑的BOSS碎片*10\":\r\n                        blackChips += 10;\r\n                        break;\r\n                    default:\r\n                        break;\r\n                }\r\n                break;\r\n            } else {\r\n                // not in range, going to next loop\r\n                total = total + prize.p;\r\n            }\r\n        }\r\n\r\n        boxCount += 1;\r\n        goldBox -= 1;\r\n        blackchipsText.innerHTML = blackChips;\r\n        boxcountText.innerHTML = boxCount;\r\n        goldboxText.innerHTML = goldBox;\r\n        gourdText.innerHTML = gourd;\r\n        frenzytotemText.innerHTML = frenzyTotem;\r\n        removeText();\r\n        scrollBar();\r\n    }\r\n});\r\n//兌換漆黑碎片\r\nblackchipBtn.addEventListener(\"click\", () => {\r\n    if(blackChips === 0 || blackChips < 50){\r\n        alert(\"漆黑的BOSS飾品碎片數量不足，請確認數量是否足夠。\");\r\n    }else{\r\n        //漆黑的boss飾品機率相同，取隨機\r\n        blackChips -= 50;\r\n        let blackchipsPLength = tableData.blackchipsPrize.length-1\r\n        let blackchipsP = Math.round(Math.random() * blackchipsPLength);\r\n        switch(tableData.blackchipsPrize[blackchipsP].name){\r\n            case \"口紅控制器標誌\":\r\n                blackchips1 += 1;\r\n                break;\r\n            case \"附有魔力的眼罩\":\r\n                blackchips2 += 1;\r\n                break;\r\n            case \"夢幻的腰帶\":\r\n                blackchips3 += 1;\r\n                break;\r\n            case \"苦痛的根源\":\r\n                blackchips4 += 1;\r\n                break;\r\n            case \"巨大的恐怖\":\r\n                blackchips5 += 1;\r\n                break;\r\n            case \"指揮官力量耳環\":\r\n                blackchips6 += 1;\r\n                break;\r\n            case \"創世的胸章\":\r\n                blackchips7 += 1;\r\n                break;\r\n            case \"黑心\":\r\n                blackchips8 += 1;\r\n                break;\r\n            case \"受詛咒的魔導書選擇箱\":\r\n                blackchips9 += 1;\r\n                break;\r\n            case \"米特拉的憤怒選擇箱\":\r\n                blackchips10 += 1;\r\n                break\r\n            default:\r\n                break;\r\n        }\r\n        // console.log(\"漆黑飾品獎勵為：\" + tableData.blackchipsPrize[blackchipsP].name);\r\n        prizeText.innerHTML += `<h6 class=\"blackchipsText\" id=\"Id${textId+=1}\">從漆黑的BOSS飾品碎片中獲得<span class=\"textPrize\">${tableData.blackchipsPrize[blackchipsP].name}</span>了。</h6>`;\r\n        removeText();\r\n        scrollBar();\r\n    }\r\n    blackchipsText.innerHTML = blackChips;\r\n    /* 漆黑飾品 */\r\n    blackchips1Text.innerHTML = blackchips1;\r\n    blackchips2Text.innerHTML = blackchips2;\r\n    blackchips3Text.innerHTML = blackchips3;\r\n    blackchips4Text.innerHTML = blackchips4;\r\n    blackchips5Text.innerHTML = blackchips5;\r\n    blackchips6Text.innerHTML = blackchips6;\r\n    blackchips7Text.innerHTML = blackchips7;\r\n    blackchips8Text.innerHTML = blackchips8;\r\n    blackchips9Text.innerHTML = blackchips9;\r\n    blackchips10Text.innerHTML = blackchips10;\r\n});\r\n//捲軸範圍超過scrollHeight時移除溢出的標籤\r\nfunction removeText(){\r\n    if(prizeText.scrollHeight > 1921){\r\n        let removeId = textId-100\r\n        document.getElementById(\"Id\"+removeId).remove();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://goldenapple/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;