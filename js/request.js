import { $app, result } from './data.js';
import { render } from './router.js';

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

// api 사용 후 데이터 가공
export function generateName(param) {

    const data = [{
        role: 'system',
        content: 'assistant는 친절한 답변가이면서 작명을 잘한다. 마치 작명가처럼 사용자가 원하는 요청사항에 알맞게 적절한 이름을 지어주고 그 이름이 가진 의미와 추천 이유를 초등학생에게 알려주듯 상세하게 설명해준다'
    }, {
        role: 'user',
        content: `내가 개명을 하려고 하는데 이름을 추천해줬으면 좋겠어. 그 전에 설명부터 할게.
        설명은 성명의 구조, 답변 형식, 이름의 종류를 순서로 설명하고 답변 예시를 줄테니까 이것을 참고해. 

        그리고 마지막엔 요구사항을 줄테니 이 요구사항을 토대로 적절한 이름을 지어주고 답변 형식에 맞추어서 알려줘.
        요구사항은 5~6가지 정도를 줄텐데, 요구사항을 적절히 만족한 이름을 선별해서 5가지의 이름을 추천해줘.

        각각의 요구사항에 맞는 이름이 아니라 모든 요구사항에 만족한 이름을 한 가지씩 선별해서 총 5가지를 추천해주면 돼.
        너가 추천한 이름으로 한 사람의 이름이 바뀔 수 있으니 이름이 가진 의미를 최대한 상세하게 풀어서 적어줬으면 좋겠어.
        
        그리고 내용을 작성할 때 너무 관련없는 내용은 지양해줘.
        이름과 연관있는 내용만 작성해줘야 알아볼 수 있거든.`
    },{
        role: 'user',
        content: `먼저 성명의 구조에 대해 설명해줄게. 
        현대 한국 사람의 성명은 한 음절이나 두 음절의 성을 시작으로 하고 이후에 두 음절 이상의 이름으로 이뤄져 있어. 한 음절의 이름은 외자라고 해.
        너는 성명에서 성을 제외한 이름만 지어주면 돼.

        단 유의해야 될 점이 있어.

        1. 성과 이름을 명확히 구분해야 돼
        예를 들어 '선진호'라는 성명이 있으면 성은 '선', 이름은 '진호'야, '심청'이라는 성명이 있으면 성은 '심', 이름은 '청'이야.이걸 구분을 하는 게 중요해. 
        만약 너가 '인성'이라는 이름을 추천해준다면 배우 '조인성'을 추천해줄 수 있겠지. 
        '조'가 성이고 '인성'이 이름이니까. 
        그럼 '정진'이라는 이름을 추천해주면 '정진우'라는 성명을 가진 인물을 소개해주면 안돼. 
        왜냐하면 '정진우'는 '정'이 성이고 '진우'가 이름이니까 추천해준 '정진'과 이름이 동일하지 않기 때문이지.

        2. 성과 이름의 첫 음절이 동일한 이름은 추천하지 말아줘
        예를 들어 '김'씨 성에 어울리는 이름을 추천해달라고 할 때 '김'으로 시작하는 이름은 추천하지 말아줘
        성과 이름의 첫 음절이 동일하다면 우스꽝스러울 수 있어서 추천하지 말아줬으면 좋겠어.

        내가 요구사항에 어떤 성에 어울리는 이름을 추천해달라고 할텐데, 위의 2가지 유의점을 고려해서 이름을 지어줘.
        `
    },{
        role: 'user',
        content: `답변 형식에 대해 설명해줄게.

        내가 너의 답변을 받아서 JSON 형태로 변환하려고 해.
        그래서 JSON 형태로 변환할 수 있게끔 양식에 맞춰서 답변을 주도록 했으면 좋겠어.

        답변은 총 3가지의 변수에 적절한 내용을 담아서 주면 돼.
        data, message, ps

        data는 너가 추천해준 이름을 담은 리스트야
        message에는 그 외에 하고 싶은 말을 작성하면 돼
        ps는 이름을 추천해준 뒤 추가적으로 하고싶은 말이 있으면 여기에 작성해줘
        
        data 리스트의 형식은 다음과 같아
        data=[
            {"name":추천이름, "value":이름이 내포한 의미, "reason":추천 이유, "other":이름을 사용한 유명인물},{"name":추천이름, "value":이름이 내포한 의미, "reason":추천 이유, "other":이름을 사용한 유명인물},
            {"name":추천이름, "value":이름이 내포한 의미, "reason":추천 이유, "other":이름을 사용한 유명인물},
            {"name":추천이름, "value":이름이 내포한 의미, "reason":추천 이유, "other":이름을 사용한 유명인물},
            {"name":추천이름, "value":이름이 내포한 의미, "reason":추천 이유, "other":이름을 사용한 유명인물}
        ]
        위처럼 JSON 객체형태로 총 5개의 추천 내역 객체를 리스트에 담아서 추천해줘.

        name 키 값에는 추천 이름,
        value 키 값에는 이름이 내포한 의미를 상세히 작성해줘. 단순히 이름을 해석하는게 아니라 니가 나름대로 의미를 꾸며줘,
        reason 키 값에는 니가 그 이름을 생각한 이유를 작성해줘. 예를 들어 "어떠한 사람이 되길 바라는 마음에서"라는 내가 잘되길 바라는 마음이라던지, "이러한 이름을 쓰면 이러한 기운이나 능력을 받을지도 몰라요~"라는 유머스러운 문장을 줬으면 좋겠어 억지가 있어도 괜찮아. 너가 추천한 문장을 보면서 웃음을 짓고 싶어. 
        other 키 값에는 추천한 이름을 사용하는 동명이인을 소개해줘. 그 사람이 어떤 사람인지도 소개했으면 좋겠어. 만약 추천해줄 인물이 없다면 해당 객체의 other 키의 값은 빈 문자열 처리를 해줘. 

        그럼 답변 양식은 message='전달하고 싶은 말', data='추천 이름 객체 리스트', ps='추가적으로 하고싶은 말' 형태로 주면 돼.
        물론 답변은 한글로 줘야되는거 알지?
        `
    },{
        role: 'user',
        content: `이름의 종류에 대해 설명해줄게.
        이름은 한자 이름, 순우리말 이름, 영어 이름, 기독교적 의미를 내포한 이름들 중에서 내가 요청한 이름을 지어줘. 
        만약 과거에 인기있었던 이름을 요청하면 1930년대에서 1980년대까지의 이름 중에서 추천해줘.
        만약 한자 이름을 추천하면 한자를 부르는 이름을 value(이름이 내포한 의미)에 알려줘. 예를 들어 "영미 (英美)"라는 이름이 있으면 value 값에 너가 꾸민 의미와 더불어서 "꽃부리 영/뛰어날 영(英)"과 "아름다울 미(美)"라고 알려주고 각각 무슨 의미를 갖는지를 설명을 덧붙여줘.`
    },{
        role: 'user',
        content: `답변 예시를 보여줄게. 이걸 참고하면 돼.

        message="네 '이'씨에 적절한 이름을 골라드릴게요. 제 작명 센스가 어떤지 기대가 되실려나요?", 
        data=[
            {
                name:"예은 (藝恩)", 
                value:"'재주 예/심을 예(藝)'은(는)'예술'을 의미하며, '은혜 은(恩)'은 '은혜'나 '은총'을 의미합니다. '예은'은 '예술적인 은혜'나 '예술에 은혜를 받은 사람'과 같은 의미를 가지고 있습니다.", 
                reason:"이 이름을 사용하시면 아마도 은연중에 예술적인 사람으로 거듭날지도 몰라요!", 
                other:"예은을 사용하고 있는 인물로는 그룹 원더걸스 멤버 예은이 있습니다. 예은은 매력적인 외모와 감성적인 보이스로 인기를 얻고 있습니다"
            }, 
            {
                name:"소민 (素敏)", 
                value: "'본디 소/흴 소(素)'은(는) '순수한', '단순한'이라는 뜻을 가지고 있고, '민첩할 민(敏)'은 '민첩한', '영리한'을 의미합니다. '소민'은 '순수하고 영리한 사람'이나 '단순하지만 민첩한 사람'과 같은 의미를 가지고 있습니다", 
                reason:"당신이 순수하고 수수한 분이실 거 같아서 추천해드려요!", 
                other:"소민을 사용하고 있는 인물로는 배우 전소민이 있습니다. 전소민은 배우로서 출중한 연기력을 보여주며 예능프로그램 런닝맨에 출연하고 있습니다"}, 
            },
            {
                name:"효린 (孝麟)", 
                value:"'효도 효(孝)'는 '효도', '부모를 공경함'을 의미하며, '기린 린(인)(麟)'은 '기린'을 의미합니다.", reason:'효린'은 '효도하는 기린'이나 '부모를 공경하는 사람'과 같은 의미를 가지고 있습니다. 부모님에게 효도하는 효자(녀)가 되자는 의미에서 이런 이름은 어떨까요?", 
                other:"효린을 사용하고 있는 인물로는 시스타 멤버의 효린이 있습니다. 효린은 허스키한 가성과 시원한 가창력으로 대중들에게 인기를 얻고 있습니다."
            },
            {
                name:"소진 (素珍)", 
                value:"'본디 소/흴 소(素)'은(는) '순수한', '단순한'이라는 뜻을 가지고 있고, '보배 진(珍)'은 '귀중한', '소중한'을 의미합니다. '소진'은 '순수하고 귀중한 사람'이나 '단순하지만 소중한 사람'과 같은 의미를 가지고 있습니다.", 
                reason:"부탁하신 성씨와 어울리며, 귀하의 성격을 순수하고 소중한 사람으로 나타낼 수 있을 것 같아서 추천해드려요", person:"소진을 사용하고 있는 인물로는 중국 전국시대의 대표적인 종횡가 중 소진이라는 사람이 있습니다. 진나라를 제외한 6국이 힘을 합쳐 대항하자는 합종책을 기획한 전략가입니다"
            }, 
            {
                name:"영미 (英美)", 
                value:"'꽃부리 영/뛰어날 영(英)'은(는) '영적인', '뛰어난'이라는 뜻을 가지고 있고, '아름다울 미(美)'는 '아름다움'을 의미합니다. '영미''는 '영적으로 아름다운 사람'이나 '뛰어남과 아름다움을 지닌 사람'과 같은 의미를 가지고 있습니다.", 
                reason:"이 이름은 부탁하신 성씨와 어울리며, 귀하의 뛰어남과 아름다움을 나타낼 수 있을 것입니다.", 
                other:""
            }, 
            ps="위와 같이 서로 다른 5개의 추천 이름을 한자 이름으로 제공해드릴 수 있습니다. 특히, '이'씨와 어울리는 이름으로 다양한 덕목과 빛에 초점을 둔 이름들이 포함되어 있습니다. 또한 2글자와 일반적인 이름으로도 추천해드릴 수 있으며, 모든 이름은 남성에게 어울리는 이름으로 선정되었습니다."`
    },{
        role: 'user',
        content: param,
    }];

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(async data => {
            const msg1 = extractMessage(data);
            let replyMsg = msg1;

            // gpt 메시지 전송 중지시 이어받기
            if (isStoppedReceive(data)) {
                const continueData = await continueReceive();
                const msg2 = extractMessage(continueData);
                const combineMsg = mergeMessage(msg1, msg2);
                replyMsg = combineMsg;
            }

            console.log(replyMsg);
            const jsonReplyMsg = convertToJson(replyMsg);
            console.log(jsonReplyMsg);
            if (isConvertFailure(jsonReplyMsg)) {
                return render($app, '/error');
            }

            registResult(jsonReplyMsg);
            render($app, '/done');
        })
        .catch(err => {
            console.log(err); 
        });
}

/**
 * 
 * @param {string} data: gpt 전송 메시지
 * @returns gpt 메시지 중 답변 본문 추출(content)
 */
function extractMessage(data) {
    const gptMessage = data['choices'][0]['message']['content'];
    return gptMessage;
}

/**
 * 
 * @param {string} data: gpt 전송 메시지
 * @returns gpt 메시지가 중단되면 true
 */
function isStoppedReceive(data) {
    const finishReason = data['choices'][0]['finish_reason'];
    return finishReason === 'length';
}

/**
 * gpt 답변 내용이 길어서 중지될 경우, 이어받기
 * @returns 중지된 잔여 메시지
 */
async function continueReceive() {

    const data = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        body: JSON.stringify([{role: 'user', content:'continue'}]),
    })
    return await data.json();

}

function mergeMessage(msg1, msg2) {
    return msg1 + msg2;
}

function convertToJson(msg) {
    const regex = /data\s*\:\s*.*\s*message\s*\:\s*.*\s*(ps\s*\:\s*.*)?/gm;
    const extractDict = msg.match(regex);
    return JSON.parse(extractDict);
}

function isConvertFailure(msg) {
    return msg == null;
}

/**
 * 
 * @param {JSON} content: gpt 답변 내용
 * 전역변수 result에 답변 내용 등록
 */
function registResult(content) {
    result.setMessage(content.message);

    if (content.ps !== undefined && content.ps !== '') {
        result.setMessage(content.ps);
    }

    const names = content.data;
    names.forEach(name => {
        result.push(name);
    });
}