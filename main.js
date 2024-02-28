document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed(".text", {
        strings: ["Frontend Developer", "Web Developer", "React Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
// percentage-text

document.addEventListener("DOMContentLoaded", function() {
    const duration = 2000; 
    const totalSteps1 = 70;
    const totalSteps2 = 65; 
    const totalSteps3 = 45; 
    const totalSteps4 = 40; 

    increasePercentage('.percentage-text1', totalSteps1, duration);
    increasePercentage('.percentage-text2', totalSteps2, duration);
    increasePercentage('.percentage-text3', totalSteps3, duration);
    increasePercentage('.percentage-text4', totalSteps4, duration);
    

    function increasePercentage(selector, totalSteps, duration) {
        const percentageText = document.querySelector(selector);
        const stepDuration = duration / totalSteps; 
        let currentStep = 1; 

        function increasePercentage() {
            if (currentStep <= totalSteps) {
                percentageText.textContent = currentStep + '%';
                currentStep++;
                setTimeout(increasePercentage, stepDuration);
            }
        }
        increasePercentage();
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const paths = document.querySelectorAll('.path');
    paths.forEach((path, index) => {
        const animatePath = `animate-path${index + 1}`;
        animate(path, animatePath);
    });
});

function animate(element, animationName) {
    element.style.animation = `${animationName} 1s 1s linear forwards`;
}

// 

document.addEventListener("DOMContentLoaded", function() {
    const radialBars = document.querySelectorAll('.radial-bar');
    const duration = 2000;
    const targetPercentages = [90, 60, 70, 85];

    radialBars.forEach((bar, index) => {
        const percentageElement = bar.querySelector('.percentage');
        const increment = targetPercentages[index] / (duration / 1000);
        let currentPercentage = 0;

        function increasePercentage() {
           
            if (currentPercentage <= targetPercentages[index]) {
                percentageElement.textContent = `${Math.round(currentPercentage)}%`;
                currentPercentage++;

                setTimeout(increasePercentage, duration / targetPercentages[index]);
            }
        }
        increasePercentage();
    });
});
document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});



