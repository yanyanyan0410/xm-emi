import actions from './actions'
import mutations from './mutations'
import getters from './getters'


export default{
    state(){
        return{
            molecules:[
                {
                    id:'m1',
                    compoundName:['benzene','1-3-5-cyclohexatriene','benzol','苯'],
                    CAS_registryNumber:'71-43-2',
                    molecularFormula:'C6H6',
                    smiles:'',
                    structuralFormula:'https://cn.bing.com/images/search?view=detailV2&ccid=RcxVJ8wr&id=17D8C2A4155D3BF1B9EABDAB78A70C4692B18DDC&thid=OIP.RcxVJ8wrUyuhXIbkqMwDHQHaEl&mediaurl=https%3a%2f%2fts1.cn.mm.bing.net%2fth%2fid%2fR-C.45cc5527cc2b532ba15c86e4a8cc031d%3frik%3d3I2xkkYMp3irvQ%26riu%3dhttp%253a%252f%252fjsdraw.chem960.com%252fcasimg%252f100%252fbk7qfvvrppehqwefsubol6vwee.png%26ehk%3d%252fnjpSLs9WHHJW0MXL34V9%252fMyKDjq8YlLPjaS7B9lT%252bE%253d%26risl%3d%26pid%3dImgRaw%26r%3d0%26sres%3d1%26sresct%3d1%26srh%3d799%26srw%3d1290&exph=310&expw=500&q=%e8%8b%af&simid=608055322500468985&FORM=IRPRST&ck=8DF13FDDCFB0DF55D3191FD42518DB4B&selectedIndex=2&ajaxhist=0&ajaxserp=0',
                    electrochemistry:{
                        oneDimensionHistogram:'https://cn.bing.com/images/search?view=detailV2&ccid=RcxVJ8wr&id=17D8C2A4155D3BF1B9EABDAB78A70C4692B18DDC&thid=OIP.RcxVJ8wrUyuhXIbkqMwDHQHaEl&mediaurl=https%3a%2f%2fts1.cn.mm.bing.net%2fth%2fid%2fR-C.45cc5527cc2b532ba15c86e4a8cc031d%3frik%3d3I2xkkYMp3irvQ%26riu%3dhttp%253a%252f%252fjsdraw.chem960.com%252fcasimg%252f100%252fbk7qfvvrppehqwefsubol6vwee.png%26ehk%3d%252fnjpSLs9WHHJW0MXL34V9%252fMyKDjq8YlLPjaS7B9lT%252bE%253d%26risl%3d%26pid%3dImgRaw%26r%3d0%26sres%3d1%26sresct%3d1%26srh%3d799%26srw%3d1290&exph=310&expw=500&q=%e8%8b%af&simid=608055322500468985&FORM=IRPRST&ck=8DF13FDDCFB0DF55D3191FD42518DB4B&selectedIndex=2&ajaxhist=0&ajaxserp=0',
                        twoDimensionHistogram:'https://cn.bing.com/images/search?view=detailV2&ccid=RcxVJ8wr&id=17D8C2A4155D3BF1B9EABDAB78A70C4692B18DDC&thid=OIP.RcxVJ8wrUyuhXIbkqMwDHQHaEl&mediaurl=https%3a%2f%2fts1.cn.mm.bing.net%2fth%2fid%2fR-C.45cc5527cc2b532ba15c86e4a8cc031d%3frik%3d3I2xkkYMp3irvQ%26riu%3dhttp%253a%252f%252fjsdraw.chem960.com%252fcasimg%252f100%252fbk7qfvvrppehqwefsubol6vwee.png%26ehk%3d%252fnjpSLs9WHHJW0MXL34V9%252fMyKDjq8YlLPjaS7B9lT%252bE%253d%26risl%3d%26pid%3dImgRaw%26r%3d0%26sres%3d1%26sresct%3d1%26srh%3d799%26srw%3d1290&exph=310&expw=500&q=%e8%8b%af&simid=608055322500468985&FORM=IRPRST&ck=8DF13FDDCFB0DF55D3191FD42518DB4B&selectedIndex=2&ajaxhist=0&ajaxserp=0',

                    },
                    spectroscopy:{
                        IR:'https://cn.bing.com/images/search?view=detailV2&ccid=RcxVJ8wr&id=17D8C2A4155D3BF1B9EABDAB78A70C4692B18DDC&thid=OIP.RcxVJ8wrUyuhXIbkqMwDHQHaEl&mediaurl=https%3a%2f%2fts1.cn.mm.bing.net%2fth%2fid%2fR-C.45cc5527cc2b532ba15c86e4a8cc031d%3frik%3d3I2xkkYMp3irvQ%26riu%3dhttp%253a%252f%252fjsdraw.chem960.com%252fcasimg%252f100%252fbk7qfvvrppehqwefsubol6vwee.png%26ehk%3d%252fnjpSLs9WHHJW0MXL34V9%252fMyKDjq8YlLPjaS7B9lT%252bE%253d%26risl%3d%26pid%3dImgRaw%26r%3d0%26sres%3d1%26sresct%3d1%26srh%3d799%26srw%3d1290&exph=310&expw=500&q=%e8%8b%af&simid=608055322500468985&FORM=IRPRST&ck=8DF13FDDCFB0DF55D3191FD42518DB4B&selectedIndex=2&ajaxhist=0&ajaxserp=0',
                        Raman:'https://cn.bing.com/images/search?view=detailV2&ccid=RcxVJ8wr&id=17D8C2A4155D3BF1B9EABDAB78A70C4692B18DDC&thid=OIP.RcxVJ8wrUyuhXIbkqMwDHQHaEl&mediaurl=https%3a%2f%2fts1.cn.mm.bing.net%2fth%2fid%2fR-C.45cc5527cc2b532ba15c86e4a8cc031d%3frik%3d3I2xkkYMp3irvQ%26riu%3dhttp%253a%252f%252fjsdraw.chem960.com%252fcasimg%252f100%252fbk7qfvvrppehqwefsubol6vwee.png%26ehk%3d%252fnjpSLs9WHHJW0MXL34V9%252fMyKDjq8YlLPjaS7B9lT%252bE%253d%26risl%3d%26pid%3dImgRaw%26r%3d0%26sres%3d1%26sresct%3d1%26srh%3d799%26srw%3d1290&exph=310&expw=500&q=%e8%8b%af&simid=608055322500468985&FORM=IRPRST&ck=8DF13FDDCFB0DF55D3191FD42518DB4B&selectedIndex=2&ajaxhist=0&ajaxserp=0',
                        xRay:'https://cn.bing.com/images/search?view=detailV2&ccid=RcxVJ8wr&id=17D8C2A4155D3BF1B9EABDAB78A70C4692B18DDC&thid=OIP.RcxVJ8wrUyuhXIbkqMwDHQHaEl&mediaurl=https%3a%2f%2fts1.cn.mm.bing.net%2fth%2fid%2fR-C.45cc5527cc2b532ba15c86e4a8cc031d%3frik%3d3I2xkkYMp3irvQ%26riu%3dhttp%253a%252f%252fjsdraw.chem960.com%252fcasimg%252f100%252fbk7qfvvrppehqwefsubol6vwee.png%26ehk%3d%252fnjpSLs9WHHJW0MXL34V9%252fMyKDjq8YlLPjaS7B9lT%252bE%253d%26risl%3d%26pid%3dImgRaw%26r%3d0%26sres%3d1%26sresct%3d1%26srh%3d799%26srw%3d1290&exph=310&expw=500&q=%e8%8b%af&simid=608055322500468985&FORM=IRPRST&ck=8DF13FDDCFB0DF55D3191FD42518DB4B&selectedIndex=2&ajaxhist=0&ajaxserp=0'
                    }

                },
                {
                    id:'m2',
                    compoundName:['ethanol','alcohol','乙醇','酒精',],
                    CAS_registryNumber:'64-17-5',
                    molecularFormula:'C2H6O',
                    smiles:'',
                    electrochemistry:{
                        oneDimensionHistogram:'https://cn.bing.com/images/search?view=detailV2&ccid=h%2bYrxRBR&id=FB75A132F642ADBA482A6809694512B53E72F639&thid=OIP.h-YrxRBRLTFu24o_xUtuogHaEl&mediaurl=https%3a%2f%2fts1.cn.mm.bing.net%2fth%2fid%2fR-C.87e62bc510512d316edb8a3fc54b6ea2%3frik%3dOfZyPrUSRWkJaA%26riu%3dhttp%253a%252f%252fjsdraw.chem960.com%252fcasimg%252f100%252fo2nq3a1uxn4aidutyy7glwee.png%26ehk%3deb2oAB5zI%252b6tF990z8s2qT8NTkMSh7z32hzC8stljO4%253d%26risl%3d%26pid%3dImgRaw%26r%3d0%26sres%3d1%26sresct%3d1%26srh%3d799%26srw%3d1290&exph=310&expw=500&q=%e4%b9%99%e9%86%87%e7%bb%93%e6%9e%84%e5%bc%8f%e3%80%81%e3%80%81&simid=608036733883530053&FORM=IRPRST&ck=07E3F2F5F1F7FA36B77D2F04EDEF4554&selectedIndex=1&ajaxhist=0&ajaxserp=0',
                        twoDimensionHistogram:'https://cn.bing.com/images/search?view=detailV2&ccid=h%2bYrxRBR&id=FB75A132F642ADBA482A6809694512B53E72F639&thid=OIP.h-YrxRBRLTFu24o_xUtuogHaEl&mediaurl=https%3a%2f%2fts1.cn.mm.bing.net%2fth%2fid%2fR-C.87e62bc510512d316edb8a3fc54b6ea2%3frik%3dOfZyPrUSRWkJaA%26riu%3dhttp%253a%252f%252fjsdraw.chem960.com%252fcasimg%252f100%252fo2nq3a1uxn4aidutyy7glwee.png%26ehk%3deb2oAB5zI%252b6tF990z8s2qT8NTkMSh7z32hzC8stljO4%253d%26risl%3d%26pid%3dImgRaw%26r%3d0%26sres%3d1%26sresct%3d1%26srh%3d799%26srw%3d1290&exph=310&expw=500&q=%e4%b9%99%e9%86%87%e7%bb%93%e6%9e%84%e5%bc%8f%e3%80%81%e3%80%81&simid=608036733883530053&FORM=IRPRST&ck=07E3F2F5F1F7FA36B77D2F04EDEF4554&selectedIndex=1&ajaxhist=0&ajaxserp=0',

                    },
                    spectroscopy:{
                        IR:'https://cn.bing.com/images/search?view=detailV2&ccid=h%2bYrxRBR&id=FB75A132F642ADBA482A6809694512B53E72F639&thid=OIP.h-YrxRBRLTFu24o_xUtuogHaEl&mediaurl=https%3a%2f%2fts1.cn.mm.bing.net%2fth%2fid%2fR-C.87e62bc510512d316edb8a3fc54b6ea2%3frik%3dOfZyPrUSRWkJaA%26riu%3dhttp%253a%252f%252fjsdraw.chem960.com%252fcasimg%252f100%252fo2nq3a1uxn4aidutyy7glwee.png%26ehk%3deb2oAB5zI%252b6tF990z8s2qT8NTkMSh7z32hzC8stljO4%253d%26risl%3d%26pid%3dImgRaw%26r%3d0%26sres%3d1%26sresct%3d1%26srh%3d799%26srw%3d1290&exph=310&expw=500&q=%e4%b9%99%e9%86%87%e7%bb%93%e6%9e%84%e5%bc%8f%e3%80%81%e3%80%81&simid=608036733883530053&FORM=IRPRST&ck=07E3F2F5F1F7FA36B77D2F04EDEF4554&selectedIndex=1&ajaxhist=0&ajaxserp=0',
                        Raman:'https://cn.bing.com/images/search?view=detailV2&ccid=h%2bYrxRBR&id=FB75A132F642ADBA482A6809694512B53E72F639&thid=OIP.h-YrxRBRLTFu24o_xUtuogHaEl&mediaurl=https%3a%2f%2fts1.cn.mm.bing.net%2fth%2fid%2fR-C.87e62bc510512d316edb8a3fc54b6ea2%3frik%3dOfZyPrUSRWkJaA%26riu%3dhttp%253a%252f%252fjsdraw.chem960.com%252fcasimg%252f100%252fo2nq3a1uxn4aidutyy7glwee.png%26ehk%3deb2oAB5zI%252b6tF990z8s2qT8NTkMSh7z32hzC8stljO4%253d%26risl%3d%26pid%3dImgRaw%26r%3d0%26sres%3d1%26sresct%3d1%26srh%3d799%26srw%3d1290&exph=310&expw=500&q=%e4%b9%99%e9%86%87%e7%bb%93%e6%9e%84%e5%bc%8f%e3%80%81%e3%80%81&simid=608036733883530053&FORM=IRPRST&ck=07E3F2F5F1F7FA36B77D2F04EDEF4554&selectedIndex=1&ajaxhist=0&ajaxserp=0',
                        xRay:'https://cn.bing.com/images/search?view=detailV2&ccid=h%2bYrxRBR&id=FB75A132F642ADBA482A6809694512B53E72F639&thid=OIP.h-YrxRBRLTFu24o_xUtuogHaEl&mediaurl=https%3a%2f%2fts1.cn.mm.bing.net%2fth%2fid%2fR-C.87e62bc510512d316edb8a3fc54b6ea2%3frik%3dOfZyPrUSRWkJaA%26riu%3dhttp%253a%252f%252fjsdraw.chem960.com%252fcasimg%252f100%252fo2nq3a1uxn4aidutyy7glwee.png%26ehk%3deb2oAB5zI%252b6tF990z8s2qT8NTkMSh7z32hzC8stljO4%253d%26risl%3d%26pid%3dImgRaw%26r%3d0%26sres%3d1%26sresct%3d1%26srh%3d799%26srw%3d1290&exph=310&expw=500&q=%e4%b9%99%e9%86%87%e7%bb%93%e6%9e%84%e5%bc%8f%e3%80%81%e3%80%81&simid=608036733883530053&FORM=IRPRST&ck=07E3F2F5F1F7FA36B77D2F04EDEF4554&selectedIndex=1&ajaxhist=0&ajaxserp=0'
                    }

                }
            ]
        }
    },
    mutations,
    actions,
    getters
}


