function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Fundamentals of fluid flow</h5>
        <p>Learning Objective: Find velocity boundary layer thickness and mass flow rate.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='Verify_act2();' id='temp-btn-20' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for Verifying first activity
function Verify_act2() {
    let temp_btn = document.getElementById('temp-btn-20');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Sphere", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <h5>Air at ${a2_env_temp}&deg; C & atmospheric pressure, flows over one side of the plate at velocity ${a2_velocity} m/min. The plate is heated and maintained at ${a2_plate_temp}&deg; C uniformly over the length. Calculate velocity boundary layer thickness at ${a2_x1}cm & ${a2_x2}cm from leading edge of the plate, also calculate the mass flow rate which enters the boundary layer betewen x = ${a2_x1}cm & x = ${a2_x2}cm per meter depth of plate, the total drag force & Local drag coefficient at ${a2_x2}cm at average mean temperature ${a2_avg_mean_temp}&deg; C.</h5>

        <h5>Take Cp = ${a2_cp / 1e3} x 10<sup>3</sup> J/kg-k, &rho; = ${a2_rho} kg/m<sup>3</sup>, &nu; = ${a2_mu / 1e-6} x 10<sup>-6</sup> m<sup>2</sup>/s</h5>

        <br>
       
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='a2_sol2();'  id='temp-btn-200' >Start</button></div>

    

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    //internal_calculations();
}
function a2_sol2() {
    let btn_text = get_collapse_btn_text(`Calculate Re<sub>x</sub>`, "tb2-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st2'>


        <p> 
                Now
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Re_x = \\frac{Vx}{\\nu} $$
                </span>
        </p> 

        <p style='text-align: center;'> 
                x is taken in meters here  <br>
                V is in meter/seconds
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Re_{${(a2_x1 / 100).toFixed(3)}} = \\frac{V \\times ${(a2_x1 / 100).toFixed(3)}}{\\nu} $$
                </span>
        </p> 

         <p style='text-align: center;'> 
                Re<sub>${(a2_x1 / 100).toFixed(3)}</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp20' /><span id='dsp2-inp20'></span></span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Re_{${(a2_x2 / 100).toFixed(3)}} = \\frac{V \\times ${(a2_x2 / 100).toFixed(3)}}{\\nu} $$
                </span>
        </p> 


        <p style='text-align: center;'> 
                R<sub>${(a2_x2 / 100).toFixed(3)}</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp21' /><span id='dsp2-inp21'></span></span>
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol2();'  id='temp-btn-22' >Verify</button></div>


    </div>

    `;
    a2_re1 = (a2_velocity * a2_x1) / (100 * 60 * a2_mu);
    a2_re2 = (a2_velocity * a2_x2) / (100 * 60 * a2_mu);
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol2() {
    let btn = document.getElementById('temp-btn-200');
    console.log(a2_re1, a2_re2);
    let inp1 = document.getElementById('a2-inp20');
    let sp1 = document.getElementById('dsp2-inp20');
    let inp2 = document.getElementById('a2-inp21');
    let sp2 = document.getElementById('dsp2-inp21');
    if (!verify_values(parseFloat(inp1.value), a2_re1)) {
        alert('first value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a2_re2)) {
        alert('second value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a2_re1).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a2_re2).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    a2_sol3();
}
function a2_sol3() {
    let btn_text = get_collapse_btn_text("Velocity Boundary layer", "tb2-st3");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st3'>


        <p> 
             As Re < 3 x 10<sup>5</sup> flow is laminar.   
        </p>


        <h5> 
            1. Velocity boundary layer    
        </h5>

        <p>
            a. Von-Karman's Equation (approximate solution)
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\delta = \\frac{4.64x}{\\sqrt{Re_x}} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                x is in meters <br>
                
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\delta_{${(a2_x1 / 100).toFixed(3)}} = \\frac{4.64 \\times ${(a2_x1 / 100).toFixed(3)}}{\\sqrt{Re_{${(a2_x1 / 100).toFixed(3)}}}} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                &delta;<sub>${(a2_x1 / 100).toFixed(3)}</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp30' /><span id='dsp2-inp30'></span></span> x 10<sup>-3</sup> m
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\delta_{${(a2_x2 / 100).toFixed(3)}} = \\frac{4.64 \\times ${(a2_x2 / 100).toFixed(3)}}{\\sqrt{Re_{${(a2_x2 / 100).toFixed(3)}}}} $$
                </span>
        </p>


        <p style='text-align: center;'> 
                &delta;<sub>${(a2_x2 / 100).toFixed(3)}</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp31' /><span id='dsp2-inp31'></span></span> x 10<sup>-3</sup> m
        </p>


         <p style='text-align: center;'> 
                Mass Flow rate
        </p>


        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ m = \\frac{5}{8} \\rho V (\\delta_{${(a2_x2 / 100).toFixed(3)}} - \\delta_{${(a2_x1 / 100).toFixed(3)}}) $$
                </span>
        </p>

        <p style='text-align: center;'> 
               m = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp32' /><span id='dsp2-inp32'></span></span> x 10<sup>-3</sup> kg/s
        </p>


        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol3();'  id='temp-btn-23' >Verify</button></div>


    </div>

    `;
    a2_karman_delta1 = (4.64 * (a2_x1 / 100)) / (Math.sqrt(a2_re1));
    a2_karman_delta2 = (4.64 * (a2_x2 / 100)) / (Math.sqrt(a2_re2));
    a2_karman_mfr = (5 / 8) * a2_rho * (a2_velocity / 60) * (a2_karman_delta2 - a2_karman_delta1);
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st3'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol3() {
    let btn = document.getElementById('temp-btn-23');
    console.log(a2_karman_delta1 * 1000, a2_karman_delta2 * 1000, a2_karman_mfr * 1000);
    let inp1 = document.getElementById('a2-inp30');
    let sp1 = document.getElementById('dsp2-inp30');
    let inp2 = document.getElementById('a2-inp31');
    let sp2 = document.getElementById('dsp2-inp31');
    let inp3 = document.getElementById('a2-inp32');
    let sp3 = document.getElementById('dsp2-inp32');
    if (!verify_values(parseFloat(inp1.value), a2_karman_delta1 * 1000)) {
        alert('first delta value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a2_karman_delta2 * 1000)) {
        alert('second delta value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), a2_karman_mfr * 1000)) {
        alert('Mass flow rate is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a2_karman_delta1 * 1000).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a2_karman_delta2 * 1000).toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${(a2_karman_mfr * 1000).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    a2_sol4();
}
function a2_sol4() {
    let btn_text = get_collapse_btn_text("Exact Blasius Solution", "tb2-st4");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st4'>


        <p> 
                b. Exact Blasius Solution
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\delta = \\frac{5x}{\\sqrt{Re_x}} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                Note: take x in meters and veloity V in meter/sec
        </p>

         <p style='text-align: center;'> 
                &delta;<sub>${(a2_x1 / 100).toFixed(3)}</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp40' /><span id='dsp2-inp40'></span></span> x 10<sup>-3</sup> m
        </p>

         <p style='text-align: center;'> 
                &delta;<sub>${(a2_x2 / 100).toFixed(3)}</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp41' /><span id='dsp2-inp41'></span></span> x 10<sup>-3</sup> m
        </p>


        <p style='text-align: center;'> 
                Mass Flow rate
        </p>


        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ m = \\frac{5}{8} \\rho V (\\delta_{${(a2_x2 / 100).toFixed(3)}} - \\delta_{${(a2_x1 / 100).toFixed(3)}}) $$
                </span>
        </p>


         <p style='text-align: center;'> 
                m = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp42' /><span id='dsp2-inp42'></span></span> x 10<sup>-3</sup> kg/s
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol4();'  id='temp-btn-24' >Verify</button></div>


    </div>

    `;
    a2_blasius_delta1 = (5 * (a2_x1 / 100)) / (Math.sqrt(a2_re1));
    a2_blasius_delta2 = (5 * (a2_x2 / 100)) / (Math.sqrt(a2_re2));
    a2_blasius_mfr = (5 / 8) * a2_rho * (a2_velocity / 60) * (a2_blasius_delta2 - a2_blasius_delta1);
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st4'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol4() {
    let btn = document.getElementById('temp-btn-24');
    console.log(a2_blasius_delta1 * 1000, a2_blasius_delta2 * 1000, a2_blasius_mfr * 1000);
    let inp1 = document.getElementById('a2-inp40');
    let sp1 = document.getElementById('dsp2-inp40');
    let inp2 = document.getElementById('a2-inp41');
    let sp2 = document.getElementById('dsp2-inp41');
    let inp3 = document.getElementById('a2-inp42');
    let sp3 = document.getElementById('dsp2-inp42');
    if (!verify_values(parseFloat(inp1.value), a2_blasius_delta1 * 1000)) {
        alert('first delta value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a2_blasius_delta2 * 1000)) {
        alert('second delta value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), a2_blasius_mfr * 1000)) {
        alert('mass flow rate is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a2_blasius_delta1 * 1000).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a2_blasius_delta2 * 1000).toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${(a2_blasius_mfr * 1000).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    a2_sol5();
}
function a2_sol5() {
    let btn_text = get_collapse_btn_text("Drag force", "tb2-st5");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st5'>


        <p> 
                Drag force over entire length
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ F_D = \\frac{\\rho A V^2}{2} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                where A = (${(a2_x2 / 100).toFixed(3)} x 1) m<sup>2</sup>
        </p>

        <p style='text-align: center;'> 
                F<sub>D</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp5' /><span id='dsp2-inp5'></span></span> N
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol5();'  id='temp-btn-25' >Verify</button></div>


    </div>

    `;
    a2_drag_force = (a2_rho * (a2_x2 / 100) * (a2_velocity / 60)) / 2;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st5'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol5() {
    let btn = document.getElementById('temp-btn-25');
    console.log(a2_drag_force);
    let inp1 = document.getElementById('a2-inp5');
    let sp1 = document.getElementById('dsp2-inp5');
    if (!verify_values(parseFloat(inp1.value), a2_drag_force)) {
        alert('Fd is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a2_drag_force).toFixed(4)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    a2_sol6();
}
function a2_sol6() {
    let btn_text = get_collapse_btn_text("Local Drag Coefficient", "tb2-st6");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st6'>


        <h5 style='text-align: center;'> 
                Local drag coefficient at x = ${(a2_x2 / 100).toFixed(3)}
        </h5>

        <p>
            Von-Karman equation (approximate)
        </p>


        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ C_{Fx} = \\frac{0.646}{\\sqrt{Re_{${(a2_x2 / 100).toFixed(3)}}}} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                C<sub>Fx</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp60' /><span id='dsp2-inp60'></span></span> x 10<sup>-3</sup>
        </p>

        <p>
            Exact Blasius Solution (approximate)
        </p>


        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ C_{Fx} = \\frac{0.664}{\\sqrt{Re_{${(a2_x2 / 100).toFixed(3)}}}} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                C<sub>Fx</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp61' /><span id='dsp2-inp61'></span></span> x 10<sup>-3</sup>
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol6();'  id='temp-btn-26' >Verify</button></div>


    </div>

    `;
    a2_karman_ldc = 0.646 / (Math.sqrt(a2_re2));
    a2_blasius_ldc = 0.664 / (Math.sqrt(a2_re2));
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st6'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol6() {
    let btn = document.getElementById('temp-btn-26');
    console.log(a2_karman_ldc * 1000, a2_blasius_ldc * 1000);
    let inp1 = document.getElementById('a2-inp60');
    let sp1 = document.getElementById('dsp2-inp60');
    let inp2 = document.getElementById('a2-inp61');
    let sp2 = document.getElementById('dsp2-inp61');
    if (!verify_values(parseFloat(inp1.value), a2_karman_ldc * 1000)) {
        alert('first value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a2_blasius_ldc * 1000)) {
        alert('second value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a2_karman_ldc * 1000).toFixed(4)}`;
    inp2.remove();
    sp2.innerHTML = `${(a2_karman_ldc * 1000).toFixed(4)}`;
    alert('Your entered values are correct. Experiment Completed.');
    btn.style.display = 'none';
}
//# sourceMappingURL=activity2.js.map