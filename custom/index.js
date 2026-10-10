(function() { window.PinyinMatch = (function(){"use strict";function n(n,i,a){return(i=function(n){var i=function(n,i){if("object"!=typeof n||!n)return n;var a=n[Symbol.toPrimitive];if(void 0!==a){var u=a.call(n,i||"default");if("object"!=typeof u)return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(n)}(n,"string");return"symbol"==typeof i?i:i+""}(i))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a,n}var i=[],a={},u={};function e(n){for(var i=[],a=n.length,u=[],e=0;a>=e;e++)u.push(!0);return o(0,n,[],i,u),i}function o(n,a,u,e,r){var t=a.length;if(n!==t)for(var g=function(){var t=a.substring(n,h+1),g=!1;if(i.some((function(n){return 0===n.indexOf(t)}))&&!a[h+1]&&r[h+1]){if(1===t.length)u.push(t);else{var f=[];i.forEach((function(n){0===n.indexOf(t)&&f.push(n)})),u.push(f)}g=!0}else-1!==i.indexOf(t)&&r[h+1]&&(u.push(t),g=!0);if(g){var l=e.length;o(h+1,a,u,e,r),e.length===l&&(r[h+1]=!1),u.pop()}},h=n;t>h;h++)g();else e.push(u.join(" "))}function r(n,i,a,u){if(!n)return!1;var e=n.split(" ");return e.forEach((function(n){n.length>0&&u&&e.push(n.charAt(0))})),a?e.some((function(n){return 0===n.indexOf(i)})):-1!==e.indexOf(i)}var t=["lü","lüe","nü","nüe"];function g(i,o){if(!i||!o)return!1;i=i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),o=function(n){var i=n.replace(/\s+/g,"").toLowerCase();return t.some((function(n){return i.includes(n)}))&&(i=i.replace("ü","v")),i.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}(o);var r=i.indexOf(o);if(-1!==r)return[r,r+o.length-1];var g=h(i.split(""),[o.split("")],o);if(g)return g;var f,l,c=function(n){for(var i=[],u=0,e=n.length;e>u;u++){var o=n.charAt(u);i.push(a[o]||o)}return i}(i);return h(c,u[o]||(l=[],e(f=o).forEach((function(n){var i=n.split(" "),a=i.length-1;i[a].indexOf(",")?i[a].split(",").forEach((function(n){i.splice(a,1,n),l.push(JSON.parse(JSON.stringify(i)))})):l.push(i)})),0!==l.length&&l[0].length===f.length||l.push(f.split("")),u=n({},f,l),l),o)}function h(n,i,a){for(var u=0;n.length>u;u++)for(var e=0;i.length>e;e++){var o=i[e],t=o.length,g=t===a.length,h=!0,f=0,l=0,c=0;if(n.length>=t){for(;o.length>f;f++)if(0===f&&" "===n[u+f+l])l+=1,f-=1;else if(" "===n[u+f+c])c+=1,f-=1;else if(!r(n[u+f+c],o[f],!n[u+f+1]||!o[f+1],g)){h=!1;break}if(h)return[u+l,c+u+f-1]}}return!1}var f={match:function(n){var u={},e=["ju","jun","jue","juan","qu","qun","que","xuan","xu","xue","yu","yuan","yue","yun","nve","lve"],o=["lv","lve","nv","nve"];return Object.keys(n).forEach((function(a){if(u[a]=n[a],i.push(a),e.includes(a)){var r=-1!==(t=a).indexOf("u")?t.replace("u","v"):t.replace("v","u");u[r]=n[a],i.push(r)}var t;if(o.includes(a)){var g=a.replace("v","ü");u[g]=n[a],i.push(g)}})),a=function(n){var i={};for(var a in n)for(var u=n[a],e=0,o=u.length;o>e;e++)i[u[e]]=i[u[e]]?i[u[e]]+" "+a:a;return i}(u),g}({a:"阿啊呵腌嗄吖锕",e:"额阿俄恶鹅遏鄂厄饿峨扼娥鳄哦蛾噩愕讹锷垩婀鹗萼谔莪腭锇颚呃阏屙苊轭",ai:"爱埃艾碍癌哀挨矮隘蔼唉皑哎霭捱暧嫒嗳瑷嗌锿砹",ei:"诶",xi:"系西席息希习吸喜细析戏洗悉锡溪惜稀袭夕洒晰昔牺腊烯熙媳栖膝隙犀蹊硒兮熄曦禧嬉玺奚汐徙羲铣淅嘻歙熹矽蟋郗唏皙隰樨浠忾蜥檄郄翕阋鳃舾屣葸螅咭粞觋欷僖醯鼷裼穸饩舄禊诶菥蓰",yi:"祎一以已意议义益亿易医艺食依移衣异伊仪宜射遗疑毅谊亦疫役忆抑尾乙译翼蛇溢椅沂泄逸蚁夷邑怡绎彝裔姨熠贻矣屹颐倚诣胰奕翌疙弈轶蛾驿壹猗臆弋铱旖漪迤佚翊诒怿痍懿饴峄揖眙镒仡黟肄咿翳挹缢呓刈咦嶷羿钇殪荑薏蜴镱噫癔苡悒嗌瘗衤佾埸圯舣酏劓",an:"安案按岸暗鞍氨俺胺铵谙庵黯鹌桉埯犴揞厂广",han:"厂汉韩含旱寒汗涵函喊憾罕焊翰邯撼瀚憨捍酣悍鼾邗颔蚶晗菡旰顸犴焓撖",ang:"昂仰盎肮",ao:"奥澳傲熬凹鳌敖遨鏖袄坳翱嗷拗懊岙螯骜獒鏊艹媪廒聱",wa:"瓦挖娃洼袜蛙凹哇佤娲呙腽",yu:"于与育余预域予遇奥语誉玉鱼雨渔裕愈娱欲吁舆宇羽逾豫郁寓吾狱喻御浴愉禹俞邪榆愚渝尉淤虞屿峪粥驭瑜禺毓钰隅芋熨瘀迂煜昱汩於臾盂聿竽萸妪腴圄谕觎揄龉谀俣馀庾妤瘐鬻欤鹬阈嵛雩鹆圉蜮伛纡窬窳饫蓣狳肀舁蝓燠",niu:"牛纽扭钮拗妞忸狃",o:"哦噢喔",ba:"把八巴拔伯吧坝爸霸罢芭跋扒叭靶疤笆耙鲅粑岜灞钯捌菝魃茇",pa:"怕帕爬扒趴琶啪葩耙杷钯筢",pi:"被批副否皮坏辟啤匹披疲罢僻毗坯脾譬劈媲屁琵邳裨痞癖陂丕枇噼霹吡纰砒铍淠郫埤濞睥芘蚍圮鼙罴蜱疋貔仳庀擗甓陴",bi:"比必币笔毕秘避闭佛辟壁弊彼逼碧鼻臂蔽拂泌璧庇痹毙弼匕鄙陛裨贲敝蓖吡篦纰俾铋毖筚荸薜婢哔跸濞秕荜愎睥妣芘箅髀畀滗狴萆嬖襞舭",bai:"百白败摆伯拜柏佰掰呗擘捭稗",bo:"波博播勃拨薄佛伯玻搏柏泊舶剥渤卜驳簿脖膊簸菠礴箔铂亳钵帛擘饽跛钹趵檗啵鹁擗踣",bei:"北被备倍背杯勃贝辈悲碑臂卑悖惫蓓陂钡狈呗焙碚褙庳鞴孛鹎邶鐾",ban:"办版半班般板颁伴搬斑扮拌扳瓣坂阪绊钣瘢舨癍",pan:"判盘番潘攀盼拚畔胖叛拌蹒磐爿蟠泮袢襻丬",bin:"份宾频滨斌彬濒殡缤鬓槟摈膑玢镔豳髌傧",bang:"帮邦彭旁榜棒膀镑绑傍磅蚌谤梆浜蒡",pang:"旁庞乓磅螃彷滂逄耪胖",beng:"泵崩蚌蹦迸绷甭嘣甏堋",bao:"报保包宝暴胞薄爆炮饱抱堡剥鲍曝葆瀑豹刨褒雹孢苞煲褓趵鸨龅勹",bu:"不部步布补捕堡埔卜埠簿哺怖钚卟瓿逋晡醭钸",pu:"普暴铺浦朴堡葡谱埔扑仆蒲曝瀑溥莆圃璞濮菩蹼匍噗氆攵镨攴镤",mian:"面棉免绵缅勉眠冕娩腼渑湎沔黾宀眄",po:"破繁坡迫颇朴泊婆泼魄粕鄱珀陂叵笸泺皤钋钷",fan:"反范犯繁饭泛翻凡返番贩烦拚帆樊藩矾梵蕃钒幡畈蘩蹯燔",fu:"府服副负富复福夫妇幅付扶父符附腐赴佛浮覆辅傅伏抚赋辐腹弗肤阜袱缚甫氟斧孚敷俯拂俘咐腑孵芙涪釜脯茯馥宓绂讣呋罘麸蝠匐芾蜉跗凫滏蝮驸绋蚨砩桴赙菔呒趺苻拊阝鲋怫稃郛莩幞祓艴黻黼鳆",ben:"本奔苯笨夯贲锛畚坌",feng:"风丰封峰奉凤锋冯逢缝蜂枫疯讽烽俸沣酆砜葑唪",bian:"变便边编遍辩鞭辨贬匾扁卞汴辫砭苄蝙鳊弁窆笾煸褊碥忭缏",pian:"便片篇偏骗翩扁骈胼蹁谝犏缏",zhen:"镇真针圳振震珍阵诊填侦臻贞枕桢赈祯帧甄斟缜箴疹砧榛鸩轸稹溱蓁胗椹朕畛浈",biao:"表标彪镖裱飚膘飙镳婊骠飑杓髟鳔灬瘭",piao:"票朴漂飘嫖瓢剽缥殍瞟骠嘌莩螵",huo:"和活或货获火伙惑霍祸豁嚯藿锪蠖钬耠镬夥灬劐攉",bie:"别鳖憋瘪蹩",min:"民敏闽闵皿泯岷悯珉抿黾缗玟愍苠鳘",fen:"分份纷奋粉氛芬愤粪坟汾焚酚吩忿棼玢鼢瀵偾鲼",bing:"并病兵冰屏饼炳秉丙摒柄槟禀枋邴冫",geng:"更耕颈庚耿梗埂羹哽赓绠鲠",fang:"方放房防访纺芳仿坊妨肪邡舫彷枋鲂匚钫",xian:"现先县见线限显险献鲜洗宪纤陷闲贤仙衔掀咸嫌掺羡弦腺痫娴舷馅酰铣冼涎暹籼锨苋蚬跹岘藓燹鹇氙莶霰跣猃彡祆筅",fou:"不否缶",ca:"拆擦嚓礤",cha:"查察差茶插叉刹茬楂岔诧碴嚓喳姹杈汊衩搽槎镲苴檫馇锸猹",cai:"才采财材菜彩裁蔡猜踩睬",can:"参残餐灿惨蚕掺璨惭粲孱骖黪",shen:"信深参身神什审申甚沈伸慎渗肾绅莘呻婶娠砷蜃哂椹葚吲糁渖诜谂矧胂",cen:"参岑涔",san:"三参散伞叁糁馓毵",cang:"藏仓苍沧舱臧伧",zang:"藏脏葬赃臧奘驵",chen:"称陈沈沉晨琛臣尘辰衬趁忱郴宸谌碜嗔抻榇伧谶龀肜",cao:"草操曹槽糙嘈漕螬艚屮",ce:"策测册侧厕栅恻",ze:"责则泽择侧咋啧仄箦赜笮舴昃迮帻",zhai:"债择齐宅寨侧摘窄斋祭翟砦瘵哜",dao:"到道导岛倒刀盗稻蹈悼捣叨祷焘氘纛刂帱忉",ceng:"层曾蹭噌",zha:"查扎炸诈闸渣咋乍榨楂札栅眨咤柞喳喋铡蚱吒怍砟揸痄哳齄",chai:"差拆柴钗豺侪虿瘥",ci:"次此差词辞刺瓷磁兹慈茨赐祠伺雌疵鹚糍呲粢",zi:"资自子字齐咨滋仔姿紫兹孜淄籽梓鲻渍姊吱秭恣甾孳訾滓锱辎趑龇赀眦缁呲笫谘嵫髭茈粢觜耔",cuo:"措错磋挫搓撮蹉锉厝嵯痤矬瘥脞鹾",chan:"产单阐崭缠掺禅颤铲蝉搀潺蟾馋忏婵孱觇廛谄谗澶骣羼躔蒇冁",shan:"山单善陕闪衫擅汕扇掺珊禅删膳缮赡鄯栅煽姗跚鳝嬗潸讪舢苫疝掸膻钐剡蟮芟埏彡骟",zhan:"展战占站崭粘湛沾瞻颤詹斩盏辗绽毡栈蘸旃谵搌",xin:"新心信辛欣薪馨鑫芯锌忻莘昕衅歆囟忄镡",lian:"联连练廉炼脸莲恋链帘怜涟敛琏镰濂楝鲢殓潋裢裣臁奁莶蠊蔹",chang:"场长厂常偿昌唱畅倡尝肠敞倘猖娼淌裳徜昶怅嫦菖鲳阊伥苌氅惝鬯",zhang:"长张章障涨掌帐胀彰丈仗漳樟账杖璋嶂仉瘴蟑獐幛鄣嫜",chao:"超朝潮炒钞抄巢吵剿绰嘲晁焯耖怊",zhao:"着照招找召朝赵兆昭肇罩钊沼嘲爪诏濯啁棹笊",zhou:"调州周洲舟骤轴昼宙粥皱肘咒帚胄绉纣妯啁诌繇碡籀酎荮",che:"车彻撤尺扯澈掣坼砗屮",ju:"车局据具举且居剧巨聚渠距句拒俱柜菊拘炬桔惧矩鞠驹锯踞咀瞿枸掬沮莒橘飓疽钜趄踽遽琚龃椐苣裾榘狙倨榉苴讵雎锔窭鞫犋屦醵",cheng:"成程城承称盛抢乘诚呈净惩撑澄秤橙骋逞瞠丞晟铛埕塍蛏柽铖酲裎枨",rong:"容荣融绒溶蓉熔戎榕茸冗嵘肜狨蝾",sheng:"生声升胜盛乘圣剩牲甸省绳笙甥嵊晟渑眚",deng:"等登邓灯澄凳瞪蹬噔磴嶝镫簦戥",zhi:"制之治质职只志至指织支值知识直致执置止植纸拓智殖秩旨址滞氏枝芝脂帜汁肢挚稚酯掷峙炙栉侄芷窒咫吱趾痔蜘郅桎雉祉郦陟痣蛭帙枳踯徵胝栀贽祗豸鸷摭轵卮轾彘觯絷跖埴夂黹忮骘膣踬",zheng:"政正证争整征郑丁症挣蒸睁铮筝拯峥怔诤狰徵钲",tang:"堂唐糖汤塘躺趟倘棠烫淌膛搪镗傥螳溏帑羰樘醣螗耥铴瑭",chi:"持吃池迟赤驰尺斥齿翅匙痴耻炽侈弛叱啻坻眙嗤墀哧茌豉敕笞饬踟蚩柢媸魑篪褫彳鸱螭瘛眵傺",shi:"是时实事市十使世施式势视识师史示石食始士失适试什泽室似诗饰殖释驶氏硕逝湿蚀狮誓拾尸匙仕柿矢峙侍噬嗜栅拭嘘屎恃轼虱耆舐莳铈谥炻豕鲥饣螫酾筮埘弑礻蓍鲺贳",qi:"企其起期气七器汽奇齐启旗棋妻弃揭枝歧欺骑契迄亟漆戚岂稽岐琦栖缉琪泣乞砌祁崎绮祺祈凄淇杞脐麒圻憩芪伎俟畦耆葺沏萋骐鳍綦讫蕲屺颀亓碛柒啐汔綮萁嘁蛴槭欹芑桤丌蜞",chuai:"揣踹啜搋膪",tuo:"托脱拓拖妥驼陀沱鸵驮唾椭坨佗砣跎庹柁橐乇铊沲酡鼍箨柝",duo:"多度夺朵躲铎隋咄堕舵垛惰哆踱跺掇剁柁缍沲裰哚隳",xue:"学血雪削薛穴靴谑噱鳕踅泶彐",chong:"重种充冲涌崇虫宠忡憧舂茺铳艟",chou:"筹抽绸酬愁丑臭仇畴稠瞅踌惆俦瘳雠帱",qiu:"求球秋丘邱仇酋裘龟囚遒鳅虬蚯泅楸湫犰逑巯艽俅蝤赇鼽糗",xiu:"修秀休宿袖绣臭朽锈羞嗅岫溴庥馐咻髹鸺貅",chu:"出处础初助除储畜触楚厨雏矗橱锄滁躇怵绌搐刍蜍黜杵蹰亍樗憷楮",tuan:"团揣湍疃抟彖",zhui:"追坠缀揣椎锥赘惴隹骓缒",chuan:"传川船穿串喘椽舛钏遄氚巛舡",zhuan:"专转传赚砖撰篆馔啭颛",yuan:"元员院原源远愿园援圆缘袁怨渊苑宛冤媛猿垣沅塬垸鸳辕鸢瑗圜爰芫鼋橼螈眢箢掾",cuan:"窜攒篡蹿撺爨汆镩",chuang:"创床窗闯幢疮怆",zhuang:"装状庄壮撞妆幢桩奘僮戆",chui:"吹垂锤炊椎陲槌捶棰",chun:"春纯醇淳唇椿蠢鹑朐莼肫蝽",zhun:"准屯淳谆肫窀",cu:"促趋趣粗簇醋卒蹴猝蹙蔟殂徂",dun:"吨顿盾敦蹲墩囤沌钝炖盹遁趸砘礅",qu:"区去取曲趋渠趣驱屈躯衢娶祛瞿岖龋觑朐蛐癯蛆苣阒诎劬蕖蘧氍黢蠼璩麴鸲磲",xu:"需许续须序徐休蓄畜虚吁绪叙旭邪恤墟栩絮圩婿戌胥嘘浒煦酗诩朐盱蓿溆洫顼勖糈砉醑",chuo:"辍绰戳淖啜龊踔辶",zu:"组族足祖租阻卒俎诅镞菹",ji:"济机其技基记计系期际及集级几给积极己纪即继击既激绩急奇吉季齐疾迹鸡剂辑籍寄挤圾冀亟寂暨脊跻肌稽忌饥祭缉棘矶汲畸姬藉瘠骥羁妓讥稷蓟悸嫉岌叽伎鲫诘楫荠戟箕霁嵇觊麂畿玑笈犄芨唧屐髻戢佶偈笄跽蒺乩咭赍嵴虮掎齑殛鲚剞洎丌墼蕺彐芰哜",cong:"从丛匆聪葱囱琮淙枞骢苁璁",zong:"总从综宗纵踪棕粽鬃偬枞腙",cou:"凑辏腠楱",cui:"衰催崔脆翠萃粹摧璀瘁悴淬啐隹毳榱",wei:"为位委未维卫围违威伟危味微唯谓伪慰尾魏韦胃畏帷喂巍萎蔚纬潍尉渭惟薇苇炜圩娓诿玮崴桅偎逶倭猥囗葳隗痿猬涠嵬韪煨艉隹帏闱洧沩隈鲔軎",cun:"村存寸忖皴",zuo:"作做座左坐昨佐琢撮祚柞唑嘬酢怍笮阼胙",zuan:"钻纂攥缵躜",da:"大达打答搭沓瘩惮嗒哒耷鞑靼褡笪怛妲",dai:"大代带待贷毒戴袋歹呆隶逮岱傣棣怠殆黛甙埭诒绐玳呔迨",tai:"台太态泰抬胎汰钛苔薹肽跆邰鲐酞骀炱",ta:"他它她拓塔踏塌榻沓漯獭嗒挞蹋趿遢铊鳎溻闼",dan:"但单石担丹胆旦弹蛋淡诞氮郸耽殚惮儋眈疸澹掸膻啖箪聃萏瘅赕",lu:"路六陆录绿露鲁卢炉鹿禄赂芦庐碌麓颅泸卤潞鹭辘虏璐漉噜戮鲈掳橹轳逯渌蓼撸鸬栌氇胪镥簏舻辂垆",tan:"谈探坦摊弹炭坛滩贪叹谭潭碳毯瘫檀痰袒坍覃忐昙郯澹钽锬",ren:"人任认仁忍韧刃纫饪妊荏稔壬仞轫亻衽",jie:"家结解价界接节她届介阶街借杰洁截姐揭捷劫戒皆竭桔诫楷秸睫藉拮芥诘碣嗟颉蚧孑婕疖桀讦疥偈羯袷哜喈卩鲒骱",yan:"研严验演言眼烟沿延盐炎燕岩宴艳颜殷彦掩淹阎衍铅雁咽厌焰堰砚唁焉晏檐蜒奄俨腌妍谚兖筵焱偃闫嫣鄢湮赝胭琰滟阉魇酽郾恹崦芫剡鼹菸餍埏谳讠厣罨",dang:"当党档荡挡宕砀铛裆凼菪谠",tao:"套讨跳陶涛逃桃萄淘掏滔韬叨洮啕绦饕鼗",tiao:"条调挑跳迢眺苕窕笤佻啁粜髫铫祧龆蜩鲦",te:"特忑忒铽慝",de:"的地得德底锝",dei:"得",di:"的地第提低底抵弟迪递帝敌堤蒂缔滴涤翟娣笛棣荻谛狄邸嘀砥坻诋嫡镝碲骶氐柢籴羝睇觌",ti:"体提题弟替梯踢惕剔蹄棣啼屉剃涕锑倜悌逖嚏荑醍绨鹈缇裼",tui:"推退弟腿褪颓蜕忒煺",you:"有由又优游油友右邮尤忧幼犹诱悠幽佑釉柚铀鱿囿酉攸黝莠猷蝣疣呦蚴莸莜铕宥繇卣牖鼬尢蚰侑",dian:"电点店典奠甸碘淀殿垫颠滇癫巅惦掂癜玷佃踮靛钿簟坫阽",tian:"天田添填甜甸恬腆佃舔钿阗忝殄畋栝掭",zhu:"主术住注助属逐宁著筑驻朱珠祝猪诸柱竹铸株瞩嘱贮煮烛苎褚蛛拄铢洙竺蛀渚伫杼侏澍诛茱箸炷躅翥潴邾槠舳橥丶瘃麈疰",nian:"年念酿辗碾廿捻撵拈蔫鲶埝鲇辇黏",diao:"调掉雕吊钓刁貂凋碉鲷叼铫铞",yao:"要么约药邀摇耀腰遥姚窑瑶咬尧钥谣肴夭侥吆疟妖幺杳舀窕窈曜鹞爻繇徭轺铫鳐崾珧",die:"跌叠蝶迭碟爹谍牒耋佚喋堞瓞鲽垤揲蹀",she:"设社摄涉射折舍蛇拾舌奢慑赦赊佘麝歙畲厍猞揲滠",ye:"业也夜叶射野液冶喝页爷耶邪咽椰烨掖拽曳晔谒腋噎揶靥邺铘揲",xie:"些解协写血叶谢械鞋胁斜携懈契卸谐泄蟹邪歇泻屑挟燮榭蝎撷偕亵楔颉缬邂鲑瀣勰榍薤绁渫廨獬躞",zhe:"喆这者着著浙折哲蔗遮辙辄柘锗褶蜇蛰鹧谪赭摺乇磔螫",ding:"定订顶丁鼎盯钉锭叮仃铤町酊啶碇腚疔玎耵",diu:"丢铥",ting:"听庭停厅廷挺亭艇婷汀铤烃霆町蜓葶梃莛",dong:"动东董冬洞懂冻栋侗咚峒氡恫胴硐垌鸫岽胨",tong:"同通统童痛铜桶桐筒彤侗佟潼捅酮砼瞳恸峒仝嗵僮垌茼",zhong:"中重种众终钟忠仲衷肿踵冢盅蚣忪锺舯螽夂",dou:"都斗读豆抖兜陡逗窦渎蚪痘蔸钭篼",du:"度都独督读毒渡杜堵赌睹肚镀渎笃竺嘟犊妒牍蠹椟黩芏髑",duan:"断段短端锻缎煅椴簖",dui:"对队追敦兑堆碓镦怼憝",rui:"瑞兑锐睿芮蕊蕤蚋枘",yue:"月说约越乐跃兑阅岳粤悦曰钥栎钺樾瀹龠哕刖",tun:"吞屯囤褪豚臀饨暾氽",hui:"会回挥汇惠辉恢徽绘毁慧灰贿卉悔秽溃荟晖彗讳诲珲堕诙蕙晦睢麾烩茴喙桧蛔洄浍虺恚蟪咴隳缋哕",wu:"务物无五武午吴舞伍污乌误亡恶屋晤悟吾雾芜梧勿巫侮坞毋诬呜钨邬捂鹜兀婺妩於戊鹉浯蜈唔骛仵焐芴鋈庑鼯牾怃圬忤痦迕杌寤阢",ya:"亚压雅牙押鸭呀轧涯崖邪芽哑讶鸦娅衙丫蚜碣垭伢氩桠琊揠吖睚痖疋迓岈砑",he:"和合河何核盖贺喝赫荷盒鹤吓呵苛禾菏壑褐涸阂阖劾诃颌嗬貉曷翮纥盍",wo:"我握窝沃卧挝涡斡渥幄蜗喔倭莴龌肟硪",en:"恩摁蒽",n:"嗯唔",er:"而二尔儿耳迩饵洱贰铒珥佴鸸鲕",fa:"发法罚乏伐阀筏砝垡珐",quan:"全权券泉圈拳劝犬铨痊诠荃醛蜷颧绻犭筌鬈悛辁畎",fei:"费非飞肥废菲肺啡沸匪斐蜚妃诽扉翡霏吠绯腓痱芾淝悱狒榧砩鲱篚镄",pei:"配培坏赔佩陪沛裴胚妃霈淠旆帔呸醅辔锫",ping:"平评凭瓶冯屏萍苹乒坪枰娉俜鲆",fo:"佛",hu:"和护户核湖互乎呼胡戏忽虎沪糊壶葫狐蝴弧瑚浒鹄琥扈唬滹惚祜囫斛笏芴醐猢怙唿戽槲觳煳鹕冱瓠虍岵鹱烀轷",ga:"夹咖嘎尬噶旮伽尕钆尜",ge:"个合各革格歌哥盖隔割阁戈葛鸽搁胳舸疙铬骼蛤咯圪镉颌仡硌嗝鬲膈纥袼搿塥哿虼",ha:"哈蛤铪",xia:"下夏峡厦辖霞夹虾狭吓侠暇遐瞎匣瑕唬呷黠硖罅狎瘕柙",gai:"改该盖概溉钙丐芥赅垓陔戤",hai:"海还害孩亥咳骸骇氦嗨胲醢",gan:"干感赶敢甘肝杆赣乾柑尴竿秆橄矸淦苷擀酐绀泔坩旰疳澉",gang:"港钢刚岗纲冈杠缸扛肛罡戆筻",jiang:"将强江港奖讲降疆蒋姜浆匠酱僵桨绛缰犟豇礓洚茳糨耩",hang:"行航杭巷夯吭桁沆绗颃",gong:"工公共供功红贡攻宫巩龚恭拱躬弓汞蚣珙觥肱廾",hong:"红宏洪轰虹鸿弘哄烘泓訇蕻闳讧荭黉薨",guang:"广光逛潢犷胱咣桄",qiong:"穷琼穹邛茕筇跫蛩銎",gao:"高告搞稿膏糕镐皋羔锆杲郜睾诰藁篙缟槁槔",hao:"好号毫豪耗浩郝皓昊皋蒿壕灏嚎濠蚝貉颢嗥薅嚆",li:"理力利立里李历例离励礼丽黎璃厉厘粒莉梨隶栗荔沥犁漓哩狸藜罹篱鲤砺吏澧俐骊溧砾莅锂笠蠡蛎痢雳俪傈醴栎郦俚枥喱逦娌鹂戾砬唳坜疠蜊黧猁鬲粝蓠呖跞疬缡鲡鳢嫠詈悝苈篥轹",jia:"家加价假佳架甲嘉贾驾嫁夹稼钾挟拮迦伽颊浃枷戛荚痂颉镓笳珈岬胛袈郏葭袷瘕铗跏蛱恝哿",luo:"啰落罗络洛逻螺锣骆萝裸漯烙摞骡咯箩珞捋荦硌雒椤镙跞瘰泺脶猡倮蠃",ke:"可科克客刻课颗渴壳柯棵呵坷恪苛咳磕珂稞瞌溘轲窠嗑疴蝌岢铪颏髁蚵缂氪骒钶锞",qia:"卡恰洽掐髂袷咭葜",gei:"给",gen:"根跟亘艮哏茛",hen:"很狠恨痕哏",gou:"构购够句沟狗钩拘勾苟垢枸篝佝媾诟岣彀缑笱鞲觏遘",kou:"口扣寇叩抠佝蔻芤眍筘",gu:"股古顾故固鼓骨估谷贾姑孤雇辜菇沽咕呱锢钴箍汩梏痼崮轱鸪牯蛊诂毂鹘菰罟嘏臌觚瞽蛄酤牿鲴",pai:"牌排派拍迫徘湃俳哌蒎",gua:"括挂瓜刮寡卦呱褂剐胍诖鸹栝呙",tou:"钭投头透偷愉骰亠",guai:"怪拐乖",kuai:"会快块筷脍蒯侩浍郐蒉狯哙",guan:"关管观馆官贯冠惯灌罐莞纶棺斡矜倌鹳鳏盥掼涫",wan:"万完晚湾玩碗顽挽弯蔓丸莞皖宛婉腕蜿惋烷琬畹豌剜纨绾脘菀芄箢",ne:"呢哪呐讷疒",gui:"规贵归轨桂柜圭鬼硅瑰跪龟匮闺诡癸鳜桧皈鲑刽晷傀眭妫炅庋簋刿宄匦",jun:"军均俊君峻菌竣钧骏龟浚隽郡筠皲麇捃",jiong:"窘炯迥炅冂扃",jue:"决绝角觉掘崛诀獗抉爵嚼倔厥蕨攫珏矍蹶谲镢鳜噱桷噘撅橛孓觖劂爝",gun:"滚棍辊衮磙鲧绲丨",hun:"婚混魂浑昏棍珲荤馄诨溷阍",guo:"国过果郭锅裹帼涡椁囗蝈虢聒埚掴猓崞蜾呙馘",hei:"黑嘿嗨",kan:"看刊勘堪坎砍侃嵌槛瞰阚龛戡凵莰",heng:"衡横恒亨哼珩桁蘅",mo:"万没么模末冒莫摩墨默磨摸漠脉膜魔沫陌抹寞蘑摹蓦馍茉嘿谟秣蟆貉嫫镆殁耱嬷麽瘼貊貘",peng:"鹏朋彭膨蓬碰苹棚捧亨烹篷澎抨硼怦砰嘭蟛堋",hou:"后候厚侯猴喉吼逅篌糇骺後鲎瘊堠",hua:"婳化华划话花画滑哗豁骅桦猾铧砉",huai:"怀坏淮徊槐踝",huan:"还环换欢患缓唤焕幻痪桓寰涣宦垸洹浣豢奂郇圜獾鲩鬟萑逭漶锾缳擐",xun:"讯训迅孙寻询循旬巡汛勋逊熏徇浚殉驯鲟薰荀浔洵峋埙巽郇醺恂荨窨蕈曛獯",huang:"黄荒煌皇凰慌晃潢谎惶簧璜恍幌湟蝗磺隍徨遑肓篁鳇蟥癀",nai:"能乃奶耐奈鼐萘氖柰佴艿",luan:"乱卵滦峦鸾栾銮挛孪脔娈",qie:"切且契窃茄砌锲怯伽惬妾趄挈郄箧慊",jian:"建间件见坚检健监减简艰践兼鉴键渐柬剑尖肩舰荐箭浅剪俭碱茧奸歼拣捡煎贱溅槛涧堑笺谏饯锏缄睑謇蹇腱菅翦戬毽笕犍硷鞯牮枧湔鲣囝裥踺搛缣鹣蒹谫僭戋趼楗",nan:"南难男楠喃囡赧腩囝蝻",qian:"前千钱签潜迁欠纤牵浅遣谦乾铅歉黔谴嵌倩钳茜虔堑钎骞阡掮钤扦芊犍荨仟芡悭缱佥愆褰凵肷岍搴箝慊椠",qiang:"强抢疆墙枪腔锵呛羌蔷襁羟跄樯戕嫱戗炝镪锖蜣",xiang:"向项相想乡象响香降像享箱羊祥湘详橡巷翔襄厢镶飨饷缃骧芗庠鲞葙蟓",jiao:"教交较校角觉叫脚缴胶轿郊焦骄浇椒礁佼蕉娇矫搅绞酵剿嚼饺窖跤蛟侥狡姣皎茭峤铰醮鲛湫徼鹪僬噍艽挢敫",zhuo:"着著缴桌卓捉琢灼浊酌拙茁涿镯淖啄濯焯倬擢斫棹诼浞禚",qiao:"桥乔侨巧悄敲俏壳雀瞧翘窍峭锹撬荞跷樵憔鞘橇峤诮谯愀鞒硗劁缲",xiao:"小效销消校晓笑肖削孝萧俏潇硝宵啸嚣霄淆哮筱逍姣箫骁枭哓绡蛸崤枵魈",si:"司四思斯食私死似丝饲寺肆撕泗伺嗣祀厮驷嘶锶俟巳蛳咝耜笥纟糸鸶缌澌姒汜厶兕",kai:"开凯慨岂楷恺揩锴铠忾垲剀锎蒈",jin:"进金今近仅紧尽津斤禁锦劲晋谨筋巾浸襟靳瑾烬缙钅矜觐堇馑荩噤廑妗槿赆衿卺",qin:"亲勤侵秦钦琴禽芹沁寝擒覃噙矜嗪揿溱芩衾廑锓吣檎螓",jing:"经京精境竞景警竟井惊径静劲敬净镜睛晶颈荆兢靖泾憬鲸茎腈菁胫阱旌粳靓痉箐儆迳婧肼刭弪獍",ying:"应营影英景迎映硬盈赢颖婴鹰荧莹樱瑛蝇萦莺颍膺缨瀛楹罂荥萤鹦滢蓥郢茔嘤璎嬴瘿媵撄潆",jiu:"就究九酒久救旧纠舅灸疚揪咎韭玖臼柩赳鸠鹫厩啾阄桕僦鬏",zui:"最罪嘴醉咀蕞觜",juan:"卷捐圈眷娟倦绢隽镌涓鹃鄄蠲狷锩桊",suan:"算酸蒜狻",yun:"员运云允孕蕴韵酝耘晕匀芸陨纭郧筠恽韫郓氲殒愠昀菀狁",qun:"群裙逡麇",ka:"卡喀咖咔咯佧胩",kang:"康抗扛慷炕亢糠伉钪闶",keng:"坑铿吭",kao:"考靠烤拷铐栲尻犒",ken:"肯垦恳啃龈裉",yin:"因引银印音饮阴隐姻殷淫尹荫吟瘾寅茵圻垠鄞湮蚓氤胤龈窨喑铟洇狺夤廴吲霪茚堙",kong:"空控孔恐倥崆箜",ku:"苦库哭酷裤枯窟挎骷堀绔刳喾",kua:"跨夸垮挎胯侉",kui:"亏奎愧魁馈溃匮葵窥盔逵睽馗聩喟夔篑岿喹揆隗傀暌跬蒉愦悝蝰",kuan:"款宽髋",kuang:"况矿框狂旷眶匡筐邝圹哐贶夼诳诓纩",que:"确却缺雀鹊阙瘸榷炔阕悫",kun:"困昆坤捆琨锟鲲醌髡悃阃",kuo:"扩括阔廓蛞",la:"拉落垃腊啦辣蜡喇剌旯砬邋瘌",lai:"来莱赖睐徕籁涞赉濑癞崃疠铼",lan:"兰览蓝篮栏岚烂滥缆揽澜拦懒榄斓婪阑褴罱啉谰镧漤",lin:"林临邻赁琳磷淋麟霖鳞凛拎遴蔺吝粼嶙躏廪檩啉辚膦瞵懔",lang:"浪朗郎廊狼琅榔螂阆锒莨啷蒗稂",liang:"量两粮良辆亮梁凉谅粱晾靓踉莨椋魉墚",lao:"老劳落络牢捞涝烙姥佬崂唠酪潦痨醪铑铹栳耢",mu:"目模木亩幕母牧莫穆姆墓慕牟牡募睦缪沐暮拇姥钼苜仫毪坶",le:"了乐勒肋叻鳓嘞仂泐",lei:"类累雷勒泪蕾垒磊擂镭肋羸耒儡嫘缧酹嘞诔檑",sui:"随岁虽碎尿隧遂髓穗绥隋邃睢祟濉燧谇眭荽",lie:"列烈劣裂猎冽咧趔洌鬣埒捩躐",leng:"冷愣棱楞塄",ling:"领令另零灵龄陵岭凌玲铃菱棱伶羚苓聆翎泠瓴囹绫呤棂蛉酃鲮柃",lia:"俩",liao:"了料疗辽廖聊寥缪僚燎缭撂撩嘹潦镣寮蓼獠钌尥鹩",liu:"流刘六留柳瘤硫溜碌浏榴琉馏遛鎏骝绺镏旒熘鹨锍",lun:"论轮伦仑纶沦抡囵",lv:"率律旅绿虑履吕铝屡氯缕滤侣驴榈闾偻褛捋膂稆",lou:"楼露漏陋娄搂篓喽镂偻瘘髅耧蝼嵝蒌",mao:"贸毛矛冒貌茂茅帽猫髦锚懋袤牦卯铆耄峁瑁蟊茆蝥旄泖昴瞀",long:"龙隆弄垄笼拢聋陇胧珑窿茏咙砻垅泷栊癃",nong:"农浓弄脓侬哝",shuang:"双爽霜孀泷",shu:"术书数属树输束述署熟殊蔬舒疏鼠淑叔暑枢墅俞曙抒竖蜀薯梳戍恕孰沭赎庶漱塾倏澍纾姝菽黍腧秫毹殳疋摅",shuai:"率衰帅摔甩蟀",lve:"略掠锊",ma:"么马吗摩麻码妈玛嘛骂抹蚂唛蟆犸杩",me:"么麽",mai:"买卖麦迈脉埋霾荬劢",man:"满慢曼漫埋蔓瞒蛮鳗馒幔谩螨熳缦镘颟墁鞔嫚",mi:"米密秘迷弥蜜谜觅靡泌眯麋猕谧咪糜宓汨醚嘧弭脒冖幂祢縻蘼芈糸敉",men:"们门闷瞒汶扪焖懑鞔钔",mang:"忙盲茫芒氓莽蟒邙硭漭",meng:"蒙盟梦猛孟萌氓朦锰檬勐懵蟒蜢虻黾蠓艨甍艋瞢礞",miao:"苗秒妙描庙瞄缪渺淼藐缈邈鹋杪眇喵",mou:"某谋牟缪眸哞鍪蛑侔厶",miu:"缪谬",mei:"美没每煤梅媒枚妹眉魅霉昧媚玫酶镁湄寐莓袂楣糜嵋镅浼猸鹛",wen:"文问闻稳温纹吻蚊雯紊瘟汶韫刎璺玟阌",mie:"灭蔑篾乜咩蠛",ming:"明名命鸣铭冥茗溟酩瞑螟暝",na:"内南那纳拿哪娜钠呐捺衲镎肭",nei:"内那哪馁",nuo:"难诺挪娜糯懦傩喏搦锘",ruo:"若弱偌箬",nang:"囊馕囔曩攮",nao:"脑闹恼挠瑙淖孬垴铙桡呶硇猱蛲",ni:"你尼呢泥疑拟逆倪妮腻匿霓溺旎昵坭铌鲵伲怩睨猊",nen:"嫩恁",neng:"能",nin:"您恁",niao:"鸟尿溺袅脲茑嬲",nie:"摄聂捏涅镍孽捻蘖啮蹑嗫臬镊颞乜陧",niang:"娘酿",ning:"宁凝拧泞柠咛狞佞聍甯",nu:"努怒奴弩驽帑孥胬",nv:"女钕衄恧",ru:"入如女乳儒辱汝茹褥孺濡蠕嚅缛溽铷洳薷襦颥蓐",nuan:"暖",nve:"虐疟",re:"热若惹喏",ou:"区欧偶殴呕禺藕讴鸥瓯沤耦怄",pao:"跑炮泡抛刨袍咆疱庖狍匏脬",pou:"剖掊裒",pen:"喷盆湓",pie:"瞥撇苤氕丿",pin:"品贫聘频拼拚颦姘嫔榀牝",se:"色塞瑟涩啬穑铯槭",qing:"情青清请亲轻庆倾顷卿晴氢擎氰罄磬蜻箐鲭綮苘黥圊檠謦",zan:"赞暂攒堑昝簪糌瓒錾趱拶",shao:"少绍召烧稍邵哨韶捎勺梢鞘芍苕劭艄筲杓潲",sao:"扫骚嫂梢缫搔瘙臊埽缲鳋",sha:"沙厦杀纱砂啥莎刹杉傻煞鲨霎嗄痧裟挲铩唼歃",xuan:"县选宣券旋悬轩喧玄绚渲璇炫萱癣漩眩暄煊铉楦泫谖痃碹揎镟儇",ran:"然染燃冉苒髯蚺",rang:"让壤攘嚷瓤穰禳",rao:"绕扰饶娆桡荛",reng:"仍扔",ri:"日",rou:"肉柔揉糅鞣蹂",ruan:"软阮朊",run:"润闰",sa:"萨洒撒飒卅仨脎",suo:"所些索缩锁莎梭琐嗦唆唢娑蓑羧挲桫嗍睃",sai:"思赛塞腮噻鳃",shui:"说水税谁睡氵",sang:"桑丧嗓搡颡磉",sen:"森",seng:"僧",shai:"筛晒",shang:"上商尚伤赏汤裳墒晌垧觞殇熵绱",xing:"行省星腥猩惺兴刑型形邢饧醒幸杏性姓陉荇荥擤悻硎",shou:"收手受首售授守寿瘦兽狩绶艏扌",shuo:"说数硕烁朔铄妁槊蒴搠",su:"速素苏诉缩塑肃俗宿粟溯酥夙愫簌稣僳谡涑蔌嗉觫",shua:"刷耍唰",shuan:"栓拴涮闩",shun:"顺瞬舜吮",song:"送松宋讼颂耸诵嵩淞怂悚崧凇忪竦菘",sou:"艘搜擞嗽嗖叟馊薮飕嗾溲锼螋瞍",sun:"损孙笋荪榫隼狲飧",teng:"腾疼藤滕誊",tie:"铁贴帖餮萜",tu:"土突图途徒涂吐屠兔秃凸荼钍菟堍酴",wai:"外歪崴",wang:"王望往网忘亡旺汪枉妄惘罔辋魍",weng:"翁嗡瓮蓊蕹",zhua:"抓挝爪",yang:"样养央阳洋扬杨羊详氧仰秧痒漾疡泱殃恙鸯徉佯怏炀烊鞅蛘",xiong:"雄兄熊胸凶匈汹芎",yo:"哟唷",yong:"用永拥勇涌泳庸俑踊佣咏雍甬镛臃邕蛹恿慵壅痈鳙墉饔喁",za:"杂扎咱砸咋匝咂拶",zai:"在再灾载栽仔宰哉崽甾",zao:"造早遭枣噪灶燥糟凿躁藻皂澡蚤唣",zei:"贼",zen:"怎谮",zeng:"增曾综赠憎锃甑罾缯",zhei:"这",zou:"走邹奏揍诹驺陬楱鄹鲰",zhuai:"转拽",zun:"尊遵鳟樽撙",dia:"嗲",nou:"耨"})};return f})(); })();

// Custom Node Name, Order Manager & Chrome-Style Quick Shortcuts for Sun-Panel (Maintained by SZULie)
(function() {
  // 0. Pinyin & Keyword Fuzzy Search Engine
  window.__matchSearch = function(item, query) {
    if (!query) return true;
    var q = query.trim().toLowerCase();
    if (!q) return true;

    var fields = [item.title, item.description, item.url, item.lanUrl];
    for (var i = 0; i < fields.length; i++) {
      var f = fields[i];
      if (!f) continue;
      var str = String(f);
      if (str.toLowerCase().indexOf(q) !== -1) return true;
      if (window.PinyinMatch && window.PinyinMatch.match(str, q)) return true;
    }
    return false;
  };

  // Built-in Vector SVG Icons for Popular Shortcuts (0 External Network Request)
  const BUILTIN_ICONS = {
    google: '<svg viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
    bilibili: '<svg viewBox="0 0 24 24" fill="#00AEEC"><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    chatgpt: '<svg viewBox="0 0 24 24" fill="#10a37f"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>',
    linuxdo: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#f59e0b"/><path fill="#fff" d="M8 7h3v7h5v3H8V7z"/></svg>',
    v2ex: '<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M2.5 4h19A1.5 1.5 0 0 1 23 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-19A1.5 1.5 0 0 1 1 18.5v-13A1.5 1.5 0 0 1 2.5 4zm4.8 4.2L10.9 12l-3.6 3.8h2.6l3.6-3.8-3.6-3.8H7.3zm6.2 6.8v1.8h5v-1.8h-5z"/></svg>',
    cloudflare: '<svg viewBox="0 0 24 24" fill="#F38020"><path d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1338-.0713c-.0283-.0479-.0351-.1094-.0175-.1729.0283-.0957.1142-.1631.2148-.1689l8.7393-.1123c1.0371-.0479 2.1601-.8868 2.5537-1.9131l.499-1.3018c.0215-.0566.0293-.1172.0147-.1758C18.0215 8.958 16.2236 7.5 14.0547 7.5c-1.999 0-3.7041 1.2852-4.2988 3.0645-.4141-.3096-.9375-.4746-1.498-.418-1.0118.1006-1.8252.918-1.9219 1.9297-.0254.2666.0049.5244.0762.7656C4.9092 12.8838 3.7 14.1201 3.7 15.6553c0 .1416.0117.2832.0322.4219.0147.0957.0957.167.1934.167h12.3701a.2314.2314 0 0 0 .2131-.1651l.0002-.2344zm2.8935-5.3086c-.0683 0-.1357.0029-.2031.0088-.0527.0049-.0986.04-.1143.0908l-.3427 1.1895c-.1475.5068-.0909.9707.1552 1.3154.2246.3164.6045.499 1.0616.5205l1.8554.1123c.0547.0029.1045.0313.1338.0713.0283.0479.0352.1094.0176.1729-.0283.0957-.1143.1631-.2149.1689l-1.9306.1123c-1.041.0479-2.1641.8868-2.5576 1.9131l-.1416.3691c-.0284.0732.0254.1514.1045.1514h6.6318c.0918 0 .1729-.0605.1992-.1484.1328-.4434.2051-.915.2051-1.4043 0-2.3408-1.8984-4.2436-4.2564-4.2436z"/></svg>'
  };

  const DEFAULT_SHORTCUTS = [
    { id: 'qs_1', title: 'Google', url: 'https://www.google.com', icon: 'google', color: '#4285F4' },
    { id: 'qs_2', title: 'GitHub', url: 'https://github.com', icon: 'github', color: '#24292e' },
    { id: 'qs_3', title: 'Bilibili', url: 'https://www.bilibili.com', icon: 'bilibili', color: '#00AEEC' },
    { id: 'qs_4', title: 'YouTube', url: 'https://www.youtube.com', icon: 'youtube', color: '#FF0000' },
    { id: 'qs_5', title: 'ChatGPT', url: 'https://chatgpt.com', icon: 'chatgpt', color: '#10a37f' },
    { id: 'qs_6', title: 'LinuxDo', url: 'https://linux.do', icon: 'linuxdo', color: '#f59e0b' },
    { id: 'qs_7', title: 'V2EX', url: 'https://www.v2ex.com', icon: 'v2ex', color: '#333344' },
    { id: 'qs_8', title: 'Cloudflare', url: 'https://dash.cloudflare.com', icon: 'cloudflare', color: '#F38020' }
  ];

  // Auto-detect icon key from URL
  function detectIconKey(url, iconField) {
    if (iconField && BUILTIN_ICONS[iconField]) return iconField;
    const u = (url || '').toLowerCase();
    if (u.includes('google.')) return 'google';
    if (u.includes('github.')) return 'github';
    if (u.includes('bilibili.') || u.includes('b23.tv')) return 'bilibili';
    if (u.includes('youtube.') || u.includes('youtu.be')) return 'youtube';
    if (u.includes('chatgpt.') || u.includes('openai.')) return 'chatgpt';
    if (u.includes('linux.do')) return 'linuxdo';
    if (u.includes('v2ex.')) return 'v2ex';
    if (u.includes('cloudflare.')) return 'cloudflare';
    return null;
  }

  // Toast notification helper
  function showToast(msg) {
    let toast = document.getElementById('custom-toast-msg');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'custom-toast-msg';
      toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:rgba(30,30,38,0.95);border:1px solid #4a4a5a;color:#fff;padding:10px 20px;border-radius:24px;font-size:14px;font-weight:600;box-shadow:0 8px 24px rgba(0,0,0,0.4);z-index:999999;transition:opacity 0.3s,transform 0.3s;pointer-events:none;backdrop-filter:blur(6px);';
      document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
    clearTimeout(toast.__timer);
    toast.__timer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(10px)';
    }, 2200);
  }

  function getAuthToken() {
    try {
      const raw = localStorage.getItem('AUTH_TOKEN');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.data && parsed.data.token) return parsed.data.token;
        if (parsed.token) return parsed.token;
      }
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const val = localStorage.getItem(key);
        if (val && val.includes('token')) {
          try {
            const p = JSON.parse(val);
            if (p.data && p.data.token) return p.data.token;
            if (p.token) return p.token;
          } catch(e){}
        }
      }
    } catch(e) {}
    return null;
  }

  // Read panelConfig from cache or global
  let cachedPanelConfig = null;
  function getCardOpenTarget() {
    if (cachedPanelConfig && cachedPanelConfig.cardOpenTarget) {
      return cachedPanelConfig.cardOpenTarget;
    }
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        const v = localStorage.getItem(k);
        if (v && v.includes('cardOpenTarget')) {
          const parsed = JSON.parse(v);
          if (parsed?.data?.panelConfig?.cardOpenTarget) return parsed.data.panelConfig.cardOpenTarget;
          if (parsed?.panelConfig?.cardOpenTarget) return parsed.panelConfig.cardOpenTarget;
        }
      }
    } catch(e) {}
    return 'blank';
  }

  // Load shortcuts from localStorage immediately (0ms), then sync from cloud userConfig
  function getLocalShortcuts() {
    try {
      const raw = localStorage.getItem('SUN_PANEL_QUICK_SHORTCUTS');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch(e) {}
    return DEFAULT_SHORTCUTS;
  }

  let currentShortcuts = getLocalShortcuts();

  async function syncCloudShortcuts() {
    try {
      const token = getAuthToken();
      const headers = { 'Content-Type': 'application/json' };
      if (token) headers['token'] = token;

      const res = await fetch('/api/panel/userConfig/get', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({})
      });
      const json = await res.json();
      if (json.code === 0 && json.data && json.data.panel) {
        cachedPanelConfig = json.data.panel;
        if (Array.isArray(json.data.panel.quickShortcuts) && json.data.panel.quickShortcuts.length > 0) {
          currentShortcuts = json.data.panel.quickShortcuts;
          localStorage.setItem('SUN_PANEL_QUICK_SHORTCUTS', JSON.stringify(currentShortcuts));
          renderQuickShortcutsBar();
        }
      }
    } catch(e) {}
  }

  async function saveCloudShortcuts(newList) {
    currentShortcuts = newList;
    localStorage.setItem('SUN_PANEL_QUICK_SHORTCUTS', JSON.stringify(currentShortcuts));
    renderQuickShortcutsBar();

    const token = getAuthToken();
    if (!token) return;

    try {
      const resGet = await fetch('/api/panel/userConfig/get', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token': token },
        body: JSON.stringify({})
      });
      const jsonGet = await resGet.json();
      if (jsonGet.code === 0 && jsonGet.data && jsonGet.data.panel) {
        const panel = jsonGet.data.panel;
        panel.quickShortcuts = currentShortcuts;
        cachedPanelConfig = panel;
        await fetch('/api/panel/userConfig/set', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'token': token },
          body: JSON.stringify({ panel: panel })
        });
      }
    } catch(e) {
      console.error('Failed to sync shortcuts to cloud:', e);
    }
  }

  function openShortcutModal(editIdx) {
    const isEdit = typeof editIdx === 'number' && editIdx >= 0;
    const item = isEdit ? currentShortcuts[editIdx] : { title: '', url: 'https://', icon: '' };

    if (document.getElementById('custom-qs-modal-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'custom-qs-modal-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.65);backdrop-filter:blur(5px);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;';

    const modal = document.createElement('div');
    modal.style.cssText = 'background:#1e1e24;border:1px solid #3a3a46;border-radius:16px;width:100%;max-width:400px;box-shadow:0 12px 36px rgba(0,0,0,0.5);color:#fff;display:flex;flex-direction:column;overflow:hidden;';

    modal.innerHTML = `
      <div style="padding:16px 20px;border-bottom:1px solid #333340;display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:16px;font-weight:700;">${isEdit ? '编辑快捷方式' : '添加快捷方式'}</span>
        <span id="qs-modal-close" style="cursor:pointer;font-size:18px;opacity:0.7;padding:4px 8px;">✕</span>
      </div>
      <div style="padding:18px 20px;display:flex;flex-direction:column;gap:14px;">
        <div>
          <div style="font-size:13px;color:#aaa;margin-bottom:6px;">名称 (如: Bilibili / Google)</div>
          <input id="qs-input-title" type="text" value="${item.title.replace(/"/g, '&quot;')}" placeholder="输入显示名称" style="width:100%;box-sizing:border-box;padding:9px 12px;border-radius:8px;border:1px solid #444;background:#272732;color:#fff;font-size:14px;outline:none;" />
        </div>
        <div>
          <div style="font-size:13px;color:#aaa;margin-bottom:6px;">网址 URL</div>
          <input id="qs-input-url" type="text" value="${item.url.replace(/"/g, '&quot;')}" placeholder="https://..." style="width:100%;box-sizing:border-box;padding:9px 12px;border-radius:8px;border:1px solid #444;background:#272732;color:#fff;font-size:14px;outline:none;" />
        </div>
        <div>
          <div style="font-size:13px;color:#aaa;margin-bottom:6px;">图标 URL 或内置代号 (留空则自动匹配或用首字母)</div>
          <input id="qs-input-icon" type="text" value="${(item.icon || '').replace(/"/g, '&quot;')}" placeholder="可选: google/github/bilibili/youtube/chatgpt 或图片链接" style="width:100%;box-sizing:border-box;padding:9px 12px;border-radius:8px;border:1px solid #444;background:#272732;color:#fff;font-size:13px;outline:none;" />
        </div>
      </div>
      <div style="padding:14px 20px;border-top:1px solid #333340;display:flex;justify-content:flex-end;gap:10px;background:#18181d;">
        <button id="qs-modal-cancel" style="padding:8px 16px;border-radius:8px;background:#2c2c36;color:#ccc;border:none;cursor:pointer;font-size:14px;">取消</button>
        <button id="qs-modal-save" style="padding:8px 18px;border-radius:8px;background:#3b82f6;color:#fff;border:none;cursor:pointer;font-weight:600;font-size:14px;">保存</button>
      </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const close = () => { if (document.body.contains(overlay)) document.body.removeChild(overlay); };
    document.getElementById('qs-modal-close').onclick = close;
    document.getElementById('qs-modal-cancel').onclick = close;
    overlay.onclick = (e) => { if (e.target === overlay) close(); };

    document.getElementById('qs-modal-save').onclick = async () => {
      const title = document.getElementById('qs-input-title').value.trim();
      let url = document.getElementById('qs-input-url').value.trim();
      const icon = document.getElementById('qs-input-icon').value.trim();

      if (!title || !url) {
        alert('请填写名称和网址');
        return;
      }
      if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
      }

      const newList = [...currentShortcuts];
      const newObj = {
        id: isEdit ? item.id : ('qs_' + Date.now()),
        title: title,
        url: url,
        icon: icon
      };

      if (isEdit) {
        newList[editIdx] = newObj;
      } else {
        newList.push(newObj);
      }

      close();
      await saveCloudShortcuts(newList);
      showToast(isEdit ? '快捷方式已更新并同步云端' : '快捷方式已添加并同步云端');
    };
  }

  function renderShortcutIconHTML(sc) {
    const key = detectIconKey(sc.url, sc.icon);
    if (key && BUILTIN_ICONS[key]) {
      return BUILTIN_ICONS[key];
    }
    if (sc.icon && (sc.icon.startsWith('http') || sc.icon.startsWith('/'))) {
      return `<img src="${sc.icon}" alt="${sc.title}" onerror="this.style.display='none';this.parentElement.innerHTML='<span class=\\'qs-icon-letter\\'>${(sc.title || '?')[0]}</span>'" />`;
    }
    const letter = (sc.title || '?').trim()[0] || '?';
    return `<span class="qs-icon-letter">${letter}</span>`;
  }

  function renderQuickShortcutsBar() {
    let bar = document.getElementById('custom-quick-shortcuts-bar');
    if (!bar) {
      const searchBox = document.querySelector('.search-box');
      if (!searchBox || !searchBox.parentElement) return;
      const searchContainer = searchBox.parentElement;
      bar = document.createElement('div');
      bar.id = 'custom-quick-shortcuts-bar';
      searchContainer.parentNode.insertBefore(bar, searchContainer.nextSibling);
    }

    bar.innerHTML = '';

    currentShortcuts.forEach((sc, idx) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'qs-item';
      itemEl.title = `${sc.title} (${sc.url})`;

      itemEl.innerHTML = `
        <div class="qs-action-badges">
          <span class="qs-badge qs-badge-edit" title="编辑">✎</span>
          <span class="qs-badge qs-badge-del" title="删除">✕</span>
        </div>
        <div class="qs-icon-circle">${renderShortcutIconHTML(sc)}</div>
        <div class="qs-title">${sc.title}</div>
      `;

      // Click handler
      itemEl.onclick = (e) => {
        if (e.target.closest('.qs-action-badges')) return;
        const targetMode = getCardOpenTarget();
        if (targetMode === 'self') {
          window.location.href = sc.url;
        } else {
          window.open(sc.url, '_blank');
        }
      };

      // Edit badge
      const editBtn = itemEl.querySelector('.qs-badge-edit');
      if (editBtn) {
        editBtn.onclick = (e) => {
          e.stopPropagation();
          openShortcutModal(idx);
        };
      }

      // Delete badge
      const delBtn = itemEl.querySelector('.qs-badge-del');
      if (delBtn) {
        delBtn.onclick = async (e) => {
          e.stopPropagation();
          if (confirm(`确定要移除快捷方式「${sc.title}」吗？`)) {
            const nextList = currentShortcuts.filter((_, i) => i !== idx);
            await saveCloudShortcuts(nextList);
            showToast('快捷方式已移除');
          }
        };
      }

      bar.appendChild(itemEl);
    });

    // Add '+' button (visible in Edit Mode)
    const addEl = document.createElement('div');
    addEl.className = 'qs-item qs-add-btn';
    addEl.title = '添加快捷方式';
    addEl.innerHTML = `
      <div class="qs-icon-circle" style="border-style:dashed;border-color:rgba(255,255,255,0.4);">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </div>
      <div class="qs-title">添加快捷</div>
    `;
    addEl.onclick = (e) => {
      e.stopPropagation();
      openShortcutModal(-1);
    };
    bar.appendChild(addEl);
  }

  // Keyboard shortcut: press '/' or 'Ctrl+K' to focus search input
  document.addEventListener('keydown', (e) => {
    const active = document.activeElement;
    const isInput = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable);
    if ((e.key === '/' && !isInput) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
      const searchInput = document.querySelector('.search-box input');
      if (searchInput) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
    }
  });

  // 1. Edit Mode vs View Mode Controller
  let currentMode = sessionStorage.getItem('sun_panel_display_mode') || 'view';
  if (currentMode === 'edit') {
    document.body.classList.add('edit-mode');
  } else {
    document.body.classList.remove('edit-mode');
  }

  const ICON_VIEW_MODE = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white float-btn-icon"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>';
  const ICON_EDIT_MODE = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="float-btn-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>';

  function updateModeButtonVisual(btn, mode) {
    if (mode === 'edit') {
      btn.className = 'float-btn custom-mode-toggle-btn is-editing flex items-center justify-center cursor-pointer';
      btn.title = '当前为编辑模式 (点击退出并返回查看模式)';
      btn.innerHTML = ICON_EDIT_MODE;
    } else {
      btn.className = 'float-btn custom-mode-toggle-btn flex items-center justify-center cursor-pointer';
      btn.title = '当前为查看模式 (点击开启编辑模式)';
      btn.innerHTML = ICON_VIEW_MODE;
    }
  }

  function injectModeToggle() {
    const token = getAuthToken();
    const dock = document.querySelector('.fixed-element');
    if (!dock) return;

    let btn = dock.querySelector('.custom-mode-toggle-btn');
    if (!token) {
      if (btn) btn.remove();
      document.body.classList.remove('edit-mode');
      return;
    }

    if (!btn) {
      btn = document.createElement('div');
      btn.onclick = (e) => {
        e.stopPropagation();
        if (document.body.classList.contains('edit-mode')) {
          document.body.classList.remove('edit-mode');
          sessionStorage.setItem('sun_panel_display_mode', 'view');
          updateModeButtonVisual(btn, 'view');
          showToast('已切换为查看模式（编辑按钮已隐藏）');
        } else {
          document.body.classList.add('edit-mode');
          sessionStorage.setItem('sun_panel_display_mode', 'edit');
          updateModeButtonVisual(btn, 'edit');
          showToast('已进入编辑模式（可管理快捷方式、节点与卡片）');
        }
      };

      const lastChild = dock.lastElementChild;
      if (lastChild) {
        dock.insertBefore(btn, lastChild);
      } else {
        dock.appendChild(btn);
      }
    }

    const isEdit = document.body.classList.contains('edit-mode');
    updateModeButtonVisual(btn, isEdit ? 'edit' : 'view');
  }

  async function fetchGroups(token) {
    try {
      const res = await fetch('/api/panel/itemIconGroup/getList', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token': token },
        body: JSON.stringify({})
      });
      const json = await res.json();
      if (json.code === 0 && json.data && json.data.list) {
        return json.data.list.sort((a, b) => (a.sort || 0) - (b.sort || 0));
      }
    } catch(e) {
      console.error('Fetch groups failed:', e);
    }
    return [];
  }

  async function saveGroupSorts(token, sortItems) {
    const res = await fetch('/api/panel/itemIconGroup/saveSort', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'token': token },
      body: JSON.stringify({ sortItems: sortItems })
    });
    return await res.json();
  }

  async function moveGroupDirect(groupId, direction) {
    const token = getAuthToken();
    if (!token) {
      alert('未检测到登录状态，请重新登录后操作');
      return;
    }

    const groups = await fetchGroups(token);
    if (!groups.length) {
      alert('未能获取节点列表，请刷新重试');
      return;
    }

    const idx = groups.findIndex(g => g.id === groupId);
    if (idx === -1) {
      alert('未找到该节点');
      return;
    }

    const targetIdx = idx + direction;
    if (targetIdx < 0) {
      alert('该节点已经在最顶端了');
      return;
    }
    if (targetIdx >= groups.length) {
      alert('该节点已经在最底部了');
      return;
    }

    const temp = groups[idx];
    groups[idx] = groups[targetIdx];
    groups[targetIdx] = temp;

    const sortItems = groups.map((g, i) => ({ id: g.id, sort: i + 1 }));
    try {
      const res = await saveGroupSorts(token, sortItems);
      if (res.code === 0) {
        location.reload();
      } else {
        alert('调整顺序失败: ' + (res.msg || '未知错误'));
      }
    } catch(err) {
      alert('网络错误，排序失败: ' + err.message);
    }
  }

  function openSortModal() {
    const token = getAuthToken();
    if (!token) {
      alert('未检测到登录状态，请登录后再试');
      return;
    }

    if (document.getElementById('custom-sort-modal-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'custom-sort-modal-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.65);backdrop-filter:blur(5px);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;';

    const modal = document.createElement('div');
    modal.style.cssText = 'background:#1e1e24;border:1px solid #3a3a46;border-radius:16px;width:100%;max-width:440px;box-shadow:0 12px 36px rgba(0,0,0,0.5);color:#fff;display:flex;flex-direction:column;overflow:hidden;';

    const header = document.createElement('div');
    header.style.cssText = 'padding:16px 20px;border-bottom:1px solid #333340;display:flex;justify-content:space-between;align-items:center;';
    header.innerHTML = '<span style="font-size:17px;font-weight:700;">调整节点显示顺序</span><span id="custom-modal-close" style="cursor:pointer;font-size:20px;opacity:0.7;padding:4px 8px;">✕</span>';

    const listContainer = document.createElement('div');
    listContainer.id = 'custom-modal-list';
    listContainer.style.cssText = 'padding:14px 16px;max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px;';
    listContainer.innerHTML = '<div style="text-align:center;color:#888;padding:20px 0;">加载节点中...</div>';

    const footer = document.createElement('div');
    footer.style.cssText = 'padding:14px 20px;border-top:1px solid #333340;display:flex;justify-content:flex-end;gap:12px;background:#18181d;';
    footer.innerHTML = '<button id="custom-modal-cancel" style="padding:8px 16px;border-radius:8px;background:#2c2c36;color:#ccc;border:none;cursor:pointer;font-size:14px;">取消</button><button id="custom-modal-save" style="padding:8px 18px;border-radius:8px;background:#3b82f6;color:#fff;border:none;cursor:pointer;font-weight:600;font-size:14px;">保存新顺序</button>';

    modal.appendChild(header);
    modal.appendChild(listContainer);
    modal.appendChild(footer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    let currentList = [];

    function renderList() {
      listContainer.innerHTML = '';
      currentList.forEach((group, index) => {
        const itemRow = document.createElement('div');
        itemRow.style.cssText = 'display:flex;align-items:center;justify-content:space-between;background:#272733;border:1px solid #3c3c4a;padding:10px 14px;border-radius:10px;';
        
        const leftSpan = document.createElement('div');
        leftSpan.style.cssText = 'display:flex;align-items:center;gap:10px;font-size:15px;font-weight:600;';
        leftSpan.innerHTML = '<span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;background:#3b82f6;border-radius:50%;font-size:12px;">' + (index + 1) + '</span> <span>' + group.title + '</span>';

        const btnWrap = document.createElement('div');
        btnWrap.style.cssText = 'display:flex;gap:6px;';

        const upBtn = document.createElement('button');
        upBtn.innerHTML = '⬆️';
        upBtn.title = '上移';
        upBtn.style.cssText = 'background:#353545;border:none;color:#fff;border-radius:6px;padding:5px 8px;cursor:pointer;opacity:' + (index === 0 ? '0.35' : '1');
        if (index > 0) {
          upBtn.onclick = () => {
            const temp = currentList[index];
            currentList[index] = currentList[index - 1];
            currentList[index - 1] = temp;
            renderList();
          };
        }

        const downBtn = document.createElement('button');
        downBtn.innerHTML = '⬇️';
        downBtn.title = '下移';
        downBtn.style.cssText = 'background:#353545;border:none;color:#fff;border-radius:6px;padding:5px 8px;cursor:pointer;opacity:' + (index === currentList.length - 1 ? '0.35' : '1');
        if (index < currentList.length - 1) {
          downBtn.onclick = () => {
            const temp = currentList[index];
            currentList[index] = currentList[index + 1];
            currentList[index + 1] = temp;
            renderList();
          };
        }

        btnWrap.appendChild(upBtn);
        btnWrap.appendChild(downBtn);

        itemRow.appendChild(leftSpan);
        itemRow.appendChild(btnWrap);
        listContainer.appendChild(itemRow);
      });
    }

    fetchGroups(token).then((res) => {
      currentList = res;
      renderList();
    });

    const closeModal = () => {
      if (document.body.contains(overlay)) {
        document.body.removeChild(overlay);
      }
    };

    document.getElementById('custom-modal-close').onclick = closeModal;
    document.getElementById('custom-modal-cancel').onclick = closeModal;
    overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };

    document.getElementById('custom-modal-save').onclick = async () => {
      const saveBtn = document.getElementById('custom-modal-save');
      saveBtn.innerText = '保存中...';
      saveBtn.disabled = true;

      const sortItems = currentList.map((g, i) => ({ id: g.id, sort: i + 1 }));
      try {
        const res = await saveGroupSorts(token, sortItems);
        if (res.code === 0) {
          closeModal();
          location.reload();
        } else {
          alert('保存排序失败: ' + (res.msg || '未知错误'));
          saveBtn.innerText = '保存新顺序';
          saveBtn.disabled = false;
        }
      } catch(err) {
        alert('网络请求失败: ' + err.message);
        saveBtn.innerText = '保存新顺序';
        saveBtn.disabled = false;
      }
    };
  }

  function injectEditButtons() {
    injectModeToggle();

    if (!document.getElementById('custom-quick-shortcuts-bar') && document.querySelector('.search-box')) {
      renderQuickShortcutsBar();
    }

    const groupDivs = document.querySelectorAll('div[id^="item-group-"]');
    if (!groupDivs.length) return;

    groupDivs.forEach((groupDiv) => {
      const titleSpan = groupDiv.querySelector('.group-title');
      const groupBtns = groupDiv.querySelector('.group-buttons');
      if (!titleSpan || !groupBtns) return;

      if (groupBtns.querySelector('.custom-edit-group-btn')) return;

      const idMatch = groupDiv.id.match(/^item-group-(?:group_)?(\d+)$/);
      let groupId = idMatch ? parseInt(idMatch[1], 10) : null;
      if (!groupId) {
        const matchCls = groupDiv.className.match(/item-group-index-(\d+)/);
        if (matchCls) {
          groupId = parseInt(matchCls[1], 10) + 1;
        }
      }

      const createBtn = (iconSvg, tooltip, onClickHandler) => {
        const span = document.createElement('span');
        span.className = 'custom-edit-group-btn mr-2 cursor-pointer text-white';
        span.title = tooltip;
        span.innerHTML = iconSvg;
        span.style.display = 'inline-flex';
        span.style.alignItems = 'center';
        span.style.opacity = '0.85';
        span.style.transition = 'transform 0.15s, opacity 0.15s';
        span.onmouseenter = () => { span.style.opacity = '1'; span.style.transform = 'scale(1.15)'; };
        span.onmouseleave = () => { span.style.opacity = '0.85'; span.style.transform = 'scale(1)'; };
        span.onclick = (e) => {
          e.stopPropagation();
          onClickHandler();
        };
        return span;
      };

      // 1. Rename Button
      const editBtn = createBtn(
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>',
        '修改节点名称',
        async () => {
          const currentTitle = titleSpan.innerText.trim();
          const newTitle = prompt('请输入新的节点名称：', currentTitle);
          if (!newTitle || newTitle.trim() === '' || newTitle.trim() === currentTitle) return;

          const token = getAuthToken();
          if (!token) {
            alert('未检测到登录凭据，请重新登录');
            return;
          }

          try {
            const res = await fetch('/api/panel/itemIconGroup/edit', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'token': token
              },
              body: JSON.stringify({ id: groupId, title: newTitle.trim() })
            });
            const json = await res.json();
            if (json.code === 0) {
              titleSpan.innerText = newTitle.trim();
              setTimeout(() => { location.reload(); }, 300);
            } else {
              alert('修改失败: ' + (json.msg || '未知错误'));
            }
          } catch(err) {
            alert('网络错误，修改失败: ' + err.message);
          }
        }
      );

      // 2. Move Up Button
      const upBtn = createBtn(
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
        '上移此节点',
        () => moveGroupDirect(groupId, -1)
      );

      // 3. Move Down Button
      const downBtn = createBtn(
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>',
        '下移此节点',
        () => moveGroupDirect(groupId, 1)
      );

      // 4. Sort Modal Button
      const modalBtn = createBtn(
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>',
        '节点排序管理窗口',
        () => openSortModal()
      );

      groupBtns.insertBefore(modalBtn, groupBtns.firstChild);
      groupBtns.insertBefore(downBtn, groupBtns.firstChild);
      groupBtns.insertBefore(upBtn, groupBtns.firstChild);
      groupBtns.insertBefore(editBtn, groupBtns.firstChild);
    });
  }

  // Initial Cloud Sync
  setTimeout(syncCloudShortcuts, 100);
  setInterval(injectEditButtons, 300);
})();