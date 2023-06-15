import { $root, result } from './data.js';
import { render } from './router.js';

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

// api 사용 후 데이터 가공
export function generateName(param) {

    const data = [{
        role: 'system',
        content: 'assistant는 친절한 답변가이면서 작명을 잘한다. 마치 작명가처럼 사용자가 원하는 요청사항에 알맞게 적절한 이름을 센스있게 지어주고 그 이름이 가진 의미와 추천 이유를 상세하게 설명해준다'
    }, {
        role: 'user',
        content: `내가 개명을 하려고 하는데 이름을 추천해줬으면 좋겠어.
        요구사항은 6~7가지 정도를 줄텐데, 요구사항을 적절히 만족한 이름을 선별해서 5가지의 이름을 추천해줘

        각각의 요구사항에 맞는 이름이 아니라 모든 요구사항에 만족한 이름을 한 가지씩 선별해서 총 5가지를 추천해주면 돼
        `
    },{
        role: 'assistant',
        content: `
        요구사항에 맞춘 적절한 이름을 5가지를 지어드리도록 하겠습니다
        `
    },{
        role: 'user',
        content: `현대 한국 사람의 성명은 한 음절이나 두 음절의 성을 시작으로 하고 이후에 두 음절 이상의 이름으로 이뤄져 있어. 한 음절의 이름은 외자라고 해

        다음을 유의해 줘

        1. 성과 이름을 명확히 구분해야 돼
        예를 들어 '선진호'라는 성명이 있으면 성은 '선', 이름은 '진호'야, '심청'이라는 성명이 있으면 성은 '심', 이름은 '청'이야

        2. 성과 이름의 첫 음절이 동일한 이름은 추천하지 말아줘
        예를 들어 '김'씨 성에 어울리는 이름을 추천해달라고 할 때 '김'으로 시작하는 이름은 추천하지 말아줘
        `
    },{
        role: 'assistant',
        content: `
        성을 알려주시면 그에 어울리는 이름을 생각해보겠습니다
        성과 이름의 첫 번째 음절이 동일한 이름은 추천해드리지않겠습니다
        `
    },{
        role: 'user',
        content: `답변은 문장은 제외하고 json으로만 줘

        답변은 총 3가지의 변수를 사용해줘
        data는 너가 추천해준 이름을 담은 리스트를 담아줘
        message에는 이름을 추천해주기 전에 기대를 담은 메시지를 담아줘
        ps는 이름을 추천해준 뒤 어떤 의도로 지은건지 설명해줘
        
        data 리스트의 형식은 다음과 같아
        data:[{name:'', value:'', reason:''},{name:'', value:'', reason:''},]

        name에는 추천 이름이 무엇인지 알려줘,
        value에는 이름이 내포한 의미를 알려줘,
        reason에는 니가 그 이름을 생각한 이유 알려줘
        그리고 단어를 강조하기 위해 홑따옴표를 사용하지 말아줘
        `
    },{
        role: 'assistant',
        content: `message, data와 ps 변수에 설명하신대로 데이터를 저장한 뒤, 답변은 문장은 제외하고 JSON으로만 답변드릴게요.
        단어를 강조하기 위해 홑따옴표를 사용하지 않을게요.
        `
    },{
        role: 'user',
        content: `
        만약 과거에 인기있었던 이름을 요청하면 1930년대에서 1980년대까지의 이름 중에서 추천해줘
        `
    },{
        role: 'assistant',
        content: `
        과거에 있었던 이름은 1930년대에서 1980년대까지의 이름 중에서 추천해드리도록 하겠습니다
        `
    },{
        role: 'user',
        content: `이제 이름을 만들어줘
        요구사항은 다음과 같아
        1. '이'씨 성과 어울리는 이름을 추천해줘
        2. 여성에 어울리는 이름을 추천해줘
        3. 한자 이름으로 추천해줘
        4. 2 글자 이름을 이름을 추천해줘
        5. 일반적인 이름으로 추천해줘
        6. 결과는 문장은 제외하고 json으로만 해줘
        `        
    },{
        role: 'assistant',
        content: `{"message":"이씨에 적절한 이름을 생각해봤어요. 제 작명 센스가 어떤지 기대가 되실려나요?", "data":[{"name":"예은 (藝恩)", "value":"재주 예/심을 예(藝)은(는) 예술을 의미하며, 은혜 은(恩)은 은혜나 은총을 의미합니다. 예은은 예술적인 은혜나 예술에 은혜를 받은 사람과 같은 의미를 가지고 있습니다.", "reason":"예은을 사용하시면 아마도 예술적인 사람으로서 거듭날지도 몰라요! 예술적인 것을 좋아하시면 사용해드리기를 권해드릴게요"}, {"name":"소민 (素敏)", "value": "본디 소/흴 소(素)은(는) 순수한, 단순한이라는 뜻을 가지고 있고, 민첩할 민(敏)은 민첩한, 영리한을 의미합니다. 소민은 순수하고 영리한 사람이나 단순하지만 민첩한 사람과 같은 의미를 가지고 있습니다", "reason":"부탁하신 이씨와 어울리며 소민이라는 이름을 사용하시면 순수하면서도 어린마음을 마음속에 간직할 수 있을 거 같아요" },{"name":"효린 (孝麟)", "value":"효도 효(孝)는 효도, 부모를 공경함을 의미하며, 기린 린(인)(麟)은 기린을 의미합니다. 효린은 효도하는 기린이나 부모를 공경하는 사람과 같은 의미를 가지고 있습니다.", "reason": "부모님에게 효도하는 효자(녀)가 되자는 의미에서 이런 이름은 어떨까요?"},{"name":"소진 (素珍)", "value":"본디 소/흴 소(素)은(는) 순수한, 단순한이라는 뜻을 가지고 있고, 보배 진(珍)은 귀중한, 소중한을 의미합니다. 소진은 순수하고 귀중한 사람이나 단순하지만 소중한 사람과 같은 의미를 가지고 있습니다.", "reason":"소진이라는 이름이 괜찮은 거 같아서 추천드려요. 순수하고 귀중한 당신에게 추천드릴게요"}, {"name":"영미 (英美)", "value":"꽃부리 영/뛰어날 영(英)은(는) 영적인, 뛰어난이라는 뜻을 가지고 있고, 아름다울 미(美)는 아름다움을 의미합니다. 영미는 영적으로 아름다운 사람이나 뛰어남과 아름다움을 지닌 사람과 같은 의미를 가지고 있습니다.", "reason":"이 이름을 사용하시면 여러가지의 아름다움과 무엇을 하시든 도드라지게 잘 해내실거에요!"}], "ps":"이씨와 어울리는 이름으로 소중함과 아름다움에 초점을 둔 이름들이 포함되어 있습니다. 제가 만들어드린 이름이 생각보다 괜찮지 않나요? 저는 다시 만들어드릴 수 있으니 언제나 요청해주세요 !"}`
    },{
        role: 'user',
        content: param,
    }];

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(async data => {
            const msg1 = extractMessage(data);
            let replyMsg = msg1;
            let jsonReplyMsg;

            // gpt 메시지 전송 멈춤시 이어받기
            if (isStoppedReceive(data)) {
                const continueData = await continueReceive();
                const msg2 = extractMessage(continueData);
                const combineMsg = mergeMessage(msg1, msg2);
                replyMsg = combineMsg;
            }

            
            console.log(replyMsg);
            try {
                jsonReplyMsg = JSON.parse(replyMsg);
            } catch (e) {
                return render($root, '/error');
            }
            console.log('결과 '+jsonReplyMsg);
            
            registResult(jsonReplyMsg);
            render($root, '/name-generator/done');
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
        body: JSON.stringify([{role: 'user', content:'continue'}]),
    })
    return await data.json();

}

function mergeMessage(msg1, msg2) {
    return msg1 + msg2;
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
    result.setPS(content.ps);

    const names = content.data;
    names.forEach(name => {
        result.push(name);
    });
}