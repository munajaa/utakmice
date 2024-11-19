document.addEventListener('DOMContentLoaded', () => {
    // Fetch upcoming matches
    fetch('/api/matches')
        .then(response => response.json())
        .then(data => {
            const matchesList = document.getElementById('matches-list');
            matchesList.innerHTML = data.map(match => `<p>${match}</p>`).join('');
        });

    // Fetch AI analysis
    fetch('/api/ai-analysis')
        .then(response => response.json())
        .then(data => {
            const aiResult = document.getElementById('ai-result');
            aiResult.textContent = data.prediction;
        });
});
