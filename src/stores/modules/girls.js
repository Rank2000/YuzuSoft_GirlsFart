import { defineStore } from 'pinia'
import { ref } from 'vue'
import { avatarObj } from '@/utils/imgUrl.js'

export const useGirlsStore = defineStore('girl', () => {
  const girlsArr = ref([
    '白雪乃爱',
    '谷风天音',
    '小云雀来海',
    '高楯奥莉叶',
    '百里风实花',
    '明月栞那',
    '四季夏目',
    '墨染希',
    '火打谷爱衣',
    '汐山凉音',
    '朝武芳乃',
    '常陆茉子',
    '丛雨',
    '鞍马小春',
    '绫地宁宁',
    '因幡巡',
    '假屋和奏'
  ])

  const girlsData = ref([
    /**
     * T0:91-100分;T0.5:81-90分;T1:71-80分;T1.5:61-70分;
     * T2:51-60分;T2.5:41-50分;T3:31-40分;T3.5:21-30分;
     * T4:11-20分;T4.5:1-10分;T5:0分
     * name:姓名
     * c_num:主角站位
     * galgame:作品名
     * fart：放屁信息{
     *  fart_smell_score:屁臭程度分
     *  fart_count_score:屁量分
     *  fart_endure_score:忍耐能力分
     *  fart_smell:屁臭程度排名
     *  fart_count:屁量排名
     *  fart_endure:忍耐能力排名
     * }
     * img_url:图片地址
     * introduction:介绍评鉴
     */
    {
      name: '白雪乃爱',
      c_num: 1,
      galgame: '天使☆嚣嚣 RE-BOOT!',
      fart: {
        fart_smell_score: 85,
        fart_count_score: 100,
        fart_endure_score: 15,
        fart_smell: 'T0.5',
        fart_count: 'T0',
        fart_endure: 'T4'
      },
      poop: {
        poop_count_score: 100,
        poop_count: 'T0'
      },
      img_url: avatarObj.noa_avatar,
      breathe: './audio/breathe/乃爱喘息.wav',
      introduction: `小天使女主角，非常温柔、善良、可爱，喜欢吃薯片，喝可乐，还非常闷骚，这
      么可爱的小乃爱，谁不喜欢呢？作为柚子社吃货属性最突出的女主，在变成人类后，乃爱的屁一定很多，
      因为她吃的多，屁味方面的话因为代谢快和喜欢吃零食，以及游戏内洗完澡问李空自己臭吗？（乃爱香香的，只有屁可能臭）
      ，因为乃爱吃得多，而且大口喝可乐也会产生很多气体，她经常想放屁或拉屎，屎多了屁肯定也臭，但乃爱身体很好所以不会巨臭。
      小乃爱的肚子小小的，软软的，加上游戏内有涩涩时忍不住漏尿的cg，而且游戏里有乃爱肚子痛的剧情描写，说明乃爱的忍耐
      能力差一些，肠道中全是屁和大便，顶着乃爱的屁眼，忍耐的时候楚楚可怜，加上翘臀美人萝莉的设定，说真的，好想变成乃爱的胖次贴着她的菊穴，在乃爱肚子咕咕叫，
      菊穴忍不住凸起放“噗噗噗”的连环臭屁时候，被她的菊穴凸起亲吻阿。`
    },
    {
      name: '谷风天音',
      c_num: 2,
      galgame: '天使☆嚣嚣 RE-BOOT!',
      fart: {
        fart_smell_score: 80,
        fart_count_score: 40,
        fart_endure_score: 25,
        fart_smell: 'T1',
        fart_count: 'T2.5',
        fart_endure: 'T3.5'
      },
      poop: {
        poop_count_score: 25,
        poop_count: 'T3.5'
      },
      img_url: avatarObj.amane_avatar,
      introduction: `雌小鬼+实妹+宅女人设，老实说我个人对这雌小鬼+实妹属性并不是很感兴趣，但其他方面的人设
      我还是很喜欢的，像是喜欢涩涩，捉弄小乃爱，有一定百合倾向这样的感觉。好像看天音和乃爱百合放屁呀。
      天音身体素质没那么好，食量也不算大，而且作息不规律，根据分析应
      该是，虽然屁臭，可屁量一般，根据雌小鬼特点，忍耐能力也不强，
      但应该略强于乃爱（体型大一些）。不过走后门没漏出来说明也不算很弱。`
    },
    {
      name: '小云雀来海',
      c_num: 3,
      galgame: '天使☆嚣嚣 RE-BOOT!',
      fart: {
        fart_smell_score: 80,
        fart_count_score: 80,
        fart_endure_score: 80,
        fart_smell: 'T1',
        fart_count: 'T1',
        fart_endure: 'T1'
      },
      poop: {
        poop_count_score: 90,
        poop_count: 'T0.5'
      },
      img_url: avatarObj.kurumi_avatar,
      introduction: `大屁股辣妹！而且还是对阿宅好的辣妹！！！开局就有好感度，而且坐在男主学校桌子上，
      这简直是梦。谁会不想被大屁股辣妹坐脸呢？就算只有坐桌上也是非常棒了。想想来海的短裙遮着的巨大臀部，
      在你的位置上留下菊穴喷出的气味。。。好吧，我对她的评价非常高，屁臭，屁量，忍耐能力全高分，主要跟她的大体型和
      抖M上判断的，块头大说明吃的多，屁量气味肯定多而浓烈，抖M说明她喜欢忍耐play，忍耐力肯定强呀。`
    },
    {
      name: '星河辉耶',
      c_num: 4,
      galgame: '天使☆嚣嚣 RE-BOOT!',
      fart: {
        fart_smell_score: 85,
        fart_count_score: 70,
        fart_endure_score: 95,
        fart_smell: 'T0.5',
        fart_count: 'T1.5',
        fart_endure: 'T0'
      },
      poop: {
        poop_count_score: 93,
        poop_count: 'T0'
      },
      img_url: avatarObj.kaguya_avatar,
      introduction: `星河辉耶--异世界的魔族公主，首先作为一位公主，她的气质非常优雅，
      所以对于放屁这种事肯定是要控制的，因此忍耐能力极强，辉耶没有乃爱那么吃货，但也很喜欢
      吃一些汉堡之类的容易产生臭气的食物，加上块头也不小，我认为她的屁应该很臭，但屁量只是稍微多一点`
    },
    {
      name: '高楯欧丽叶',
      c_num: 5,
      galgame: '天使☆嚣嚣 RE-BOOT!',
      fart: {
        fart_smell_score: 40,
        fart_count_score: 30,
        fart_endure_score: 88,
        fart_smell: 'T3',
        fart_count: 'T3.5',
        fart_endure: 'T0.5'
      },
      poop: {
        poop_count_score: 70,
        poop_count: 'T1.5'
      },
      img_url: avatarObj.orie_avatar,
      introduction: `星河辉耶的贴身侍从，一直跟在她身边。性格非常一板一眼。
      由于不懂变通，有时候会稍显笨拙。不太会用电器，对她来说那都是“异世界的道具”。、
      但她的屁股挺翘，喜欢！但因为要照顾公主，自己的身体是肯定要锻炼好的，
      而且良好的饮食习惯也非常重要，作为侍从，忍耐力肯定也不低，我认为她的屁臭程度与
      屁量都不会太多，忍耐能力非常强！`
    },
    {
      name: '百里风实花',
      c_num: 6,
      galgame: '天使☆嚣嚣 RE-BOOT!',
      fart: {
        fart_smell_score: 55,
        fart_count_score: 30,
        fart_endure_score: 93,
        fart_smell: 'T2',
        fart_count: 'T3.5',
        fart_endure: 'T0'
      },
      poop: {
        poop_count_score: 50,
        poop_count: 'T2.5'
      },
      img_url: avatarObj.fumika_avatar,
      introduction: `萌系的邻家大姐姐这个属性倒是很喜欢，不过因为是老师，所以总体来讲戏份
      相当少，不过屁股也是挺大的（感觉仅次于来海与辉耶），从坐脸玩法来分析，她应该也懂一些放屁play。
      考虑她老师的体面身份，以及李空舔屁股都没提到味道怎么样，屁臭程度应该一般，屁量肯定不多，不然上课那尴尬了，忍耐能力强一点。`
    },
    {
      name: '明月栞那',
      c_num: 1,
      galgame: '星光咖啡馆与死神之蝶',
      fart: {
        fart_smell_score: 51,
        fart_count_score: 40,
        fart_endure_score: 10,
        fart_smell: 'T2.5',
        fart_count: 'T3',
        fart_endure: 'T4.5'
      },
      poop: {
        poop_count_score: 57,
        poop_count: 'T2'
      },
      img_url: avatarObj.kanna_avatar,
      introduction: `栞那年龄都能当男主太奶了，也是很有母性的女主（还有喂奶play），不过
      个人对这类角色不是很感兴趣，线还是推完的，比较有趣的部分是栞那游乐园憋尿，可惜没同意玩
      什么憋尿play，浴室0721漏尿很涩。总的来说没什么能分析屁的情节，大概就是一般吧，不擅长忍耐。
      
      `
    },
    {
      name: '四季夏目',
      c_num: 2,
      galgame: '星光咖啡馆与死神之蝶',
      fart: {
        fart_smell_score: 97,
        fart_count_score: 40,
        fart_endure_score: 60,
        fart_smell: 'T0',
        fart_count: 'T3',
        fart_endure: 'T2'
      },
      poop: {
        poop_count_score: 37,
        poop_count: 'T3'
      },
      img_url: avatarObj.natsume_avatar,
      introduction: `枣子姐的足，好涩好涩......旗袍的那个臀部特写......总之，
      夏目的屁股又翘又大，加上性格，还有病弱人设，屁肯定特别臭，虽然作为服务员和高岭之花，
      应该是有控制饮食，屁量不算太多。夏目真的太适合坐脸放屁play了，
      想被枣子姐的旗袍包裹的大屁股坐脸，然后鼻子对准她的菊穴暴风吸入。
      `
    },
    {
      name: '墨染希',
      c_num: 3,
      galgame: '星光咖啡馆与死神之蝶',
      fart: {
        fart_smell_score: 90,
        fart_count_score: 100,
        fart_endure_score: 25,
        fart_smell: 'T0.5',
        fart_count: 'T0',
        fart_endure: 'T3.5'
      },
      poop: {
        poop_count_score: 100,
        poop_count: 'T0'
      },
      img_url: avatarObj.nozomi_avatar,
      introduction: `小希叫起床的cg，那个肥大的屁股（流口水），外加可爱的内裤，这也
      ......也太涩了。我都不敢想这时候她要是“噗~”放个屁男主多爽，不仅能闻到味道，还
      可以观察到她在内裤上的菊穴被屁顶开的痕迹，真好。我记得昂晴有这类xp。可惜这作
      一个女主都没当面漏尿放屁之类的。墨染希也有吃货属性，而且块头大，一看就很能吃，所以她的屁
      肯定非常多，肚子经常咕噜咕噜响，就说明她想放屁或拉屎了，屎多了屁肯定也臭。好像被小希用大屁股在
      早上用憋了一肚子屎的屁叫起床。忍耐能力么，我觉得她的人设不像很能忍的样子，偏弱吧。
      `
    },
    {
      name: '火打谷爱衣',
      c_num: 4,
      galgame: '星光咖啡馆与死神之蝶',
      fart: {
        fart_smell_score: 16,
        fart_count_score: 81,
        fart_endure_score: 26,
        fart_smell: 'T4',
        fart_count: 'T0.5',
        fart_endure: 'T3.5'
      },
      poop: {
        poop_count_score: 78,
        poop_count: 'T1'
      },
      img_url: avatarObj.mei_avatar,
      introduction: `怎么说呢，冷门xp集合。。。但是不要忘了爱衣的本质是偏萝莉体型的大屁股少女。
      真要说的话我想看她泳装水中放屁，肯定很棒。身材较小，但运动量大，肯定吃的也多，所以屁不臭但量肯定多。
      游泳有助于肠胃蠕动，所以她经常游泳时候胀气，这时候揉她肚子肯定憋不住，屁放多了还会想拉屎，想象下，
      这位大屁股的学妹穿着紧身泳衣在你面前捂着屁眼放屁憋大便，从她连可爱的东西也没抵抗力看，忍耐力较弱，请务必穿泳装在水中让我揉揉肚子，然后欣赏放屁。
      `
    },
    {
      name: '汐山凉音',
      c_num: 5,
      galgame: '星光咖啡馆与死神之蝶',
      fart: {
        fart_smell_score: 90,
        fart_count_score: 20,
        fart_endure_score: 26,
        fart_smell: 'T0.5',
        fart_count: 'T4',
        fart_endure: 'T3.5'
      },
      poop: {
        poop_count_score: 20,
        poop_count: 'T4'
      },
      img_url: avatarObj.suzune_avatar,
      introduction: `小厨娘好耶，合法萝莉，虽然娇小可臀部却很大。做甜点也好吃！希望凉音姐穿牛仔裤坐
      我脸上放屁。凉音对食材很挑剔，基本都选好的，所以几乎不会吃坏肚子，但她喜欢喝酒等，所以喝醉了忍耐能力
      肯定下降，凉音身材小加上食量不大，屁应该很少，不过凉音强烈反对昂晴走后门，众所周知越是抵触越有鬼，所以她肯定
      怕被顶到放屁，因为她忍耐不行而且屁巨臭的。
      `
    },
    {
      name: '三司绫濑',
      c_num: 1,
      galgame: 'RIDDLE JOKER',
      fart: {
        fart_smell_score: 66,
        fart_count_score: 40,
        fart_endure_score: 34,
        fart_smell: 'T1.5',
        fart_count: 'T3',
        fart_endure: 'T3'
      },
      poop: {
        poop_count_score: 33,
        poop_count: 'T3'
      },
      img_url: avatarObj.ayase_avatar,
      introduction: `黑裤袜不错，就是脾气不太好。一般这种设定的屁都比较臭，
      量感觉一般，忍耐能力一般
      `
    },
    {
      name: '在原七海',
      c_num: 2,
      galgame: 'RIDDLE JOKER',
      fart: {
        fart_smell_score: 0.1,
        fart_count_score: 10,
        fart_endure_score: 80,
        fart_smell: 'T5',
        fart_count: 'T4.5',
        fart_endure: 'T1'
      },
      poop: {
        poop_count_score: 50,
        poop_count: 'T2.5'
      },
      img_url: avatarObj.nanami_avatar,
      introduction: `说真的，这作都两黑裤袜女主了，柚子社到底会不会写裤袜play？
      同理黑裤袜不错，但义妹人设也加分。七海就是很会照顾人的类型，加上可以治愈的超能力
      屁应该不臭也不会太多，忍耐能力比较强，要是请求她的话，也愿意对着男主放屁吧。
      从CG来看七海的屁股也不小，而且经常穿裤袜，味道一定很不错。`
    },
    {
      name: '式部茉优',
      c_num: 3,
      galgame: 'RIDDLE JOKER',
      fart: {
        fart_smell_score: 40,
        fart_count_score: 40,
        fart_endure_score: 40,
        fart_smell: 'T3',
        fart_count: 'T3',
        fart_endure: 'T3'
      },
      poop: {
        poop_count_score: 57,
        poop_count: 'T2'
      },
      img_url: avatarObj.mayu_avatar,
      introduction: `最不感兴趣的一个。。。甚至懒得分析，全一般吧。
      `
    },
    {
      name: '二条院羽月',
      c_num: 4,
      galgame: 'RIDDLE JOKER',
      fart: {
        fart_smell_score: 50,
        fart_count_score: 50,
        fart_endure_score: 50,
        fart_smell: 'T2.5',
        fart_count: 'T2.5',
        fart_endure: 'T2.5'
      },
      poop: {
        poop_count_score: 61,
        poop_count: 'T2'
      },
      img_url: avatarObj.hazuki_avator,
      introduction: `羽月真的比较接近理想女友了，而且她的涩点跟茉子差不多，
      安全裤屁股加肉腿，好！羽月小姐请穿上紧身裤坐在我脸上放屁！分析屁味比较臭，
      量稍多，所以需要紧身裤帮助忍耐，不过她的忍耐能力也不差。
      `
    },
    {
      name: '壬生千咲',
      c_num: 5,
      galgame: 'RIDDLE JOKER',
      fart: {
        fart_smell_score: 5,
        fart_count_score: 0.1,
        fart_endure_score: 50,
        fart_smell: 'T4.5',
        fart_count: 'T5',
        fart_endure: 'T2.5'
      },
      poop: {
        poop_count_score: 10,
        poop_count: 'T4.5'
      },
      img_url: avatarObj.chisaki_avator,
      introduction: `小太阳一般的学妹，感觉不太适合放屁play呢，丛游戏角度分析，
      屁量极少，屁味极淡，忍耐能力不清楚，但忍耐压力不大，应该算比较能忍耐。
      `
    },
    {
      name: '朝武芳乃',
      c_num: 1,
      galgame: '千恋万花',
      fart: {
        fart_smell_score: 100,
        fart_count_score: 100,
        fart_endure_score: 0,
        fart_smell: 'T0',
        fart_count: 'T0',
        fart_endure: 'T5'
      },
      poop: {
        poop_count_score: 100,
        poop_count: 'T0'
      },
      img_url: avatarObj.yoshino_avatar,
      breathe: './audio/breathe/芳乃喘息.wav',
      introduction: `芳乃的黑裤袜，斯哈斯哈~！芳乃也有吃货人设，而且游戏内更是有因为上厕所气味太大不
      让男主进的片段（不敢想她的屁多臭。），而且涩涩时经常漏尿，由此可知芳乃不仅肚子容量大，吃得多，经常忍不住想放屁、漏尿、拉屎，
      而且还很有羞涩感。好想扒开她的黑裤袜圆润大屁股闻屁啊...（虽说芳乃的屁股在千恋万花只能排第四大，不过又大又翘才最棒！），
      闻完还要扒下裤袜，直接把套在头上闻~。经常需要跳舞的芳乃能上厕所的时间肯定不多，憋着一肚子屁不能及时放出也别有风味。
      毕竟谁不喜欢一个经常憋不住想上厕所、屁又多又臭的巫女小姐呢？
      `
    },
    {
      name: '常陆茉子',
      c_num: 2,
      galgame: '千恋万花',
      fart: {
        fart_smell_score: 85,
        fart_count_score: 90,
        fart_endure_score: 100,
        fart_smell: 'T0.5',
        fart_count: 'T0.5',
        fart_endure: 'T0'
      },
      poop: {
        poop_count_score: 93,
        poop_count: 'T0'
      },
      img_url: avatarObj.mako_avatar,
      breathe: './audio/breathe/茉子喘息.wav',
      introduction: `茉子的紧身裤和肉腿，斯哈斯哈~！虽然茉子没芳乃喜欢吃，不过茉子要练忍术,运动量比芳乃还要大。
      茉子的代谢速度肯定非常快，这就会导致她肚子经常胀气，加上长时间不放，肯定也是很臭的，不过众所周知茉子是忍者，所以很能忍，加上紧身裤勒住她的
      那个比芳乃还要大的翘臀，再配合肚子发出咕噜噜的声音，也太涩了。好像让她穿着紧身裤，直接坐
      在我脸上放屁阿~，或者说便秘几天的茉子，在和将臣训练中，紧身裤包裹的大屁股不断喷出臭屁，裙子一直被吹动，好涩阿！
      `
    },
    {
      name: '丛雨',
      c_num: 3,
      galgame: '千恋万花',
      fart: {
        fart_smell_score: 75,
        fart_count_score: 0,
        fart_endure_score: 50,
        fart_smell: 'T1',
        fart_count: 'T5',
        fart_endure: 'T2.5'
      },
      poop: {
        poop_count_score: 30,
        poop_count: 'T3.5'
      },
      img_url: avatarObj.murasame_avatar,
      introduction: `小丛雨在故事中大多时间都是灵体，不会放屁。但她的肉体是病弱的人设，
      身体不好，肯定产生的屁就很臭，但代谢相对没那么快，也不怎么运动，食量也不大，平时屁量基本没有，
      忍耐屁压力通常不大，她忍耐能力大概一般，而且太幼了确实没啥性趣。
      `
    },
    {
      name: '蕾娜·列支敦瑙尔',
      c_num: 4,
      galgame: '千恋万花',
      fart: {
        fart_smell_score: 80,
        fart_count_score: 75,
        fart_endure_score: 70,
        fart_smell: 'T1',
        fart_count: 'T1',
        fart_endure: 'T1.5'
      },
      poop: {
        poop_count_score: 90,
        poop_count: 'T0.5'
      },
      img_url: avatarObj.rena_avator,
      introduction: `蕾娜是北欧人，根据饮食习惯放屁应该比较臭，而且块头大，食量大，屁量也不小，
      但剧情里蕾娜前世还挺强的，按理说忍耐能力不差，我觉得应该仅次于茉子。
      `
    },
    {
      name: '鞍马小春',
      c_num: 5,
      galgame: '千恋万花',
      fart: {
        fart_smell_score: 61,
        fart_count_score: 50,
        fart_endure_score: 21,
        fart_smell: 'T1.5',
        fart_count: 'T2.5',
        fart_endure: 'T3.5'
      },
      poop: {
        poop_count_score: 70,
        poop_count: 'T1.5'
      },
      img_url: avatarObj.koharu_avator,
      introduction: `将臣可爱的表妹，整个都是可爱风的萝莉，有点小吃货的倾向，
      喜欢吃仙贝这样油炸的食品，屁肯定相对是多且臭的，但不至于像芳乃那样（小春请多吃一些，
      放很多屁在裤袜里给我闻）至于忍耐能力，嗯，应该也不算厉害。我比较推荐的场合，像小春工作时没
      时间上厕所，只能忍不住把屁放在裤袜里，热热的、臭臭的，好羞耻！
      `
    },
    {
      name: '马庭芦花',
      c_num: 6,
      galgame: '千恋万花',
      fart: {
        fart_smell_score: 40,
        fart_count_score: 40,
        fart_endure_score: 40,
        fart_smell: 'T3',
        fart_count: 'T3',
        fart_endure: 'T3'
      },
      poop: {
        poop_count_score: 65,
        poop_count: 'T1.5'
      },
      img_url: avatarObj.roka_avator,
      introduction: `芦花姐还是很在意保养自己身材的，不会乱吃东西，也没其他相关素材，
      总结：个人线相对平淡，就喝酒容易醉这块判断下忍耐力可能不太行，但应该还是比身材小的强一点。
      `
    },
    {
      name: '绫地宁宁',
      c_num: 1,
      galgame: '魔女的夜宴',
      fart: {
        fart_smell_score: 26,
        fart_count_score: 60,
        fart_endure_score: 75,
        fart_smell: 'T3,5',
        fart_count: 'T2',
        fart_endure: 'T1'
      },
      poop: {
        poop_count_score: 100,
        poop_count: 'T0'
      },
      img_url: avatarObj.nene_avatar,
      breathe: './audio/breathe/宁宁喘息.wav',
      introduction: `宁宁，柚子社的0721大帝，不过可惜没有一边0721一边放屁，
      要不然感觉色气值还能加。不过这也能侧面说明宁宁忍耐能力很强，真的只是发情魔女契约太
      厉害了，发情也能忍住那么长时间，屁自然也不在话下，另外宁宁身边总有人暗恋她，引人注目的
      情况很多，但没有关于宁宁放屁的传闻，所以说明她的屁不怎么臭、忍耐能力强，不过宁宁吃过一大碗拉面，
      这说明宁宁很能吃，她的肚子里肯定会积攒较多的屁和大便，需要立刻上厕所，要不然就会躺床上了。
      `
    },
    {
      name: '因幡巡',
      c_num: 2,
      galgame: '魔女的夜宴',
      fart: {
        fart_smell_score: 30,
        fart_count_score: 60,
        fart_endure_score: 50,
        fart_smell: 'T3.5',
        fart_count: 'T2',
        fart_endure: 'T2.5'
      },
      poop: {
        poop_count_score: 40,
        poop_count: 'T3'
      },
      img_url: avatarObj.meguru_avatar,
      breathe: './audio/breathe/因幡巡喘息.wav',
      introduction: `美咕噜最可爱了，贫乳翘臀学妹，简直就是太对我xp了。可主动可被动，还是游戏
      大神，这样的女朋友哪里有（柚子社有）？所以说她都愿意肛交了，这也说明至少她的屁味大多数人是可以接受的，
      虽然她说很脏，但丛cg以及男主舔的样子来看，只不过是美咕噜害羞的接口罢了，毕竟美咕噜现在可是被魔法治好的健康身体，
      除了活动多，屁可能比较多，味道肯定比较淡的，最多只有一点臭。肛交没放出屁，忍耐能力也不会太低。
      `
    },
    {
      name: '椎叶䌷',
      c_num: 3,
      galgame: '魔女的夜宴',
      fart: {
        fart_smell_score: 40,
        fart_count_score: 70,
        fart_endure_score: 30,
        fart_smell: 'T3',
        fart_count: 'T1.5',
        fart_endure: 'T3.5'
      },
      poop: {
        poop_count_score: 66,
        poop_count: 'T1.5'
      },
      img_url: avatarObj.tsumugi_avatar,
      introduction: `虽然很可爱，但不是很对我xp。游戏内有刚跟主角团聊天不久就要上厕所的片段，
      可以分析出䌷的屁量很大，需要经常上厕所解决，而忍耐能力也不太行，气味没什么体现，应该一般。
      `
    },
    {
      name: '户隐憧子',
      c_num: 4,
      galgame: '魔女的夜宴',
      fart: {
        fart_smell_score: 10,
        fart_count_score: 40,
        fart_endure_score: 90,
        fart_smell: 'T4.5',
        fart_count: 'T3',
        fart_endure: 'T0.5'
      },
      poop: {
        poop_count_score: 46,
        poop_count: 'T2.5'
      },
      img_url: avatarObj.toko_avator,
      introduction: `人设很普通的学姐，背景还挺有意思--艾尔普。感觉设定都很普通，屁量方面估计也就正常水平，
      至于气味估计比宁宁还淡，比较作为学生会长比宁宁更受关注，也没人说她的屁怎么。忍耐能力作为前艾尔普应该挺厉害吧。
      `
    },
    {
      name: '假屋和奏',
      c_num: 5,
      galgame: '魔女的夜宴',
      fart: {
        fart_smell_score: 75,
        fart_count_score: 90,
        fart_endure_score: 15,
        fart_smell: 'T1',
        fart_count: 'T0.5',
        fart_endure: 'T4'
      },
      poop: {
        poop_count_score: 86,
        poop_count: 'T0.5'
      },
      img_url: avatarObj.wakana_avator,
      introduction: `青梅竹马+贫乳萝莉，这个组合还是太棒了，而且还有真女主待遇，指专属mv。
      和奏在游戏里的宁宁二周目，还有因为肚子疼没法登台演出的情节，天哪，多么好的素材被柚子社浪费了。
      我好想看和奏在演出时忍不住扭小屁股，肚子因胀气不断传来咕噜声，同时撅起小屁股，“噗呜~”放屁的样子呀，在她放屁的时候跟她告白。
      然后看着她双手捂着菊穴，用力憋屁和屎的模样，小小的身体在舞台上扭动着，臀部翘起来，屁眼不断传来屎前屁的“噗噗噗噗~”声音，
      然后闻着从她的小屁眼里散发的臭味......我真的好喜欢她呀。好吧，总之和奏不敢上场，说明她肠胃确实不好。
      肠胃不好的和奏肯定就会经常放屁，想拉屎，忍耐的美少女最涩了。所以和奏的屁应该是又臭量又多。忍耐能力也弱。
      `
    }
  ])

  return {
    girlsArr,
    girlsData
  }
})
