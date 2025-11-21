

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
        goal: "<b>feel more immersed and engaged in their work</b>",
        description: "<b>get in the zone</b> while working, so that they feel totally <b>absorbed</b> in what they are doing",
        remember: "maximize feelings of immersion and engagement",
        rememberAgain: `what will keep ${textNew.employee}s feeling absorbed in their work`
    },
    maxEffort: {
        goal: "<b>work as hard as possible</b>",
        description: "<b>put forth maximum effort</b> while working",
        remember: `help ${textNew.employee}s work as hard as possible`,
        rememberAgain: `making ${textNew.employee}s put forth maximum effort`
    },
    minEngage: {
        goal: "<b>feel more unfocused and disengaged in their work</b>",
        description: "<b>not get in the zone</b> while working, so that they feel totally <b>unabsorbed</b> in what they are doing",
        remember: "minimize feelings of immersion and engagement",
        rememberAgain: `what will keep ${textNew.employee}s feeling less absorbed in their work`
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
    randomAssignment === 2 ? `when deciding what percentage of ${textNew.employee}s will receive the $11 bonus` :
    "when choosing the probabilities";

var stillConditionGoal = 
    randomAssignment === 1 ? "to choose between the three incentive structures" :
    randomAssignment === 2 ? `to decide what percentage of ${textNew.employee}s will receive the $11 bonus` :
    "to choose the probabilities";


const introPage = [
        `<div class='parent'>
            <p><strong>Welcome to the Manager Challenge!</strong></p>
            <p>In this game, you will play the role of manager in an organization. </p>
        </div>`,

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
            <p>The aim of the "${textNew.programName}" Program is to help ${textNew.employee}s ${firstGoal}.
            The goal is to help ${textNew.employee}s ${firstGoalDescription}.</p>
        </div>`,
];

const rememberPage = [
        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Remember: <strong>Your sole objective is to ${rememberGoal}.</strong>
            Therefore, ${conditionGoal}, base your decision entirely on ${rememberGoalAgain}.</p>
        </div>`
];

const introPageAgain = [
        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Your objective has now changed. </p>
            <p>"${textNew.programName}" has a new aim: to help ${textNew.employee}s ${secondGoal}.
            The goal is to help ${textNew.employee}s ${secondGoalDescription}.</p>
        </div>`,

        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Your job is still ${stillConditionGoal}.</p>
        </div>`,

        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Remember: <strong>Your sole objective is now to ${rememberGoal2}.</strong>
            Therefore, ${conditionGoal}, base your decision entirely on ${rememberGoalAgain2}.</p>
        </div>`
];

const introPageAgainAgain = [
        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Your objective has changed for the last time. </p>
            <p>"${textNew.programName}" has a new aim: to help ${textNew.employee}s ${thirdGoal}.
            The goal is to help ${textNew.employee}s ${thirdGoalDescription}.</p>
        </div>`,

        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Your job is still to ${stillConditionGoal}.</p>
        </div>`,

        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Remember: <strong>Your sole objective is now to ${rememberGoal3}.</strong>
            Therefore, ${conditionGoal}, base your decision entirely on ${rememberGoalAgain3}.</p>
        </div>`
];


const uniformityPage = [
        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>At the end of each day, each ${textNew.employee} is ranked from worst-perfoming<br>to best-perfoming in terms of average ${textNew.metric}.</p>
            <p><strong>${textNew.An} ${textNew.employee}'s rank determines the size of their bonus for the day.</strong></p>
        </div>`,

        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Each day, all ${textNew.employee}s ranked in the top <strong>X percent</strong> will receive an <strong>$11 bonus</strong>.<br>
            All remaining ${textNew.employee}s will receive a <strong>$1 bonus</strong>.</p>
            <p><strong>Your job is to choose the value of X&mdash;that is, the percentage<br>of ${textNew.employee}s who will receive the \$11 bonus.</strong></p>
        </div>`
];

const uniformityPage1 = [
            `<p>Your sole objective is to ${rememberGoal}.</p>
            <p>Your job is to decide which percentage of daily top-ranked ${textNew.employee}s will receive the bigger $11 bonus.</p>
            <p>Bottom-ranked ${textNew.employee}s will receive the smaller $1 bonus.</p>
        </div>`
];

const diagnosticityPage = [
        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Every day, each ${textNew.employee} has some chance of getting an <strong>$11 bonus</strong>. Those who don't get an $11 bonus get a <strong>$1 bonus</strong>.
            ${textNew.An} ${textNew.employee}'s chance of getting an $11 bonus depends on whether they are ranked in the <strong>top or bottom 50%</strong>.</p>
            <p>Your job is to choose two probabilities:</p>
            <p><strong>(1) The probability of an $11 bonus for ${textNew.employee}s in the top 50%</strong><br>
            <strong>(2) The probability of an $11 bonus for ${textNew.employee}s in the bottom 50%</strong></p>
         </div>`
];

const diagnosticityPage1 = [
        `<p>Your sole objective is to ${rememberGoal}.</p>
            <p>Your job is to set the chances that each group receives its bonus.
            Specifically, you'll set the chance that the top 50% ${textNew.employee}s receives the $11 bonus, and the chance that the bottom 50% ${textNew.employee}s receives the $1 bonus. </p>
        </div>`
];

const cardinalityPage = [
        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>At the end of each day, each ${textNew.employee} is ranked from worst-perfoming<br>to best-perfoming in terms of average ${textNew.metric}.</p>
            <p><strong>${textNew.An} ${textNew.employee}'s rank determines the size of their bonus for the day.</strong></p>
        </div>`,

        `<div class='tight'>
            <img src="./img/${textNew.imageProgram}.png" style="width:40%; height:40%">
            <p>Your job is to decide on <strong>one</strong> of three different incentive structures.</p>
            <p>Click "Next" to learn about each incentive structure.</p>
        </div>`,

        `<div class='slider'>
            <p><strong>Incentive Structure 1</strong></p>
            <p>Each day, all ${textNew.employee}s ranked in the top 50% earn an $11 bonus,</br>
            <p>and all ${textNew.employee}s ranked in the bottom 50% earn a $1 bonus.</p>
            <img src="./img/slider1.png">
        </div>`,

        `<div class='slider'>
            <p><strong>Incentive Structure 2</strong></p>
            <p>Each day, all ${textNew.employee}s ranked in the top 33% earn an $11 bonus,</p>
            <p>all ${textNew.employee}s ranked in the middle 33% earn a $6 bonus,</p>
            <p>and all ${textNew.employee}s ranked in the bottom 33% earn a $1 bonus.</p>
            <img src="./img/slider2.png">
        </div>`,

        `<div class='slider'>
            <p><strong>Incentive Structure 3</strong></p>
            <p>Each day, all ${textNew.employee}s ranked in the top 25% earn an $11 bonus,</p>
            <p>all ${textNew.employee}s ranked in the middle 50% - 75% earn an $8 bonus,</p>
            <p>all ${textNew.employee}s ranked in the middle 25% - 50% earn a $4 bonus,</p>
            <p>and all ${textNew.employee}s ranked in the bottom 25% earn a $1.</p>
            <img src="./img/slider3.png">
        </div>`
];

const cardinalityPage1 = [
        `<p>Your sole objective is to ${rememberGoal}.</p>
            <p>Your job is to decide on one of 3 incentive structures.
            <img src="./img/slider1.png" style="width:80%; height:80%">      
            <img src="./img/slider2.png" style="width:80%; height:80%">      
            <img src="./img/slider3.png" style="width:80%; height:80%">     
            </div>`
];

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
    You will receive $2.75 payment for your participation. You'll receive an additional bonus based on your performance in the experiment.  

     <p><b>Payment</b><br>
    If you have read this form and have decided to participate in this project, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at any time without penalty or loss of benefits to which you are otherwise entitled. The alternative is not to participate. You have the right to refuse to answer particular questions. The results of this research study may be presented at scientific or professional meetings or published in scientific journals. Your individual privacy will be maintained in all published and written data resulting from the study.
    In accordance with scientific norms, the data from this study may be used or shared with other researchers for future research (after removing personally identifying information) without additional consent from you.

    <p><b>Contact Information:</b><br>
    Questions: If you have any questions, concerns or complaints about this research, its procedures, risks and benefits, contact the Protocol Director, Josephine Tan (josetan@stanford.edu) or Assistant Professor David Melnikoff (dmelnik@stanford.edu).
    Independent Contact: If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650)-723-2480 or toll free at 1-866-680-2906, or email at irbnonmed@stanford.edu. You can also write to the Stanford IRB, Stanford University, 1705 El Camino Real, Palo Alto, CA 94306. </p>
    <p>If you agree to participate, press the "Next" button to indicate that you consent to participate in the study.</p>`


function makeIntro() {
return {
    type: jsPsychInstructions,
    pages: () => [...introPage],
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
    on_finish: (data) => {
        jsPsych.data.addProperties({round});
        jsPsych.data.addProperties({order});
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
      round++;
      data.round = round;
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
      round++;
      data.round = round;
    }
  };
}

makeIntroAgainAgain = makeIntroAgainAgain()

const conditionMap = {
    1: 'cardinality',
    2: 'uniformity', 
    3: 'diagnosticity'
};

function getScenarioPage(pageName) {
    const pageMap = {
        'cardinalityPage1': cardinalityPage1,
        'uniformityPage1': uniformityPage1,
        'diagnosticityPage1': diagnosticityPage1
    };
    return pageMap[pageName] || '';
}


const errorMessage = {
    type: jsPsychInstructions,
    pages: [`<div class='parent'><p>You provided the wrong answer.<br>To make sure you understand the game, please continue to re-read the instructions.</p></div>`],
    show_clickable_nav: true,
    allow_keys: false,
};

function getQuestionsForCondition(assignment) {
    const baseQuestion = {
        prompt: `What is your objective?`, 
        name: `attnChk1`, 
        options: [`To maximize immersion and engagement`, `To encourage putting forth more effort`, `To minimize immersion and engagement`, ]
    };
    
    const conditionQuestions = {
        1: [ // Cardinality
            {
                prompt: `I'll decide on one of the three incentive structures.`, 
                name: `attnChk2`, 
                options: ['True', 'False']
            },
            {
                prompt: `One option is that the top 50% of ${textNew.employee}s earn $11/day and the bottom 50% of ${textNew.employee}s earn $1/day. </p>`, 
                name: `attnChk3`, 
                options: ['True', 'False']
            },
            {
                prompt: `One option is that the top 33% of ${textNew.employee}s earn $11/day, the middle 33% of ${textNew.employee}s earn $6/day and the bottom 33% of ${textNew.employee}s earn $1/day. </p>`, 
                name: `attnChk4`, 
                options: ['True', 'False']
            },
            {
                prompt: `One option is that the top 25% of ${textNew.employee}s earn $11/day, the middle 50-75% of ${textNew.employee}s earn $8/day, the middle 25-50% of ${textNew.employee}s earn $4/day, the bottom 25% of ${textNew.employee}s earn $1/day. </p>`, 
                name: `attnChk5`, 
                options: ['True', 'False']
            }
        ],
        2: [ // Uniformity
            {
                prompt: `I'll decide which percentage of top ${textNew.employee}s will receive the bigger $11 (vs. the smaller $1) bonus.`, 
                name: `attnChk2`, 
                options: ['True', 'False']
            }
        ],
        3: [ // Diagnosticity
            {
                prompt: `I'll decide the chance that a top 50% ${textNew.employee} will receive the $11 bonus.`, 
                name: `attnChk2`, 
                options: ['True', 'False']
            },
            {
                prompt: `I'll decide the chance that a bottom 50% ${textNew.employee} will receive the $1 bonus.`, 
                name: `attnChk3`, 
                options: ['True', 'False']
            }

        ]
    };
    
    return [baseQuestion].concat(conditionQuestions[assignment] || []);
}


function getCorrectAnswers(assignment) {
    let round = jsPsych.data.get().last(1).values()[0].round;
    let order = jsPsych.data.get().last(1).values()[0].order;

    const attnChkTrials = jsPsych.data.get().filter({ trial_type: 'survey-multi-choice' });

    let baseAnswer;

    // Determine baseAnswer depending on order + round
    if (round === 0) {
        if (order === 1 || order === 2) {
            baseAnswer = ["To maximize immersion and engagement"];
        } else if (order === 3 || order === 4) {
            baseAnswer = ["To encourage putting forth more effort"];
        } else if (order === 5 || order === 6) {
            baseAnswer = ["To minimize immersion and engagement"];
        } else {
            baseAnswer = []; // fallback if unexpected order
        }
    } else {
        // default baseAnswer for later rounds if needed
        baseAnswer = ["To maximize immersion and engagement"];
    }
    // Your existing condition-specific answers
    const conditionAnswers = {
        1: ["True", "True", "True", "True"], 
        2: ["True"], 
        3: ["True", "True"]
    };

    return baseAnswer.concat(conditionAnswers[assignment] || []);
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

const attnChk = {
    type: jsPsychSurveyMultiChoice,
    preamble: () => {
        let round = jsPsych.data.get().last(1).values()[0].round;
        const condition = conditionMap[randomAssignment];
        const pageName = `${condition}Page1`; // e.g., "cardinalityPage1"
        const scenarioPage = getScenarioPage(pageName);
        
        return `
            <div class='attnchk'>
                ${scenarioPage}
                <p><strong>Please answer the following questions.</p></strong>
            </div>
        `;
    },
    questions: () => {
        return getQuestionsForCondition(randomAssignment);
    },
    randomize_question_order: false,
    scale_width: 500,
    on_finish: (data) => {
        const correctAnswers = getCorrectAnswers(randomAssignment);
        const totalErrors = getTotalErrors(data, correctAnswers);
        data.totalErrors = totalErrors;
        data.condition = conditionMap[randomAssignment]; // Store condition name
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
                    margin: 30px -20px;  /* Negative margins extend beyond parent */
                    padding: 50px;       /* Increase padding for more internal space */
                    background-color: #fafafa;
                    border-radius: 8px;
                    border: 1px solid #e0e0e0;
                    width: calc(100% + 40px);  /* Extends beyond parent width */
                    box-sizing: border-box;
                }
                                
                .fill-paragraph {
                    font-size: 17px;  
                    line-height: 1.5;  
                    text-align: justify;
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
    <div class="instructions">
        Please fill in the blanks.
    </div>
    
    <div id="error-message" class="error-message">
        Please fill in all required fields before continuing.
    </div>
    
    <div class="prompt-text">${questions[0].promptText || ''}</div>
    
    <div class="paragraph-container">
        <div class="fill-paragraph">
            ${questions.map(q => `<span class="sentence">${q.fillText}</span>`).join(' ')}
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
    const lastTrial = jsPsych.data.get().last(1).values()[0];
    const round = lastTrial.round;
    const order = lastTrial.order;

    console.log(round);

            let promptEl = document.querySelector('.prompt-text');
            if (promptEl) {

                // Mapping of which orders → which prompt, by round
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

                // Text for each prompt type
                const promptText = {
                    maxEngage: "<strong>What would you do to maximize immersion and engagement?</strong>",
                    maxEffort: `<strong>What would you do to encourage ${textNew.employee}s to exert maximum effort?</strong>`,
                    minEngage: "<strong>What would you do to minimize immersion and engagement?</strong>"
                };

                const map = promptMap[round];
                let selectedPrompt = "";

                if (map.maxEngage.includes(order)) {
                    selectedPrompt = promptText.maxEngage;
                } else if (map.maxEffort.includes(order)) {
                    selectedPrompt = promptText.maxEffort;
                } else if (map.minEngage.includes(order)) {
                    selectedPrompt = promptText.minEngage;
                }

                promptEl.innerHTML = selectedPrompt;
            }

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

                    // Remove error styling when user starts typing
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
                        // Scroll to first empty field
                        const firstEmpty = document.querySelector('.number-input.required-empty');
                        if (firstEmpty) {
                            firstEmpty.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    }
                });
            }
        },
        on_finish: function(data) {
            // Process the fill-in-the-blank responses
            questionIds.forEach((qId, index) => {
                const inputValue = parseInt(data.response[`percentage_${qId}`]) || 0;
                data[`${qId}_percentage`] = inputValue;
                data[`${qId}_input_value`] = inputValue;
            });
            console.log(round);
        }
    };
}

var fillIn_Uniformity = fillIn([
    {
        promptText: "",
        fillText: `Each day, all ${textNew.employee}s ranked in the top <input type="number" class="number-input" name="flow_prior" min="0" max="100" required>% would receive an $11 bonus. All remaining ${textNew.employee}s would receive a $1 bonus.`
    }
], ['flow_uniformity']);

var fillIn_Diagnosticity = fillIn([
    {
        promptText: "<strong>What would you do to maximize immersion and engagement?</strong>",
        fillText: `Each day, all ${textNew.employee}s ranked in the top 50% would have a <input type="number" class="number-input" name="performance_posterior" min="0" max="100" required>% chance of receiving an $11 bonus.`
    },
    {
        promptText: "", 
        fillText: `All ${textNew.employee}s ranked in the bottom 50% would have a <input type="number" class="number-input" name="performance_posterior" min="0" max="100" required>% chance of receiving an $11 bonus. Everyone who doesn't receive an $11 bonus would receive a $1 bonus.`
    }
], ['flow_diagnosticity1', 'flow_diagnosticity2']);

var fillInPerf_Diagnosticity = fillIn([
    {
        promptText: `<strong>What would you do to make ${textNew.employee}s exert maximum effort?</strong>`,
        fillText: `Each day, all ${textNew.employee}s ranked in the top 50% would have a <input type="number" class="number-input" name="performance_posterior" min="0" max="100" required>% chance of receiving an $11 bonus.`
    },
    {
        promptText: "", 
        fillText: `All ${textNew.employee}s ranked in the bottom 50% would have a <input type="number" class="number-input" name="performance_posterior" min="0" max="100" required>% chane of receiving an $11 bonus. Everyone who doesn't receive an $11 bonus would receive a $1 bonus.`
    }
], ['performance_diagnosticity1', 'performance_diagnosticity2']);

/*

function createStaticSliderChoice() {
    return {
        type: jsPsychSurveyMultiChoice,
        questions: [
            {
                prompt: `
                    <div style="margin-bottom: 30px;">
                        <h3 style="text-align: center; margin-bottom: 40px;">I would choose the following option to categorize FoodFast Stars. Each coin is worth $0.10 of bonus.</h3>
                        
                        <!-- First Slider Option -->
                        <div style="margin-bottom: 40px; padding: 20px; border: 2px solid #ddd; border-radius: 8px;">
                            <div style="position: relative; width: 100%; height: 80px; margin: 20px 0;">
                                <!-- Performance labels -->
                                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                    <div style="text-align: center; width: 50%; font-weight: bold; color: #333;">Bottom 50%</div>
                                    <div style="text-align: center; width: 50%; font-weight: bold; color: #333;">Top 50%</div>
                                </div>
                                
                                <!-- Coin labels -->
                                <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                                    <div style="text-align: center; width: 50%; font-size: 15px; color: #666;">Earns $1</div>
                                    <div style="text-align: center; width: 50%; font-size: 15px; color: #666;">Earns $11</div>
                                </div>
                                
                                <!-- Slider visual -->
                                <div style="display: flex; width: 100%; height: 30px; border-radius: 15px; overflow: hidden; border: 2px solid #ccc;">
                                    <div style="width: 50%; background-color: #ff4444; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;"></div>
                                    <div style="width: 50%; background-color: #44ff44; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;"></div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Second Slider Option -->
                        <div style="margin-bottom: 40px; padding: 20px; border: 2px solid #ddd; border-radius: 8px;">
                            <div style="position: relative; width: 100%; height: 80px; margin: 20px 0;">
                                <!-- Performance labels -->
                                <div style="display: flex; margin-bottom: 10px;">
                                    <div style="text-align: center; width: 33.33%; font-weight: bold; color: #333;">Bottom 33%</div>
                                    <div style="text-align: center; width: 33.33%; font-weight: bold; color: #333;">Middle 33%</div>
                                    <div style="text-align: center; width: 33.33%; font-weight: bold; color: #333;">Top 33%</div>
                                </div>
                                
                                <!-- Coin labels -->
                                <div style="display: flex; margin-bottom: 15px;">
                                    <div style="text-align: center; width: 33.33%; font-size: 15px; color: #666;">Earns $1</div>
                                    <div style="text-align: center; width: 33.33%; font-size: 15px; color: #666;">Earns $6</div>
                                    <div style="text-align: center; width: 33.33%; font-size: 15px; color: #666;">Earns $11</div>
                                </div>
                                
                                <!-- Slider visual -->
                                <div style="display: flex; width: 100%; height: 30px; border-radius: 15px; overflow: hidden; border: 2px solid #ccc;">
                                    <div style="width: 33.33%; background-color: #ff4444; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;"></div>
                                    <div style="width: 33.33%; background-color: #ffaa00; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;"></div>
                                    <div style="width: 33.33%; background-color: #44ff44; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;"></div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Third Slider Option -->
                        <div style="margin-bottom: 40px; padding: 20px; border: 2px solid #ddd; border-radius: 8px;">
                            <div style="position: relative; width: 100%; height: 80px; margin: 20px 0;">
                                <!-- Performance labels -->
                                <div style="display: flex; margin-bottom: 10px;">
                                    <div style="text-align: center; width: 25%; font-weight: bold; color: #333;">Bottom 25%</div>
                                    <div style="text-align: center; width: 25%; font-weight: bold; color: #333;">Middle 25-50%</div>
                                    <div style="text-align: center; width: 25%; font-weight: bold; color: #333;">Middle 50-75%</div>
                                    <div style="text-align: center; width: 25%; font-weight: bold; color: #333;">Top 25%</div>
                                </div>
                                
                                <!-- Coin labels -->
                                <div style="display: flex; margin-bottom: 15px;">
                                    <div style="text-align: center; width: 25%; font-size: 15px; color: #666;">Earns $1</div>
                                    <div style="text-align: center; width: 25%; font-size: 15px; color: #666;">Earns $4</div>
                                    <div style="text-align: center; width: 25%; font-size: 15px; color: #666;">Earns $8</div>
                                    <div style="text-align: center; width: 25%; font-size: 15px; color: #666;">Earns $11</div>
                                </div>
                                
                                <!-- Slider visual -->
                                <div style="display: flex; width: 100%; height: 30px; border-radius: 15px; overflow: hidden; border: 2px solid #ccc;">
                                    <div style="width: 25%; background-color: #ff4444; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;"></div>
                                    <div style="width: 25%; background-color: #ff8800; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;"></div>
                                    <div style="width: 25%; background-color: #aaff00; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;"></div>
                                    <div style="width: 25%; background-color: #44ff44; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;"></div>
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
            data.selected_slider_option = data.response.slider_choice;
            console.log('Selected slider option:', data.selected_slider_option);
        }
    };
} 

var staticSliderChoice = createStaticSliderChoice();
*/

const choose_Cardinality = {
    type: jsPsychSurveyMultiChoice,
    preamble: () => {

        // --- Mapping which orders map to which prompt for each round ---
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

        // --- Actual preamble texts ---
        const preambleText = {
            maxEngage: `<strong>To maximize immersion and engagement,</strong>`,
            maxEffort: `<strong>To encourage ${textNew.employee}s to exert maximum effort,</strong>`,
            minEngage: `<strong>To minimize immersion and engagement,</strong>`
        };

        const mapping = promptMap[round];

        let selected = "";
        if (mapping.maxEngage.includes(order)) {
            selected = preambleText.maxEngage;
        } else if (mapping.maxEffort.includes(order)) {
            selected = preambleText.maxEffort;
        } else {
            selected = preambleText.minEngage;
        }

        // Return the full preamble HTML
        return `
            <div style="text-align: center; margin-bottom: 40px;">
                ${selected}
                <br>I would choose the following incentive structure:
            </div>

            <style>
                .jspsych-survey-multi-choice-option {
                    display: flex !important;
                    align-items: center !important;
                    margin: 20px 0 !important;
                }
                
                .jspsych-survey-multi-choice-option input[type="radio"] {
                    margin-right: 20px !important;
                }
                
                .jspsych-survey-multi-choice-option label {
                    display: flex !important;
                    align-items: center !important;
                    width: 100% !important;
                }
            </style>
        `;
    },
    questions: () => { return [{ 
        prompt: '', 
        name: 'slider_choice', 
        options: [ '<img src="./img/slider1.png"', '<img src="./img/slider2.png"', '<img src="./img/slider3.png"' ] 
    }]; 
    },
    randomize_question_order: false,
    button_label: 'Continue',
    on_finish: (data) => {
        data.selected_slider_option = data.response.slider_choice;
    }
};


p.instLoopUniformity = {
    timeline: [makeIntro, uniformity, makeRememberPage, attnCheckLoop,fillIn_Uniformity, makeIntroAgain, fillIn_Uniformity, makeIntroAgainAgain, fillIn_Uniformity],
    loop_function: () => {
        // Look for the most recent attnChk trial specifically
        const attnChkData = jsPsych.data.get().filter({trial_type: 'survey-multi-choice'}).last(1);
        const fail = attnChkData.select('totalErrors').sum() > 0;
        return fail;
    },
};

p.instLoopCardinality = {
    timeline: [makeIntro, cardinality, makeRememberPage, attnCheckLoop, choose_Cardinality, makeIntroAgain, choose_Cardinality, makeIntroAgainAgain, choose_Cardinality],
    loop_function: () => {
        const attnChkData = jsPsych.data.get().filter({trial_type: 'survey-multi-choice'}).last(1);
        const fail = attnChkData.select('totalErrors').sum() > 0;
        return fail;
    },
};

p.instLoopDiagnosticity = {
    timeline: [makeIntro, diagnosticity, makeRememberPage, attnCheckLoop,fillIn_Diagnosticity, makeIntroAgain, fillIn_Diagnosticity, makeIntroAgainAgain, fillIn_Diagnosticity],
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
            on_finish: (data) => {
                data.gender = data.response;
            }
        };

        const age = {
            type: jsPsychSurveyText,
            questions: [{prompt: "Age:", name: "age"}],
            on_finish: (data) => {
                saveSurveyData(data); 
            },
        }; 

        const ethnicity = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>What is your race?</p>',
            choices: ['White / Caucasian', 'Black / African American','Asian / Pacific Islander', 'Hispanic', 'Native American', 'Other'],
            on_finish: (data) => {
                data.ethnicity = data.response;
            }
        };

        const english = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>Is English your native language?:</p>',
            choices: ['Yes', 'No'],
            on_finish: (data) => {
                data.english = data.response;
            }
        };  

        const finalWord = {
            type: jsPsychSurveyText,
            questions: [{prompt: "Questions? Comments? Complains? Provide your feedback here!", rows: 10, columns: 100, name: "finalWord"}],
            on_finish: (data) => {
                saveSurveyData(data); 
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


p.preload = {
    type: jsPsychPreload,
    images: ['./img/foodfast.png', './img/foodfaststars.png', './img/warehouseco.png', './img/warehousecochampions.png', './img/nextconnect.png', './img/nextconnectachieve.png', './img/slider1.png', './img/slider2.png', './img/slider3.png']
};

p.save_data = {
    type: jsPsychPipe,
    action: "save",
    experiment_id: "133taaH9iM67",
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