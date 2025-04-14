let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Fundamentals of fluid flow</h5>
        <p>Learning Objective: Find the pressure drop per unit length</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='Verify_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for Verifying first activity
function Verify_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Cylinder", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h5>Water at ${a1_water_temp}&deg; C is flowing deep through ${a1_pipe_diameter} cm diameter (D) pipe. What will be the pressure drop per meter length if the velocity (V) of water is ${a1_velocity} meters / minute.</h5>

        <br>

        <p>Take &rho; = ${a1_rho} kg/m<sup>3</sup> and &nu; = ${a1_mu / 1e-6} x 10<sup>-6</sup> m<sup>2</sup>/s </p>
       
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='sol1();'  id='temp-btn-0' >Start</button></div>

    

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    //internal_calculations();
}
function sol1() {
    let temp_btn = document.getElementById('temp-btn-0');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate Re", "tb1-st1");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st1'>


        <p> 
                Calculate Re
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Re = \\frac{VD}{\\nu} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                D is in meters <br>
                V is in meters/second <br>
        </p>

        <p style='text-align: center;'> 
                Re = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp10' /><span id='dsp-inp10'></span></span>
        </p>


        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol1();'  id='temp-btn-11' >Verify</button></div>

         <div id='a1-question'></div>


    </div>

    `;
    a1_re = (3 * a1_pipe_diameter * 1e-2) / (60 * a1_mu);
    set_correct_option(a1_re);
    //a1_f = 16 / a1_re;
    maindiv.innerHTML += text;
    //hide_all_steps();
    // setTimeout(() => {show_step('tb1-st1');}, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    temp_btn.remove();
}
function verify_sol1() {
    let btn = document.getElementById('temp-btn-11');
    console.log(a1_re);
    let inp1 = document.getElementById('a1-inp10');
    let sp1 = document.getElementById('dsp-inp10');
    if (!verify_values(parseFloat(inp1.value), a1_re)) {
        alert('Re is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a1_re).toFixed(4)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    question_block();
}
function calculate_f() {
    let btn_text = get_collapse_btn_text("Friction factor", "tb1-st12");
    let selected_equation = ``;
    if (a1_re < 2000) {
        selected_equation = `f = \\frac{16}{Re}`;
    }
    else if (a1_re < 20000) {
        selected_equation = `f = 0.079 \\ Re^{-0.25}`;
    }
    else if (a1_re > 20000) {
        selected_equation = `f = 0.046 \\ Re^{-0.2}`;
    }
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st12'>


        <p> 
                Assuming pipe to be smooth, friction factor (f) is: 
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ ${selected_equation} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                f = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp11' /><span id='dsp-inp11'></span></span>
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol12();'  id='temp-btn-11' >Verify</button></div>


    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st12'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_sol12() {
    let btn = document.getElementById('temp-btn-11');
    console.log(a1_f);
    let inp2 = document.getElementById('a1-inp11');
    let sp2 = document.getElementById('dsp-inp11');
    if (!verify_values(parseFloat(inp2.value), a1_f)) {
        alert('f is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp2.remove();
    sp2.innerText = `${(a1_f).toFixed(4)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    sol2();
}
function sol2() {
    let btn_text = get_collapse_btn_text("Calculate Pressure drop", "tb1-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st2'>


        <p> 
                Now, pressure drop per meter
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ f = \\frac{\\Delta P}{4 \\left(\\frac{L}{D} \\right) \\left(\\frac{\\rho V^2}{2} \\right) } $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\frac{\\Delta P}{L} = f \\times \\frac{4}{D} \\times \\frac{\\rho V^2}{2} \\ \\ \\  N/m^2 \\ per \\ meter $$
                </span>
        </p>

        <p style='text-align: center;'> 
                D is in meters <br>
        </p>

        <p style='text-align: center;'> 
                &Delta; P / L = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp2' /><span id='dsp-inp2'></span></span> N/m<sup>2</sup> per meter
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol2();'  id='temp-btn-12' >Verify</button></div>


    </div>

    `;
    a1_pressure_drop = (2 * a1_f * a1_rho * (Math.pow((a1_velocity / 60), 2))) / (a1_pipe_diameter * 1e-2);
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_sol2() {
    let btn = document.getElementById('temp-btn-12');
    console.log(a1_pressure_drop);
    let inp1 = document.getElementById('a1-inp2');
    let sp1 = document.getElementById('dsp-inp2');
    if (!verify_values(parseFloat(inp1.value), a1_pressure_drop)) {
        alert('Pressure drop is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a1_pressure_drop).toFixed(4)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    activity2();
}
function question_block() {
    let ques_text = `Looking after the value of Re, which option will be correct?`;
    let options = [
        `<span> $$ f = \\frac{16}{Re} $$ </span>`,
        `<span> $$ f = 0.079 \\ Re^{-0.25} $$ </span>`,
        `<span> $$ f = 0.046 \\ Re^{-0.2} $$ </span>`,
        `<span> $$ f = 0.1 \\ Re^{\\frac{1}{3}} $$ </span>`
    ];
    let container = document.getElementById('a1-question');
    let ques_obj = new Updated_Question(ques_text, options, ques_ans, container, calculate_f);
    ques_obj.load_question();
    //hide_all_steps(); 
    //setTimeout(() => {show_step('tb1-st1');}, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function set_correct_option(a1_re) {
    if (a1_re < 2000) {
        a1_f = 16 / a1_re;
        ques_ans = '1';
    }
    else if (a1_re < 20000) {
        a1_f = 0.079 * (Math.pow(a1_re, (-0.25)));
        ques_ans = '2';
    }
    else if (a1_re > 20000) {
        a1_f = 0.079 * (Math.pow(a1_re, (-0.25)));
        ques_ans = '3';
    }
    else {
        ques_ans = '4';
    }
}
activity1();
//# sourceMappingURL=activity1.js.map