        const form = document.getElementById('grade-form');
        const promptElement = document.getElementById('prompt');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const score = parseInt(document.getElementById('score').value);
            const grade = determineGrade(score);
            promptElement.style.display = 'block !important';
            promptElement.innerHTML = `<div>${name}, your grade is: ${grade}</div>`;
        });

        function determineGrade(score){
            if (score < 0 || score > 100) {
            return "invalid score";
            } else if (score >= 75){
            return "A";
            } else if (score >= 60){
            return "B";
            } else if (score >= 50){
            return "C";
            } else if (score >= 40){
            return "D";
            } else {
            return "F"
            }
}