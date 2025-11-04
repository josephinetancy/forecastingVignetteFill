

const randomAssignment = Math.floor(Math.random() * 3) + 1; 
//randomAssignment = 1 = cardinality
//randomAssignment = 2 = uniformity
//randomAssignment = 3 = diagnosticity


console.log(randomAssignment);
// const randomAssignment = 2;


const exp = (function() {


var p = {};


   /*
    *
    *   INSTRUCTIONS
    *
    */

/*
var textNew = {
    scenari2: [2].includes(randomAssignment) ? 'two' : 'one',
    attnchk1: [2].includes(randomAssignment) ? 'a wheel' : 'you',
    their: [2].includes(randomAssignment) ? 'the' : 'your',
    s: [2].includes(randomAssignment) ? 's' : '',
}
*/
const introPage = [
        `<div class='parent'>
            <p><strong>Welcome to the Manager Challenge!</strong></p>
            <p>This game involves you imagining yourself as a manager of an organization. </p>
        </div>`,

        `<div class='tight'>
            <img src="./img/foodfast.png" style="width:40%; height:40%">
            <p>You're the manager of FoodFast.</p>
        </div>`,

        `<div class='tight'>
            <img src="./img/foodfast.png" style="width:40%; height:40%">
            <p>FoodFast is a food delivery company like UberEats or DoorDash. </p>
        </div>`,

        `<div class='tight'>
            <img src="./img/foodfaststars.png" style="width:40%; height:40%">
            <p> FoodFast is launching a new driver incentive program, called <br> <strong>"FoodFast Stars".</strong> </p>
        </div>`,

        `<div class='tight'>
            <img src="./img/foodfaststars.png" style="width:40%; height:40%">
            <p>The objective of the "FoodFast Stars" Program is to help FoodFast drivers feel more <strong>immersed and engaged in their work. </strong></p>
            <p>In other words, the aim of the program is to help drivers "get in the zone" while working, so much so that they feel <br>totally absorbed in their work. </p>
        </div>`,

        `<div class='tight'>
            <img src="./img/foodfaststars.png" style="width:40%; height:40%">
            <p>Each day, whether a driver is named a FoodFast Star determines their chances of earning a daily bonus. </p>
            <p>A certain percentage of top-performing drivers will earn the FoodFast Star title based on their average driving time that day.</p>
        </div>`,
];

const beforePage = [
        `<div class='tight'>
            <img src="./img/foodfaststars.png" style="width:40%; height:40%">
            <p>Now, please indicate how you would design the remaining aspect of the FoodFast Star program <b> to maximize drivers' immersion and engagement. </b></p>
        </div>`
];

const introPerformancePage = [
        `<div class='tight'>
            <img src="./img/foodfaststars.png" style="width:40%; height:40%">
            <p>Your manager has decided to update the objective of the "FoodFast Stars" Program. It is now designed to motivate FoodFast drivers to <strong>work harder.</strong></p>
            <p>In other words, the aim of the program is to help drivers put forth more effort in their work. </p>
        </div>`,

        `<div class='tight'>
            <img src="./img/foodfaststars.png" style="width:40%; height:40%">
            <p>Now, please indicate how you would design the FoodFast Star program <b> to encourage drivers to work harder. </p>
        </div>`
];

const uniformityPage = [
        `<div class='tight'>
            <img src="./img/foodfaststars.png" style="width:40%; height:40%">
            <p>Your manager has decided the following:</p>
            <p>Drivers will be categorized into FoodFast stars or Non-FoodFast Stars based on their average driving time that day.</p>
            <p>Each day, FoodFast Stars will have 100% chance of receiving a bonus. </p>
            <p>Each day, drivers who are <b>not</b> FoodFast Stars will have 0% chance of receiving a bonus. </p>
        </div>`
];

const uniformityPage1 = [
            `<p>As a reminder, your goal is to help FoodFast drivers feel more immersed and engaged in their work.</p>
            <p>Drivers will be categorized into FoodFast stars or Non-FoodFast Stars based on their average driving time that day.</p>
            <p>Each day, FoodFast Stars will have 100% chance of receiving a bonus. </p>
            <p>Each day, drivers who are <b>not</b> FoodFast Stars will have 0% chance of receiving a bonus. </p>
        </div>`
];

const diagnosticityPage = [
        `<div class='tight'>
            <img src="./img/foodfaststars.png" style="width:40%; height:40%">
            <p>Your manager has decided the following:</p>
            <p>Drivers will be categorized into FoodFast stars or Non-FoodFast Stars based on their average driving time that day.</p>
            <p>The top 50% of daily best-performing drivers are categorized as FoodFast Stars. </p>
        </div>`
];

const diagnosticityPage1 = [
        `<p>As a reminder, your goal is to help FoodFast drivers feel more immersed and engaged in their work.</p>
            <p>Drivers will be categorized into FoodFast stars or Non-FoodFast Stars based on their average driving time that day.</p>
            <p>The top 50% of daily best-performing drivers are categorized as FoodFast Stars. </p>
        </div>`
];

const cardinalityPage = [
        `<div class='tight'>
            <img src="./img/foodfaststars.png" style="width:40%; height:40%">
            <p>Your manager has decided the following:</p>
            <p>Drivers will be categorized into certain percentiles based on their average driving time that day.</p>
            <p>Each day, drivers who have been allocated a bonus will have 100% chance of receiving that bonus. </p>
            <p>Each day, drivers who have not been allocated a bonus will have 0% chance of receiving that bonus. </p>
        </div>`
];

const cardinalityPage1 = [
        `<p>As a reminder, your goal is to help FoodFast drivers feel more immersed and engaged in their work.</p>
            <p>Drivers will be categorized into certain percentiles based on their average driving time that day.</p>
            <p>Each day, drivers who have been allocated a bonus will have 100% chance of receiving that bonus. </p>
            <p>Each day, drivers who have not been allocated a bonus will have 0% chance of receiving that bonus. </p>
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

const errorMessage = {
    type: jsPsychInstructions,
    pages: [`<div class='parent'><p>You provided the wrong answer.<br>To make sure you understand the game, please continue to re-read the instructions.</p></div>`],
    show_clickable_nav: true,
    allow_keys: false,
};

const intro = {
        type: jsPsychInstructions,
        pages: introPage,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
};

const before = {
        type: jsPsychInstructions,
        pages: beforePage,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
};

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

const introPerformance = {
        type: jsPsychInstructions,
        pages: introPerformancePage,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
};



let correctAnswers = [`To boost drivers' immersion and engagement`, `True`, `True`, `True`];

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

function getQuestionsForCondition(assignment) {
    const baseQuestion = {
        prompt: `What is your goal?`, 
        name: `attnChk1`, 
        options: [`To boost drivers' immersion and engagement`, `To boost drivers to work harder`]
    };
    
    const conditionQuestions = {
        1: [ // Cardinality
            {
                prompt: `Drivers will be categorized into certain percentiles based on their average driving time that day.`, 
                name: `attnChk2`, 
                options: ['True', 'False']
            },
            {
                prompt: `Each day, drivers who have been allocated a bonus will have 100% chance of receiving that bonus.`, 
                name: `attnChk3`, 
                options: ['True', 'False']
            },
            {
                prompt: `Each day, drivers who have not been allocated a bonus will have 0% chance of receiving that bonus.`, 
                name: `attnChk4`, 
                options: ['True', 'False']
            }
        ],
        2: [ // Uniformity
            {
                prompt: `Drivers will be categorized into FoodFast stars or Non-FoodFast Stars based on their average driving time that day.`, 
                name: `attnChk2`, 
                options: ['True', 'False']
            },
            {
                prompt: `FoodFast Stars will have 100% chance of obtaining a bonus.`, 
                name: `attnChk3`, 
                options: ['True', 'False']
            },
            {
                prompt: `Non-FoodFast Stars will have 0% chance of obtaining a bonus.`, 
                name: `attnChk4`, 
                options: ['True', 'False']
            }
        ],
        3: [ // Diagnosticity
            {
                prompt: `Drivers will be categorized into FoodFast stars or Non-FoodFast Stars based on their average driving time that day.`, 
                name: `attnChk2`, 
                options: ['True', 'False']
            },
            {
                prompt: `The top 50% of daily best-performing drivers are categorized as FoodFast Stars.`, 
                name: `attnChk3`, 
                options: ['True', 'False']
            }
        ]
    };
    
    return [baseQuestion].concat(conditionQuestions[assignment] || []);
}

// Helper function to get correct answers
function getCorrectAnswers(assignment) {
    const baseAnswer = [`To boost drivers' immersion and engagement`];
    const conditionAnswers = {
        1: ["True", "True", "True"],     // Cardinality answers
        2: ["True", "False", "False"],   // Uniformity answers  
        3: ["True", "True"]              // Diagnosticity answers
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

// Main attention check object
const attnChk = {
    type: jsPsychSurveyMultiChoice,
    preamble: () => {
        const condition = conditionMap[randomAssignment];
        const pageName = `${condition}Page1`; // e.g., "cardinalityPage1"
        const scenarioPage = getScenarioPage(pageName);
        
        return `
            <div class='parent'>
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
    
    ${questions[0].promptText ? `<div class="prompt-text">${questions[0].promptText}</div>` : ''}
    
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
            // Add input validation
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
            
            // Add form submission validation
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
                console.log(data)
            });
        }
    };
}
//FOOD
var fillIn_Uniformity = fillIn([
    {
        promptText: "<strong>To maximize immersion and engagement,</strong>",
        fillText: `I would make the top <input type="number" class="number-input" name="flow_prior" min="0" max="100" required>% of daily best-performing drivers as FoodFast Stars.`
    }
], ['flow_uniformity']);

var fillInPerf_Uniformity = fillIn([
    {
        promptText: "<strong>To encourage drivers to work harder,</strong>", // Fixed prompt text
        fillText: `I would make the top <input type="number" class="number-input" name="performance_prior" min="0" max="100" required>% of daily best-performing drivers as FoodFast Stars.`
    },
    {
        promptText: "", 
        fillText: `Each day, FoodFast Stars will have a <input type="number" class="number-input" name="performance_posterior" min="0" max="100" required>% chance of receiving a bonus.`
    },
    {
        promptText: "", 
        fillText: `Each day, drivers who are <strong>not</strong> FoodFast Stars will have a <input type="number" class="number-input" name="performance_posterior2" min="0" max="100" required>% chance of receiving a bonus.`
    }
], ['performance_uniformity']);

var fillIn_Diagnosticity = fillIn([
    {
        promptText: "<strong>To maximize immersion and engagement,</strong>",
        fillText: `Each day, FoodFast Stars will have a <input type="number" class="number-input" name="performance_posterior" min="0" max="100" required>% chance of receiving a bonus.`
    },
    {
        promptText: "", 
        fillText: `Each day, drivers who are <strong>not</strong> FoodFast Stars will have a <input type="number" class="number-input" name="performance_posterior2" min="0" max="100" required>% chance of receiving a bonus.`
    }
], ['flow_diagnosticity1', 'flow_diagnosticity2']);

var fillInPerf_Diagnosticity = fillIn([
    {
        promptText: "<strong>To encourage drivers to work harder,</strong>",
        fillText: `Each day, FoodFast Stars will have a <input type="number" class="number-input" name="performance_posterior" min="0" max="100" required>% chance of receiving a bonus.`
    },
    {
        promptText: "", 
        fillText: `Each day, drivers who are <strong>not</strong> FoodFast Stars will have a <input type="number" class="number-input" name="performance_posterior2" min="0" max="100" required>% chance of receiving a bonus.`
    }
], ['flow_diagnosticity1', 'flow_diagnosticity2']);

p.instLoopUniformity = {
    timeline: [intro, uniformity, attnCheckLoop, before, fillIn_Uniformity, introPerformance, fillInPerf_Uniformity],
    loop_function: () => {
        // Look for the most recent attnChk trial specifically
        const attnChkData = jsPsych.data.get().filter({trial_type: 'survey-multi-choice'}).last(1);
        const fail = attnChkData.select('totalErrors').sum() > 0;
        return fail;
    },
};

p.instLoopCardinality = {
    timeline: [intro, cardinality, attnCheckLoop, before, fillIn_Diagnosticity, introPerformance],
    loop_function: () => {
        const attnChkData = jsPsych.data.get().filter({trial_type: 'survey-multi-choice'}).last(1);
        const fail = attnChkData.select('totalErrors').sum() > 0;
        return fail;
    },
};

p.instLoopDiagnosticity = {
    timeline: [intro, diagnosticity, attnCheckLoop, before, fillIn_Diagnosticity, introPerformance, fillInPerf_Diagnosticity],
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
    images: ['./img/foodfast.png', './img/foodfaststars.png']
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
    timeline = [exp.preload, exp.instLoopCardinality, exp.postPlay, exp.preview, exp.goalPlay, exp.instLoopPlay1, exp.readyPlay, exp.task, exp.demographics, exp.save_data, exp.end];
} else if (randomAssignment === 2) {
    timeline = [exp.preload, exp.instLoopUniformity, exp.postPredict, exp.preview, exp.goalPredict, exp.instLoopPredict1, exp.readyPredict, exp.taskPredict, exp.demographics, exp.save_data, exp.end];
} else if (randomAssignment === 3) {
    timeline = [exp.preload, exp.instLoopDiagnosticity, exp.postPredict, exp.preview, exp.goalPredict, exp.instLoopPredict1, exp.readyPredict, exp.taskPredict, exp.demographics, exp.save_data, exp.end];
}

jsPsych.run(timeline);