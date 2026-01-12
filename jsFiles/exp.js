

const randomAssignment = Math.floor(Math.random() * 3) + 1; 
//randomAssignment = 1 = cardinality
//randomAssignment = 2 = uniformity
//randomAssignment = 3 = diagnosticity
console.log("RandomAssignment is " + randomAssignment);


const company = Math.floor(Math.random() * 3) + 1; 
//company = 1 = FoodFast
//company = 2 = NextConnect
//company = 3 = WarehouseCo
console.log("Company is " + company);


const order = Math.floor(Math.random() * 6) + 1;
//1 = increase flow, decrease flow, effort 
//2 = increase flow, effort, decrease flow 
//3 = effort, increase flow, decrease flow
//4 = effort, decrease flow, increase flow
//5 = decrease flow, increase flow, effort 
//6 = decrease flow, effort, increase flow 
console.log("Order is " + order)

const exp = (function() {

var p = {};


   /*
    *
    *   INSTRUCTIONS
    *
    */

let round = 0; 

var bigNumber =  `$16`;
var smallNumber = `$4`;


var textNew = {
    company: company === 1 ? 'FoodFast' :
             company === 2 ? 'NextConnect' : 'WarehouseCo',

    imageCompany: company === 1 ? 'foodfast' :
                company === 2 ? 'nextconnect' : 'warehouseco',

    imageProgram: company === 1 ? 'foodfaststars' :
                company === 2 ? 'nextconnectachieve' : 'warehousecochampions',
    
    employeeLong: company === 1 ? 'driver' :
                company === 2 ? 'call center agent' : 'warehouse packer',

    employee: company === 1 ? 'driver' :
                company === 2 ? 'agent' : 'packer',

    An: company === 1 ? 'A' :
                company === 2 ? 'An' : 'A',

    Capitalizedemployees: company === 1 ? 'Drivers' :
                company === 2 ? 'Call center agents' : 'Packers',
    
    programName: company === 1 ? 'FoodFast Stars' :
                 company === 2 ? `NextConnect Achievers` : `WarehouseCo Champions`,
    
    industry: company === 1 ? 'food delivery' :
                company === 2 ? 'call center' : 'warehouse packing',

    programNameone: company === 1 ? 'FoodFast Star' :
                 company === 2 ? `NextConnect Achiever` : `WarehouseCo Champions`,

    metric: company === 1 ? 'driving time' :
                 company === 2 ? `call time` : `packing time`
};

const goalCategory = {
    first:  (order === 1 || order === 2) ? "maxEngage" :
            (order === 3 || order === 4) ? "maxEffort" :
            "minEngage",

    second: (order === 3 || order === 5) ? "maxEngage" :
            (order === 2 || order === 6) ? "maxEffort" :
            "minEngage",

    third:  (order === 4 || order === 6) ? "maxEngage" :
            (order === 1 || order === 5) ? "maxEffort" :
            "minEngage"
};

const goalText = {
    maxEngage: {
        goal: "to <b>feel more immersed and engaged in their work</b>",
        description: "<b>in the zone</b> while working, so they feel totally <b>absorbed</b> in what they're doing",
        remember: "maximize feelings of immersion and engagement",
        rememberAgain: `what will keep ${textNew.employee}s feeling maximally absorbed in their work`
    },
    maxEffort: {
        goal: "to <b>work as hard as possible</b>",
        description: "to <b>exert maximum effort</b> while working",
        remember: `get ${textNew.employee}s to work as hard as possible`,
        rememberAgain: `making ${textNew.employee}s exert maximum effort`
    },
    minEngage: {
        goal: "to <b>feel less immersed and engaged in their work</b>",
        description: "to <b>zone out</b> while working, so they feel totally <b>unabsorbed</b> in what they're doing",
        remember: "minimize feelings of immersion and engagement",
        rememberAgain: `what will keep ${textNew.employee}s feeling minimally absorbed in their work`
    }
};

var firstGoal              = goalText[goalCategory.first].goal;
var firstGoalDescription   = goalText[goalCategory.first].description;
var rememberGoal           = goalText[goalCategory.first].remember;
var rememberGoalAgain      = goalText[goalCategory.first].rememberAgain;

var secondGoal             = goalText[goalCategory.second].goal;
var secondGoalDescription  = goalText[goalCategory.second].description;
var rememberGoal2          = goalText[goalCategory.second].remember;
var rememberGoalAgain2     = goalText[goalCategory.second].rememberAgain;

var thirdGoal              = goalText[goalCategory.third].goal;
var thirdGoalDescription   = goalText[goalCategory.third].description;
var rememberGoal3          = goalText[goalCategory.third].remember;
var rememberGoalAgain3     = goalText[goalCategory.third].rememberAgain;

var conditionGoal = 
    randomAssignment === 1 ? "when choosing between the three incentive structures" :
    randomAssignment === 2 ? `when deciding what percentage of ${textNew.employee}s will receive a ${bigNumber} bonus` :
    `when deciding the two probabilities`;

var stillConditionGoal = 
    randomAssignment === 1 ? "to choose between the three incentive structures" :
    randomAssignment === 2 ? `to decide what percentage of ${textNew.employee}s will receive a ${bigNumber} bonus` :
    `to choose the (1) probability of a ${bigNumber} bonus for ${textNew.employee}s in the top 50% and the (2) probability of a ${bigNumber} bonus for ${textNew.employee}s in the bottom 50%`;

const introPage = [
        `<div class='tight'>
            <img src="./img/${textNew.imageCompany}.png" style="width:40%; height:40%">
            <p>You're the manager of ${textNew.company}.</p>
        </div>`,

        `<div class='tight'>
            <img src="./img/${textNew.imageCompany}.png" style="width:40%; height:40%">
            <p>${textNew.company} is a ${textNew.industry} company. </p>
        </div>`,

        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>${textNew.company} is launching a new incentive program for ${textNew.employeeLong}s.</p>
            <p>The program is called <strong>"${textNew.programName}."</strong> </p>
        </div>`,

        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>For now, we're interested in how you'd design the "${textNew.programName}" Program to get ${textNew.employee}s ${firstGoal}.
            In other words, we're interested in how you'd get ${textNew.employee}s ${firstGoalDescription}.</p>
            <p>Proceed to learn more about the "${textNew.programName}" Program.</p>
        </div>`,
];

const rememberPage = [
        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Remember: <strong>We're interested solely in how you'd ${rememberGoal}.</strong>
            Therefore, ${conditionGoal}, base your decision entirely on ${rememberGoalAgain}.</p>
        </div>`
];

const introPageAgain = [
        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Now, we're interested in how you'd design "${textNew.programName}" to achieve a different aim: to get ${textNew.employee}s ${secondGoal}.
            In other words, we're now interested in how you'd get ${textNew.employee}s ${secondGoalDescription}.</p>
        </div>`,

        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Your job is still ${stillConditionGoal}.</p>
        </div>`,

        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Remember: <strong>We're now solely interested in how you'd ${rememberGoal2}.</strong>
            Therefore, ${conditionGoal}, base your decision entirely on ${rememberGoalAgain2}.</p>
        </div>`
];

const introPageAgainAgain = [
        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Now, we're interested in how you'd design "${textNew.programName}" to achieve yet another aim: to get ${textNew.employee}s ${thirdGoal}.
            In other words, we're now interested in how you'd get ${textNew.employee}s ${thirdGoalDescription}.</p>
        </div>`,

        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Your job is still ${stillConditionGoal}.</p>
        </div>`,

        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Remember: <strong>We're now solely interesting in how you'd ${rememberGoal3}.</strong>
            Therefore, ${conditionGoal}, base your decision entirely on ${rememberGoalAgain3}.</p>
        </div>`
];


const uniformityPage = [
        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>At the end of each day, each ${textNew.employee} is ranked from worst-performing<br>to best-performing in terms of average ${textNew.metric}.</p>
            <p><strong>${textNew.An} ${textNew.employee}'s rank determines the size of their bonus for the day.</strong></p>
        </div>`,

        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Each day, the highest-ranked ${textNew.employee}s each receive a <strong>${bigNumber} bonus</strong>.<br>
            All remaining ${textNew.employee}s receive a <strong>${smallNumber} bonus</strong>.</p>
            <p><strong>You'll choose the percentage of ${textNew.employee}s who will receive the ${bigNumber} bonus.</strong></p>
        </div>`
];

function uniformityPage1(round) {
    const remember = getRememberGoalForRound(round);
    return `
        <p>Your job is to decide which percentage of daily top-ranked ${textNew.employee}s will receive the bigger ${bigNumber} bonus.</p>
        <p>Bottom-ranked ${textNew.employee}s will receive the smaller ${smallNumber} bonus.</p>
        <p>Your sole objective is to ${remember}.</p>
        </div>`;
}

const diagnosticityPage = [
        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Every day, each ${textNew.employee} has some chance of getting a <strong>${bigNumber} bonus</strong>. Those who don't get a ${bigNumber} bonus get a <strong>${smallNumber} bonus</strong>.
            ${textNew.An} ${textNew.employee}'s chance of getting a ${bigNumber} bonus depends on whether they're ranked in the <strong>top or bottom 50%</strong>.</p>
            <p>Your job is to choose two probabilities:</p>
            <p><strong>(1) The probability of a ${bigNumber} bonus for ${textNew.employee}s in the top 50%</strong><br>
            <strong>(2) The probability of a ${bigNumber} bonus for ${textNew.employee}s in the bottom 50%</strong></p>
         </div>`
];

function diagnosticityPage1(round) {
    const remember = getRememberGoalForRound(round);
    return `
            <p>Your job is to choose the probability of a ${bigNumber} bonus for ${textNew.employee}s in the top 50%, and the probability of a ${bigNumber} bonus for ${textNew.employee}s in the bottom 50%. </p>
            <p>Your sole objective is to ${remember}.</p>
        </div>`;
}

const cardinalityPage = [
        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>At the end of each day, each ${textNew.employee} is ranked from worst-performing<br>to best-performing in terms of average ${textNew.metric}.</p>
            <p><strong>${textNew.An} ${textNew.employee}'s rank determines the size of their bonus for the day.</strong></p>
        </div>`,

        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Your job is to decide on <strong>one</strong> of three different incentive structures.</p>
            <p>Click "Next" to learn about each incentive structure.</p>
        </div>`,

        `<div class='slider'>
            <p><strong>Incentive Structure 1</strong></p>
            <p>Each day, all ${textNew.employee}s ranked in the top 50% earn a ${bigNumber} bonus,</br>
            <p>and all ${textNew.employee}s ranked in the bottom 50% earn a ${smallNumber} bonus.</p>
            <img src="./img/slider1.png" style="width:80%; height:80%">
        </div>`,

        `<div class='slider'>
            <p><strong>Incentive Structure 2</strong></p>
            <p>Each day, all ${textNew.employee}s ranked in the top 33% earn a ${bigNumber} bonus,</p>
            <p>all ${textNew.employee}s ranked in the middle 33% earn a $10 bonus,</p>
            <p>and all ${textNew.employee}s ranked in the bottom 33% earn a ${smallNumber} bonus.</p>
            <img src="./img/slider2.png" style="width:80%; height:80%">
        </div>`,

        `<div class='slider'>
            <p><strong>Incentive Structure 3</strong></p>
            <p>Each day, all ${textNew.employee}s ranked in the top 25% earn a ${bigNumber} bonus,</p>
            <p>all ${textNew.employee}s ranked in the middle 50% - 75% earn a $12 bonus,</p>
            <p>all ${textNew.employee}s ranked in the middle 25% - 50% earn a $8 bonus,</p>
            <p>and all ${textNew.employee}s ranked in the bottom 25% earn a ${smallNumber}.</p>
            <img src="./img/slider3.png" style="width:80%; height:80%">
        </div>`
];

function cardinalityPage1(round) {
    const remember = getRememberGoalForRound(round);
    return `
        <p>Your job is to decide on one of 3 incentive structures.</p>
        <img src="./img/slider1.png" style="width:80%; height:80%">
        <img src="./img/slider2.png" style="width:80%; height:80%">
        <img src="./img/slider3.png" style="width:80%; height:80%">
        <p>Your sole objective is to ${remember}.</p>
    `;
}

function getRememberGoalForRound(round) {
    if (round === 0) return rememberGoal;
    if (round === 1) return rememberGoal2;
    return rememberGoal3;   // round === 2 or 3
}

const consent = `
    <div class='parent' style='height: 1000px; width: 1000px'>
    <p><b>Consent Form<br>

    <p><b>Description</b><br>
    You are invited to participate in a research study on how humans enjoy different tasks. You'll be asked to participate in a short game that involves spinning the wheel. Then you'll be asked to answer various questions about your experience.</p>

    <p><b>Time Involvement</b><br>
    Your participation will take approximately 15 minutes. 

    <p><b>Risks and Benefits</b><br>
    The risks associated with this study are not anticipated to be beyond those involved in normal, daily computer use. There are no foreseeable psychological risks and benefits beyond those involved in normal, daily life. The benefits which may reasonably be expected to result from this study are none. We cannot and do not guarantee or promise that you will receive any benefits from this study.
    
    <p><b>Payment</b><br>
    You will receive $2.75 payment for your participation. 

     <p><b>Payment</b><br>
    If you have read this form and have decided to participate in this project, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at any time without penalty or loss of benefits to which you are otherwise entitled. The alternative is not to participate. You have the right to refuse to answer particular questions. The results of this research study may be presented at scientific or professional meetings or published in scientific journals. Your individual privacy will be maintained in all published and written data resulting from the study.
    In accordance with scientific norms, the data from this study may be used or shared with other researchers for future research (after removing personally identifying information) without additional consent from you.

    <p><b>Contact Information:</b><br>
    Questions: If you have any questions, concerns or complaints about this research, its procedures, risks and benefits, contact the Protocol Director, Josephine Tan (josetan@stanford.edu) or Assistant Professor David Melnikoff (dmelnik@stanford.edu).
    Independent Contact: If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650)-723-2480 or toll free at 1-866-680-2906, or email at irbnonmed@stanford.edu. You can also write to the Stanford IRB, Stanford University, 1705 El Camino Real, Palo Alto, CA 94306. </p>
    <p>If you agree to participate, press the "Next" button to indicate that you consent to participate in the study.</p>`


const attnChk_intro = {
    type: jsPsychSurveyMultiChoice,

    preamble: `
        <div class='parent' style="text-align:left">
            <p><strong>Welcome to the Manager Challenge!</strong></p>
            <p>We are interested in your intuitions about human motivation.</p>
            <p>
                You will play the role of a manager in an organization and design
                an incentive program to shape employee motivation.
            </p>
            <p>Specifically, you will be asked to design an incentive program that you think would: <ul> <li>Maximize how immersed and engaged employees feel in their work</li> <li>Minimize how immersed and engaged employees feel in their work</li> <li>Maximize how much effort employees exert</li> </ul>
            <p><strong>Please answer the following question to continue.</strong></p>
        </div>
    `,

    questions: [
        {
            prompt: "I will design an incentive program that will...",
            name: "attn_intro",
            options: [
                "Maximize how immersed and engaged employees feel in their work",
                "Minimize how immersed and engaged employees feel in their work",
                "Maximize how much effort employees exert",
                "All of the above"
            ],
            required: true
        }
    ],

    randomize_question_order: false,

        on_finish: (data) => {
            const correctAnswer = "All of the above";
            const response = data.response.attn_intro;

            data.totalErrors = response === correctAnswer ? 0 : 1;
            data.trialName = "attnChk_intro";
        }
};


function makeIntro() {
return {
    type: jsPsychInstructions,
    pages: () => [...introPage],
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
    on_finish: (data) => {
        data.round = round;
        jsPsych.data.addProperties({ round });
        jsPsych.data.addProperties({ order });
        jsPsych.data.addProperties({ company });
        jsPsych.data.addProperties({ randomAssignment });
        jsPsych.data.addProperties({
            uniformity: null,
            cardinality: null,
            diagnosticity1: null,
            diagnosticity2: null
        });
    }
    };
}

makeIntro = makeIntro()

function makeRememberPage() {
  return {
    type: jsPsychInstructions,
    pages: () => {
      const round = jsPsych.data.getLastTrialData().values()[0].round;
      return [...rememberPage];
    },
    show_clickable_nav: true,
    post_trial_gap: 500,
    allow_keys: false,
    on_finish: (data) => {
      const round = jsPsych.data.getLastTrialData().values()[0].round;
      data.round = round;
      data.trialName = "rememberPage";
    }
  };
}

makeRememberPage = makeRememberPage() 

const uniformity = {
        type: jsPsychInstructions,
        pages: uniformityPage,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
};

const cardinality = {
        type: jsPsychInstructions,
        pages: cardinalityPage,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
};

const diagnosticity = {
        type: jsPsychInstructions,
        pages: diagnosticityPage,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
};

function makeIntroAgain() {
  return {
    type: jsPsychInstructions,
    pages: () => {
      const round = jsPsych.data.getLastTrialData().values()[0].round;
      return [...introPageAgain];
    },
    show_clickable_nav: true,
    post_trial_gap: 500,
    allow_keys: false,
    on_finish: (data) => {
        const prevRound = jsPsych.data.get().values().slice(-1)[0].round;
        const round = prevRound + 1;

      data.round = round;
      data.trialName = "introAgain";
      jsPsych.data.addProperties({ round });
    }
  };
}

makeIntroAgain = makeIntroAgain()

function makeIntroAgainAgain() {
  return {
    type: jsPsychInstructions,
    pages: () => {
      const round = jsPsych.data.getLastTrialData().values()[0].round;
      return [...introPageAgainAgain];
    },
    show_clickable_nav: true,
    post_trial_gap: 500,
    allow_keys: false,
    on_finish: (data) => {
      const prevRound = jsPsych.data.get().values().slice(-1)[0].round;
        const round = prevRound + 1;

      data.round = round;
      data.trialName = "introAgainAgain";
      jsPsych.data.addProperties({ round });
    }
  };
}

makeIntroAgainAgain = makeIntroAgainAgain()

const errorMessage = {
  type: jsPsychInstructions,
  pages: () => {
    const lastTrial = jsPsych.data.get().last(1).values()[0];
    const round = lastTrial.round;
    return [
      `<div class='parent'>
        <p>You provided the wrong answer.<br>
        To make sure you understand the game, please continue to re-read the instructions.</p>
      </div>`
    ];
  },
  show_clickable_nav: true,
  allow_keys: false,
  on_finish: (data) => {
    // You can still store metadata here if you want
    const lastTrial = jsPsych.data.get().last(1).values()[0];
    data.round = lastTrial.round;
    data.trialName = "errorMessage";
  }
};

function getQuestionsForCondition(assignment) {
    const baseQuestion = {
        prompt: `Next, I will indicate...`, 
        name: `attnChk1`, 
        options: [`how I would maximize employees' immersion and engagement`, `how I would minimize employees' immersion and engagement`, `how I would maximize employees' effort`, `how I would minimize employees' effort`]
    };
    
    return [baseQuestion];
}


function getCorrectAnswers(round, order) {

    let baseAnswer;

    if (round === 0) {
        if (order === 1 || order === 2) {
            baseAnswer = ["how I would maximize employees' immersion and engagement"];
        } else if (order === 3 || order === 4) {
            baseAnswer = ["how I would maximize employees' effort"];
        } else if (order === 5 || order === 6) {
            baseAnswer = ["how I would minimize employees' immersion and engagement"];
        } else {
            baseAnswer = [];
        }

    } else if (round === 1) {
        if (order === 3 || order === 5) {
            baseAnswer = ["how I would maximize employees' immersion and engagement"];
        } else if (order === 2 || order === 6) {
            baseAnswer = ["how I would maximize employees' effort"];
        } else if (order === 1 || order === 4) {
            baseAnswer = ["how I would minimize employees' immersion and engagement"];
        } else {
            baseAnswer = [];
        }

    } else if (round === 2) {
        if (order === 4 || order === 6) {
            baseAnswer = ["how I would maximize employees' immersion and engagement"];
        } else if (order === 1 || order === 5) {
            baseAnswer = ["how I would maximize employees' effort"];
        } else if (order === 2 || order === 3) {
            baseAnswer = ["how I would minimize employees' immersion and engagement"];
        } else {
            baseAnswer = [];
        }
    }

    return baseAnswer;
}


function getTotalErrors(data, correctAnswers) {
    let errors = 0;
    correctAnswers.forEach((correct, index) => {
        const questionName = `attnChk${index + 1}`;
        if (data.response[questionName] !== correct) {
            errors++;
        }
    });
    return errors;
}

const conditionalNode = {
    timeline: [errorMessage],
    conditional_function: () => {
    const fail = jsPsych.data.get().last(1).select('totalErrors').sum() > 0 ? true : false;
    return fail;
    },
};


const conditionMap = {
    1: 'cardinality',
    2: 'uniformity', 
    3: 'diagnosticity'
};

function getScenarioPage(pageName, round) {
    const pageMap = {
        "cardinalityPage1": cardinalityPage1,
        "uniformityPage1": uniformityPage1,
        "diagnosticityPage1": diagnosticityPage1
    };

    return pageMap[pageName](round);
}

const attnChk = {
    type: jsPsychSurveyMultiChoice,

    preamble: () => {
        const last = jsPsych.data.get().last(1).values()[0];
        const round = last.round;

        const condition = conditionMap[randomAssignment];
        const pageName = `${condition}Page1`;
        const scenarioPage = getScenarioPage(pageName, round);

        return `
            <div class='attnchk'>
                ${scenarioPage}
                <p><strong>Please answer the following question.</strong></p>
            </div>
        `;
    },

    questions: () => {
        return getQuestionsForCondition(randomAssignment);
    },

    randomize_question_order: false,
    scale_width: 500,

    on_finish: (data) => {
        const lastTaskTrial = jsPsych.data
            .get()
            .filter(t => t.round !== undefined)
            .last(1)
            .values()[0];

        const round = lastTaskTrial.round;
        const order = lastTaskTrial.order;

        // Pass round + order into function
        const correctAnswers = getCorrectAnswers(round, order);

        const totalErrors = getTotalErrors(data, correctAnswers);

        data.totalErrors = totalErrors;
        data.round = round; 
    }
};

const introAttnCheckLoop = {
    timeline: [attnChk_intro, conditionalNode],

    loop_function: () => {
        const attnChkTrials = jsPsych.data
            .get()
            .filter({ trialName: "attnChk_intro" });

        if (attnChkTrials.count() > 0) {
            const lastAttnChk = attnChkTrials.last(1).values()[0];
            return lastAttnChk.totalErrors > 0; // 🔑 THIS
        } else {
            return false;
        }
    }
};

const attnCheckLoop = {
    timeline: [attnChk, conditionalNode],
    loop_function: () => {
        const attnChkTrials = jsPsych.data.get().filter({trial_type: 'survey-multi-choice'});
        if (attnChkTrials.count() > 0) {
            const lastAttnChk = attnChkTrials.last(1).values()[0];
            const fail = lastAttnChk.totalErrors > 0;
            return fail;
        } else {
            return false;
        }
    }
};

function fillIn(questions, questionIds) {
    return {
        type: jsPsychSurveyHtmlForm,
        html: `
            <style>
                .fill-container {
                    max-width: 800px;
                    margin: 40px auto;
                    padding: 20px;
                    font-family: Open Sans;
                }
                
                .instructions {
                    font-size: 16px;
                    font-weight: 500;
                    color: #333;
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 10px 10px;
                    background-color: #f0f7ff;
                    border: 1px solid #1a73e8;
                    border-radius: 8px;
                }
                
                .error-message {
                    font-size: 14px;
                    color: #d32f2f;
                    text-align: center;
                    margin: 10px 0;
                    padding: 10px;
                    background-color: #ffebee;
                    border: 1px solid #d32f2f;
                    border-radius: 4px;
                    display: none;
                }
                
                .prompt-text {
                    font-size: 18px;
                    margin: 20px 0;
                    font-weight: 500;
                    text-align: center;
                }
                
                .paragraph-container {
                    margin: 20px 0;
                    padding: 24px;
                    background-color: #fafafa;
                    border-radius: 8px;
                    border: 1px solid #e0e0e0;
                    width: 100%;
                    box-sizing: border-box;
                }
                                
                .fill-paragraph {
                    font-size: 17px;
                    line-height: 1.6;
                    text-align: left;
                    max-width: 65ch;       
                    margin: 0 auto;       
                }
                
                .fill-paragraph .sentence {
                    display: inline;         /* Change to inline so they flow together */
                }
                                
                .number-input {
                    display: inline-block;
                    width: 60px;
                    padding: 4px 8px;
                    border: 2px solid #1a73e8;
                    border-radius: 4px;
                    text-align: center;
                    font-size: 18px;
                    font-weight: bold;
                    color: #1a73e8;
                    background-color: #f8f9fa;
                    margin: 0 2px;
                    white-space: nowrap; /* Add this */
                }

                /* Add this new rule to keep the ending phrase together */
                .no-break {
                    white-space: nowrap;
                }
                                
                .number-input.required-empty {
                    border-color: #d32f2f;
                    background-color: #ffebee;
                }
                
                /* Hide spinner arrows for webkit browsers (Chrome, Safari, Edge) */
                .number-input::-webkit-outer-spin-button,
                .number-input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                
                /* Hide spinner arrows for Firefox */
                .number-input[type=number] {
                    -moz-appearance: textfield;
                }
                
                .number-input:focus {
                    outline: none;
                    border-color: #0d47a1;
                    background-color: white;
                    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2);
                }
                
                .number-input:invalid {
                    border-color: #d32f2f;
                    color: #d32f2f;
                }
                
                .input-label {
                    font-size: 12px;
                    color: #666;
                    margin-left: 8px;
                    font-style: italic;
                }
            </style>
            
            <div class="fill-container">
                <div id="error-message" class="error-message">
                    Please fill in the blank before continuing.
                </div>
                
                <div class="prompt-text">${questions[0].promptText || ''}</div>
                
                <div class="paragraph-container">
                    <div class="fill-paragraph">
                    ${questions.map((q, i) => `
                  <span class="sentence">
                    ${q.fillText.replace(
                      '<input',
                      `<input name="percentage_${questionIds[i]}"`
                    )}
                  </span>
                `).join(' ')}
                    </div>
                </div>
            </div>
        `,
        button_label: 'Continue',
        data: {
            questions: questionIds
        },
                 on_load: function() {

          // ---------------------------
          // Dynamic prompt text
          // ---------------------------
          const lastTrial = jsPsych.data.get().last(2).values()[0];
          const round = lastTrial.round;
          const order = lastTrial.order;

          let promptEl = document.querySelector('.prompt-text');
          if (promptEl) {

            let promptType = "";

            const promptMap = {
              0: {
                maxEngage: [1, 2],
                maxEffort: [3, 4],
                minEngage: [5, 6]
              },
              1: {
                maxEngage: [3, 5],
                maxEffort: [2, 6],
                minEngage: [1, 4]
              },
              2: {
                maxEngage: [4, 6],
                maxEffort: [1, 5],
                minEngage: [2, 3]
              }
            };

            const promptText = {
              maxEngage: "<strong>Please fill in the blank to create the policy that you think would <br> maximize immersion and engagement.</strong>",
              maxEffort: `<strong>Please fill in the blank to create the policy that you think would <br> get ${textNew.employee}s to exert maximum effort.</strong>`,
              minEngage: "<strong>Please fill in the blank to create the policy that you think would <br> minimize immersion and engagement.</strong>"
            };

            const map = promptMap[round];
            let selectedPrompt = "";

            if (map.maxEngage.includes(order)) {
              selectedPrompt = promptText.maxEngage;
              promptType = "maxEngage";
            } else if (map.maxEffort.includes(order)) {
              selectedPrompt = promptText.maxEffort;
              promptType = "maxEffort";
            } else if (map.minEngage.includes(order)) {
              selectedPrompt = promptText.minEngage;
              promptType = "minEngage";
            }

            promptEl.innerHTML = selectedPrompt;
            document.body.dataset.promptType = promptType;

          } // ← THIS was missing

          // ---------------------------
          // Input validation
          // ---------------------------
          document.querySelectorAll('.number-input').forEach(input => {
            input.addEventListener('input', function() {
              let value = parseInt(this.value);
              if (isNaN(value) || value < 0) {
                this.value = '';
              } else if (value > 100) {
                this.value = '100';
              }

              this.classList.remove('required-empty');
              document.getElementById('error-message').style.display = 'none';
            });
          });

          // ---------------------------
          // Form submission validation
          // ---------------------------
          const form = document.querySelector('#jspsych-survey-html-form-form');
          if (form) {
            form.addEventListener('submit', function(e) {
              const inputs = document.querySelectorAll('.number-input');
              let allFilled = true;

              inputs.forEach(input => {
                if (!input.value || input.value.trim() === '') {
                  input.classList.add('required-empty');
                  allFilled = false;
                } else {
                  input.classList.remove('required-empty');
                }
              });

              if (!allFilled) {
                e.preventDefault();
                document.getElementById('error-message').style.display = 'block';
                const firstEmpty = document.querySelector('.number-input.required-empty');
                if (firstEmpty) {
                  firstEmpty.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }
            });
          }
        },

        on_finish: function(data) {
          questionIds.forEach(qId => {
            const value = parseInt(data.response[`percentage_${qId}`], 10);
            data[qId] = value;
          });

          data.promptType = document.body.dataset.promptType;
          data.trialName = "fillIn";
        }
    };
}

var fillIn_Uniformity = fillIn([
    {
        promptText: "",
        fillText: `Each day, all ${textNew.employee}s ranked in the top <input type="number" class="number-input" min="0" max="100" required>% would receive a ${bigNumber} bonus. All remaining ${textNew.employee}s would receive a ${smallNumber} bonus.`
    }
], ['uniformity']);

var fillIn_Diagnosticity = fillIn([
    {
        promptText: "<strong>What would you do to maximize immersion and engagement?</strong>",
        fillText: `Each day, all ${textNew.employee}s ranked in the top 50% would have a <input type="number" class="number-input" min="0" max="100" required>% chance of receiving a ${bigNumber} bonus.`
    },
    {
        promptText: "", 
        fillText: `All ${textNew.employee}s ranked in the bottom 50% would have a <input type="number" class="number-input" min="0" max="100" required>% chance of receiving a ${bigNumber} bonus. Everyone who doesn't receive a ${bigNumber} bonus would receive a ${smallNumber} bonus.`
    }
], ['diagnosticity1', 'diagnosticity2']);




function createStaticSliderChoice() {
    return {
        type: jsPsychSurveyMultiChoice,
        questions: [
            {
                prompt: `
                    <style>
                        /* Master control for ALL performance labels */
                        .perf-label {
                            text-align: center;
                            font-weight: bold;
                            color: #333;
                            font-size: 25px;   /* ← CHANGE THIS ONCE */
                        }

                        /* Master control for ALL coin labels */
                        .coin-label {
                            text-align: center;
                            color: #666;
                            font-size: 25px;   /* ← CHANGE THIS ONCE */
                        }
                    </style>

                    <div style="margin-bottom: 30px;">
                        <h3 style="text-align: center; margin-bottom: 40px;">
                            I would choose the following option to categorize FoodFast Stars.
                            Each coin is worth $0.10 of bonus.
                        </h3>
                        
                        <!-- First Slider Option -->
                        <div style="margin-bottom: 40px; padding: 20px; border: 2px solid #ddd; border-radius: 8px;">
                            <div style="position: relative; width: 100%; height: 80px; margin: 20px 0;">

                                <!-- Performance labels -->
                                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                    <div class="perf-label" style="width: 50%;">Bottom 50%</div>
                                    <div class="perf-label" style="width: 50%;">Top 50%</div>
                                </div>

                                <!-- Coin labels -->
                                <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                                    <div class="coin-label" style="width: 50%;">Earns $4</div>
                                    <div class="coin-label" style="width: 50%;">Earns $16</div>
                                </div>

                                <!-- Slider visual -->
                                <div style="display: flex; width: 100%; height: 30px; border-radius: 15px; overflow: hidden; border: 2px solid #ccc;">
                                    <div style="width: 50%; background-color: #ff4444;"></div>
                                    <div style="width: 50%; background-color: #44ff44;"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Second Slider Option -->
                        <div style="margin-bottom: 40px; padding: 20px; border: 2px solid #ddd; border-radius: 8px;">
                            <div style="position: relative; width: 100%; height: 80px; margin: 20px 0;">

                                <!-- Performance labels -->
                                <div style="display: flex; margin-bottom: 10px;">
                                    <div class="perf-label" style="width: 33.33%;">Bottom 33%</div>
                                    <div class="perf-label" style="width: 33.33%;">Middle 33%</div>
                                    <div class="perf-label" style="width: 33.33%;">Top 33%</div>
                                </div>

                                <!-- Coin labels -->
                                <div style="display: flex; margin-bottom: 15px;">
                                    <div class="coin-label" style="width: 33.33%;">Earns $4</div>
                                    <div class="coin-label" style="width: 33.33%;">Earns $10</div>
                                    <div class="coin-label" style="width: 33.33%;">Earns $16</div>
                                </div>

                                <!-- Slider visual -->
                                <div style="display: flex; width: 100%; height: 30px; border-radius: 15px; overflow: hidden; border: 2px solid #ccc;">
                                    <div style="width: 33.33%; background-color: #ff4444;"></div>
                                    <div style="width: 33.33%; background-color: #ffaa00;"></div>
                                    <div style="width: 33.33%; background-color: #44ff44;"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Third Slider Option -->
                        <div style="margin-bottom: 40px; padding: 20px; border: 2px solid #ddd; border-radius: 8px;">
                            <div style="position: relative; width: 100%; height: 80px; margin: 20px 0;">

                                <!-- Performance labels -->
                                <div style="display: flex; margin-bottom: 10px;">
                                    <div class="perf-label" style="width: 25%;">Bottom 25%</div>
                                    <div class="perf-label" style="width: 25%;">Middle 25-50%</div>
                                    <div class="perf-label" style="width: 25%;">Middle 50-75%</div>
                                    <div class="perf-label" style="width: 25%;">Top 25%</div>
                                </div>

                                <!-- Coin labels -->
                                <div style="display: flex; margin-bottom: 15px;">
                                    <div class="coin-label" style="width: 25%;">Earns $4</div>
                                    <div class="coin-label" style="width: 25%;">Earns $8</div>
                                    <div class="coin-label" style="width: 25%;">Earns $12</div>
                                    <div class="coin-label" style="width: 25%;">Earns $16</div>
                                </div>

                                <!-- Slider visual -->
                                <div style="display: flex; width: 100%; height: 30px; border-radius: 15px; overflow: hidden; border: 2px solid #ccc;">
                                    <div style="width: 25%; background-color: #ff4444;"></div>
                                    <div style="width: 25%; background-color: #ff8800;"></div>
                                    <div style="width: 25%; background-color: #aaff00;"></div>
                                    <div style="width: 25%; background-color: #44ff44;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
                name: 'slider_choice',
                options: ['Option 1', 'Option 2', 'Option 3'],
                required: true
            }
        ],
        button_label: 'Continue',
        on_finish: function(data) {
            console.log(data);
            const r = data.response ?? JSON.parse(data.responses || '{}');
            const v = r.slider_choice ?? r.Q0 ?? null;
            const map = { 'Option 1': '50-50_$4_$16', 'Option 2': '33/33/33_$4_$10_$16', 'Option 3': '25/25/25/25_$4_$8_$12_$16' };
            data.selected_slider_option = map[v] ?? v;
        }
    };
}

var staticSliderChoice = createStaticSliderChoice();


const choose_Cardinality = {
    type: jsPsychHtmlButtonResponseCardinality,

    stimulus: () => {

        const lastTrial = jsPsych.data.get().last(1).values()[0];
        const round = lastTrial.round;
        const order = lastTrial.order;

        const promptMap = {
            0: { maxEngage: [1, 2], maxEffort: [3, 4], minEngage: [5, 6] },
            1: { maxEngage: [3, 5], maxEffort: [2, 6], minEngage: [1, 4] },
            2: { maxEngage: [4, 6], maxEffort: [1, 5], minEngage: [2, 3] }
        };

        const preambleText = {
            maxEngage: `maximize immersion and engagement`,
            maxEffort: `encourage ${textNew.employee}s to exert maximum effort`,
            minEngage: `minimize immersion and engagement`
        };

        const mapping = promptMap[round];
        let selectedText = "";
        let promptType = "";

        if (mapping.maxEngage.includes(order)) {
            selectedText = preambleText.maxEngage;
            promptType = "maxEngage";
        } else if (mapping.maxEffort.includes(order)) {
            selectedText = preambleText.maxEffort;
            promptType = "maxEffort";
        } else {
            selectedText = preambleText.minEngage;
            promptType = "minEngage";
        }

        document.body.dataset.promptType = promptType;

        return `
            <div class="cardinality-trial" style="text-align:center; margin-bottom:40px;">
                <strong>
                    Choose the following policy to ${selectedText}.
                </strong>
            </div>
        `;
    },   // ✅ THIS WAS MISSING

    choices: [
        '<img src="./img/slider1.png">',
        '<img src="./img/slider2.png">',
        '<img src="./img/slider3.png">'
    ],

    button_html: `
        <button class="jspsych-btn image-btn">%choice%</button>
    `,

    on_load: () => {
        const style = document.createElement('style');
        style.innerHTML = `
            #jspsych-html-button-response-btngroup-cardinality {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                gap: 25px;
                margin-top: 30px;
            }

            .image-btn {
                background: none !important;
                border: none !important;
                padding: 0;
                cursor: pointer;
                display: flex !important;
                justify-content: center !important;
                width: 100%;
            }

            .image-btn img {
                width: 50%;
                height: auto;
                display: block;
                transition: 
                    transform 0.2s ease,
                    box-shadow 0.2s ease,
                    filter 0.2s ease;
                border-radius: 12px; /* optional but looks nicer with glow */
            }

            /* Glow on hover */
            .image-btn:hover img {
                transform: scale(1.03);
                box-shadow: 
                    0 0 12px rgba(255, 215, 0, 0.6),
                    0 0 24px rgba(255, 215, 0, 0.35);
            }
        `;
        document.head.appendChild(style);
    },

    on_finish: (data) => {
        const mapping = ['0', '1', '2'];
        data.cardinality = mapping[data.response];
        data.promptType = document.body.dataset.promptType;
        data.trialName = "choose_Cardinality";
    }
};


p.instLoopUniformity = {
    timeline: [introAttnCheckLoop, makeIntro, uniformity, makeRememberPage, attnCheckLoop,fillIn_Uniformity, makeIntroAgain, attnCheckLoop, fillIn_Uniformity, makeIntroAgainAgain, attnCheckLoop, fillIn_Uniformity],
    loop_function: () => {
        // Look for the most recent attnChk trial specifically
        const attnChkData = jsPsych.data.get().filter({trial_type: 'survey-multi-choice'}).last(1);
        const fail = attnChkData.select('totalErrors').sum() > 0;
        return fail;
    },
};

p.instLoopCardinality = {
    timeline: [introAttnCheckLoop, makeIntro, cardinality, makeRememberPage, attnCheckLoop, choose_Cardinality, makeIntroAgain, attnCheckLoop, choose_Cardinality, makeIntroAgainAgain, attnCheckLoop, choose_Cardinality],
    loop_function: () => {
        const attnChkData = jsPsych.data.get().filter({trial_type: 'survey-multi-choice'}).last(1);
        const fail = attnChkData.select('totalErrors').sum() > 0;
        return fail;
    },
};

p.instLoopDiagnosticity = {
    timeline: [introAttnCheckLoop, makeIntro, diagnosticity, makeRememberPage, attnCheckLoop,fillIn_Diagnosticity, makeIntroAgain, attnCheckLoop, fillIn_Diagnosticity, makeIntroAgainAgain, attnCheckLoop, fillIn_Diagnosticity],
    loop_function: () => {
        const attnChkData = jsPsych.data.get().filter({trial_type: 'survey-multi-choice'}).last(1);
        const fail = attnChkData.select('totalErrors').sum() > 0;
        return fail;
    },
};

p.consent = {
    type: jsPsychInstructions,
    pages: [consent],
    show_clickable_nav: true,
    post_trial_gap: 500,
};

   /*
    *
    *   Demographics
    *
    */

p.demographics = (function() {

            const gender = {
                type: jsPsychHtmlButtonResponse,
                stimulus: '<p>What is your gender?</p>',
                choices: ['Male', 'Female', 'Other'],

                on_load: () => {
                    // Find the button group for THIS trial
                    const container = document.querySelector('#jspsych-html-button-response-btngroup');

                    // Force buttons to be in a row, centered, with spacing
                    container.style.display = 'flex';
                    container.style.flexDirection = 'row';
                    container.style.justifyContent = 'center';
                    container.style.gap = '20px';

                    // Also ensure buttons don't take full width
                    const buttons = container.querySelectorAll('button');
                    buttons.forEach(btn => {
                        btn.style.width = 'auto';
                    });
                },

                on_finish: (data) => {
                    data.gender = data.response;
                    data.trialName = "gender";
                }
            };

        const age = {
            type: jsPsychSurveyText,
            questions: [{prompt: "Age:", name: "age"}],
            on_finish: (data) => {
                saveSurveyData(data); 
                data.trialName = "age";
            },
        }; 

        const ethnicity = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>What is your race?</p>',
            choices: ['White / Caucasian', 'Black / African American','Asian / Pacific Islander', 'Hispanic', 'Native American', 'Other'],
            on_finish: (data) => {
                data.ethnicity = data.response;
                data.trialName = "ethnicity";
            }
        };

        const english = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>Is English your native language?:</p>',
            choices: ['Yes', 'No'],
            on_finish: (data) => {
                data.english = data.response;
                data.trialName = "english";
            }
        };  

        const finalWord = {
            type: jsPsychSurveyText,
            questions: [{prompt: "Questions? Comments? Complains? Provide your feedback here!", rows: 10, columns: 100, name: "finalWord"}],
            on_finish: (data) => {
                saveSurveyData(data); 
                data.trialName = "finalWord";
            },
        }; 
let demos;

if (randomAssignment === 1) {
    demos = {
        timeline: [gender, age, ethnicity, english, finalWord]
    };
} else {
    demos = {
        timeline: [gender, age, ethnicity, english, finalWord]
    };
}

        return demos;

    }());


   /*
    *
    *   SAVE DATA
    *
    */

p.save_data = {
    type: jsPsychPipe,
    action: "save",
    experiment_id: "0ztNpPGobM6Z",
    filename: filename,
    data_string: ()=>jsPsych.data.get().csv()
};

p.end = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>Thank you! Please press the button to submit your response and exit the page. </p>',
    choices: ['Submit!'],
    on_finish: (data) => {
    saveSurveyData(data); 
        },
};

return p;

}());

// const timeline = [exp.instLoop, exp.postPlay, exp.preview, exp.readyPlay, exp.task];
let timeline;


if (randomAssignment === 1) {
    timeline = [exp.instLoopCardinality, exp.demographics, exp.save_data, exp.end];
} else if (randomAssignment === 2) {
    timeline = [exp.instLoopUniformity, exp.demographics, exp.save_data, exp.end];
} else if (randomAssignment === 3) {
    timeline = [exp.instLoopDiagnosticity, exp.demographics, exp.save_data, exp.end];
}

jsPsych.run(timeline);