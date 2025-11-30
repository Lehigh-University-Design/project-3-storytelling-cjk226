// Start JS script code, feel free to not use this or remove it
document.querySelectorAll('#ending .choice-btn').forEach(button => {
    button.addEventListener('click', function () {
        const outcomeId = this.getAttribute('href');
        
        // Hide all outcomes first
        document.querySelectorAll('#ending .outcome')
            .forEach(o => o.classList.add('hidden'));

        // Show the one selected
        document.querySelector(outcomeId).classList.remove('hidden');
    });
});


console.log("Hello, World!");
