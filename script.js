let tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#6c5ce7';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // If opened from bot, we might receive init data, but here we just accept input
    // In a real app we would fetch current city from the bot via URL params or API

    // Check if theme params exist and apply
    if (tg.themeParams) {
        // Optional: Adapt colors to Telegram theme
        // document.body.style.backgroundColor = tg.themeParams.bg_color;
    }
});

function saveData() {
    const city = document.getElementById('cityInput').value.trim();

    if (!city) {
        tg.showAlert("Пожалуйста, введите название города");
        return;
    }

    const data = {
        action: "update_city",
        city: city
    };

    // Send data back to bot
    tg.sendData(JSON.stringify(data));
}
