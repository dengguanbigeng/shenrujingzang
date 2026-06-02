// special-pinyin.js
// 特殊字拼音 / 注音参考表
// 原则：普通字走主程序 pinyin-pro；疑难字、咒语字、输入法易混字走本表。

(function () {
    const SPECIAL_PINYIN = {
        '𩑔': { display: 'ku', zhuyin: 'ㄎㄨ' },
        '𫖪': { display: 'ku', zhuyin: 'ㄎㄨ' },
        '裓': { display: 'ge', zhuyin: 'ㄍㄜ' },
        '犍': { display: 'qian', zhuyin: 'ㄑㄧㄢ' },
        '阇': { display: 'she', zhuyin: 'ㄕㄜ' },
        '伽': { display: 'qie', zhuyin: 'ㄑㄧㄝ' },
        '那': { display: 'na', zhuyin: 'ㄋㄚ' },
        '攞': { display: 'luo', zhuyin: 'ㄌㄨㄛ' },
        '娑': { display: 'suo', zhuyin: 'ㄙㄨㄛ' },
        '诃': { display: 'he', zhuyin: 'ㄏㄜ' },
        '𤙖': { display: 'xin', zhuyin: 'ㄒㄧㄣ' },
        '𤚥': { display: 'mai', zhuyin: 'ㄇㄞ' },
        '𠼝': { display: 'li', zhuyin: 'ㄌㄧ' },
        '𡺲': { display: 'jun', zhuyin: 'ㄐㄩㄣ' },
        '𪗇': { display: 'qi', zhuyin: 'ㄑㄧ' },
        '𦟛': { display: 'chong', zhuyin: 'ㄔㄨㄥ' },
        '𮊴': { display: 'shan', zhuyin: 'ㄕㄢ' },  
        '𣮿': { display: 'zhan', zhuyin: 'ㄓㄢ' },
        '𠷐': { display: 'heng jing jiang', zhuyin: 'ㄏㄥ ㄐㄧㄥ ㄐㄧㄤ' },
        '𠻬': { display: 'tu', zhuyin: 'ㄊㄨ' },
        '𧄼': { display: 'teng deng', zhuyin: 'ㄊㄥ ㄉㄥ' },
        '般': { display: 'bo ban', zhuyin: 'ㄅㄛ ㄅㄢ' },
        '𨍮': { display: 'ge li', zhuyin: 'ㄍㄜ ㄌㄧ' },
        '𧜟': { display: 'yi', zhuyin: 'ㄧ' },
        '𧂐': { display: 'zi', zhuyin: 'ㄗ' },
        '囕': { display: 'lan', zhuyin: 'ㄌㄢ' },
        '㘈': { display: 'yi', zhuyin: 'ㄧ' },
        '𭋺': { display: 'li', zhuyin: 'ㄌㄧ' },
        '㘑': { display: 'li', zhuyin: 'ㄌㄧ' },
        '𣢁': { display: 'xi', zhuyin: 'ㄒㄧ' },
        '㕧': { display: 'xi', zhuyin: 'ㄒㄧ' },
        '䂎': { display: 'zuan', zhuyin: 'ㄗㄨㄢ' },
        '𥎞': { display: 'zuan', zhuyin: 'ㄗㄨㄢ' },
        '誐': { display: 'e / ga ye', zhuyin: 'ㄟ / ㄍㄚ ㄧㄝ' },
        '蘖': { display: 'nie / ga', zhuyin: 'ㄋㄧㄝ / ㄍㄚ' },
        '𩕳': { display: 'ning', zhuyin: 'ㄋㄧㄥ' },
        '鹐': { display: 'qian/dam', zhuyin: 'ㄑㄧㄢ/ㄉㄚ' },
        '𭉆': { display: 'haen/ge', zhuyin: '𭉆/ㄍㄜ' },
        '𠆙': { display: 'die', zhuyin: 'ㄉㄧㄝ' },
        '𭋸': { display: 'li', zhuyin: 'ㄌㄧ' },
        '鑁': { display: 'zong/wan', zhuyin: 'ㄗㄨㄥ/ㄨㄢ' },
        '𪘜': { display: 'zhai/da', zhuyin: 'ㄓㄞ/ㄉㄚ' },
        '𪘨': { display: 'zhai/da', zhuyin: 'ㄓㄞ/ㄉㄚ' },
        '𭈗': { display: 'la', zhuyin: 'ㄌㄚ' },
        '𠿒': { display: 'he', zhuyin: 'ㄏㄜ' },
        '𪍿': { display: 'kuang', zhuyin: 'ㄎㄨㄤ' },
        '䵃': { display: 'kuang', zhuyin: 'ㄎㄨㄤ' },
        '𪢐': { display: 'lai', zhuyin: 'ㄌㄞ' },
        '𡃤': { display: 'lai', zhuyin: 'ㄌㄞ' },
        '𠸪': { display: 'luo', zhuyin: 'ㄌㄨㄛ' },
        '㘓': { display: 'lan', zhuyin: 'ㄌㄢ' },
        '䫂': { display: 'duo', zhuyin: 'ㄉㄨㄛ' },
        '𪙁': { display: 'zha', zhuyin: 'ㄓㄚ' },
        '㘁': { display: 'yi', zhuyin: 'ㄧ' },
        '䶩': { display: 'ji', zhuyin: 'ㄐㄧ' },
        '㔸': { display: 'ti', zhuyin: 'ㄊㄧ' },
        '𠥶': { display: 'ti', zhuyin: 'ㄊㄧ' },



        // 咒语字：优先照顾输入法，不误导抄经者。
        '嚩': {
            display: 'mo / po〔wa〕',
            zhuyin: 'ㄇㄛ / ㄆㄛ〔咒音 ㄨㄚ〕'
        }
    };

    function registerSpecialPinyin(map) {
        if (!map || typeof map !== "object") return;

        Object.keys(map).forEach(char => {
            const item = map[char];

            if (!item || typeof item !== "object") return;

            SPECIAL_PINYIN[char] = {
                display: item.display || "",
                zhuyin: item.zhuyin || "",
                note: item.note || "",
                type: item.type || ""
            };
        });
    }

    function warnIfMissing(char) {
        if (!char) return false;

        if (!SPECIAL_PINYIN[char]) {
            console.warn("⚠️ 特殊拼音表未收录：", char);
            return true;
        }

        return false;
    }

    window.SpecialPinyin = {
        get(char) {
            return SPECIAL_PINYIN[char] || null;
        },

        has(char) {
            return Object.prototype.hasOwnProperty.call(SPECIAL_PINYIN, char);
        },

        getDisplay(char) {
            return SPECIAL_PINYIN[char]?.display || "";
        },

        getZhuyin(char) {
            return SPECIAL_PINYIN[char]?.zhuyin || "";
        },

        register(map) {
            registerSpecialPinyin(map);
        },

        warnIfMissing(char) {
            return warnIfMissing(char);
        },

        all() {
            return SPECIAL_PINYIN;
        }
    };

    console.log("✅ special-pinyin.js 已加载，特殊字数量：", Object.keys(SPECIAL_PINYIN).length);
})();